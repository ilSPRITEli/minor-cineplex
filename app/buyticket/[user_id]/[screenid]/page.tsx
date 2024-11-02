// buy ticket form
'use client';

import { useState } from 'react';
import { buyTicket } from '@/actions/add_ticket';

interface Ticket {
  userId: number;
  screenId: number;
}

export default function BuyTicket({ params }: { params: Ticket }) {
  const [userId, setUserId] = useState(params.userId);
  const [screeningId, setScreenId] = useState(params.screenId);
  const [seatNumber, setSeatId] = useState('A1');
  const [price, setPrice] = useState(200);

  async function handleSubmit(e: any) {
    e.preventDefault();
    await buyTicket({ userId, screeningId, seatNumber, price });
  }

  return (
    <div className="w-full p-20">
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <label htmlFor="userId">User ID</label>
        <input
          id="userId"
          type="number"
          value={userId || ''}
          onChange={(e) => setUserId(parseInt(e.target.value))}
        />

        <label htmlFor="screenId">Screen ID</label>
        <input
          id="screenId"
          type="number"
          value={screeningId || ''}
          onChange={(e) => setScreenId(parseInt(e.target.value))}
        />

        <label htmlFor="seatNumber">Seat Number</label>
        <input
          id="seatNumber"
          type="text"
          value={seatNumber}
          onChange={(e) => setSeatId(e.target.value)}
        />

        <label htmlFor="price">Price</label>
        <input
          id="price"
          type="number"
          value={price}
          readOnly
          onChange={(e) => setPrice(parseInt(e.target.value))}
        />

        <button type="submit">Buy Ticket</button>
      </form>
    </div>
  );
}

