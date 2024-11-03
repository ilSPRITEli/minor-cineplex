'use server';
import prisma from '@/lib/db';

export async function getNpass() {
  const npass = await prisma.moviePassSubscription.findMany({
    orderBy: {
      id: 'asc',
    },
  });
  return npass;
}