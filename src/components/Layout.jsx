import React, { useState } from 'react'
import Header from './Header'
import { PurchaseModal, FreeTicketModal } from './Modals'

export default function Layout({ children }) {
  const [purchaseOpen, setPurchaseOpen] = useState(false)
  const [freeOpen, setFreeOpen] = useState(false)
  const [tickets, setTickets] = useState(0)

  const addTickets = (n) => setTickets(t => t + n)

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <Header balance={tickets} />
      <main className="max-w-7xl mx-auto p-4 md:p-8">
        {children({ openPurchase: () => setPurchaseOpen(true), openFree: () => setFreeOpen(true), addTickets, tickets })}
      </main>
      <PurchaseModal open={purchaseOpen} onClose={() => setPurchaseOpen(false)} onSuccess={() => addTickets(5)} />
      <FreeTicketModal open={freeOpen} onClose={() => setFreeOpen(false)} onClaim={(n) => addTickets(n)} />
    </div>
  )
}
