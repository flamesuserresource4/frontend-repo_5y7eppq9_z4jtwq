import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function PurchaseModal({ open, onClose, onSuccess }) {
  const [qty, setQty] = useState(1)
  const price = qty * 5
  const discount = qty >= 20 ? 30 : qty >= 10 ? 15 : 0
  return (
    <AnimatePresence>
      {open && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 grid place-items-center bg-slate-950/70 backdrop-blur-sm">
          <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.98, opacity: 0 }} className="w-full max-w-md rounded-3xl p-6 bg-gradient-to-br from-slate-900 to-slate-800 border border-blue-400/10">
            <div className="text-white text-xl font-semibold mb-2">Buy Tickets</div>
            <div className="text-sm text-blue-200/80 mb-4">Select quantity and confirm</div>
            <div className="flex items-center gap-3 mb-4">
              <button onClick={() => setQty(q => Math.max(1, q-1))} className="w-10 h-10 rounded-xl bg-slate-800 text-white border border-blue-400/20">-</button>
              <div className="px-4 py-2 rounded-xl bg-slate-800 text-white border border-blue-400/20 min-w-[4rem] text-center">{qty}</div>
              <button onClick={() => setQty(q => q+1)} className="w-10 h-10 rounded-xl bg-slate-800 text-white border border-blue-400/20">+</button>
            </div>
            <div className="flex items-center justify-between text-blue-200 mb-4">
              <div>Price</div>
              <div className="text-white font-semibold">${price.toFixed(2)}</div>
            </div>
            <div className="flex items-center justify-between text-blue-200 mb-6">
              <div>Discount</div>
              <div className="text-yellow-300">{discount ? `${discount}%` : '—'}</div>
            </div>
            <div className="flex gap-3">
              <button onClick={onClose} className="px-4 py-2 rounded-xl bg-slate-800 text-blue-100 border border-blue-400/20">Cancel</button>
              <button onClick={() => { onSuccess?.(); onClose?.() }} className="px-4 py-2 rounded-xl bg-gradient-to-br from-yellow-400 to-amber-500 text-slate-900 font-semibold shadow-[0_8px_25px_rgba(250,204,21,0.35)]">Confirm Purchase</button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export function FreeTicketModal({ open, onClose, onClaim }) {
  const rewards = [
    { id: 1, title: 'Daily check-in', tickets: 1 },
    { id: 2, title: 'Visit Jackpot page', tickets: 1 },
    { id: 3, title: 'Spin once in Casino', tickets: 1 },
  ]
  const [claimed, setClaimed] = useState([])
  const claim = (id, n) => {
    if (claimed.includes(id)) return
    setClaimed([...claimed, id])
    onClaim?.(n)
  }
  return (
    <AnimatePresence>
      {open && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 grid place-items-center bg-slate-950/70 backdrop-blur-sm">
          <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.98, opacity: 0 }} className="w-full max-w-md rounded-3xl p-6 bg-gradient-to-br from-slate-900 to-slate-800 border border-blue-400/10">
            <div className="text-white text-xl font-semibold mb-2">Free Tickets</div>
            <div className="text-sm text-blue-200/80 mb-4">Claim simple rewards</div>
            <div className="space-y-3 mb-6">
              {rewards.map(r => (
                <div key={r.id} className="flex items-center justify-between p-3 rounded-2xl bg-slate-800/60 border border-blue-400/10">
                  <div className="text-white text-sm">{r.title}</div>
                  <button onClick={() => claim(r.id, r.tickets)} className={`px-3 py-1.5 rounded-xl text-sm ${claimed.includes(r.id) ? 'bg-slate-800 text-blue-200/70 border border-blue-400/20' : 'bg-gradient-to-br from-yellow-400 to-amber-500 text-slate-900 font-semibold'}`}>
                    {claimed.includes(r.id) ? 'Claimed' : `Claim +${r.tickets}`}
                  </button>
                </div>
              ))}
            </div>
            <div className="flex justify-end">
              <button onClick={onClose} className="px-4 py-2 rounded-xl bg-slate-800 text-blue-100 border border-blue-400/20">Close</button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
