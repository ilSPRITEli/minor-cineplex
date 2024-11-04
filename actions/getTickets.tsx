'use server';
import prisma from '@/lib/db';


export async function getTicketsByUser(userId: number) {
  const tickets = await prisma.ticket.findMany({
    where: {
      userId,
    },
    include: {
      screening: {
        include: {
          movie: true,
        },
      },
    },
  });

  return tickets;
}
