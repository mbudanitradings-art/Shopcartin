import { useEffect, useState } from 'react'
import { Check, ShoppingBag } from 'lucide-react'
import { useCart } from '../context/CartContext'

interface Props {
  productId: string
  quantity?: number
  className?: string
}

export default function AddToCartButton({ productId, quantity = 1, className = '' }: Props) {
  const { add } = useCart()
  const [added, setAdded] = useState(false)

  useEffect(() => {
    if (!added) return
    const t = setTimeout(() => setAdded(false), 1500)
    return () => clearTimeout(t)
  }, [added])

  return (
    <button
      type="button"
      className={`btn-primary gap-2 ${className}`}
      onClick={() => {
        add(productId, quantity)
        setAdded(true)
      }}
    >
      {added ? <Check size={18} aria-hidden="true" /> : <ShoppingBag size={18} aria-hidden="true" />}
      <span aria-live="polite">{added ? 'Added to cart' : 'Add to cart'}</span>
    </button>
  )
}
