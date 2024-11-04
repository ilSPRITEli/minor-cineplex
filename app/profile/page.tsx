'use client';
import ProfileTabs from "@/app/profile/profiletabs"
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { useSession, signOut } from 'next-auth/react'
import { DefaultSession } from "next-auth";

declare module 'next-auth' {
  interface Session {
    user: {
      isSubscripted?: boolean;
    } & DefaultSession["user"];
  }
}
import { useRouter } from 'next/navigation'

export default function Component() {

  const { data: session, status } = useSession()
  const router = useRouter()

  if (status === 'unauthenticated') {
    router.push('/login');
  }

  return (
    <div className="main_gradient flex h-screen items-start justify-start pt-20">
    <Tabs defaultValue="profile" className=" w-full rounded-none md:pl-14">
      <TabsList className="grid md:w-fit w-full grid-cols-2 rounded-none bg-transparent">
        <TabsTrigger className="px-5 text-base text-center data-[state=active]:text-red-400 data-[state=active]:bg-transparent text-white/50" value="profile">Profile</TabsTrigger>
        <TabsTrigger className=" px-5 text-base text-center data-[state=active]:text-red-400 data-[state=active]:bg-transparent text-white/50" value="tickets">Tickets</TabsTrigger>
      </TabsList>
      <TabsContent value="profile">
        <ProfileTabs/>
      </TabsContent>
      </Tabs>
    </div>
  )
}
