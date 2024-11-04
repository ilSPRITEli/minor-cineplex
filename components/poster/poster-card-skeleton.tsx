import { Card, CardContent } from '@/components/ui/card';
import { FilmIcon } from '@heroicons/react/20/solid';

export default function PosterCardSkeleton() {
  return (
    <Card className="w-full bg-transparent border-none shadow-none animate-pulse">
      <CardContent className="relative overflow-hidden flex flex-col p-0 gap-2 items-start justify-center text-white w-full duration-150 bg-transparent">
        {/* Placeholder for poster image */}
        <div className="object-cover w-full h-40 md:h-60 bg-gray-700 rounded-xl"></div>

        {/* Placeholder for release date */}
        <div className="flex flex-col gap-1 w-full">
          <div className="w-1/3 h-4 bg-gray-600 rounded-md"></div>

          {/* Placeholder for title */}
          <div className="w-3/4 h-6 bg-gray-600 rounded-md"></div>
        </div>

        {/* Placeholder for rating stars */}
        <div className="flex flex-row gap-1">
          {[...Array(5)].map((_, index) => (
            <div key={index} className="w-4 h-4 bg-gray-500 rounded-full"></div>
          ))}
        </div>

        {/* Placeholder for genres */}
        <div className="flex flex-row gap-2 w-full mt-1">
          <span className="w-16 h-6 bg-gray-600 rounded-full"></span>
          <span className="w-16 h-6 bg-gray-600 rounded-full"></span>
          <span className="w-16 h-6 bg-gray-600 rounded-full"></span>
        </div>

        {/* Placeholder for duration */}
        <div className="flex flex-row gap-2 mt-2">
          <FilmIcon className="aspect-square text-gray-600 w-5 h-5" />
          <div className="w-12 h-4 bg-gray-600 rounded-md"></div>
        </div>
      </CardContent>
    </Card>
  );
}
