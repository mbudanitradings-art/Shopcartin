import { Link } from 'react-router-dom'
import { Trash2 } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { formatPrice } from '../lib/format'
import ProductImage from '../components/ProductImage'
import QuantitySelector from '../components/QuantitySelector'
import DemoNotice from '../components/DemoNotice'

export default function Cart() {
  const { lines, subtotal, count, maxQty, setQty, remove, clear } = useCart()

  if (lines.length === 0) {
    return (
      <div className="container-page py-20 text-center">
        <h1 className="text-3xl font-extrabold">Your cart is empty</h1>
        <p className="mt-3 text-silver-600">Add something you like and it will show up here.</p>
        <Link to="/shop" className="btn-primary mt-8">Start shopping</Link>
      </div>
    )
  }

  return (
    <div className="container-page py-10">
      <div className="flex items-end justify-between gap-4">
        <h1 className="text-3xl font-extrabold sm:text-4xl">Your cart</h1>
        <button type="button" onClick={clear} className="text-sm font-semibold underline underline-offset-4 hover:text-silver-600">
          Clear cart
        </button>
      </div>

      <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_360px]">
        <ul className="divide-y divide-silver-200 border-y border-silver-200">
          {lines.map(({ product, quantity }) => (
            <li key={product.id} className="flex gap-4 py-5">
              <Link to={`/product/${product.slug}`} className="w-24 shrink-0 sm:w-28">
                <ProductImage category={product.category} name={product.name} showDemoTag={false} className="rounded-md" />
              </Link>
              <div className="flex flex-1 flex-col">
                <div className="flex justify-between gap-3">
                  <Link to={`/product/${product.slug}`} className="font-semibold leading-snug hover:underline">
                    {product.name}
                  </Link>
                  <p className="font-semibold">{formatPrice(product.price * quantity)}</p>
                </div>
                <p className="mt-1 text-sm text-silver-600">{formatPrice(product.price)} each</p>
                <div className="mt-auto flex items-center justify-between pt-3">
                  <QuantitySelector
                    value={quantity}
                    max={maxQty}
                    onChange={(v) => setQty(product.id, v)}
                    label={`Quantity for ${product.name}`}
                  />
                  <button
                    type="button"
                    onClick={() => remove(product.id)}
                    className="flex h-11 items-center gap-1 px-2 text-sm font-semibold text-silver-600 hover:text-black"
                    aria-label={`Remove ${product.name} from cart`}
                  >
                    <Trash2 size={16} aria-hidden="true" /> Remove
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <aside className="h-fit rounded-lg border border-silver-200 p-6" aria-label="Order summary">
          <h2 className="text-xl font-bold">Order summary</h2>
          <dl className="mt-5 space-y-3 text-sm">
            <div className="flex justify-between">
              <dt className="text-silver-600">Items</dt>
              <dd>{count}</dd>
            </div>
            <div className="flex justify-between border-t border-silver-200 pt-3 text-base font-bold">
              <dt>Subtotal</dt>
              <dd>{formatPrice(subtotal)}</dd>
            </div>
          </dl>
          <p className="mt-3 text-xs text-silver-500">Delivery costs will be added at checkout once it is available.</p>
          <button type="button" className="btn-primary mt-6 w-full" disabled>
            Checkout coming soon
          </button>
          <Link to="/shop" className="btn-outline mt-3 w-full">Continue shopping</Link>
          <DemoNotice className="mt-6" />
        </aside>
      </div>
    </div>
  )
}
