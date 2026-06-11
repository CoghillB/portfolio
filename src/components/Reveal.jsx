import { motion } from 'framer-motion'
import SplitText from './fx/SplitText'

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

// Section heading with eyebrow + kinetic gradient title, reused across sections.
export function SectionHeading({ eyebrow, title, kicker }) {
  return (
    <div className="mb-12 max-w-2xl">
      {eyebrow && (
        <Reveal>
          <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-accent-3">
            <motion.span
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="h-px w-8 origin-left bg-accent-3/60"
            />
            {eyebrow}
          </span>
        </Reveal>
      )}
      <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
        <SplitText text={title} stagger={0.05} delay={0.08} />
      </h2>
      {kicker && (
        <Reveal delay={0.15}>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">{kicker}</p>
        </Reveal>
      )}
    </div>
  )
}
