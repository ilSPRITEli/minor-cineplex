import React from "react";
import { ClockIcon } from '@heroicons/react/24/outline';
import { Button } from "@/components/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function SkeletonLoader() {
  return (
    <main className="main_gradient flex flex-wrap grow flex-col items-start w-full h-auto gap-5 md:px-20 md:pt-24 pt-16 md:pb-10 pb-10 px-1 text-white">
      <div className="flex flex-col md:flex-row w-fit h-fit gap-5 animate-pulse">
        <div className="w-full md:w-80 h-48 bg-gray-700 rounded-md"></div>
        <div className="flex flex-col gap-5 justify-between w-full">
          <div className="flex flex-col gap-5">
            <div className="w-3/4 h-6 bg-gray-600 rounded-md"></div>
            <div className="w-1/4 h-4 bg-gray-600 rounded-md"></div>
            <div className="flex flex-row gap-2 items-center">
              <ClockIcon className="aspect-square text-gray-600 w-5 h-5" />
              <div className="w-12 h-4 bg-gray-600 rounded-md"></div>
            </div>
            <div className="flex flex-row gap-2">
              <div className="w-16 h-6 bg-gray-600 rounded-full"></div>
              <div className="w-16 h-6 bg-gray-600 rounded-full"></div>
              <div className="w-16 h-6 bg-gray-600 rounded-full"></div>
            </div>
            <div className="w-3/4 h-4 bg-gray-600 rounded-md"></div>
          </div>
          <div className="w-1/2 h-10 bg-amber-400 rounded-md"></div>
        </div>
      </div>

      <Tabs defaultValue="overview" className="md:w-1/2 w-full rounded-none">
        <TabsList className="grid w-fit grid-cols-2 rounded-none bg-transparent">
          <TabsTrigger className="w-fit px-5 text-base data-[state=active]:text-red-400 data-[state=active]:bg-transparent text-white/50" value="overview">Overview</TabsTrigger>
          <TabsTrigger className="w-fit px-5 text-base data-[state=active]:text-red-400 data-[state=active]:bg-transparent text-white/50" value="screens">Screens</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="w-full">
          <Card className="w-full bg-transparent border-none shadow-none">
            <CardHeader>
              <CardTitle className="text-white">Cast</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 md:grid-cols-8 gap-4">
                {[...Array(8)].map((_, index) => (
                  <div key={index} className="flex flex-col gap-2 h-fit animate-pulse">
                    <div className="w-24 h-24 md:w-full md:h-full bg-gray-600 rounded-xl"></div>
                    <div className="w-16 h-4 bg-gray-600 rounded-md"></div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </main>
  );
}

export default SkeletonLoader;
