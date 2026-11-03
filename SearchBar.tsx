import { useState, type FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search } from 'lucide-react'

export default function SearchBar({ className = '', onDone }: { className?: string; onDone?: () => void }) {
  const [term, setTerm] = useState('')
  const navigate = useNavigate()

  const submit = (e: FormEvent) => {
    e.preventDefault()
    const q = term.trim()
    navigate(q ? `/shop?q=${encodeURIComponent(q)}` : '/shop')
    onDone?.()
  }

  return (
    <form onSubmit={submit} role="search" className={`relative ${className}`}>
      <label htmlFor="site-search" className="sr-only">Search products</label>
      <input
        id="site-search"
        type="search"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        placeholder="Search products"
        className="h-11 w-full rounded-full border border-silver-300 bg-silver-50 pl-4 pr-12 text-sm placeholder:text-silver-500 focus:border-black focus:bg-white focus:outline-none"
      />
      <button
        type="submit"
        aria-label="Search"
        className="absolute right-1 top-1 flex h-9 w-9 items-center justify-center rounded-full bg-black text-white hover:bg-silver-600"
      >
        <Search size={16} aria-hidden="true" />
      </button>
    </form>
  )
}
