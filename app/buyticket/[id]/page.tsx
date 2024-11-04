'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Clock, Star } from "lucide-react"

export default function BuyTicket() {
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]) // เปลี่ยนเป็น array เพื่อเก็บที่นั่งหลายตัว
  
  const toggleSeatSelection = (seatId: string) => {
    if (selectedSeats.includes(seatId)) {
      // ถ้าที่นั่งถูกเลือกแล้ว ให้ยกเลิกการเลือก
      setSelectedSeats(selectedSeats.filter(seat => seat !== seatId))
    } else if (selectedSeats.length < 4) {
      // ถ้ายังไม่ถึง 4 ที่นั่ง ให้เลือกเพิ่มได้
      setSelectedSeats([...selectedSeats, seatId])
    } else {
      // แสดงข้อความหรือจัดการกรณีที่เลือกครบ 4 ที่นั่งแล้ว
      alert("คุณสามารถเลือกที่นั่งได้สูงสุด 4 ที่นั่งเท่านั้น")
    }
  }

  const renderSeat = (row: string, seatNumber: number, type: 'normal' | 'honeymoon' | 'sofa' = 'normal') => {
    const seatId = `${row}${seatNumber}`
    const isSelected = selectedSeats.includes(seatId)
    
    const baseClasses = "w-6 h-6 rounded-t-lg cursor-pointer transition-colors"
    const colorClasses = {
      normal: "bg-red-400 hover:bg-red-500",
      honeymoon: "bg-purple-400 hover:bg-purple-500",
      sofa: "bg-pink-400 hover:bg-pink-500 w-12"
    }
    
    return (
      <button
        key={seatId}
        className={`${baseClasses} ${colorClasses[type]} ${isSelected ? 'ring-2 ring-white' : ''}`}
        onClick={() => toggleSeatSelection(seatId)}
      />
    )
  }

  return (
    <main className="main_gradient flex flex-wrap grow flex-col items-start w-full h-auto gap-5 md:px-20 md:pt-24 pt-16 md:pb-10 pb-10 px-1 text-white">
      {/* Movie Info Section */}
      <div className="flex flex-col md:flex-row gap-8 w-full">
        <img 
          src="/placeholder.svg?height=400&width=300" 
          alt="Deadpool Movie Poster"
          className="rounded-lg w-[300px] h-[400px] object-cover shadow-sm"
        />
        
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-semibold">Deadpool</h1>
          <div className="flex gap-4 items-center">
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              107 นาที
            </span>
            <span className="flex items-center gap-2">
              <Star className="w-4 h-4" />
              8.1
            </span>
            <span className="bg-yellow-300 text-black px-2 py-1 rounded-sm">
              88%
            </span>
          </div>
          <p>เดือน , ตลก , วิทยาศาสตร์</p>
          <Button className="bg-red-400 hover:bg-red-500 w-fit">
            ดูรอบทั้งหมด
          </Button>
        </div>
      </div>

      {/* Seating and Summary Section */}
      <div className="flex flex-col md:flex-row gap-8 w-full mt-8">
        {/* Seating Chart */}
        <div className="w-full md:w-2/3 bg-neutral-800 p-4 rounded-md shadow-sm">
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
          <div className="flex justify-center gap-4 mt-6">
            <Card className="p-2 bg-neutral-700 flex flex-col items-center shadow-none">
              <div className="w-6 h-6 bg-red-300 rounded mb-1" />
              <div className="text-center text-sm">
                <div>Normal</div>
                <div>160 baht</div>
              </div>
            </Card>
            <Card className="p-2 bg-neutral-700 flex flex-col items-center shadow-none">
              <div className="w-6 h-6 bg-purple-300 rounded mb-1" />
              <div className="text-center text-sm">
                <div>Honeymoon</div>
                <div>180 baht</div>
              </div>
            </Card>
            <Card className="p-2 bg-neutral-700 flex flex-col items-center shadow-none">
              <div className="w-10 h-6 bg-pink-300 rounded mb-1" />
              <div className="text-center text-sm">
                <div>Pair sofa</div>
                <div>400 baht</div>
              </div>
            </Card>
          </div>
        </div>

        {/* Summary Card */}
        <Card className="bg-neutral-800 p-5 w-full md:w-1/3 h-full shadow-sm">
          <div className="flex gap-4">
            <img 
              src="/placeholder.svg?height=150&width=100" 
              alt="Deadpool Thumbnail"
              className="w-[100px] h-[150px] rounded object-cover"
            />
            <div className="flex flex-col justify-between">
              <div>
                <h2 className="text-xl font-semibold">Deadpool</h2>
                <div className="text-sm">EN/TH</div>
                <div className="text-sm">107 นาที</div>
              </div>
              <div>
                <div>Minor xxx</div>
                <div>Fri 16 Aug</div>
                <div>Theatre 8</div>
                <div className="text-red-400 font-semibold">17:20</div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </main>
  )
}
