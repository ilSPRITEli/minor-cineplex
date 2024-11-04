'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useSession } from 'next-auth/react'
import { ClockIcon } from '@heroicons/react/24/outline'
import { getScreenById} from '@/actions/getScreen'
import { buyTicket } from '@/actions/add_ticket'
import { useRouter } from 'next/navigation'
// import Image from 'next/image'

interface Params {
  screen_id: string;
}

export default function BuyTicket({ params }: { params: Params }) {

  const [selectedSeats, setSelectedSeats] = useState("")
  const { data: session, status } = useSession()
  const [screening, setScreening] = useState<any>(null)
  const router = useRouter()
  const [price, setPrice] = useState(0)
  // console.log(params.screen_id)

  if (status === 'unauthenticated') {
    router.push('/login');
  }

  useEffect(() => {
    async function fetchScreen() {
      const screenData = await getScreenById(Number(params.screen_id));
      setScreening(screenData);
      console.log(screenData)
    }
    fetchScreen();
  }, [params.screen_id]);

  const toggleSeatSelection = (seatId: string, type: string) => {
    if (selectedSeats){
      if (selectedSeats === seatId) {
        setSelectedSeats("")
        setPrice(0)
      } else {
        setSelectedSeats(seatId)
        if (session?.user?.isSubscripted === false) {
          if (type === 'normal') {
            setPrice(160)
          } else if (type === 'honeymoon') {
            setPrice(180)
          } else if (type === 'sofa') {
            setPrice(400)
          }
        } else {
          if (type === 'normal') {
            setPrice(0)
          } else if (type === 'honeymoon') {
            setPrice(20)
          } else if (type === 'sofa') {
            setPrice(240)
          }
        }
      }
    } else {
      setSelectedSeats(seatId)
        if (session?.user?.isSubscripted === false) {
          if (type === 'normal') {
            setPrice(160)
          } else if (type === 'honeymoon') {
            setPrice(180)
          } else if (type === 'sofa') {
            setPrice(400)
          }
        } else {
          if (type === 'normal') {
            setPrice(0)
          } else if (type === 'honeymoon') {
            setPrice(20)
          } else if (type === 'sofa') {
            setPrice(240)
          }
        }
    }
  }

  const renderSeat = (row: string, seatNumber: number, type: 'normal' | 'honeymoon' | 'sofa' = 'normal') => {
    const seatId = `${row}${seatNumber}`
    const isSelected = selectedSeats.includes(seatId)

    // check if seatId already booked


    var baseClasses = "md:w-12 md:h-12 w-8 h-8 text-black rounded-t-full cursor-pointer transition-colors"
    var colorClasses = {
      normal: "bg-red-400 hover:bg-red-500",
      honeymoon: "bg-purple-400 hover:bg-purple-500",
      sofa: "bg-pink-400 hover:bg-pink-500 w-12"
    }

    if (screening?.tickets) {
      screening.tickets.map((ticket: any) => {
        if (ticket.seatNumber === seatId) {
          baseClasses = "md:w-12 md:h-12 w-8 h-8 text-black rounded-t-full cursor-not-allowed pointer-events-none"
          colorClasses = {
            normal: "bg-muted/10",
            honeymoon: "bg-muted/10",
            sofa: "bg-muted/10"
          }
        }
      })
    }

    return (
      <button
        key={seatId}
        className={`${baseClasses} ${colorClasses[type]} ${isSelected ? 'ring-2 ring-white' : ''}`}
        onClick={() => toggleSeatSelection(seatId, type)}
      >{seatId}</button>
    )

  }

  const handleBuyTicket = async (e:any) => {
    e.preventDefault()
    try{
        const result = await buyTicket({userId:session?.user?.id, screeningId:screening.id, price:price, seatNumber:selectedSeats})
        if (result?.id) {
          alert("Ticket bought successfully")
          router.push('/profile')
          console.log(result)
        }
    }
    catch (error) {
      alert(error);
    }
  }


  if (!screening) return <div>Loading...</div>


  return (
    <main className="main_gradient flex flex-wrap grow flex-col items-start w-full h-auto gap-5 md:px-20 md:pt-24 pt-16 md:pb-10 pb-10 px-1 text-white">
      {/* Seating and Summary Section */}
      <div className="flex flex-col-reverse md:flex-row-reverse gap-2 w-full mt-8">
        {/* Seating Chart */}
        <div className="w-full bg-black/20 p-2 rounded-md shadow-sm">
          <div className="text-center mb-4 text-xl">SCREEN</div>

          <div className="grid gap-2">
            {['H', 'G', 'F', 'E', 'D', 'C', 'B', 'A'].map(row => (
              <div key={row} className="flex items-center gap-1">
                <span className="w-4">{row}</span>
                <div className="flex gap-1 justify-center flex-1">
                  {Array.from({length: 9}).map((_, i) =>
                    renderSeat(row, i + 1, row < 'C' ? 'honeymoon' : 'normal')
                  )}
                </div>
                <span className="w-4">{row}</span>
              </div>
            ))}

            {/* Sofa Row */}
            <div className="flex justify-center gap-2 mt-4">
              {Array.from({length: 4}).map((_, i) =>
                renderSeat('S', i + 1, 'sofa')
              )}
            </div>
          </div>

          {/* Legend */}
          <div className="flex justify-center gap-4 mt-6 w-full">
            {session?.user?.isSubscripted === true ? (
                  <div className='bg-amber-400 p-2 text-black rounded-full font-bold text-center h-full justify-center align-middle flex items-center my-auto'>V<br></br>I<br></br>P</div>
                ) : (
                  null
            )}
            <Card className="p-3 bg-transparent text-white flex flex-col items-center shadow-none">
              <div className="w-6 h-6 bg-red-400 rounded-t-lg mb-1" />
              <div className="text-center text-sm">
                <div>Normal</div>
                {session?.user?.isSubscripted === false ? (
                  <div>160 baht</div>
                ) : (
                  <div>Free</div>
                )}
              </div>
            </Card>
            <Card className="p-3 bg-transparent text-white flex flex-col items-center shadow-none">
              <div className="w-6 h-6 bg-purple-400 rounded-t-lg mb-1" />
              <div className="text-center text-sm">
                <div>Honeymoon</div>
                {session?.user?.isSubscripted === false ? (
                  <div>180 baht</div>
                ) : (
                  <div>20 baht</div>
                )}
              </div>
            </Card>
            <Card className="p-3 bg-transparent text-white flex flex-col items-center shadow-none">
              <div className="w-6 h-6 bg-pink-400 rounded-t-lg mb-1" />
              <div className="text-center text-sm ">
                <div>Deluxe</div>
                {session?.user?.isSubscripted === false ? (
                  <div>400 baht</div>
                ) : (
                  <div>240 baht</div>
                )}
              </div>
            </Card>
          </div>
        </div>

        {/* Summary Card */}
        <div className="flex flex-col w-3/4 h-fit gap-5">
          <img className="object-cover w-full md:w-3/4 poster" src={'https://image.tmdb.org/t/p/original' + screening?.movie?.image ?? undefined} alt={screening?.movie?.title} />
          <div className="flex flex-col gap-5 justify-between">
            <div className="flex flex-col gap-2">
              <h1 className="md:text-2xl text-2xl font-bold ">{screening?.movie?.title}</h1>
              <div className="flex flex-row gap-2">
                <ClockIcon className="aspect-square text-white w-5 h-5" />
                <span className="text-white text-sm">{screening?.movie?.duration} mins</span>
              </div>
              <p className="text-xs w-3/4">{screening?.movie?.description}</p>
            </div>
            <p className="text-amber-300 text-base">
              {screening?.startTime.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }) + " "} |
              <strong>{" " + (screening.startTime.getHours() % 12 || 12)}:{screening.startTime.getMinutes() + " "}
                {screening.startTime.getHours()>= 12 ? 'PM' : 'AM'}
              </strong>
            </p>
            <form onSubmit={handleBuyTicket}>
              <Button className='w-full md:w-3/4 bg-amber-400 text-black hover:bg-amber-500 duration-300'>
                Buy Ticket
              </Button>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}
