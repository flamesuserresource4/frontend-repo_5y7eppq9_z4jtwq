import React from 'react'
import { motion } from 'framer-motion'

export default function PoolCard({ title, users, timeLeft, img, onBuy, onFree }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6, boxShadow: '0 0 60px rgba(250,204,21,0.15)', scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 120, damping: 14 }}
      className="group relative rounded-3xl p-4 bg-gradient-to-br from-slate-900 to-slate-800 border border-blue-400/10 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -inset-24 bg-[radial-gradient(circle_at_50%_0%,rgba(34,197,255,0.08),transparent_60%)]" />
        <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-yellow-400/10 group-hover:ring-yellow-400/30 transition-all" />
      </div>
      <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-4 bg-slate-800">
        <img src={img} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="relative flex items-center justify-between mb-3">
        <div>
          <h3 className="text-white font-semibold text-lg">{title}</h3>
          <p className="text-xs text-blue-200/70">{users.toLocaleString()} users entered • {timeLeft} left</p>
        </div>
        <div className="px-2 py-1 rounded-lg bg-yellow-500/10 text-yellow-300 text-xs border border-yellow-400/20">Hot</div>
      </div>
      <div className="relative grid grid-cols-2 gap-3">
        <button onClick={onBuy} className="px-3 py-2 rounded-xl bg-gradient-to-br from-yellow-400 to-amber-500 text-slate-900 font-semibold shadow-[0_8px_25px_rgba(250,204,21,0.35)] hover:brightness-110 transition-all">Buy Tickets</button>
        <button onClick={onFree} className="px-3 py-2 rounded-xl bg-slate-800 text-blue-100 border border-blue-400/20 hover:bg-slate-700/50 transition-all">Free Tickets</button>
      </div>
    </motion.div>
  )
}
