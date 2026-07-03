// Flat Acid Editorial backdrop: theme-reactive base (jet / bone) + faint
// blueprint grid + vignette. No glow blobs. Uses token utilities so it
// recolors automatically with the light/dark toggle.
export default function Backdrop() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-base">
      <div className="grid-bg absolute inset-0 opacity-70 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_78%)]" />
      <div className="aurora-vignette absolute inset-0" />
    </div>
  )
}
