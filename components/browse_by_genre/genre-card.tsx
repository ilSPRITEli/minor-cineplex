import { Card, CardContent } from '@/components/ui/card';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';

export default function GenreCard() {
  return (
    <Card className="md:w-1/6 bg-transparent border-none">
      <CardContent className="flex flex-col gap-2 items-center justify-center p-4 bg-[#A94B4B] duration-150 hover:bg-[#360E0E] rounded-2xl">
        <MagnifyingGlassIcon className="h-10 w-10 text-white" />
        <span className="text-white">Mystery</span>
      </CardContent>
    </Card>
  );
}
