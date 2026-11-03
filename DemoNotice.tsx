export default function DemoNotice({ className = '' }: { className?: string }) {
  return (
    <div className={`rounded-lg bg-silver-50 px-4 py-3 text-sm text-silver-600 ${className}`}>
      <p className="font-semibold text-silver-800">Catalogue preview — not yet open for orders.</p>
      <p className="mt-1">These 50 listings and prices are examples, not verified supplier stock or final quotes. Confirm each product's supplier, specifications, availability, delivery cost and selling price before accepting customer orders. Online checkout and payments are not enabled yet.</p>
    </div>
  )
}
