import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

// Scrollytelling paragraph: words brighten one by one as the reader scrolls
// through the block. Opacity-only updates, no layout work.
function Word({ children, progress, range }) {
  const opacity = useTransform(progress, range, [0.2, 1])
  return (
    <motion.span style={{ opacity }} className="inline">
      {children}{' '}
    </motion.span>
  )
}

export default function TextReveal({ text, className = '' }) {
  const ref = useRef(null)
  // Anchor both ends to the block's start so the fill completes over a short,
  // fixed scroll (~40% of the viewport) instead of the whole paragraph height.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.9', 'start 0.5'],
  })
  const words = text.split(' ')

  return (
    <p ref={ref} className={className}>
      {words.map((word, i) => (
        <Word
          key={i}
          progress={scrollYProgress}
          range={[i / words.length, (i + 1) / words.length]}
        >
          {word}
        </Word>
      ))}
    </p>
  )
}
