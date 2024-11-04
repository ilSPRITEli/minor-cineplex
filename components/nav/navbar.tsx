'use client'
import Link from 'next/link';
import { MagnifyingGlassIcon, SparklesIcon } from '@heroicons/react/20/solid';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'



export default function Navbar() {

  const router = useRouter()
  const { data: session, status } = useSession()
  return (
    <header className="fixed w-full top-0 z-50 bg-gradient-to-b from-black/80 to-transparent text-white backdrop-blur-sm">
      <div className="flex px-2 h-16 items-center justify-between md:px-20">
        <Link href="/" className="text-2xl font-bold" prefetch={false}>
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
            Movie
          </Link>
          {session ? (
            <DropdownMenu>
            <DropdownMenuTrigger asChild>
              {session?.user?.isSubscripted === false ? (
                <Button className='font-bold p-4 text-lg'>{session?.user?.name}</Button>
              ) : (
                <Button className='font-bold p-4 text-lg bg-amber-400 text-amber-800 gap-1'>
                  {session?.user?.name}
                  <SparklesIcon className='h-4 w-4' />
                </Button>
              )
                }
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <Link href="/profile" prefetch={false}>
                  Account
                </Link>
              </DropdownMenuItem>

                {session?.user?.isSubscripted === false ? (
                  <DropdownMenuItem>
                    <Link href="/m_pass" prefetch={false}>
                      Npass
                    </Link>
                  </DropdownMenuItem>
                ) : (
                  <> </>
                )}

              <DropdownMenuItem>
                <Link href='/login' prefetch={false}>
                  {session ? (
                        <Button onClick={()=>signOut()}>Logout</Button>
                      ) : (
                        <></>
                  )}
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
                  ) : (
                    <Button onClick={() => router.push('/profile')}>Sign in</Button>
          )}
        </div>
      </div>
    </header>
  );
}
