import { Link } from 'react-router-dom'
import type { Product } from '../data/products'
import ProductImage from './ProductImage'
import Price from './Price'
import AddToCartButton from './AddToCartButton'

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="flex flex-col">
      <Link to={`/product/${product.slug}`} className="group block">
        <ProductImage
          category={product.category}
          name={product.name}
          className="rounded-lg transition-opacity group-hover:opacity-90"
        />
        <h3 className="mt-3 text-sm font-semibold leading-snug sm:text-base">{product.name}</h3>
      </Link>
      <div className="mt-1">
        <Price price={product.price} oldPrice={product.oldPrice} />
      </div>
      <AddToCartButton productId={product.id} className="mt-3 w-full" />
    </article>
  )
}
