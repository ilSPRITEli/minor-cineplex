'use client';
import React, { useEffect, useState } from 'react';
import PosterCardSkeleton from '@/components/poster/poster-card-skeleton';

export default function SmallPosterSkeleton() {

  return (
    <div className="flex justify-center flex-col w-full gap-5">
      <div className="flex flex-row justify-between items-end">
        <p className="font-bold md:text-base text-sm text-white">Recommend movie</p>
        <a href='' className="text-2xs text-white">view all{' >'} </a>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-6 justify-center w-full gap-2 md:gap-5">
        <PosterCardSkeleton/>
        <PosterCardSkeleton/>
        <PosterCardSkeleton/>
      </div>
    </div>
  );
}
