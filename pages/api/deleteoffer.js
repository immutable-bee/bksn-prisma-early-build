import { prisma } from "../../db/prismaDb";

export default async (req, res) => {
  const [email, offerID] = JSON.parse(req.body);
  const sender = await prisma.user.findUnique({
    where: { email: email },
  });
  const offerToDelete = await prisma.offer.findUnique({
    where: { id: offerID },
  });

  if (sender.id === offerToDelete.senderId) {
    const deletedOffer = await prisma.offer.delete({
      where: { id: offerID },
    });
    res.json(deletedOffer);
  } else {
    res.json({ message: "Failed to delete: No Permission" });
  }
};
