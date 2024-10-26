import { getMovieById } from "@/actions/getmovie";
import RatingStar from "@/components/rating_star/rating_star";
import React from "react";
// import clock icon
import { ClockIcon } from '@heroicons/react/24/outline';
import { Button } from "@/components/ui/button";

interface Params {
  id: string;
}

export default async function Page({ params }: { params: Params }) {

  const movie = await getMovieById(Number(params.id));

  return (
    <main className="main_gradient flex flex-wrap grow flex-col items-start w-full h-auto gap-10 md:px-20 md:py-24 py-16 px-1 text-white">
      <div className="flex flex-col md:flex-row w-fit h-96 gap-5">
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
    </main>
  );
}
