'use server';
import prisma from '@/lib/db';

export async function getScreenById(screen_id: number) {
  const screen = await prisma.screening.findUnique({
    where: {
      id: screen_id,
    },
    include: {
      tickets: true,
      movie: {
        include: {
          genres: true,
          reviews: {
            select: {
              rating: true,
            },
          },
          screenings: true,
        },
      },
    },
  });

  return screen;
}
