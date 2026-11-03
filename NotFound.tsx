import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="container-page py-24 text-center">
      <h1 className="text-4xl font-extrabold">Page not found</h1>
      <p className="mt-3 text-silver-600">The page you are looking for does not exist or has moved.</p>
      <div className="mt-8 flex justify-center gap-3">
        <Link to="/" className="btn-primary">Go to homepage</Link>
        <Link to="/shop" className="btn-outline">Browse products</Link>
      </div>
    </div>
  )
}
