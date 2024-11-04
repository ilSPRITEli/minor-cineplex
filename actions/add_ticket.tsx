'use server';

import prisma from '@/lib/db';

export async function buyTicket(data: any) {
  try {
    const { userId, screeningId, ...ticketData } = data;

    // Check if the screening exists
    const screening = await prisma.screening.findUnique({
      where: { id: screeningId },
    });

    if (!screening) {
      throw new Error('Screening not found');
    }

    // Check if the screening has available seats
    if (screening.availableSeats <= 0) {
      throw new Error('No available seats');
    }

    // Check if the screening has started
    if (new Date(screening.startTime) < new Date()) {
      throw new Error('Screening has already started');
    }

    // Check if user selected a seat
    if (!ticketData.seatNumber) {
      throw new Error('Please select a seat');
    }

    // check if this seat is already taken
    const ticketExists = await prisma.ticket.findFirst({
      where: {
        screeningId,
        seatNumber: ticketData.seatNumber,
      },
    });

    if (ticketExists) {
      throw new Error('Seat already taken');
    }

    // check if this user has already bought a ticket for this screening
    const userTicketExists = await prisma.ticket.findFirst({
      where: {
        screeningId,
        userId: Number(userId),
      },
    });

    if (userTicketExists) {
      throw new Error('User already has a ticket for this screening');
    }

    const ticket = await prisma.ticket.create({
      data: {
        ...ticketData,
        user: {
          connect: { id: Number(userId) },
        },
        screening: {
          connect: { id: screeningId },
        },
        price: Number(ticketData.price),
        seatNumber: ticketData.seatNumber,
      },
    });

    return ticket;
  } catch (error) {
    console.error('Error buying ticket:', error);
    throw error;
  }
}


