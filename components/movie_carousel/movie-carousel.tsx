'use client';

import React, {useState, useEffect} from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { getPopularMovies } from '@/actions/getmovie';
import RatingStar from '@/components/rating_star/rating_star';

export default function MovieCarousel() {
  // create movie dict

  const [movies, setMovies] = useState<any[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const fetchedMovies = await getPopularMovies();
        setMovies(fetchedMovies);
      } catch (error) {
      }
    };

    fetchMovies();
  }, []);



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
          {movies.map((movie:any) => (
            <CarouselItem key={movie.title} className='rounded-xl'>
              <div className="relative flex h-[400px] overflow-hidden rounded-lg">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
                <div className="absolute  md:w-1/2 md:px-10 px-8 py-5 md:py-0 bottom-5 text-white z-20 flex flex-col space-y-2">

                  <RatingStar rating={Number(movie.averageRating)} />

                  <h3 className="relative text-2xl font-bold  bg-transparent">{movie.title}</h3>
                  <div className="flex flex-row gap-2">
                  {movie.genres.map((genre: any) => (
                    <span key={genre.name} className="w-fit ring-white text-2xs bg-gray-100/10 p-1.5 rounded-full ring-1">{genre.name}</span>
                  ))}</div>
                  <p className="relative line-clamp-2 text-sm bg-transparent">{movie.description}</p>

                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                <img className="object-cover w-full rounded-xl pic" alt="Star Wars" src={'https://image.tmdb.org/t/p/original' + movie.image}  />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute md:left-10 md:block hidden left-5 top-1/2 transform -translate-y-1/2 p-2 rounded-full"></CarouselPrevious>
        <CarouselNext className="absolute md:right-10 md:block hidden right-5 top-1/2 transform -translate-y-1/2 p-2 rounded-full"></CarouselNext>
      </Carousel>
    </div>
  );
}
