import { motion } from 'framer-motion'

// Kinetic typography: splits text into words (or chars) that rise out of an
// overflow clip with a stagger. Transform/opacity only.
const wordVariants = {
  hidden: {},
  show: ({ stagger, delay }) => ({
    transition: { staggerChildren: stagger, delayChildren: delay },
  }),
}

const charVariants = {
  hidden: { y: '110%', rotate: 6, opacity: 0 },
  show: {
    y: '0%',
    rotate: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function SplitText({
  text,
  per = 'word', // 'word' | 'char'
  className = '',
  delay = 0,
  stagger = 0.04,
  once = true,
  as: Tag = motion.span,
}) {
  const words = text.split(' ')

  return (
    <Tag
      className={`inline-block ${className}`}
      variants={wordVariants}
      custom={{ stagger, delay }}
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: '-60px' }}
      aria-label={text}
    >
      {words.map((word, wi) => (
        <span key={wi} className="inline-block overflow-hidden pb-[0.08em] -mb-[0.08em] align-bottom whitespace-pre" aria-hidden="true">
          {per === 'char' ? (
            word.split('').map((ch, ci) => (
              <motion.span key={ci} className="inline-block origin-bottom-left" variants={charVariants}>
                {ch}
              </motion.span>
            ))
          ) : (
            <motion.span className="inline-block origin-bottom-left" variants={charVariants}>
              {word}
            </motion.span>
          )}
          {wi < words.length - 1 ? ' ' : ''}
        </span>
      ))}
    </Tag>
  )
}
