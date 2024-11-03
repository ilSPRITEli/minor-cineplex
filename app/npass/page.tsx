'use client';

import { useState, useEffect } from 'react';

import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { regNpass } from "@/actions/regNpass";

export default function RegNpass() {
    const [planType, setPlanType] = useState('');
    const [userId, setUserId] = useState('');


    const [description, setDescription] = useState('');
    const [genreIds, setGenreIds] = useState<number[]>([]);
    const [genres, setGenres] = useState<any[]>([]);
    const [releaseDate, setReleaseDate] = useState('');
    const [outDate, setOutDate] = useState('');
  
    async function handleSubmit(e: any) {
      e.preventDefault();
      console.log("Selected Plan Type:", planType)
      await regNpass({ userId ,planType });
    }
  
    // useEffect(() => {
    //   async function fetchGenres() {
    //     const genresData = await getGenres();
    //     setGenres(genresData);
    //   }
    //   fetchGenres();
    // }, []);

    // Model for Movie Pass Subscription
// model MoviePassSubscription {
//   id        Int      @id @default(autoincrement())
//   userId    Int
//   user      User     @relation(fields: [userId], references: [id])
//   planType  String // For example: "Monthly", "Annual", etc.
//   price     Float
//   startDate DateTime
//   endDate   DateTime
//   isActive  Boolean  @default(true)
//   createdAt DateTime @default(now())
//   updatedAt DateTime @updatedAt
// }
  
  
  
    return (
      <div className="w-full p-20">
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <Label htmlFor="userId">UserID</Label>
          <Input  
            id="userId"
            type="text"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />

          <Label htmlFor="planType">planType</Label>
          <select
            id="planType"
            value={planType}
            onChange={(e) => setPlanType(e.target.value)}
          >
            <option value="">Select a plan type</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="annual">Annual</option>
          </select>

          <Button type="submit">Submit</Button>
        </form>
      </div>
    );
  }