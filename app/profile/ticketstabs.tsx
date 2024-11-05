'use client'
import { useSession } from "next-auth/react"
import { useState, useEffect } from "react"
import { getTicketsByUser } from "@/actions/getTickets"


export default function TicketsTabs() {
  interface Ticket {
    id: number;
    screeningId: number;
    userId: number;
    screening: {
      id: number;
      movieId: number;
      startTime: Date;
      endTime: Date;
      availableSeats: number;
      createdAt: Date;
      updatedAt: Date;
      movie: {
        id: number;
        title: string;
        description: string;
        duration: number;
        releaseDate: Date;
        outDate: Date | null;
        image: string | null;
        createdAt: Date;
        updatedAt: Date;
      };
    };
    price: number;
    seatNumber: string;
    createdAt: Date;
    updatedAt: Date;
  }

  const { data: session, status } = useSession();

  const [tickets, setTickets] = useState<Ticket[]>([]);

  useEffect(() => {
    async function fetchTickets() {
      const tickets = await getTicketsByUser(Number(session?.user?.id));
      setTickets(tickets);
    }

    if (session) {
      fetchTickets();
    }
  }, [session]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }



  return (
    <div className="min-h-screen bg-transparent text-white">

      {/* Tickets Grid */}
      <div className="container px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tickets.map((ticket) => (
            <div
              key={ticket.id}
              className={`relative rounded-lg overflow-hidden bg-center shadow-lg bg-[url('https://image.tmdb.org/t/p/original${ticket.screening.movie.image}')] bg-cover`}
            >
              <div className="relative aspect-[2/1]">
                {/* Notched edges */}
                <div className="absolute -left-4 top-1/2 h-8 w-8 -translate-y-1/2 transform rounded-full bg-black"></div>
                <div className="absolute -right-4 top-1/2 h-8 w-8 -translate-y-1/2 transform rounded-full bg-black"></div>

                <div className="p-6 h-full flex flex-col justify-between">
                  {/* Ticket content */}
                  <div className="flex justify-between items-start">
                    <div className="space-y-2">
                      <div className="text-xs opacity-75">DATE: XX / XXX / XXXX</div>
                      <div className="text-xs opacity-75">TIME: XX : XX</div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <div className="w-4 h-4">
                        <svg viewBox="0 0 16 16" fill="currentColor">
                          <path d="M1.5 1.5l13 13m-13 0l13-13" stroke="currentColor" strokeWidth="2"/>
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between items-end">
                    <div className="text-lg font-bold tracking-wider">MINOR CINEPLEX</div>
                    {/* Barcode */}
                    <div className="w-20 h-10 bg-current opacity-20"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
