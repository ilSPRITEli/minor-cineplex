import React from 'react';
import GenreCard from '@/components/browse_by_genre/genre-card';
import { Label } from '@/components/ui/label';

export default function SmallGenre() {
  return (
    <div className="flex justify-center flex-col w-full gap-5">
      <Label className="text-xl font-bold text-white">Browse by Genre</Label>
      <div className="flex justify-center w-full gap-5">
        <GenreCard />
        <GenreCard />
        <GenreCard />
        <GenreCard />
        <GenreCard />
        <GenreCard />
      </div>
    </div>
  );
}
