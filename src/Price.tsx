import { formatPrice } from '../lib/format'

interface Props {
  price: number
  oldPrice?: number
  large?: boolean
}

export default function Price({ price, oldPrice, large = false }: Props) {
  return (
    <p className="flex items-baseline gap-2">
      <span className={`font-semibold ${large ? 'text-2xl' : 'text-base'}`}>{formatPrice(price)}</span>
      {oldPrice && (
        <>
          <span className={`text-silver-500 line-through ${large ? 'text-base' : 'text-sm'}`}>
            {formatPrice(oldPrice)}
          </span>
          <span className="sr-only">was {formatPrice(oldPrice)}</span>
        </>
      )}
    </p>
  )
}
