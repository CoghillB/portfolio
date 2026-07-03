import { useEffect, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import { useTheme } from '../context/ThemeContext'

// Wireframe knot that slowly auto-rotates and eases toward the cursor. Basic
// material (no lights needed), transparent canvas so the jet/bone shows through.
function Knot({ color, reduce }) {
  const ref = useRef(null)
  const target = useRef({ x: 0, y: 0 })
  const cur = useRef({ x: 0, y: 0 })
  const t = useRef(0)

  useEffect(() => {
    const onMove = (e) => {
      target.current.x = (e.clientX / window.innerWidth - 0.5) * 2
      target.current.y = (e.clientY / window.innerHeight - 0.5) * 2
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  useFrame((_, delta) => {
    const m = ref.current
    if (!m) return
    if (!reduce) t.current += delta
    cur.current.x += (target.current.x - cur.current.x) * 0.05
    cur.current.y += (target.current.y - cur.current.y) * 0.05
    m.rotation.y = (reduce ? 0 : t.current * 0.25) + cur.current.x * 0.6
    m.rotation.x = (reduce ? 0 : t.current * 0.1) + cur.current.y * 0.5
  })

  return (
    <mesh ref={ref} scale={1.05}>
      <torusKnotGeometry args={[1, 0.3, 220, 30]} />
      <meshBasicMaterial color={color} wireframe />
    </mesh>
  )
}

export default function Hero3D() {
  const { theme } = useTheme()
  const reduce =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const color = theme === 'light' ? '#5a7a00' : '#c6ff00'

  return (
    <Canvas
      camera={{ position: [0, 0, 5.6], fov: 42 }}
      dpr={[1, 1.6]}
      gl={{ antialias: true, alpha: true }}
      style={{ background: 'transparent' }}
    >
      <Float speed={reduce ? 0 : 1.2} rotationIntensity={reduce ? 0 : 0.4} floatIntensity={reduce ? 0 : 0.6}>
        <Knot color={color} reduce={reduce} />
      </Float>
    </Canvas>
  )
}
