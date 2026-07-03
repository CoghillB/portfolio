import { useRef } from 'react'
import {
  motion,
  useScroll,
  useVelocity,
  useSpring,
  useTransform,
  useAnimationFrame,
  useMotionValue,
  wrap,
  useReducedMotion,
} from 'framer-motion'

// Marquee whose speed + direction react to scroll velocity. Flick the page and
// the ticker lurches and flips. Four identical rows keep the loop seamless.
export default function VelocityMarquee({
  items,
  sep = '✦',
  baseVelocity = 4,
  className = '',
  itemClassName = '',
}) {
  const reduce = useReducedMotion()
  const baseX = useMotionValue(0)
  const { scrollY } = useScroll()
  const scrollVelocity = useVelocity(scrollY)
  const smooth = useSpring(scrollVelocity, { damping: 50, stiffness: 400 })
  const factor = useTransform(smooth, [0, 1000], [0, 5], { clamp: false })
  const x = useTransform(baseX, (v) => `${wrap(-45, -20, v)}%`)
  const dir = useRef(1)

  useAnimationFrame((_, delta) => {
    if (reduce) return
    let moveBy = dir.current * baseVelocity * (delta / 1000)
    const f = factor.get()
    if (f < 0) dir.current = -1
    else if (f > 0) dir.current = 1
    moveBy += dir.current * moveBy * Math.abs(f)
    baseX.set(baseX.get() + moveBy)
  })

  const Row = () => (
    <span className="flex shrink-0 items-center" aria-hidden="true">
      {items.map((it, i) => (
        <span key={i} className="flex items-center">
          <span className={`whitespace-nowrap px-6 ${itemClassName}`}>{it}</span>
          <span className="opacity-50">{sep}</span>
        </span>
      ))}
    </span>
  )

  return (
    <div className={`flex overflow-hidden ${className}`}>
      <motion.div className="flex flex-nowrap" style={reduce ? undefined : { x }}>
        <Row />
        <Row />
        <Row />
        <Row />
      </motion.div>
    </div>
  )
}
