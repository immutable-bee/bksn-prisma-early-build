import { prisma } from "../../db/prismaDb";

export default async (req, res) => {
  const requests = await prisma.request.findMany();

  res.json(requests);
};
