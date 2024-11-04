import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

export default function MovieCarouselSkeleton() {
  return (
    <div className="rounded-xl w-full">
      <Carousel className="rounded-xl">
        <CarouselContent className="rounded-xl max-h-[400px]">
          {[...Array(3)].map((_, index) => ( // Display 3 skeleton items
            <CarouselItem key={index} className="rounded-xl animate-pulse w-full">
              <div className="relative flex h-[400px] overflow-hidden rounded-lg bg-gray-800 w-full">
                <div className="absolute md:w-1/2 md:px-10 px-8 py-5 md:py-0 bottom-5 text-white z-20 flex flex-col space-y-2 w-full">
                  <div className="w-1/4 h-4 bg-gray-600 rounded-md"></div> {/* Placeholder for rating */}
                  <div className="w-3/4 h-6 bg-gray-600 rounded-md"></div> {/* Placeholder for title */}
                  <div className="flex flex-row gap-2">
                    <span className="w-16 h-6 bg-gray-600 rounded-full"></span>
                    <span className="w-16 h-6 bg-gray-600 rounded-full"></span>
                    <span className="w-16 h-6 bg-gray-600 rounded-full"></span>
                  </div> {/* Placeholder for genres */}
                  <div className="w-full h-4 bg-gray-600 rounded-md"></div> {/* Placeholder for description */}
                </div>
                <div className="object-cover w-full h-full bg-gray-700 rounded-xl"></div> {/* Placeholder for image */}
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
