import { useEffect, useRef } from 'react'
import { useInView, useSpring } from 'framer-motion'

// Count-up stat: springs from 0 to `value` the first time it scrolls into
// view, writing textContent directly so React never re-renders mid-count.
export default function Counter({ value, suffix = '', className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const spring = useSpring(0, { stiffness: 55, damping: 16 })

  useEffect(() => {
    if (inView) spring.set(value)
  }, [inView, value, spring])

  useEffect(
    () =>
      spring.on('change', (v) => {
        if (ref.current) ref.current.textContent = `${Math.round(v)}${suffix}`
      }),
    [spring, suffix],
  )

  return (
    <span ref={ref} className={className}>
      0{suffix}
    </span>
  )
}
