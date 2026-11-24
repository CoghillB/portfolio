// Architectural studio backdrop: deep matte canvas, restrained top-light
// falloff, whisper-quiet hairline grid, and fine print-like film grain.
export default function Backdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-base">
      <div className="studio-light absolute inset-0" />
      <div className="grid-bg absolute inset-0 opacity-45 [mask-image:radial-gradient(ellipse_70%_55%_at_50%_10%,black_10%,transparent_75%)]" />
      <div className="studio-grain absolute inset-0" />
    </div>
  )
}
