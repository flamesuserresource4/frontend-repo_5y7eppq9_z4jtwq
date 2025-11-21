import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check } from 'lucide-react'

const missionsSeed = [
  { id: 1, title: 'Spin once in Casino', reward: 1 },
  { id: 2, title: 'Visit Jackpot page', reward: 1 },
  { id: 3, title: 'Buy 1 ticket', reward: 2 },
  { id: 4, title: 'Share with a friend', reward: 1 },
]

export default function HabitLoop({ onTickets }) {
  const [streak, setStreak] = useState(2)
  const [claimed, setClaimed] = useState(false)
  const [missions, setMissions] = useState(missionsSeed.map(m => ({ ...m, progress: 0, done: false })))
  const [chips, setChips] = useState([])

  const addChip = (n) => {
    const id = Math.random()
    setChips((c) => [...c, { id, n }])
    setTimeout(() => setChips((c) => c.filter(x => x.id !== id)), 1200)
  }

  const collectDaily = () => {
    if (claimed) return
    setClaimed(true)
    onTickets?.(1)
    addChip(1)
  }

  const toggleMission = (id) => {
    setMissions((prev) => prev.map(m => m.id === id ? { ...m, progress: m.done ? 0 : 1, done: !m.done } : m))
    const m = missions.find(x => x.id === id)
    if (!m?.done) { onTickets?.(m.reward); addChip(m.reward) }
  }

  const streakTiers = [
    { day: 1, tickets: 1 },
    { day: 3, tickets: 5 },
    { day: 7, tickets: 10 },
  ]

  return (
    <div className="space-y-6">
      <div className="rounded-3xl p-6 bg-gradient-to-br from-slate-900 to-slate-800 border border-yellow-400/10 relative overflow-hidden">
        <div className="absolute -inset-24 bg-[radial-gradient(circle_at_20%_-10%,rgba(250,204,21,0.08),transparent_50%)]" />
        <div className="relative flex items-center justify-between gap-6">
          <div>
            <h3 className="text-white text-xl font-semibold">Daily Check-in</h3>
            <p className="text-blue-200/80 text-sm">Current streak: {streak} days</p>
          </div>
          <motion.button
            whileTap={{ scale: 0.98 }}
            onClick={collectDaily}
            className={`px-4 py-2 rounded-xl font-semibold transition-all ${claimed ? 'bg-slate-800 text-blue-200/70 border border-blue-400/20' : 'bg-gradient-to-br from-yellow-400 to-amber-500 text-slate-900 shadow-[0_8px_25px_rgba(250,204,21,0.35)]'}`}
          >
            {claimed ? 'Collected' : 'Collect Daily Ticket'}
          </motion.button>
        </div>
        <AnimatePresence>
          {claimed && (
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="mt-4 text-yellow-300 text-sm flex items-center gap-2">
              <Check size={16} /> Daily reward added!
            </motion.div>
          )}
        </AnimatePresence>
        <div className="relative mt-4 grid grid-cols-7 gap-2">
          {Array.from({ length: 7 }).map((_, i) => (
            <div key={i} className={`h-2 rounded-full ${i < streak ? 'bg-blue-400 shadow-[0_0_20px_#60a5fa]' : 'bg-slate-700'}`} />
          ))}
        </div>
        <div className="relative mt-3 flex gap-3">
          {streakTiers.map(t => (
            <div key={t.day} className="text-xs text-blue-200/70 px-2 py-1 rounded-lg bg-slate-800/60 border border-blue-400/10">
              Day {t.day} → {t.tickets} tickets
            </div>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-0">
          {chips.map(c => (
            <motion.div key={c.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: -20 }} exit={{ opacity: 0 }} className="absolute right-8 top-8 px-2 py-1 rounded-lg bg-yellow-400/20 text-yellow-300 text-xs border border-yellow-400/30">
              +{c.n} Ticket{c.n>1?'s':''}
            </motion.div>
          ))}
        </div>
      </div>

      <div className="rounded-3xl p-6 bg-gradient-to-br from-slate-900 to-slate-800 border border-blue-400/10">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-white text-xl font-semibold">Daily Missions</h3>
          <div className="text-sm text-blue-200/70">Tap to complete</div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {missions.map(m => (
            <button key={m.id} onClick={() => toggleMission(m.id)} className={`group text-left rounded-2xl p-4 border transition-all ${m.done ? 'border-yellow-400/30 bg-yellow-500/10' : 'border-blue-400/10 bg-slate-800/60 hover:bg-slate-800'}`}>
              <div className="flex items-center justify-between gap-3 mb-2">
                <div className="text-white font-medium text-sm">{m.title}</div>
                <div className={`w-6 h-6 rounded-full flex items-center justify-center ${m.done ? 'bg-yellow-400 text-slate-900' : 'bg-slate-700 text-blue-200'}`}>
                  <Check size={14} />
                </div>
              </div>
              <div className="h-2 rounded-full bg-slate-700 overflow-hidden">
                <motion.div className="h-full bg-blue-400" animate={{ width: `${m.progress*100}%` }} transition={{ duration: 0.5 }} />
              </div>
              <div className="mt-2 text-xs text-blue-200/80">Reward: {m.reward} ticket{m.reward>1?'s':''}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
