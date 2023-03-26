import { prisma } from "../../db/prismaDb";
import { auth, requireRole } from "../../utils/middleware";

const handler = async (req, res) => {
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
  res.status(200).json({ message: "Book request created successfully" });
};

export default async (req, res) => {
  await auth(req, res, async () => {
    await requireRole(["APPROVED_USER", "SUBSCRIBED_USER"])(
      req,
      res,
      async () => {
        await handler(req, res);
      }
    );
  });
};
