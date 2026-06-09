import { motion } from 'framer-motion'

// Scroll-triggered reveal. Honors reduced-motion via framer's global setting.
export default function Reveal({ children, delay = 0, y = 24, className = '', as = 'div' }) {
  const MotionTag = motion[as] || motion.div
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  )
}

// Section heading with eyebrow + gradient accent, reused across sections.
export function SectionHeading({ eyebrow, title, kicker }) {
  return (
    <div className="mb-12 max-w-2xl">
      {eyebrow && (
        <Reveal>
          <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-accent-3">
            <span className="h-px w-8 bg-accent-3/60" />
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          {title}
        </h2>
      </Reveal>
      {kicker && (
        <Reveal delay={0.1}>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">{kicker}</p>
        </Reveal>
      )}
    </div>
  )
}
