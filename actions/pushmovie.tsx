'use server';
import prisma from '@/lib/db';

export async function pushMovie(data:any) {

  const movie = await prisma.movie.create({
    data,
  });
  return movie;
}
