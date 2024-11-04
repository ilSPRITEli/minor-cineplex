'use client';

import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { useSession, signOut } from 'next-auth/react'

export default function ProfileTabs() {

  const { data: session, status } = useSession()

  return (
    <Card className="w-full bg-transparent border-none shadow-none">
          <CardContent>
            <div className="container mx-auto px-4 py-8">
              <div className="flex flex-col items-center mb-8">
                <Avatar className="h-32 w-32 bg-red-500">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
              </div>
              <div className="max-w-2xl mx-auto grid gap-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm text-white">Email</label>
                    <Input
                      className="bg-white border-none"
                      value={session?.user?.email ?? ''}
                      disabled
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-white">Name</label>
                    <Input
                      className="bg-white border-none"
                      value={session?.user?.name ?? ''}
                      disabled
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-white">สถานะ</label>
                    <div className="flex items-center h-10">
                      {session?.user?.isSubscripted ? (
                            <Badge variant="default" className="bg-amber-400 text-black">
                              SUBSCRIBER
                            </Badge>
                          ) : (
                            <Badge variant="secondary" className="bg-white">
                              MEMBER
                            </Badge>
                          )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
  );
}
