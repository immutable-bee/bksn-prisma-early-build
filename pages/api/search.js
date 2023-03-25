import { prisma } from "../../db/prismaDb";

export default async (req, res) => {
  const searchQuery = req.query.search;

  if (!searchQuery) {
    return res.status(400).json({ error: "Search query is required" });
  }

  try {
    const results = await prisma.listing.findMany({
      where: {
        OR: [
          {
            title: {
              contains: searchQuery,
              mode: "insensitive",
            },
          },
          {
            author: {
              contains: searchQuery,
              mode: "insensitive",
            },
          },
          {
            isbn: {
              contains: searchQuery,
              mode: "insensitive",
            },
          },
        ],
      },
    });

    res.status(200).json(results);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error searching listings" });
  }
};
