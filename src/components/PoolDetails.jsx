import React from 'react'
import { motion } from 'framer-motion'

export default function PoolDetails({ title, img }) {
  return (
    <div className="max-w-6xl mx-auto p-4 md:p-8">
      <div className="grid lg:grid-cols-2 gap-6">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="rounded-3xl overflow-hidden border border-blue-400/10 bg-gradient-to-br from-slate-900 to-slate-800">
          <img src={img} alt={title} className="w-full h-[360px] object-cover" />
        </motion.div>
        <div className="space-y-4">
          <h1 className="text-white text-3xl font-bold">{title}</h1>
          <div className="grid grid-cols-2 gap-3">
            <div className="p-4 rounded-2xl bg-slate-800/60 border border-blue-400/10">
              <div className="text-blue-200/80 text-sm">Time until next draw</div>
              <div className="text-white text-xl font-semibold">05:23:12</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-800/60 border border-blue-400/10">
              <div className="text-blue-200/80 text-sm">Users entered</div>
              <div className="text-white text-xl font-semibold">12,314</div>
            </div>
          </div>
          <div className="p-4 rounded-2xl bg-slate-800/60 border border-blue-400/10">
            <div className="text-blue-200/80 text-sm mb-2">Your visual odds</div>
            <div className="h-3 rounded-full bg-slate-700 overflow-hidden">
              <div className="h-full w-1/5 bg-gradient-to-r from-blue-400 to-yellow-400 shadow-[0_0_25px_#60a5fa]" />
            </div>
          </div>
          <div className="p-4 rounded-2xl bg-slate-800/60 border border-blue-400/10">
            <div className="text-blue-200/80 text-sm mb-2">Last wins</div>
            <div className="space-y-2 text-sm text-blue-100">
              <div>Winner last time: User 4731</div>
              <div>Entry count: 12,314</div>
            </div>
          </div>
          <div className="flex gap-3">
            <button className="px-4 py-2 rounded-xl bg-gradient-to-br from-yellow-400 to-amber-500 text-slate-900 font-semibold">Buy Tickets</button>
            <button className="px-4 py-2 rounded-xl bg-slate-800 text-blue-100 border border-blue-400/20">Free Tickets</button>
          </div>
        </div>
      </div>
    </div>
  )
}
