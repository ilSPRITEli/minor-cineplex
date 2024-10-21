import { Card, CardContent } from '@/components/ui/card';
import { FilmIcon } from '@heroicons/react/20/solid';
import RatingStar from '@/components/rating_star/rating_star';

export default function PosterCard(movie:any) {
  return (
    <Card className="w-full bg-transparent border-none shadow-none">
      <CardContent className="relative overflow-hidden flex flex-col p-0 gap-2 items-start justify-center text-white w-full duration-150 bg-transparent">
        <img className="object-cover w-full h-40 md:h-60 spic rounded-xl" alt="Star Wars" src={'https://image.tmdb.org/t/p/original' + movie.movie.image} />
        <div className='flex flex-col gap-1'>
          <p className="text-yellow-200 text-sm">
              {new Date(movie.movie.releaseDate).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }).toUpperCase()}
          </p>
          <h3 className="md:text-lg line-clamp-1  font-medium">{movie.movie.title}</h3>
        </div>
        <RatingStar rating={Number(movie.movie.averageRating)} />
        <div className="flex flex-row gap-2">
          {movie.movie.genres.map((genre: any) => (
            <span key={genre.name} className="w-fit ring-white text-2xs bg-gray-100/10 p-1.5 rounded-full ring-1">{genre.name}</span>
          ))}
        </div>
        <div className="flex flex-row gap-2">
          <FilmIcon className="aspect-square text-white w-5 h-5" />
          <span className="text-white text-sm">{movie.movie.duration} mins</span>
        </div>
      </CardContent>
    </Card>
  );
}
