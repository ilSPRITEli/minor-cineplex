'use client';

import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { title } from 'process';
import Autoplay from 'embla-carousel-autoplay';

export default function MovieCarousel() {
  // create movie dict
  const movies = [
    {
      title: 'Star Wars',
      description:
        'A long time ago in a galaxy far, far away...A long time ago in a galaxy far, far away...A long time ago in a galaxy far, far away...A long time ago in a galaxy far, far away...',
      image: '/starwars.jpg',
    },
    {
      title: 'Avengers : Endgame',
      description: 'A long time ago in a galaxy far, far away...',
      image: '/avengers.webp',
    },
    {
      title: 'The Batman',
      description: 'A long time ago in a galaxy far, far away...',
      image: '/batman.jpg',
    },
    {
      title: 'US',
      description: 'A long time ago in a galaxy far, far away...',
      image: '/US.png',
    },
  ];

  // create a carousel
  return (
    <div className="rounded-xl">
      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        className="rounded-xl"
      >
        <CarouselContent className="rounded-xl max-h-[400px]">
          {movies.map((movie) => (
            <CarouselItem key={movie.title}>
              <div className="relative flex h-[400px] overflow-hidden rounded-lg">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
                <div className="absolute w-1/2 px-10 bottom-10 text-white z-20 gap-4">
                  <h3 className="relative text-2xl font-bold  bg-transparent">{movie.title}</h3>
                  <p className="relative line-clamp-2 text-sm bg-transparent">{movie.description}</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                <img className="object-cover object-center w-full rounded-xl" alt="Star Wars" src={movie.image} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute md:left-10 top-1/2 transform -translate-y-1/ p-2 rounded-full"></CarouselPrevious>
        <CarouselNext className="absolute md:right-10 top-1/2 transform -translate-y-1/2 p-2 rounded-full"></CarouselNext>
      </Carousel>
    </div>
  );
}
