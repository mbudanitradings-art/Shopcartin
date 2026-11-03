import { useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { categories, products } from '../data/products'
import ProductGrid from '../components/ProductGrid'
import DemoNotice from '../components/DemoNotice'

type Sort = 'featured' | 'price-asc' | 'price-desc'

export default function Shop() {
  const [params, setParams] = useSearchParams()
  const category = params.get('category') ?? ''
  const q = (params.get('q') ?? '').trim()
  const sort = (params.get('sort') as Sort) || 'featured'

  const results = useMemo(() => {
    const term = q.toLowerCase()
    let list = products.filter((p) => {
      if (category && p.category !== category) return false
      if (!term) return true
      const haystack = [p.name, p.description, p.category, ...p.tags].join(' ').toLowerCase()
      return haystack.includes(term)
    })
    if (sort === 'price-asc') list = [...list].sort((a, b) => a.price - b.price)
    if (sort === 'price-desc') list = [...list].sort((a, b) => b.price - a.price)
    return list
  }, [category, q, sort])

  const update = (key: string, value: string) => {
    const next = new URLSearchParams(params)
    if (value) next.set(key, value)
    else next.delete(key)
    setParams(next)
  }

  const pill = (active: boolean) =>
    `inline-flex min-h-[40px] items-center whitespace-nowrap rounded-full border px-4 text-sm font-semibold transition-colors ${
      active ? 'border-black bg-black text-white' : 'border-silver-300 hover:border-black'
    }`

  const activeName = categories.find((c) => c.slug === category)?.name

  return (
    <div className="container-page py-10">
      <h1 className="text-3xl font-extrabold sm:text-4xl">{q ? `Results for "${q}"` : activeName ?? 'All products'}</h1>

      <div className="-mx-4 mt-6 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0" role="group" aria-label="Filter by category">
        <button type="button" className={pill(!category)} onClick={() => update('category', '')}>All</button>
        {categories.map((c) => (
          <button key={c.slug} type="button" className={pill(category === c.slug)} onClick={() => update('category', c.slug)}>
            {c.name}
          </button>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-between gap-4 text-sm">
        <p className="text-silver-600" aria-live="polite">
          {results.length} product{results.length === 1 ? '' : 's'}
        </p>
        <label className="flex items-center gap-2">
          <span className="text-silver-600">Sort by</span>
          <select
            value={sort}
            onChange={(e) => update('sort', e.target.value === 'featured' ? '' : e.target.value)}
            className="h-10 rounded-full border border-silver-300 bg-white px-3 font-semibold"
          >
            <option value="featured">Featured</option>
            <option value="price-asc">Price: low to high</option>
            <option value="price-desc">Price: high to low</option>
          </select>
        </label>
      </div>

      <div className="mt-8">
        {results.length > 0 ? (
          <ProductGrid items={results} />
        ) : (
          <div className="rounded-lg border border-silver-200 px-6 py-14 text-center">
            <p className="font-display text-xl font-bold">No products found</p>
            <p className="mt-2 text-sm text-silver-600">Try a different search or browse every category.</p>
            <Link to="/shop" className="btn-primary mt-6">Show all products</Link>
          </div>
        )}
      </div>

      <DemoNotice className="mt-12" />
    </div>
  )
}
