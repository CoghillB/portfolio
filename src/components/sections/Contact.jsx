import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import emailjs from 'emailjs-com'
import { Mail, Send, Check, AlertCircle, Copy, ArrowUpRight } from 'lucide-react'
import { Github, Linkedin } from '../BrandIcons'
import Reveal, { SectionHeading } from '../Reveal'
import { profile } from '../../data/content'
import { ENQUIRY_RETENTION_MONTHS } from '../../data/legal'
import { PRIVACY_ROUTE } from '../../routes'

const initial = { name: '', email: '', phone: '', message: '' }

export const Contact = () => {
  const serviceId = import.meta.env.VITE_SERVICE_ID
  const templateId = import.meta.env.VITE_TEMPLATE_ID
  const publicKey = import.meta.env.VITE_PUBLIC_KEY

  const [form, setForm] = useState(initial)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const [configValid, setConfigValid] = useState(true)
  const [copied, setCopied] = useState(false)

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

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Mailto link right beside it still works.
    }
  }

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
        console.error('EmailJS send failed:', err?.status, err?.text || err)
        setStatus('error')
      })
  }

  return (
    <section id="contact" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Contact"
          title="Have a project"
          accent="in mind?"
          kicker="Tell me what you're building and I'll get back to you as soon as I can."
        />

        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.15fr] lg:items-start">
          {/* Direct channels */}
          <div className="flex flex-col gap-3">
            <Reveal>
              <div className="studio-card flex items-center justify-between gap-3 rounded-xl border border-line bg-card p-5">
                <a
                  href={`mailto:${profile.email}`}
                  className="flex min-w-0 flex-1 items-center gap-4"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-accent text-[#0a0a0b]">
                    <Mail size={17} />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-ink-muted">
                      Email
                    </span>
                    <span className="mt-0.5 block truncate text-sm font-semibold text-ink">
                      {profile.email}
                    </span>
                  </span>
                </a>
                <button
                  type="button"
                  onClick={copyEmail}
                  aria-label="Copy email address"
                  className="inline-flex shrink-0 items-center gap-1.5 rounded-md border border-line-strong bg-card-2 px-3 py-1.5 font-mono text-[11px] font-bold text-ink-soft transition-colors hover:border-accent-3 hover:text-ink"
                >
                  {copied ? (
                    <>
                      <Check size={12} className="text-accent-3" />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy size={12} />
                      Copy
                    </>
                  )}
                </button>
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="studio-card group flex items-center justify-between gap-4 rounded-xl border border-line bg-card p-5 transition-all hover:-translate-y-0.5 hover:bg-card-hover"
              >
                <span className="flex items-center gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-md border border-line bg-card-2 text-ink">
                    <Linkedin size={17} />
                  </span>
                  <span>
                    <span className="block font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-ink-muted">
                      LinkedIn
                    </span>
                    <span className="mt-0.5 block text-sm font-semibold text-ink">
                      in/braydencoghill
                    </span>
                  </span>
                </span>
                <ArrowUpRight
                  size={16}
                  className="text-ink-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent-3"
                />
              </a>
            </Reveal>

            <Reveal delay={0.12}>
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noreferrer"
                className="studio-card group flex items-center justify-between gap-4 rounded-xl border border-line bg-card p-5 transition-all hover:-translate-y-0.5 hover:bg-card-hover"
              >
                <span className="flex items-center gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-md border border-line bg-card-2 text-ink">
                    <Github size={17} />
                  </span>
                  <span>
                    <span className="block font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-ink-muted">
                      GitHub
                    </span>
                    <span className="mt-0.5 block text-sm font-semibold text-ink">@CoghillB</span>
                  </span>
                </span>
                <ArrowUpRight
                  size={16}
                  className="text-ink-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent-3"
                />
              </a>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="mt-1 rounded-xl border border-line bg-card/60 p-5">
                <p className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-accent-3">
                  Location &amp; Response
                </p>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  Based in <span className="font-semibold text-ink">Kelowna, BC</span> (Pacific
                  Time). Every message reaches me directly and gets a reply within one business day.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal delay={0.08}>
            <form
              onSubmit={onSubmit}
              noValidate
              className="rounded-2xl border border-line bg-card p-6 sm:p-9"
            >
              <div className="grid gap-4 sm:grid-cols-2">
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
              </div>

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
                <label
                  htmlFor="message"
                  className="mb-2 block font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-ink-soft"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={form.message}
                  onChange={update('message')}
                  placeholder="Tell me about your project, timeline, or goals…"
                  aria-invalid={!!errors.message}
                  className="w-full resize-none rounded-lg border border-line bg-base-2 px-4 py-3 text-sm text-ink placeholder:text-ink-muted outline-none transition-colors focus:border-accent-3 focus:ring-2 focus:ring-accent/20"
                />
                {errors.message && (
                  <p role="alert" className="mt-1.5 text-xs text-rose-500 dark:text-rose-400">
                    {errors.message}
                  </p>
                )}
              </div>

              {/* BC PIPA point-of-collection notice — deliberately above the submit button */}
              <p className="mt-5 rounded-lg border border-line bg-base-2/80 px-4 py-3 text-xs leading-relaxed text-ink-muted">
                What happens to this: your name, email, phone and message are delivered through
                EmailJS to my Outlook inbox, and used only to reply to you. Nothing is sold, and
                there is no mailing list. If it doesn&apos;t turn into work, it&apos;s deleted
                within {ENQUIRY_RETENTION_MONTHS} months.{' '}
                <Link
                  to={PRIVACY_ROUTE}
                  className="font-semibold text-accent-3 underline-offset-2 hover:underline"
                >
                  Privacy policy
                </Link>
                .
              </p>

              <button
                type="submit"
                disabled={status === 'sending' || status === 'sent'}
                className="btn-accent mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-wider disabled:opacity-70"
              >
                {status === 'sent' ? (
                  <>
                    <Check size={16} /> Message sent
                  </>
                ) : status === 'sending' ? (
                  'Sending…'
                ) : (
                  <>
                    Send message <Send size={14} />
                  </>
                )}
              </button>

              {status === 'sent' && (
                <p
                  role="status"
                  className="mt-3 flex items-center justify-center gap-1.5 text-center text-sm text-emerald-700 dark:text-emerald-400"
                >
                  <Check size={15} /> Thanks! I&apos;ll get back to you soon.
                </p>
              )}
              {status === 'error' && (
                <p
                  role="alert"
                  className="mt-3 flex items-center justify-center gap-1.5 text-center text-sm text-rose-600 dark:text-rose-400"
                >
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
      <label
        htmlFor={id}
        className="mb-2 flex items-center justify-between font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-ink-soft"
      >
        <span>{label}</span>
        {optionalLabel && (
          <span className="font-mono text-[10px] font-normal lowercase tracking-normal text-ink-muted">
            {optionalLabel}
          </span>
        )}
      </label>
      <input
        id={id}
        aria-invalid={!!error}
        className="w-full rounded-lg border border-line bg-base-2 px-4 py-3 text-sm text-ink placeholder:text-ink-muted outline-none transition-colors focus:border-accent-3 focus:ring-2 focus:ring-accent/20"
        {...props}
      />
      {error && (
        <p role="alert" className="mt-1.5 text-xs text-rose-500 dark:text-rose-400">
          {error}
        </p>
      )}
    </div>
  )
}

export default Contact
