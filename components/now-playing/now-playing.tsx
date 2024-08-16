import React from 'react';
import PosterCard from '@/components/poster/poster-card';
import { Label } from '@/components/ui/label';

export default function SmallPoster() {
  return (
    <div className="flex justify-center flex-col w-full gap-5">
      <Label className="text-xl font-bold text-white">Browse by Poster</Label>
      <div className="flex justify-center w-full gap-5">
        <PosterCard />
        <PosterCard />
        <PosterCard />
        <PosterCard />
        <PosterCard />
        <PosterCard />
      </div>
    </div>
  );
}
