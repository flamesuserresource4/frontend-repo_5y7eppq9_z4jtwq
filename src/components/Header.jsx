import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Wallet } from 'lucide-react'

const navItems = [
  { to: '/pool/lambo', label: 'Win a Lambo' },
  { to: '/pool/rolex', label: 'Rolex Giveaway' },
  { to: '/pool/daily', label: 'Daily Pool' },
  { to: '/casino', label: 'Lucky Block Casino' },
  { to: '/buy', label: 'Buy LBLOCK' },
]

export default function Header({ balance = 1234 }) {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/80 border-b border-blue-400/10">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-yellow-400 to-amber-500 shadow-[0_0_25px_2px_rgba(250,204,21,0.45)]" />
          <span className="text-white font-semibold tracking-tight">Jackpot</span>
        </Link>
        <nav className="hidden md:flex items-center gap-3">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `px-3 py-2 rounded-xl text-sm transition-all duration-200 ${
                  isActive
                    ? 'text-yellow-300 bg-yellow-500/10 shadow-[0_0_25px_rgba(250,204,21,0.25)]'
                    : 'text-blue-200/80 hover:text-white hover:bg-slate-800/60'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <div className="px-3 py-2 rounded-xl bg-slate-800/60 border border-blue-400/10 text-blue-200/90 flex items-center gap-2">
            <Wallet size={18} className="text-yellow-300" />
            <span className="text-sm">{balance.toLocaleString()} LBLOCK</span>
          </div>
        </div>
      </div>
    </header>
  )
}
