import { prisma } from "../../db/prismaDb";

export default async (req, res) => {
  const [type, id, email, price, condition, format] = JSON.parse(req.body);
  const sender = await prisma.user.findUnique({
    where: { email: email },
  });
  switch (type) {
    case "listing":
      const listing = prisma.findUnique({
        where: { id: id },
      });

      createdListingOffer = await prisma.offer.create({
        data: {
          sender: sender,
          listing: listing,
          price: price,
        },
      });
      res.json(createdListingOffer);
      break;
    case "request":
      const request = prisma.findUnique({
        where: { id: id },
      });

      createdRequestOffer = await prisma.offer.create({
        data: {
          sender: sender,
          request: request,
          price: price,
          condition: condition,
          format: format,
        },
      });
      res.json(createdRequestOffer);
      break;
    default:
      res.json({ message: "incorrect offer type or none provided" });
  }
};
