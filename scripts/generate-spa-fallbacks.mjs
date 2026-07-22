// Pre-render GitHub Pages fallbacks for client-side routes.
//
// GitHub Pages is static hosting with no server-side rewrites, so a deep link
// like /web-development has no matching file and returns HTTP 404. The
// 404.html redirect trick (see public/404.html) makes the page *look* like it
// loads in a browser, but the raw HTTP response is still 404 — which crawlers
// (e.g. the Google Ads review bot) flag as "destination not working".
//
// Fix: after `vite build`, copy the built index.html into a directory for each
// route so GitHub Pages serves that path directly with HTTP 200. Because the
// build uses an absolute base ("/"), the copied shell still loads its assets
// from any depth, and React Router takes over routing on the client.
//
// Keep `routes` in sync with the <Route> paths in src/App.jsx. "/" is already
// covered by dist/index.html and does not need an entry here.
import { existsSync, mkdirSync, copyFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const dist = join(root, 'dist')
const source = join(dist, 'index.html')

const routes = ['/web-development']

if (!existsSync(source)) {
  console.error('[spa-fallbacks] dist/index.html not found — run `vite build` first.')
  process.exit(1)
}

for (const route of routes) {
  const dir = join(dist, route)
  mkdirSync(dir, { recursive: true })
  copyFileSync(source, join(dir, 'index.html'))
  console.log(`[spa-fallbacks] wrote ${route.replace(/^\//, '')}/index.html (HTTP 200)`)
}
