'use client';
import React, { useEffect, useState } from 'react';
import PosterCard from '@/components/poster/poster-card';
import { getPopularMovies } from '@/actions/getmovie';

export default function SmallPoster() {
  const [popularMovies, setPopularMovies] = useState<any[]>([]);

  useEffect(() => {
    async function fetchPopularMovies() {
      const popularMoviesData = await getPopularMovies();
      setPopularMovies(popularMoviesData);
    }
    fetchPopularMovies();
  }, []);

  return (
    <div className="flex justify-center flex-col w-full gap-5">
      <div className="flex flex-row justify-between items-end">
        <p className="font-bold md:text-base text-sm text-white">Recommend movie</p>
        <a href='' className="text-2xs text-white">view all{' >'} </a>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-6 justify-center w-full gap-2 md:gap-5">
        {popularMovies.map((movie:any) => (
          <PosterCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
