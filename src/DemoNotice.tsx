export default function DemoNotice({ className = '' }: { className?: string }) {
  return (
    <p className={`rounded-lg bg-silver-50 px-4 py-3 text-sm text-silver-600 ${className}`}>
      This store is in its demonstration stage. Products shown are samples, not real supplier
      inventory, and checkout and payments are not live yet.
    </p>
  )
}
