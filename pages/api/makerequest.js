import { prisma } from "../../db/prismaDb";

export default async (req, res) => {
  const [senderEmail, requestdata] = JSON.parse(req.body);

  const sender = await prisma.user.findUnique({
    where: {
      email: senderEmail,
    },
  });

  const createdBookRequest = await prisma.request.create({
    data: {
      owner: {
        connect: {
          id: sender.id,
        },
      },
      title: requestdata.title,
      condition: requestdata.condition,
      format: requestdata.format,
      author: requestdata.author,
      isbn: requestdata.isbn,
      notes: requestdata.notes,
      date_expires: requestdata.date_expires,
    },
  });
};
