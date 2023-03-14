import { prisma } from "../../db/prismaDb";

export default async (req, res) => {
  const listings = await prisma.listing.findMany({
    include: {
      owner: {
        select: {
          business_name: true,
          business_state: true,
          business_city: true,
        },
      },
    },
  });
  res.json(listings);
};
