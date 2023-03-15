import { prisma } from "../../db/prismaDb";

export default async (req, res) => {
  const senderEmail = JSON.parse(req.body);
  const sender = await prisma.user.findUnique({
    where: { email: senderEmail },
  });
  const listingsWithOffers = await prisma.listing.findMany({
    where: { ownerId: sender.id, offers: { some: {} } },
  });

  const requestsWithOffers = await prisma.request.findMany({
    where: { ownerId: sender.id, offers: { some: {} } },
  });

  const requestOffers = requestsWithOffers.forEach(
    async (request) =>
      await prisma.offer.findUnique({
        where: { requestId: request.id },
      })
  );

  const listingOffers = listingsWithOffers.forEach(
    async (listing) =>
      await prisma.offer.findUnique({
        where: { listingId: listing.id },
      })
  );

  const listingOffersSent = await prisma.offer.findMany({
    where: { sender: sender, request: { none: {} } },
  });

  const requestOffersSent = await prisma.offer.findMany({
    where: { sender: sender, offer: { none: {} } },
  });

  res.json([
    listingOffers,
    requestOffers,
    listingOffersSent,
    requestOffersSent,
  ]);
};
