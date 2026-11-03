import { useState, type FormEvent } from 'react'
import { Mail, MapPin } from 'lucide-react'
import { site } from '../config/site'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)

  // No backend yet: this opens the visitor's email app with the message filled in.
  const submit = (e: FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Message from ${name} via ${site.name}`)
    const body = encodeURIComponent(`${message}\n\nFrom: ${name} (${email})`)
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`
    setSent(true)
  }

  const field = 'mt-1 w-full rounded-lg border border-silver-300 px-4 py-3 text-base focus:border-black focus:outline-none'

  return (
    <div className="container-page py-12 sm:py-16">
      <h1 className="text-4xl font-extrabold sm:text-5xl">Contact us</h1>
      <p className="mt-3 max-w-xl text-silver-600">Have a question about SHOP CARTIN? Send us a message.</p>

      <div className="mt-10 grid gap-10 md:grid-cols-[1fr_320px]">
        <form onSubmit={submit} className="space-y-5">
          <div>
            <label htmlFor="name" className="text-sm font-semibold">Your name</label>
            <input id="name" required value={name} onChange={(e) => setName(e.target.value)} className={field} autoComplete="name" />
          </div>
          <div>
            <label htmlFor="email" className="text-sm font-semibold">Email address</label>
            <input id="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className={field} autoComplete="email" />
          </div>
          <div>
            <label htmlFor="message" className="text-sm font-semibold">Message</label>
            <textarea id="message" required rows={6} value={message} onChange={(e) => setMessage(e.target.value)} className={field} />
          </div>
          <button type="submit" className="btn-primary w-full sm:w-auto">Send message</button>
          {sent && (
            <p className="text-sm text-silver-600" role="status">
              Your email app should have opened with your message ready to send. If it did not, email us directly at {site.email}.
            </p>
          )}
        </form>

        <aside className="h-fit space-y-5 rounded-lg bg-silver-50 p-6 text-sm">
          <p className="flex items-start gap-3">
            <Mail size={18} className="mt-0.5 shrink-0" aria-hidden="true" />
            <a href={`mailto:${site.email}`} className="font-semibold hover:underline">{site.email}</a>
          </p>
          <p className="flex items-start gap-3">
            <MapPin size={18} className="mt-0.5 shrink-0" aria-hidden="true" />
            <span>Serving customers across {site.country}</span>
          </p>
        </aside>
      </div>
    </div>
  )
}
