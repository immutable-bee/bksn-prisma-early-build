import { prisma } from "../../db/prismaDb";

export default async (req, res) => {
  const [email, listingID] = JSON.parse(req.body);
  const listingToDelete = await prisma.listing.findUnique({
    where: { id: listingID },
  });
  const sender = await prisma.user.findUnique({
    where: { email: email },
  });
  const owner = await prisma.user.findUnique({
    where: { id: listingToDelete.ownerId },
  });
  if (sender.id === owner.id) {
    const deletedListing = await prisma.listing.delete({
      where: { id: listingID },
    });
    res.json(deletedListing);
  }
};
