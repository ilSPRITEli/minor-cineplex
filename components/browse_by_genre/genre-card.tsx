import { Card, CardContent } from '@/components/ui/card';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';

export default function GenreCard(genre:any) {
  console.log(genre.genre.name);
  return (
    <Card className=" bg-transparent border-none">
      <CardContent className="flex flex-col gap-1 items-center justify-center p-2 md:p-5 bg-[#553636] duration-150 hover:bg-[#220808] rounded-xl md:rounded-2xl">
        <MagnifyingGlassIcon className="aspect-square text-white md:w-5 md:h-5 w-4 h-4" />
        <span className="text-white text-sm">{genre.genre.name}</span>
      </CardContent>
    </Card>
  );
}
