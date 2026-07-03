import { useRef } from 'react'
import { motion, useSpring, useTransform } from 'framer-motion'

// 3D tilt on hover. Rotation springs follow the cursor; transform-only.
export default function TiltCard({ children, max = 7, className = '', style }) {
  const ref = useRef(null)
  const px = useSpring(0.5, { stiffness: 260, damping: 22 })
  const py = useSpring(0.5, { stiffness: 260, damping: 22 })
  const rotateX = useTransform(py, [0, 1], [max, -max])
  const rotateY = useTransform(px, [0, 1], [-max, max])

  const onMouseMove = (e) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    px.set((e.clientX - rect.left) / rect.width)
    py.set((e.clientY - rect.top) / rect.height)
  }

  const onMouseLeave = () => {
    px.set(0.5)
    py.set(0.5)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 1000, ...style }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
