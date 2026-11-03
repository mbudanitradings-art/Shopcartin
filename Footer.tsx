import { Link } from 'react-router-dom'
import { categories } from '../data/products'
import { site } from '../config/site'

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-silver-200 bg-silver-50">
      <div className="container-page grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-xl font-extrabold">{site.name}</p>
          <p className="mt-2 text-sm font-semibold text-silver-600">{site.tagline}</p>
          <p className="mt-4 max-w-xs text-sm text-silver-600">
            Fashion, electronics, beauty, accessories and home products, made for South Africa.
          </p>
        </div>

        <nav aria-label="Shop categories">
          <h2 className="text-sm font-bold">Shop</h2>
          <ul className="mt-3 space-y-2 text-sm text-silver-600">
            <li><Link className="hover:text-black" to="/shop">All products</Link></li>
            {categories.map((c) => (
              <li key={c.slug}>
                <Link className="hover:text-black" to={`/shop?category=${c.slug}`}>{c.name}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Company">
          <h2 className="text-sm font-bold">Company</h2>
          <ul className="mt-3 space-y-2 text-sm text-silver-600">
            <li><Link className="hover:text-black" to="/about">About us</Link></li>
            <li><Link className="hover:text-black" to="/contact">Contact</Link></li>
            <li><Link className="hover:text-black" to="/cart">Your cart</Link></li>
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-bold">Get in touch</h2>
          <p className="mt-3 text-sm text-silver-600">
            <a className="hover:text-black" href={`mailto:${site.email}`}>{site.email}</a>
          </p>
          <p className="mt-1 text-sm text-silver-600">{site.country}</p>
        </div>
      </div>

      <div className="border-t border-silver-200">
        <div className="container-page flex flex-col gap-2 py-5 text-xs text-silver-500 sm:flex-row sm:justify-between">
          <p>&copy; {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>Demonstration stage: sample products only. Payments are not live yet.</p>
        </div>
      </div>
    </footer>
  )
}
