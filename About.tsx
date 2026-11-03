import { Link } from 'react-router-dom'
import { categories } from '../data/products'
import { site } from '../config/site'

export default function About() {
  return (
    <div className="container-page max-w-3xl py-12 sm:py-16">
      <h1 className="text-4xl font-extrabold sm:text-5xl">About {site.name}</h1>
      <p className="mt-2 text-lg font-semibold text-silver-500">{site.tagline}</p>

      <div className="mt-8 space-y-5 text-base leading-relaxed text-silver-600">
        <p>
          SHOP CARTIN is a South African online store built around one simple idea: you should be
          able to shop for the things you need in one place, with one cart.
        </p>
        <p>
          We are growing the store in stages. Right now you are looking at the first stage: a
          working storefront with sample products, so we can get the design, navigation and
          shopping experience right before real stock and payments go live.
        </p>
      </div>

      <h2 className="mt-12 text-2xl font-bold">What we plan to sell</h2>
      <ul className="mt-4 grid gap-3 sm:grid-cols-2">
        {categories.map((c) => (
          <li key={c.slug}>
            <Link to={`/shop?category=${c.slug}`} className="block rounded-lg border border-silver-200 p-4 hover:border-black">
              <span className="block font-display font-bold">{c.name}</span>
              <span className="text-sm text-silver-600">{c.blurb}</span>
            </Link>
          </li>
        ))}
      </ul>

      <div className="mt-12 rounded-lg bg-silver-50 p-6">
        <h2 className="text-xl font-bold">Where we are right now</h2>
        <p className="mt-2 text-sm text-silver-600">
          Products on this site are demonstrations, not real supplier inventory, and checkout is
          not live yet. Questions or ideas? We would like to hear them.
        </p>
        <Link to="/contact" className="btn-primary mt-5">Contact us</Link>
      </div>
    </div>
  )
}
