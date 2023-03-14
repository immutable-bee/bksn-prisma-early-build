import { prisma } from "../../db/prismaDb";

export default async (req, res) => {
  const requestdata = JSON.parse(req.body);

  const createdBookRequest = await prisma.request.create({
    data: requestdata,
  });
  res.JSON(createdBookRequest);
};
