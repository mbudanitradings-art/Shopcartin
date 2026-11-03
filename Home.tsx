import { Link } from 'react-router-dom'
import { Shirt, Smartphone, Sparkles, Watch, Lamp, type LucideIcon } from 'lucide-react'
import { categories, products, type CategorySlug } from '../data/products'
import ProductGrid from '../components/ProductGrid'
import ProductImage from '../components/ProductImage'
import SectionHeading from '../components/SectionHeading'
import DemoNotice from '../components/DemoNotice'

const categoryIcons: Record<CategorySlug, LucideIcon> = {
  fashion: Shirt,
  electronics: Smartphone,
  beauty: Sparkles,
  accessories: Watch,
  home: Lamp,
}

export default function Home() {
  const featured = products.filter((p) => p.featured).slice(0, 8)
  const trending = products.filter((p) => p.trending).slice(0, 4)
  const heroItems = products.filter((p) => p.featured).slice(0, 4)

  return (
    <>
      <section className="border-b border-silver-200">
        <div className="container-page grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <h1 className="text-5xl font-extrabold leading-[0.95] sm:text-7xl">
              YOUR WORLD.
              <span className="block text-silver-400">ONE CART.</span>
            </h1>
            <p className="mt-6 max-w-md text-base text-silver-600 sm:text-lg">
              Fashion, electronics, beauty, accessories and home essentials, all in one place and
              made for South Africa.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/shop" className="btn-primary">Shop now</Link>
              <Link to="/about" className="btn-outline">About SHOP CARTIN</Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3" aria-label="Featured products">
            {heroItems.map((p) => (
              <Link key={p.id} to={`/product/${p.slug}`} className="group block">
                <ProductImage category={p.category} name={p.name} showDemoTag={false} className="rounded-lg transition-opacity group-hover:opacity-90" />
                <p className="mt-2 text-sm font-semibold">{p.name}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page pt-14" aria-labelledby="cat-heading">
        <h2 id="cat-heading" className="sr-only">Shop by category</h2>
        <SectionHeading title="Shop by category" linkTo="/shop" />
        <ul className="grid grid-cols-2 gap-3 md:grid-cols-5">
          {categories.map((c, i) => {
            const Icon = categoryIcons[c.slug]
            return (
              <li key={c.slug} className={i === categories.length - 1 ? 'col-span-2 md:col-span-1' : ''}>
                <Link
                  to={`/shop?category=${c.slug}`}
                  className="flex h-full flex-col gap-4 rounded-lg border border-silver-200 p-4 transition-colors hover:border-black"
                >
                  <Icon size={28} strokeWidth={1.25} className="text-silver-600" aria-hidden="true" />
                  <span>
                    <span className="block font-display text-lg font-bold">{c.name}</span>
                    <span className="mt-1 block text-sm text-silver-600">{c.blurb}</span>
                  </span>
                </Link>
              </li>
            )
          })}
        </ul>
      </section>

      <section className="container-page pt-16" aria-label="Featured products">
        <SectionHeading title="Featured products" linkTo="/shop" />
        <ProductGrid items={featured} />
      </section>

      <section className="container-page pt-16" aria-label="Trending products">
        <SectionHeading title="Trending now" linkTo="/shop" />
        <ProductGrid items={trending} />
      </section>

      <section className="container-page pt-16">
        <DemoNotice />
      </section>
    </>
  )
}
