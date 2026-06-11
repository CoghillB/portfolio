import { useEffect, useState } from 'react'
import emailjs from 'emailjs-com'
import { Mail, Send, Check, AlertCircle } from 'lucide-react'
import { Github, Linkedin } from '../BrandIcons'
import Reveal, { SectionHeading } from '../Reveal'
import TiltCard from '../fx/TiltCard'
import { profile } from '../../data/content'

const initial = { name: '', email: '', phone: '', message: '' }

export const Contact = () => {
  const serviceId = import.meta.env.VITE_SERVICE_ID
  const templateId = import.meta.env.VITE_TEMPLATE_ID
  const publicKey = import.meta.env.VITE_PUBLIC_KEY

  const [form, setForm] = useState(initial)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const [configValid, setConfigValid] = useState(true)

  useEffect(() => {
    const missing = []
    if (!publicKey) missing.push('VITE_PUBLIC_KEY')
    if (!serviceId) missing.push('VITE_SERVICE_ID')
    if (!templateId) missing.push('VITE_TEMPLATE_ID')

    if (missing.length) {
      setConfigValid(false)
      console.error(
        `EmailJS config is missing: ${missing.join(', ')}. Set these in your .env (Vite requires the VITE_ prefix).`,
      )
      return
    }

    try {
      emailjs.init(publicKey)
    } catch (err) {
      console.error('Failed to initialize EmailJS:', err)
      setConfigValid(false)
    }
  }, [publicKey, serviceId, templateId])

  const update = (k) => (e) => {
    setForm((f) => ({ ...f, [k]: e.target.value }))
    setErrors((er) => ({ ...er, [k]: undefined }))
    if (status === 'error') setStatus('idle')
  }

  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = 'Please enter your name.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Enter a valid email address.'
    if (form.message.trim().length < 10) next.message = 'A little more detail, please (10+ chars).'
    return next
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const next = validate()
    setErrors(next)
    if (Object.keys(next).length) {
      // Move focus to the first invalid field for keyboard/screen-reader users.
      const firstInvalid = ['name', 'email', 'message'].find((k) => next[k])
      if (firstInvalid) document.getElementById(firstInvalid)?.focus()
      return
    }

    if (!configValid) {
      setStatus('error')
      return
    }

    setStatus('sending')
    emailjs
      .send(serviceId, templateId, {
        name: form.name,
        email: form.email,
        phoneNumber: form.phone,
        message: form.message,
      })
      .then(() => {
        setStatus('sent')
        setForm(initial)
      })
      .catch((err) => {
        console.error('EmailJS send error:', err)
        setStatus('error')
      })
  }

  return (
    <section id="contact" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Contact"
          title="Have a project in mind?"
          kicker="Tell me what you're building and I'll get back to you as soon as I can."
        />

        <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          {/* Direct links */}
          <div className="flex flex-col gap-3">
            <Reveal>
              <TiltCard max={5}>
              <a
                href={`mailto:${profile.email}`}
                className="glow-border flex items-center gap-4 rounded-2xl border border-line bg-card p-5 transition-colors hover:bg-card-hover"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-accent to-accent-2 text-white">
                  <Mail size={18} />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs uppercase tracking-wider text-ink-muted">Email</span>
                  <span className="block truncate text-sm text-ink">{profile.email}</span>
                </span>
              </a>
              </TiltCard>
            </Reveal>
            <Reveal delay={0.06}>
              <TiltCard max={5}>
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="glow-border flex items-center gap-4 rounded-2xl border border-line bg-card p-5 transition-colors hover:bg-card-hover"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl border border-line bg-card-2 text-ink">
                  <Linkedin size={18} />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-wider text-ink-muted">LinkedIn</span>
                  <span className="block text-sm text-ink">in/braydencoghill</span>
                </span>
              </a>
              </TiltCard>
            </Reveal>
            <Reveal delay={0.12}>
              <TiltCard max={5}>
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noreferrer"
                className="glow-border flex items-center gap-4 rounded-2xl border border-line bg-card p-5 transition-colors hover:bg-card-hover"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl border border-line bg-card-2 text-ink">
                  <Github size={18} />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-wider text-ink-muted">GitHub</span>
                  <span className="block text-sm text-ink">@CoghillB</span>
                </span>
              </a>
              </TiltCard>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal delay={0.1}>
            <form onSubmit={onSubmit} noValidate className="glass rounded-3xl p-6 sm:p-8">
              <Field
                id="name"
                label="Name"
                value={form.name}
                onChange={update('name')}
                error={errors.name}
                placeholder="Jane Doe"
                autoComplete="name"
              />
              <Field
                id="email"
                label="Email"
                type="email"
                value={form.email}
                onChange={update('email')}
                error={errors.email}
                placeholder="jane@company.com"
                autoComplete="email"
              />
              <Field
                id="phone"
                label="Phone"
                optionalLabel="optional"
                type="tel"
                value={form.phone}
                onChange={update('phone')}
                placeholder="(250) 555-0123"
                autoComplete="tel"
              />
              <div className="mb-1">
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink-soft">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={form.message}
                  onChange={update('message')}
                  placeholder="Tell me about your project…"
                  aria-invalid={!!errors.message}
                  className="w-full resize-none rounded-xl border border-line bg-base-2 px-4 py-3 text-ink placeholder:text-ink-muted outline-none transition-colors focus:border-accent/60 focus:ring-2 focus:ring-accent/20"
                />
                {errors.message && (
                  <p role="alert" className="mt-1.5 text-sm text-rose-600 dark:text-rose-400">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={status === 'sending' || status === 'sent'}
                className="cta-glow mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent to-accent-2 px-6 py-3.5 font-semibold text-white transition-all hover:brightness-110 disabled:opacity-70"
              >
                <span className="halo" aria-hidden="true">
                  <span className="halo-disc" />
                </span>
                {status === 'sent' ? (
                  <>
                    <Check size={18} /> Message sent
                  </>
                ) : status === 'sending' ? (
                  'Sending…'
                ) : (
                  <>
                    Send message <Send size={16} />
                  </>
                )}
              </button>

              {status === 'sent' && (
                <p role="status" className="mt-3 flex items-center justify-center gap-1.5 text-center text-sm text-emerald-700 dark:text-emerald-400">
                  <Check size={15} /> Thanks! I&apos;ll get back to you soon.
                </p>
              )}
              {status === 'error' && (
                <p role="alert" className="mt-3 flex items-center justify-center gap-1.5 text-center text-sm text-rose-600 dark:text-rose-400">
                  <AlertCircle size={15} /> Something went wrong. Email me directly at{' '}
                  <a href={`mailto:${profile.email}`} className="text-accent-3 hover:underline">
                    {profile.email}
                  </a>
                  .
                </p>
              )}
              {status !== 'sent' && status !== 'error' && (
                <p className="mt-3 text-center text-xs text-ink-muted">
                  Prefer email? Reach me directly at{' '}
                  <a href={`mailto:${profile.email}`} className="text-accent-3 hover:underline">
                    {profile.email}
                  </a>
                  .
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Field({ id, label, error, optionalLabel, ...props }) {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="mb-1.5 flex items-center justify-between text-sm font-medium text-ink-soft">
        <span>{label}</span>
        {optionalLabel && <span className="text-xs font-normal text-ink-muted">{optionalLabel}</span>}
      </label>
      <input
        id={id}
        aria-invalid={!!error}
        className="w-full rounded-xl border border-line bg-base-2 px-4 py-3 text-ink placeholder:text-ink-muted outline-none transition-colors focus:border-accent/60 focus:ring-2 focus:ring-accent/20"
        {...props}
      />
      {error && <p role="alert" className="mt-1.5 text-sm text-rose-600 dark:text-rose-400">{error}</p>}
    </div>
  )
}

export default Contact
