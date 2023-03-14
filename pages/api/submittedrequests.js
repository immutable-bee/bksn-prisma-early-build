import { prisma } from "../../db/prismaDb";

export default async (req, res) => {
  const ownerEmail = JSON.parse(req.body);
  const owner = await prisma.user.findUnique({
    where: { email: ownerEmail },
  });
  const ownedBookRequests = await prisma.request.findMany({
    where: { ownerId: owner.id },
  });
  res.json(ownedBookRequests);
};
