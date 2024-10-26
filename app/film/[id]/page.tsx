import { getMovieById } from "@/actions/getmovie";
import RatingStar from "@/components/rating_star/rating_star";
import React from "react";
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

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface Params {
  id: string;
}

export default async function Page({ params }: { params: Params }) {

  const movie = await getMovieById(Number(params.id));

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
      name: 'John Doe',
      image: '/actor.jpg'
    },
    {
      name: 'Jane Doe',
      image: '/actor.jpg'
    },
    {
      name: 'John Doe',
      image: '/actor.jpg'
    },
    {
      name: 'John Doe',
      image: '/actor.jpg'
    },
    {
      name: 'John Doe',
      image: '/actor.jpg'
    },
    {
      name: 'John Doe',
      image: '/actor.jpg'
    },
  ]

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
          <Button className="bg-amber-400 text-black md:w-1/2 hover:bg-amber-800">Watch Now</Button>
        </div>
      </div>
      <Tabs defaultValue="overview" className="w-1/2 rounded-none">
      <TabsList className="grid w-fit grid-cols-2 rounded-none bg-transparent">
        <TabsTrigger className="w-fit px-5 text-base data-[state=active]:text-red-400 data-[state=active]:bg-transparent text-white/50" value="overview">Overview</TabsTrigger>
        <TabsTrigger className="-fit px-5 text-base data-[state=active]:text-red-400 data-[state=active]:bg-transparent text-white/50" value="screens">Screens</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        {/* show cast */}
        <Card className="w-full bg-transparent border-none shadow-none">
          <CardHeader>
            <CardTitle className="text-white">Cast</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 md:grid-cols-8 gap-4">
              {cast.map((cast: any) => (
                <div key={cast.name} className="flex flex-col gap-2">
                  <img className="object-cover w-24 h-24 md:w-full md:h-full aspect-square rounded-xl" src={cast.image} alt={cast.name} />
                  <p className="text-white text-xs">{cast.name}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      </Tabs>
    </main>
  );
}
