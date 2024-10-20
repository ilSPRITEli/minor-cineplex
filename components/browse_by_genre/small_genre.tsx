'use client';
import React, { useEffect, useState } from 'react';
import GenreCard from '@/components/browse_by_genre/genre-card';
import { getSixGenres } from '@/actions/getgenres';

export default function SmallGenre() {
  const [genres, setGenres] = useState<{ id: number; name: string; }[]>([]);

  useEffect(() => {
    async function fetchGenres() {
      const genresData = await getSixGenres();
      setGenres(genresData);
    }
    fetchGenres();
  }, []);

  return (
    <div className="flex justify-center flex-col w-full gap-5">
      <div className="flex flex-row justify-between items-end">
        <p className="font-bold md:text-base text-sm text-white">Browse by Genre</p>
        <a href='' className="text-2xs text-white">view all{' >'} </a>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-6 justify-center w-full gap-2 md:gap-5">
        {genres.map((genre:any) => (
          <GenreCard key={genre.id} genre={genre} />
        ))}
      </div>
    </div>
  );
}
