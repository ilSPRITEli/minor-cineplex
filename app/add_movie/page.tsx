// add movie form
'use client';

import { useState, useEffect } from 'react';

import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { getGenres } from "@/actions/getgenres";
import { pushMovie } from "@/actions/pushmovie";

export default function AddMovie() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [genreIds, setGenreIds] = useState<number[]>([]);
  const [genres, setGenres] = useState<any[]>([]);
  const [duration, setDuration] = useState(0);
  const [releaseDate, setReleaseDate] = useState('');
  const [outDate, setOutDate] = useState('');

  async function handleSubmit(e: any) {
    e.preventDefault();
    await pushMovie({ title, description, genres, duration, releaseDate, outDate });
  }

  useEffect(() => {
    async function fetchGenres() {
      const genresData = await getGenres();
      setGenres(genresData);
    }
    fetchGenres();
  }, []);



  return (
    <div className="w-full p-20">
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <Label htmlFor="title">Title</Label>
        <Input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <Label htmlFor="description">Description</Label>
        <Input
          id="description"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <Label htmlFor="genre">Genre</Label>
        <select
          id="genre"
          value={genreIds.join(',')}
          onChange={(e) => setGenreIds([parseInt(e.target.value, 10)])}
        >
          {genres.map((genre) => (
            <option key={genre.id} value={genre.id}>
              {genre.name}
            </option>
          ))}
        </select>

        <Label htmlFor="duration">Duration</Label>
        <Input
          id="duration"
          type="number"
          value={duration}
          onChange={(e) => setDuration(parseInt(e.target.value, 10))}
        />

        <Label htmlFor="releaseDate">Release Date</Label>
        <Input
          id="releaseDate"
          type="date"
          value={releaseDate}
          onChange={(e) => setReleaseDate(e.target.value)}
        />

        <Label htmlFor="outDate">Out Date</Label>
        <Input
          id="outDate"
          type="date"
          value={outDate}
          onChange={(e) => setOutDate(e.target.value)}
        />

        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}
