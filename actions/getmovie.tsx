// get movie data
'use server';
import prisma from '@/lib/db';

export async function getMovie() {
  const movies = await prisma.movie.findMany();
  return movies;
}

export async function getMovieById(id:number) {

  const movie = await prisma.movie.findUnique({
    where: {
      id,
    },
    include: {
      genres: true,
      reviews: {
        select: {
          rating: true,
        },
      },
    },

  });

  const totalRating = movie?.reviews.reduce((acc, review) => acc + review.rating, 0);
  const averageRating: number = movie?.reviews.length ? (totalRating ?? 0) / movie.reviews.length : 0;
  if (!movie) {
    return null;
  }

  return {
    ...movie,
    genres: movie.genres,
    averageRating,
  };

}

export async function getPopularMovies() {
  const movies = await prisma.movie.findMany({
    // order by count of reviews
    where: {
      outDate: {
        gte: new Date(), // filter by outDate field
      },
    },
    orderBy: {

      reviews: {
        _count: 'desc',
      },
    },
    take: 3,
    include: {
      _count: {
        select: { reviews: true },
      },
      genres: true, // include genres
      reviews: {
        select: {
          rating: true,
        },
      },
    },
  });

  return movies.map(movie => {
    const totalRating = movie.reviews.reduce((acc, review) => acc + review.rating, 0);
    const averageRating:number = movie.reviews.length ? totalRating / movie.reviews.length : 0;

    return {
      ...movie,
      reviewsCount: movie._count.reviews,
      genres: movie.genres, // return genres
      averageRating, // return average rating
    };
  });
}
