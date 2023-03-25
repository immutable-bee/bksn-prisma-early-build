import { prisma } from "../../db/prismaDb";

export default async (req, res) => {
  const senderEmail = JSON.parse(req.body);

  const sender = await prisma.user.findUnique({
    where: {
      email: senderEmail,
    },
  });

  const listings = await prisma.listing.findMany({
    where: {
      NOT: {
        ownerId: sender.id,
      },
    },
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
