import { motion } from 'framer-motion'
import { ArrowUpRight, ArrowDown, MapPin } from 'lucide-react'
import { profile } from '../../data/content'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-[100dvh] items-center overflow-hidden px-6 pt-28 pb-20">
      {/* dedicated hero glow halo */}
      <div className="pointer-events-none absolute left-[-5%] top-[20%] h-[55vh] w-[55vh] rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.45),transparent_65%)] blur-[80px]" />
      <div className="pointer-events-none absolute right-[8%] top-[8%] h-[40vh] w-[40vh] rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.28),transparent_65%)] blur-[90px]" />

      <div className="relative mx-auto w-full max-w-5xl">
        <motion.div variants={container} initial="hidden" animate="show" className="flex flex-col items-start">
          {/* Availability pill */}
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-4 py-1.5 text-sm text-ink-soft backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Available for new projects
            </span>
          </motion.div>

          {/* Name + role */}
          <motion.h1
            variants={item}
            className="mt-8 font-display text-[clamp(2.75rem,9vw,6.5rem)] font-bold leading-[0.95] tracking-tight"
          >
            <span className="block text-ink">{profile.firstName}</span>
            <span className="block text-gradient">{profile.lastName}</span>
          </motion.h1>

          <motion.div variants={item} className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2">
            <p className="font-display text-xl font-medium text-ink sm:text-2xl">{profile.role}</p>
            <span className="hidden h-1.5 w-1.5 rounded-full bg-ink-muted sm:block" />
            <p className="inline-flex items-center gap-1.5 text-ink-soft">
              <MapPin size={16} className="text-accent-3" />
              {profile.location}
            </p>
          </motion.div>

          <motion.p variants={item} className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
            {profile.tagline}
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="cta-glow group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-accent to-accent-2 px-6 py-3.5 font-semibold text-white transition-all hover:brightness-110"
            >
              View my work
              <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-line-strong bg-card px-6 py-3.5 font-semibold text-ink transition-colors hover:bg-card-hover"
            >
              Get in touch
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll hint */}
        <motion.a
          href="#about"
          aria-label="Scroll to about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-20 hidden items-center gap-2 text-sm text-ink-muted transition-colors hover:text-ink-soft sm:inline-flex"
        >
          <motion.span animate={{ y: [0, 5, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>
            <ArrowDown size={16} />
          </motion.span>
          Scroll to explore
        </motion.a>
      </div>
    </section>
  )
}
