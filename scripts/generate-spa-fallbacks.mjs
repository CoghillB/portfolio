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
// The route list lives in scripts/prerender-routes.mjs so verify-dist.mjs can
// check the same set this script writes.
//
// Note "/web-development" is no longer a rendered route — the web-design page
// moved to "/" — but it stays in the list so the old URL still answers HTTP 200
// for existing Google Ads destinations and indexed links before React redirects
// it to root.
import { existsSync, mkdirSync, copyFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { PRERENDER_ROUTES as routes } from './prerender-routes.mjs'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const dist = join(root, 'dist')
const source = join(dist, 'index.html')

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
