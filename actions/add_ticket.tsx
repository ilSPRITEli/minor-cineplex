'use server';

import prisma from '@/lib/db';

export async function buyTicket(data: any) {
  const { userId, screeningId, ...ticketData } = data;
  // console.log(data);
  // Check if the screening exists
  const screening = await prisma.screening.findUnique({
    where: { id: screeningId },
  });

  if (!screening) {
    throw new Error('Screening not found');
  }

  const ticket = await prisma.ticket.create({
    data: {
      ...ticketData,
      user: {
        connect: { id: userId },
      },
      screening: {
        connect: { id: screeningId },
      },
    },
  });
  return ticket;
}


