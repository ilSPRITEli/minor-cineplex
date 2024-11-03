import { getMovieById } from "@/actions/getmovie";
import { getNpass } from '@/actions/getNpass';
import RatingStar from "@/components/rating_star/rating_star";
import React from "react";
// import clock icon
import { ClockIcon } from '@heroicons/react/24/outline';
import { Button } from "@/components/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface Params {
    id: number;
    name: string;
}

export default async function Page({ params }: { params: Params }) {

    const npass = await getNpass()

    // userId: data.userId,
    //   planType: data.planType,
    //   price,
    //   startDate,
    //   endDate,


  return (
    <main className="main_gradient flex flex-wrap grow flex-col items-start w-full h-auto gap-5 md:px-20 md:pt-24 pt-16 md:pb-10 pb-10 px-1 text-white">
        <table className="min-w-full border-collapse border border-gray-300">
            <thead>
                <tr>
                <th className="border border-gray-300 px-4 py-2">ID</th>
                <th className="border border-gray-300 px-4 py-2">userID</th>
                <th className="border border-gray-300 px-4 py-2">planType</th>
                <th className="border border-gray-300 px-4 py-2">price</th>
                <th className="border border-gray-300 px-4 py-2">startDate</th>
                <th className="border border-gray-300 px-4 py-2">endDate</th>
                </tr>
            </thead>
            <tbody>
                {npass.map((item) => (
                <tr key={item.id}>
                    <td className="border border-gray-300 px-4 py-2">{item.id}</td>
                    <td className="border border-gray-300 px-4 py-2">{item.userId}</td>
                    <td className="border border-gray-300 px-4 py-2">{item.planType}</td>
                    <td className="border border-gray-300 px-4 py-2">{item.price}</td>
                    <td className="border border-gray-300 px-4 py-2">
                    {new Date(item.startDate).toLocaleDateString()} {/* แปลงวันที่ */}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                    {new Date(item.endDate).toLocaleDateString()} {/* แปลงวันที่ */}
                    </td>
                </tr>
                ))}
            </tbody>
        </table>
    </main>
  );
}
