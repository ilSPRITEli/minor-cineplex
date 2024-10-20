'use server';
import prisma from '@/lib/db';

export default async function getGenres() {
  const genres = await prisma.genre.findMany();
  return genres;
}

export async function getGenreById(id: number) {
  const genre = await prisma.genre.findUnique({
    where: {
      id,
    },
  });
  return genre;
}

export async function getSixGenres() {
  const genres = await prisma.genre.findMany({
    orderBy: {
      name: 'asc',
    },
    take: 6,
  });
  return genres;
}
