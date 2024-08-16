import MovieCarousel from '@/components/movie_carousel/movie-carousel';
import SmallGenre from '@/components/browse_by_genre/small_genre';
import PosterCard from '@/components/poster/poster-card';
import SmallPoster from '@/components/now-playing/now-playing';

export default function Page() {
  return (
    <main className="main_gradient flex flex-wrap grow flex-col items-center w-full h-auto gap-10 px-20 py-32">
      <MovieCarousel />
      <SmallGenre />
      <SmallPoster />
    </main>
  );
}