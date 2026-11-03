import { Minus, Plus } from 'lucide-react'

interface Props {
  value: number
  min?: number
  max: number
  onChange: (value: number) => void
  label: string
}

export default function QuantitySelector({ value, min = 1, max, onChange, label }: Props) {
  return (
    <div className="inline-flex items-center rounded-full border border-silver-300" role="group" aria-label={label}>
      <button
        type="button"
        className="flex h-11 w-11 items-center justify-center rounded-full hover:bg-silver-100 disabled:text-silver-300"
        onClick={() => onChange(value - 1)}
        disabled={value <= min}
        aria-label="Decrease quantity"
      >
        <Minus size={16} aria-hidden="true" />
      </button>
      <span className="w-8 text-center text-sm font-semibold" aria-live="polite">{value}</span>
      <button
        type="button"
        className="flex h-11 w-11 items-center justify-center rounded-full hover:bg-silver-100 disabled:text-silver-300"
        onClick={() => onChange(value + 1)}
        disabled={value >= max}
        aria-label="Increase quantity"
      >
        <Plus size={16} aria-hidden="true" />
      </button>
    </div>
  )
}
