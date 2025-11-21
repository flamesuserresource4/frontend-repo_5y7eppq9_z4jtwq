import React from 'react'
import { motion } from 'framer-motion'
import PoolCard from './PoolCard'
import HabitLoop from './HabitLoop'

const pools = [
  { key: 'rolex', title: 'Rolex Pool', users: 8421, timeLeft: '05:21:08', img: 'https://images.unsplash.com/photo-1520975922203-b6c9831b4f68?q=80&w=1600&auto=format&fit=crop' },
  { key: 'daily', title: 'Daily Pool', users: 12314, timeLeft: '02:11:32', img: 'https://images.unsplash.com/photo-1514996937319-344454492b37?q=80&w=1600&auto=format&fit=crop' },
  { key: 'lambo', title: 'Lambo Pool', users: 5632, timeLeft: '11:47:55', img: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1600&auto=format&fit=crop' },
]

export default function Landing({ openPurchase, openFree, addTickets }) {
  return (
    <div className="space-y-10">
      <section>
        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white">Today’s Jackpots</h2>
          <p className="text-blue-200/80">Pick a pool and stack tickets daily</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pools.map(p => (
            <PoolCard key={p.key} {...p} onBuy={openPurchase} onFree={openFree} />
          ))}
        </div>
      </section>
      <section>
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-white">Daily Habit Loop</h3>
          <p className="text-blue-200/80 text-sm">Check-in, complete missions, grow your streak</p>
        </div>
        <HabitLoop onTickets={addTickets} />
      </section>
    </div>
  )
}
