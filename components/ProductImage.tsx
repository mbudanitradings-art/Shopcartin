import { Shirt, Smartphone, Sparkles, Watch, Lamp, type LucideIcon } from 'lucide-react'
import type { CategorySlug } from '../data/products'

const icons: Record<CategorySlug, LucideIcon> = {
  fashion: Shirt,
  electronics: Smartphone,
  beauty: Sparkles,
  accessories: Watch,
  home: Lamp,
}

const tones = [
  'from-silver-50 to-silver-200',
  'from-silver-100 to-silver-300',
  'from-white to-silver-200',
  'from-silver-200 to-silver-100',
]

function toneFor(name: string) {
  let hash = 0
  for (const ch of name) hash = (hash * 31 + ch.charCodeAt(0)) % 997
  return tones[hash % tones.length]
}

interface Props {
  category: CategorySlug
  name: string
  className?: string
  showDemoTag?: boolean
}

// Placeholder artwork for demonstration products. Swap for real photos later.
export default function ProductImage({ category, name, className = '', showDemoTag = true }: Props) {
  const Icon = icons[category]
  return (
    <div
      role="img"
      aria-label={`${name} (demonstration image)`}
      className={`relative flex aspect-square items-center justify-center overflow-hidden bg-gradient-to-br ${toneFor(name)} ${className}`}
    >
      <Icon className="h-1/3 w-1/3 text-silver-600" strokeWidth={1} aria-hidden="true" />
      {showDemoTag && (
        <span className="absolute bottom-2 left-2 rounded-full bg-white/90 px-2 py-0.5 text-[11px] font-medium text-silver-600">
          Demo product
        </span>
      )}
    </div>
  )
}
