'use client';
import { getMovieById } from "@/actions/getmovie";
import RatingStar from "@/components/rating_star/rating_star";
import Image from 'next/image';
import React from "react";
import { useState, useEffect } from "react";
// import clock icon
import { ClockIcon } from '@heroicons/react/24/outline';
import { Button } from "@/components/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import SkeletonLoader from "@/app/film/[id]/filmskeleton";
import { useRouter } from "next/navigation";

interface Params {
  id: string;
}

export default function Page({ params }: { params: Params }) {

  interface Movie {
    genres: { id: number; name: string; }[];
    averageRating: number;
    reviews: { rating: number; }[];
    id: number;
    title: string;
    description: string;
    duration: number;
    releaseDate: Date;
    outDate: Date | null;
    image: string | null;
    createdAt: Date;
    updatedAt: Date;
    screenings: { id: number; movieId: number; startTime: Date; endTime: Date; availableSeats: number; createdAt: Date; updatedAt: Date; }[];
  }

  const [movie, setMovie] = useState<Movie | null>(null);

  const router = useRouter();

  useEffect(() => {
    async function fetchMovie() {
      const movieData = await getMovieById(Number(params.id));
      setMovie(movieData);
    }
    fetchMovie();
  }, [params.id]);

  const cast = [
    {
      name: 'John Doe',
      image: '/actor.jpg'
    },
    {
      name: 'Jane Doe',
      image: '/actor.jpg'
    },
    {
      name: 'Walter White',
      image: '/actor.jpg'
    },
    {
      name: 'Leonardo DiCaprio',
      image: '/actor.jpg'
    },
    {
      name: 'Tom Cruise',
      image: '/actor.jpg'
    },
    {
      name: 'Robert Downey Jr.',
      image: '/actor.jpg'
    },
    {
      name: 'Chris Evans',
      image: '/actor.jpg'
    },
    {
      name: 'Chris Hemsworth',
      image: '/actor.jpg'
    },
  ]

  const[tab, setTab] = useState('overview');

  if (!movie) {
    return <SkeletonLoader />;
  }
  const onWatchnow = (tab: string) => {
    setTab(tab);
  }

  return (
    <main className="main_gradient flex flex-wrap grow flex-col items-start w-full h-auto gap-5 md:px-20 md:pt-24 pt-16 md:pb-10 pb-10 px-1 text-white">
      <div className="flex flex-col md:flex-row w-fit h-fit gap-5">
        <img className="object-cover w-full md:w-80 poster" src={'https://image.tmdb.org/t/p/original' + movie?.image ?? undefined} alt={movie?.title} />
        <div className="flex flex-col gap-5 justify-between">
          <div className="flex flex-col gap-5">
            <h1 className="md:text-2xl text-2xl font-bold ">{movie?.title}</h1>
            <RatingStar rating={Number(movie?.averageRating)} />
            <div className="flex flex-row gap-2">
              <ClockIcon className="aspect-square text-white w-5 h-5" />
              <span className="text-white text-sm">{movie?.duration} mins</span>
            </div>
            <div className="flex flex-row gap-2">
              {movie?.genres.map((genre: any) => (
                <span key={genre.name} className="w-fit text-white ring-white text-2xs bg-gray-100/10 p-1.5 rounded-full ring-1">{genre.name}</span>
              ))}
            </div>
            <p className="text-xs w-3/4">{movie?.description}</p>
          </div>
            <Button
            className="bg-amber-400 text-black md:w-1/2 hover:bg-amber-800"
            onClick={() => onWatchnow('screens')}
            >
            Watch Now
            </Button>
        </div>
      </div>
      <Tabs value={tab} onValueChange={onWatchnow} className="md:w-1/2 w-full rounded-none">
        <TabsList className="grid w-fit grid-cols-2 rounded-none bg-transparent">
          <TabsTrigger className="w-fit px-5 text-base data-[state=active]:text-red-400 data-[state=active]:bg-transparent text-white/50" value="overview">Overview</TabsTrigger>
          <TabsTrigger className="-fit px-5 text-base data-[state=active]:text-red-400 data-[state=active]:bg-transparent text-white/50" value="screens" id="screens">Screens</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="w-full">
          {/* show cast */}
          <Card className="w-full bg-transparent border-none shadow-none">
            <CardHeader>
              <CardTitle className="text-white">Cast</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 md:grid-cols-8 gap-4">
                {cast.map((cast: any) => (
                  <div key={cast.name} className="flex flex-col gap-2 h-fit">
                    <img className="object-cover w-24 h-24 md:w-full md:h-full aspect-square rounded-xl" src={cast.image} alt={cast.name} />
                    <p className="text-white text-xs">{cast.name}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="screens" className="w-full flex flex-col md:flex-row gap-5">
          {/* display movie screens */}
            {movie.screenings
            .sort((a, b) => a.id - b.id)
            .map((screening: any) => (
              <Card key={screening.id} className="w-full bg-rose-900/20 border-none shadow-none">
              <CardHeader>
                <CardTitle className="text-white text-lg">{screening.startTime.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-2">
                  <p className="text-white text-xs">Start Time :
                    <Button className="text-black bg-white hover:bg-white/80 h-fit py-1 ml-1 duration-300">
                      {screening.startTime.getHours()}:{screening.startTime.getMinutes()}
                    </Button>
                  </p>
                  <p className="text-white text-xs">Available Seats: {screening.availableSeats}</p>
                </div>
              </CardContent>
              <CardFooter>
                <Button
                className="bg-amber-400 text-black hover:bg-amber-800"
                onClick={()=>router.push(`/buyticket/${screening?.id}`)}>
                  Book Now
                </Button>
              </CardFooter>
              </Card>
            ))}
        </TabsContent>
      </Tabs>
    </main>
  );
}
