import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Check } from 'lucide-react'
import { getCategory, getProductBySlug, products } from '../data/products'
import { useCart } from '../context/CartContext'
import ProductImage from '../components/ProductImage'
import Price from '../components/Price'
import QuantitySelector from '../components/QuantitySelector'
import AddToCartButton from '../components/AddToCartButton'
import ProductGrid from '../components/ProductGrid'
import SectionHeading from '../components/SectionHeading'
import DemoNotice from '../components/DemoNotice'
import NotFound from './NotFound'

export default function ProductDetail() {
  const { slug = '' } = useParams()
  const product = getProductBySlug(slug)
  const { maxQty } = useCart()
  const [qty, setQty] = useState(1)

  if (!product) return <NotFound />

  const category = getCategory(product.category)
  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4)

  return (
    <div className="container-page py-8 sm:py-12">
      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-silver-600">
        <Link to="/shop" className="hover:text-black">Shop</Link>
        <span aria-hidden="true"> / </span>
        <Link to={`/shop?category=${product.category}`} className="hover:text-black">{category?.name}</Link>
        <span aria-hidden="true"> / </span>
        <span className="text-black">{product.name}</span>
      </nav>

      <div className="grid gap-8 md:grid-cols-2 md:gap-12">
        <ProductImage category={product.category} name={product.name} className="rounded-lg" />

        <div>
          <h1 className="text-3xl font-extrabold leading-tight sm:text-4xl">{product.name}</h1>
          <div className="mt-3">
            <Price price={product.price} oldPrice={product.oldPrice} large />
          </div>
          <p className="mt-5 text-silver-600">{product.description}</p>

          <ul className="mt-6 space-y-2 text-sm">
            {product.features.map((f) => (
              <li key={f} className="flex items-start gap-2">
                <Check size={16} className="mt-0.5 shrink-0" aria-hidden="true" />
                <span>{f}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <QuantitySelector value={qty} max={maxQty} onChange={setQty} label="Quantity" />
            <AddToCartButton productId={product.id} quantity={qty} className="flex-1 sm:flex-none sm:min-w-[200px]" />
          </div>
          <Link to="/cart" className="mt-4 inline-block text-sm font-semibold underline underline-offset-4 hover:text-silver-600">
            Go to cart
          </Link>

          <DemoNotice className="mt-8" />
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-16" aria-label="Related products">
          <SectionHeading title={`More in ${category?.name ?? 'this category'}`} linkTo={`/shop?category=${product.category}`} />
          <ProductGrid items={related} />
        </section>
      )}
    </div>
  )
}
