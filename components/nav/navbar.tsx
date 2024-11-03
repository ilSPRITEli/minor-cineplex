import Link from 'next/link';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

export default function Navbar() {
  return (
    <header className="fixed w-full top-0 z-50 bg-gradient-to-b from-black/80 to-transparent text-white backdrop-blur-sm">
      <div className="flex px-2 h-16 items-center justify-between md:px-20">
        <Link href="#" className="text-2xl font-bold" prefetch={false}>
          <img src="/logo.png" className='w-52 md:w-80' alt="logo" />
        </Link>
        <div className="flex items-center gap-4">
          <div className="relative hidden md:block">
            <MagnifyingGlassIcon className="absolute left-3 top-2.5 h-5 w-5 text-black" />
            <Input
              type="search"
              placeholder="Search movies..."
              className="h-10 w-64 text-black rounded-md bg-muted pl-10 text-sm focus:outline-none"
            />
          </div>
          <Link href="#" className="hidden md:block" prefetch={false}>
            Cinema
          </Link>
          <Link href="#" className="hidden md:block" prefetch={false}>
            Movie
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar className="select-none">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <Link href="#" prefetch={false}>
                  Account
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/m_pass" prefetch={false}>
                  Npass
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="#" prefetch={false}>
                  Logout
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
