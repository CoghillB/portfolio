import { motion } from 'framer-motion'

// Scroll-triggered reveal. Honors reduced-motion via Framer's MotionConfig.
export default function Reveal({ children, delay = 0, y = 16, className = '', as = 'div' }) {
  const MotionTag = motion[as] || motion.div
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 'some' }}
      transition={{ duration: 0.45, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  )
}

// Punchy editorial section heading: monospace tag + unified Bricolage title reveal.
export function SectionHeading({
  eyebrow,
  index,
  title,
  accent,
  kicker,
  align = 'left',
  className = '',
}) {
  const centered = align === 'center'

  return (
    <div className={`mb-12 ${centered ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'} ${className}`}>
      {eyebrow && (
        <Reveal y={10}>
          <span
            className={`inline-flex items-center gap-2.5 font-mono text-xs font-bold uppercase tracking-[0.18em] text-accent-3 ${
              centered ? 'justify-center' : ''
            }`}
          >
            {index && <span className="text-ink-muted">{index} //</span>}
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal as="h2" delay={0.05} y={14} className="mt-3 font-display text-3xl font-extrabold tracking-[-0.03em] text-ink sm:text-5xl sm:leading-[1.06]">
        {title}
        {accent && (
          <>
            {' '}
            <span className="text-accent-3">{accent}</span>
          </>
        )}
      </Reveal>
      {kicker && (
        <Reveal delay={0.1} y={14}>
          <p className="mt-4 text-[16px] leading-relaxed text-ink-soft sm:text-[17px]">{kicker}</p>
        </Reveal>
      )}
    </div>
  )
}
