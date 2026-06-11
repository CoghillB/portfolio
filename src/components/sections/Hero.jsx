import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight, ArrowDown, MapPin } from 'lucide-react'
import { profile, heroWords } from '../../data/content'
import SplitText from '../fx/SplitText'
import Magnetic from '../fx/Magnetic'

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

function RotatingWord() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % heroWords.length), 2400)
    return () => clearInterval(id)
  }, [])

  return (
    <span className="relative inline-flex h-[1.4em] items-center overflow-hidden align-bottom">
      <AnimatePresence initial={false}>
        <motion.span
          key={heroWords[index]}
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: '0%', opacity: 1 }}
          exit={{ y: '-100%', opacity: 0, position: 'absolute' }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="inline-block text-gradient font-semibold"
        >
          {heroWords[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

export default function Hero() {
  const ref = useRef(null)

  // Parallax exit: as the hero scrolls away the content sinks and fades while
  // the giant backdrop word drifts the other way. Transform/opacity only.
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 140])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0])
  const backdropY = useTransform(scrollYProgress, [0, 1], [0, -120])

  return (
    <section
      id="home"
      ref={ref}
      className="relative flex min-h-[100dvh] items-center overflow-hidden px-6 pt-28 pb-20"
    >
      {/* hero glow halos: soft radial gradients, no blur filters */}
      <div className="pointer-events-none absolute left-[-5%] top-[20%] h-[55vh] w-[55vh] rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.32),rgba(139,92,246,0.1)_45%,transparent_70%)]" />
      <div className="pointer-events-none absolute right-[8%] top-[8%] h-[40vh] w-[40vh] rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.2),rgba(34,211,238,0.07)_45%,transparent_70%)]" />

      {/* giant backdrop word, slower parallax for depth */}
      <motion.span
        aria-hidden="true"
        style={{ y: backdropY }}
        className="text-stroke pointer-events-none absolute left-1/2 top-[16%] -translate-x-1/2 select-none font-display text-[22vw] font-bold leading-none opacity-40 sm:top-[12%]"
      >
        DEV
      </motion.span>

      <motion.div style={{ y: contentY, opacity: contentOpacity }} className="relative mx-auto w-full max-w-5xl">
        <motion.div
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } } }}
          initial="hidden"
          animate="show"
          className="flex flex-col items-start"
        >
          {/* Availability pill */}
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-4 py-1.5 text-sm text-ink-soft">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Available for new projects
            </span>
          </motion.div>

          {/* Name: per-character kinetic reveal */}
          <h1 className="mt-8 font-display text-[clamp(2.75rem,9vw,6.5rem)] font-bold leading-[0.95] tracking-tight">
            <span className="block text-ink">
              <SplitText text={profile.firstName} per="char" stagger={0.045} delay={0.25} />
            </span>
            <span className="block text-gradient">
              <SplitText text={profile.lastName} per="char" stagger={0.045} delay={0.5} />
            </span>
          </h1>

          <motion.div variants={item} className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2">
            <p className="font-display text-xl font-medium text-ink sm:text-2xl">
              {profile.role}, building <RotatingWord /> things for the web
            </p>
          </motion.div>

          <motion.div variants={item} className="mt-3 flex items-center gap-1.5 text-ink-soft">
            <MapPin size={16} className="text-accent-3" />
            {profile.location}
          </motion.div>

          <motion.p variants={item} className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
            {profile.tagline}
          </motion.p>

          {/* CTAs: magnetic, primary gets the spinning halo */}
          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
            <Magnetic>
              <a
                href="#work"
                className="cta-glow group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-accent to-accent-2 px-6 py-3.5 font-semibold text-white transition-all hover:brightness-110"
              >
                <span className="halo" aria-hidden="true">
                  <span className="halo-disc" />
                </span>
                View my work
                <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl border border-line-strong bg-card px-6 py-3.5 font-semibold text-ink transition-colors hover:bg-card-hover"
              >
                Get in touch
              </a>
            </Magnetic>
          </motion.div>
        </motion.div>

        {/* Scroll hint */}
        <motion.a
          href="#about"
          aria-label="Scroll to about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-20 hidden items-center gap-2 text-sm text-ink-muted transition-colors hover:text-ink-soft sm:inline-flex"
        >
          <motion.span animate={{ y: [0, 5, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>
            <ArrowDown size={16} />
          </motion.span>
          Scroll to explore
        </motion.a>
      </motion.div>
    </section>
  )
}
