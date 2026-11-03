import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, ShoppingBag, X } from 'lucide-react'
import { useCart } from '../context/CartContext'
import SearchBar from './SearchBar'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/shop', label: 'Shop' },
  { to: '/about', label: 'About us' },
  { to: '/contact', label: 'Contact' },
]

const linkClass = ({ isActive }: { isActive: boolean }) =>
  `text-sm font-semibold underline-offset-8 hover:underline ${isActive ? 'underline' : ''}`

export default function Header() {
  const [open, setOpen] = useState(false)
  const { count } = useCart()
  const location = useLocation()

  useEffect(() => setOpen(false), [location.pathname])

  return (
    <header className="sticky top-0 z-40 border-b border-silver-200 bg-white/95 backdrop-blur">
      <div className="container-page flex h-16 items-center gap-4">
        <button
          type="button"
          className="-ml-2 flex h-11 w-11 items-center justify-center md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>

        <Link to="/" className="font-display text-lg font-extrabold tracking-tight sm:text-xl" aria-label="SHOP CARTIN home">
          SHOP CARTIN
        </Link>

        <nav className="ml-6 hidden items-center gap-6 md:flex" aria-label="Main">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.end} className={linkClass}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        <SearchBar className="ml-auto hidden w-full max-w-xs md:block" />

        <Link
          to="/cart"
          className="relative -mr-2 ml-auto flex h-11 w-11 items-center justify-center md:ml-0"
          aria-label={`Shopping cart, ${count} item${count === 1 ? '' : 's'}`}
        >
          <ShoppingBag size={22} aria-hidden="true" />
          {count > 0 && (
            <span className="absolute right-0 top-0 flex h-5 min-w-5 items-center justify-center rounded-full bg-black px-1 text-[11px] font-semibold text-white">
              {count}
            </span>
          )}
        </Link>
      </div>

      <div className="container-page pb-3 md:hidden">
        <SearchBar />
      </div>

      {open && (
        <nav id="mobile-menu" className="border-t border-silver-200 bg-white md:hidden" aria-label="Mobile">
          <ul className="container-page py-2">
            {links.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  end={l.end}
                  className={({ isActive }) =>
                    `flex min-h-[48px] items-center border-b border-silver-100 text-base font-semibold ${isActive ? 'text-black' : 'text-silver-600'}`
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
