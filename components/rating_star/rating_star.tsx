// rating star component
import React from 'react';
// import { StarIcon } from '@heroicons/react/20/solid';

interface RatingStarProps {
  rating: number;
}

export default function RatingStar({ rating }: RatingStarProps) {

  const flooredRating = Math.floor(rating);
  const formattedRating = rating.toFixed(2);

  return (

    <div id="rating" className="flex gap-1 w-fit justify-center align-middle text-center flex-row text-xs">
      {[...Array(5)].map((_, i) => {

        const diff = Number(formattedRating) - i;
        const percentage = diff * 100;
        console.log(percentage);

        return <svg className="md:w-5 md:h-5 w-3 h-3"
        key={i}
        fill={
          i < flooredRating ? 'url(#fullgrad)' : i < rating ? `url(#halfgrad${percentage})` : '#D1D5DB50'
          }
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="fullgrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#fde047', stopOpacity: 1 }} />
              <stop offset="50%" style={{ stopColor: '#fde047', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#fde047', stopOpacity: 1 }} />
            </linearGradient>

            <linearGradient id={`halfgrad${percentage}`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#fde047', stopOpacity: 1 }} />
              <stop offset={`${percentage}%`} style={{ stopColor: '#fde047', stopOpacity: 1 }} />
              <stop offset={`${percentage}%`} style={{ stopColor: '#D1D5DB', stopOpacity: 0.5 }} />
              <stop offset="100%" style={{ stopColor: '#D1D5DB', stopOpacity: 0.5 }} />
            </linearGradient>
          </defs>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.5 14.25l-5.584 2.936 1.066-6.218L.465 6.564l6.243-.907L9.5 0l2.792 5.657 6.243.907-4.517 4.404 1.066 6.218"></path>
            </svg>
      })}

      {formattedRating}

    </div>
  );
}
