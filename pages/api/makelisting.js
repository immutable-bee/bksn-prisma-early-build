import { prisma } from "../../db/prismaDb";

export default async (req, res) => {
  listingsToAdd = JSON.parse(req.body);
  listingsToAdd.forEach(async (listing) => {
    await prisma.listing.create({
      data: { listing },
    });
  });
};
