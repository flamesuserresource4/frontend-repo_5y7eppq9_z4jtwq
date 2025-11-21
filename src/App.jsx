import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Landing from './components/Landing'
import PoolDetails from './components/PoolDetails'
import Results from './components/Results'

function Routed() {
  return (
    <Layout>
      {({ openPurchase, openFree, addTickets }) => (
        <Routes>
          <Route path="/" element={<Landing openPurchase={openPurchase} openFree={openFree} addTickets={addTickets} />} />
          <Route path="/pool/:id" element={<PoolDetails title="Pool Details" img="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop" />} />
          <Route path="/results" element={<Results />} />
        </Routes>
      )}
    </Layout>
  )
}

export default function App() { return <Routed /> }
