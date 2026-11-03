import { createContext, useContext, useEffect, useMemo, useReducer, type ReactNode } from 'react'
import { getProductById, type Product } from '../data/products'

const STORAGE_KEY = 'shopcartin-cart-v1'
const MAX_QTY = 10

interface StoredItem {
  productId: string
  quantity: number
}

type Action =
  | { type: 'add'; productId: string; quantity: number }
  | { type: 'set'; productId: string; quantity: number }
  | { type: 'remove'; productId: string }
  | { type: 'clear' }

function reducer(state: StoredItem[], action: Action): StoredItem[] {
  switch (action.type) {
    case 'add': {
      const existing = state.find((i) => i.productId === action.productId)
      if (existing) {
        return state.map((i) =>
          i.productId === action.productId
            ? { ...i, quantity: Math.min(MAX_QTY, i.quantity + action.quantity) }
            : i,
        )
      }
      return [...state, { productId: action.productId, quantity: Math.min(MAX_QTY, action.quantity) }]
    }
    case 'set':
      if (action.quantity <= 0) return state.filter((i) => i.productId !== action.productId)
      return state.map((i) =>
        i.productId === action.productId ? { ...i, quantity: Math.min(MAX_QTY, action.quantity) } : i,
      )
    case 'remove':
      return state.filter((i) => i.productId !== action.productId)
    case 'clear':
      return []
    default:
      return state
  }
}

function load(): StoredItem[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed: unknown = JSON.parse(raw)
    if (!Array.isArray(parsed)) return []
    return parsed.filter(
      (i): i is StoredItem =>
        typeof i?.productId === 'string' &&
        typeof i?.quantity === 'number' &&
        i.quantity > 0 &&
        !!getProductById(i.productId),
    )
  } catch {
    return []
  }
}

export interface CartLine {
  product: Product
  quantity: number
}

interface CartContextValue {
  lines: CartLine[]
  count: number
  subtotal: number
  maxQty: number
  add: (productId: string, quantity?: number) => void
  setQty: (productId: string, quantity: number) => void
  remove: (productId: string) => void
  clear: () => void
}

const CartContext = createContext<CartContextValue | null>(null)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, dispatch] = useReducer(reducer, [], load)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    } catch {
      // Storage unavailable (private mode). The cart still works for this visit.
    }
  }, [items])

  const value = useMemo<CartContextValue>(() => {
    const lines: CartLine[] = items.flatMap((i) => {
      const product = getProductById(i.productId)
      return product ? [{ product, quantity: i.quantity }] : []
    })
    return {
      lines,
      count: lines.reduce((n, l) => n + l.quantity, 0),
      subtotal: lines.reduce((n, l) => n + l.product.price * l.quantity, 0),
      maxQty: MAX_QTY,
      add: (productId, quantity = 1) => dispatch({ type: 'add', productId, quantity }),
      setQty: (productId, quantity) => dispatch({ type: 'set', productId, quantity }),
      remove: (productId) => dispatch({ type: 'remove', productId }),
      clear: () => dispatch({ type: 'clear' }),
    }
  }, [items])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used inside CartProvider')
  return ctx
}
