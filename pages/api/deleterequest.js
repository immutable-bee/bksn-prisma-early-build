import { prisma } from "../../db/prismaDb";

export default async (req, res) => {
  const [email, requestID] = JSON.parse(req.body);
  const requestToDelete = await prisma.request.findUnique({
    where: { id: requestID },
  });
  const sender = await prisma.user.findUnique({
    where: { email: email },
  });
  const owner = await prisma.user.findUnique({
    where: { id: requestToDelete.ownerId },
  });
  if (sender.id === owner.id) {
    const deletedRequest = await prisma.request.delete({
      where: { id: requestID },
    });
    res.json(deletedRequest);
  }
};
