import { prisma } from "../../db/prismaDb";

export default async (req, res) => {
  const [email, data] = JSON.parse(req.body);
  const user = await prisma.user.findUnique({
    where: { email: email },
  });

  const updatedUser = await prisma.user.update({
    data: data,
  });
  res.json(updatedUser);
};
