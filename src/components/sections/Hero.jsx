import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight, ArrowDown, FileText, MapPin } from 'lucide-react'
import { profile, heroWords } from '../../data/content'
import ImageWithSkeleton from '../ImageWithSkeleton'
import KineticText from '../fx/KineticText'
import Magnetic from '../fx/Magnetic'
import TiltCard from '../fx/TiltCard'

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}

function RotatingWord() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % heroWords.length), 2400)
    return () => clearInterval(id)
  }, [])

  return (
    <span className="relative inline-flex h-[1.45em] items-center overflow-hidden align-middle">
      <AnimatePresence initial={false} mode="wait">
        <motion.span
          key={heroWords[index]}
          initial={{ y: '85%', opacity: 0 }}
          animate={{ y: '0%', opacity: 1 }}
          exit={{ y: '-85%', opacity: 0 }}
          transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
          className="inline-block rounded-sm bg-accent px-2.5 py-0.5 font-mono text-[0.82em] font-bold uppercase tracking-wider text-[#0a0a0b]"
        >
          {heroWords[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, 44])

  return (
    <section
      id="home"
      ref={ref}
      className="relative flex min-h-[100dvh] items-center overflow-hidden px-6 pt-28 pb-16 sm:pt-36 sm:pb-24"
    >
      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-[1.22fr_0.78fr] lg:gap-14">
          {/* Left kinetic column */}
          <motion.div
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.08, delayChildren: 0.04 } },
            }}
            initial="hidden"
            animate="show"
            className="flex flex-col items-start"
          >
            {/* Availability + location strip */}
            <motion.div variants={item} className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-md border border-line-strong bg-card px-3 py-1.5 font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-ink">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-3" />
                </span>
                Available for new projects
              </span>
              <span className="inline-flex items-center gap-1.5 font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-ink-muted">
                <MapPin size={13} className="text-accent-3" />
                {profile.location}
              </span>
            </motion.div>

            {/* Playful cursor-reactive KineticText display name */}
            <h1 className="mt-7 font-display text-[clamp(3.2rem,8.4vw,6.2rem)] font-extrabold leading-[0.94] tracking-[-0.04em]">
              <span className="block text-ink">
                <KineticText text={profile.firstName} stagger={0.035} delay={0.1} radius={125} force={38} />
              </span>
              <span className="block text-accent-3">
                <KineticText text={profile.lastName} stagger={0.035} delay={0.28} radius={125} force={38} />
              </span>
            </h1>

            {/* Role + rotating highlight chip */}
            <motion.p
              variants={item}
              className="mt-7 flex flex-wrap items-center gap-x-2 gap-y-2 text-lg font-semibold tracking-[-0.015em] text-ink sm:text-2xl"
            >
              <span>{profile.role} building web apps that feel</span>
              <RotatingWord />
            </motion.p>

            {/* Tagline */}
            <motion.p
              variants={item}
              className="mt-4 max-w-xl text-[16px] leading-relaxed text-ink-soft sm:text-lg"
            >
              {profile.tagline}
            </motion.p>

            {/* Action row */}
            <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-3.5">
              <Magnetic strength={0.16}>
                <a
                  href="#work"
                  className="btn-accent group inline-flex items-center gap-2 rounded-md px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-wider"
                >
                  View selected work
                  <ArrowUpRight
                    size={15}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </Magnetic>
              <Magnetic strength={0.16}>
                <a
                  href="#contact"
                  className="btn-outline inline-flex items-center gap-2 rounded-md px-6 py-3.5 text-sm font-semibold"
                >
                  Get in touch
                </a>
              </Magnetic>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-2.5 py-2 font-mono text-xs font-bold uppercase tracking-[0.14em] text-ink-muted transition-colors hover:text-accent-3"
              >
                <FileText size={14} className="text-accent-3" />
                Résumé
              </a>
            </motion.div>
          </motion.div>

          {/* Right column — Interactive TiltCard studio portrait */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
            style={{ y: portraitY }}
            className="mx-auto w-full max-w-sm lg:max-w-none"
          >
            <TiltCard max={6}>
              <div className="relative rounded-2xl border border-line-strong bg-card p-3 shadow-[8px_8px_0px_var(--color-line)]">
                {/* Tactile acid corner accents */}
                <span aria-hidden="true" className="pointer-events-none absolute -top-1 -left-1 h-4 w-4 border-t-2 border-l-2 border-accent" />
                <span aria-hidden="true" className="pointer-events-none absolute -right-1 -bottom-1 h-4 w-4 border-r-2 border-b-2 border-accent" />

                <div className="relative overflow-hidden rounded-xl border border-line bg-base-2">
                  <ImageWithSkeleton
                    src="/aboutme.jpg"
                    alt="Brayden Coghill, Software Developer in Kelowna, BC"
                    loading="eager"
                    wrapperClassName="aspect-[4/4.3] w-full"
                    className="h-full w-full object-cover object-top contrast-[1.03]"
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent"
                  />
                  <div className="absolute inset-x-3.5 bottom-3.5 flex items-center justify-between font-mono text-[10px] font-bold uppercase tracking-wider text-white">
                    <span className="rounded-sm bg-black/65 px-2 py-1 backdrop-blur-sm">
                      Kelowna, BC
                    </span>
                    <span className="rounded-sm bg-accent px-2 py-1 text-[#0a0a0b] tabular-nums">
                      49.88° N · 119.49° W
                    </span>
                  </div>
                </div>

                <div className="mt-3 flex items-center justify-between px-1.5 py-1">
                  <div>
                    <p className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-ink-muted">
                      Currently building at
                    </p>
                    <p className="mt-0.5 font-display text-sm font-bold text-ink">
                      Barreleye Software
                    </p>
                  </div>
                  <span className="rounded-sm border border-line bg-card-2 px-2 py-0.5 font-mono text-[11px] font-bold text-accent-3">
                    Full-Stack
                  </span>
                </div>
              </div>
            </TiltCard>
          </motion.div>
        </div>

        {/* Minimal scroll cue */}
        <motion.a
          href="#about"
          aria-label="Scroll to about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-14 hidden items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-ink-muted transition-colors hover:text-ink sm:inline-flex"
        >
          <motion.span animate={{ y: [0, 4, 0] }} transition={{ duration: 1.8, repeat: Infinity }}>
            <ArrowDown size={14} className="text-accent-3" />
          </motion.span>
          Scroll to explore
        </motion.a>
      </div>
    </section>
  )
}
