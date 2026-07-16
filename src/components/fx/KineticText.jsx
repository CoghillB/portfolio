import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring, useAnimationFrame, useReducedMotion } from 'framer-motion'

// Entrance is driven by variant propagation from the container (one reliable
// in-view trigger), matching SplitText. The cursor push lives on an inner span
// so it never fights the entrance's `y`.
const container = {
  hidden: {},
  show: ({ stagger, delay }) => ({ transition: { staggerChildren: stagger, delayChildren: delay } }),
}
const charV = {
  hidden: { y: '110%', rotate: 6, opacity: 0 },
  show: { y: '0%', rotate: 0, opacity: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

function Letter({ ch, mouse, interactive, radius, force }) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const r = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 200, damping: 15, mass: 0.5 })
  const sy = useSpring(y, { stiffness: 200, damping: 15, mass: 0.5 })
  const sr = useSpring(r, { stiffness: 180, damping: 16 })

  useAnimationFrame(() => {
    if (!interactive || !ref.current) return
    const idle = performance.now() - mouse.current.t > 500
    if (idle && x.get() === 0 && y.get() === 0 && r.get() === 0) return
    const b = ref.current.getBoundingClientRect()
    const dx = b.left + b.width / 2 - mouse.current.x
    const dy = b.top + b.height / 2 - mouse.current.y
    const d = Math.hypot(dx, dy)
    if (d < radius && d > 0) {
      const push = (1 - d / radius) * force
      x.set((dx / d) * push)
      y.set((dy / d) * push)
      r.set((dx / d) * (1 - d / radius) * 10)
    } else {
      x.set(0)
      y.set(0)
      r.set(0)
    }
  })

  return (
    <span className="inline-block overflow-hidden pb-[0.25em] -mb-[0.25em] align-bottom" aria-hidden="true">
      <motion.span variants={charV} className="inline-block origin-bottom-left">
        <motion.span ref={ref} style={{ x: sx, y: sy, rotate: sr }} className="inline-block">
          {ch === ' ' ? ' ' : ch}
        </motion.span>
      </motion.span>
    </span>
  )
}

export default function KineticText({ text, className = '', delay = 0, stagger = 0.045, radius = 130, force = 46 }) {
  const reduce = useReducedMotion()
  const mouse = useRef({ x: -9999, y: -9999, t: 0 })
  const interactive =
    !reduce &&
    typeof window !== 'undefined' &&
    window.matchMedia('(pointer: fine)').matches

  useEffect(() => {
    if (!interactive) return
    const onMove = (e) => {
      mouse.current.x = e.clientX
      mouse.current.y = e.clientY
      mouse.current.t = performance.now()
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [interactive])

  return (
    <motion.span
      className={`inline-block ${className}`}
      aria-label={text}
      variants={container}
      custom={{ stagger, delay }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-60px' }}
    >
      {text.split('').map((ch, i) => (
        <Letter key={i} ch={ch} mouse={mouse} interactive={interactive} radius={radius} force={force} />
      ))}
    </motion.span>
  )
}
