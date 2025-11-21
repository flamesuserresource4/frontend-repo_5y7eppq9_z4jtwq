import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Results() {
  const [spinning, setSpinning] = useState(true)
  const [winner, setWinner] = useState(3789)

  useEffect(() => {
    const t = setTimeout(() => setSpinning(false), 2000)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className="min-h-[60vh] grid place-items-center p-6">
      <div className="text-center">
        <div className="text-blue-200/80 mb-2">The draw has concluded</div>
        <div className="relative inline-block">
          <div className="overflow-hidden h-16 w-64 rounded-2xl border border-blue-400/10 bg-slate-900 grid place-items-center">
            <AnimatePresence>
              {spinning ? (
                <motion.div key="spin" initial={{ y: 0 }} animate={{ y: [-10, 10, -8, 8, 0], filter: ['blur(2px)','blur(0px)'] }} transition={{ repeat: Infinity, duration: 1 }} className="text-4xl font-bold text-white">
                  0 1 2 3 4 5 6 7 8 9
                </motion.div>
              ) : (
                <motion.div key="result" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-4xl font-bold text-yellow-300">
                  {winner}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          {!spinning && (
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="mt-6 text-3xl font-extrabold text-yellow-300 drop-shadow-[0_0_25px_rgba(250,204,21,0.6)]">
              Winner {winner}
            </motion.div>
          )}
        </div>
        <div className="mt-6 flex justify-center gap-3">
          <button className="px-4 py-2 rounded-xl bg-slate-800 text-blue-100 border border-blue-400/20">View your tickets</button>
          <a href="/" className="px-4 py-2 rounded-xl bg-gradient-to-br from-yellow-400 to-amber-500 text-slate-900 font-semibold">Return to pools</a>
        </div>
      </div>
    </div>
  )
}
