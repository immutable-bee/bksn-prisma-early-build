import { prisma } from "../../db/prismaDb";
import { auth, requireRole } from "../../utils/middleware";

const createListing = async (userId, listing) => {
  const {
    sku,
    title,
    isbn,
    author,
    condition,
    format,
    notes,
    price,
    //free_shipping,
    //shipping_price,
  } = listing;
  return prisma.listing.create({
    data: {
      owner: {
        connect: {
          id: userId,
        },
      },
      sku: sku,
      title: title,
      isbn: `${isbn}`,
      author: author,
      condition,
      format,
      notes,
      price,
      free_shipping: false,
      shipping_price: 1.99,
    },
  });
};

const handler = async (req, res) => {
  const [userEmail, listingsToAdd, updateInventory] = JSON.parse(req.body);

  // Fetch the user by email
  const user = await prisma.user.findUnique({
    where: {
      email: userEmail,
    },
  });

  // Check if the user exists
  if (!user) {
    res.status(404).json({ error: "User not found" });
    return;
  }

  if (updateInventory) {
    // Handle updating inventory
    // First, fetch all existing listings for the user
    const existingListings = await prisma.listing.findMany({
      where: {
        ownerId: user.id,
      },
    });

    // Delete listings not in the CSV file
    existingListings.forEach(async (listing) => {
      const listingInFile = listingsToAdd.some(
        (csvListing) => csvListing.sku === listing.sku
      );
      if (!listingInFile) {
        await prisma.listing.delete({
          where: {
            id: listing.id,
          },
        });
      }
    });

    // Add listings from the CSV file if they don't already exist
    listingsToAdd.forEach(async (listing) => {
      const listingExists = existingListings.some(
        (existingListing) => existingListing.sku === listing.sku
      );
      if (!listingExists) {
        await createListing(user.id, listing);
      }
    });
  } else {
    // Handle adding listings without updating inventory
    listingsToAdd.forEach(async (listing) => {
      await createListing(user.id, listing);
    });
  }

  res.status(200).json({ success: "Listings updated successfully" });
};

export default async (req, res) => {
  await auth(req, res, async () => {
    await requireRole(["SUBSCRIBED_USER"])(req, res, async () => {
      await handler(req, res);
    });
  });
};
