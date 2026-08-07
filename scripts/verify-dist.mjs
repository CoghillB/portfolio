// Fail the build if dist/ is missing anything the live site depends on.
//
// This runs as the last step of `npm run build`, so a broken build cannot be
// deployed. It exists because the failures it catches are silent: the deploy
// succeeds, GitHub reports green, and the site is quietly broken.
//
// The one that matters most is CNAME. GitHub Pages reads the custom domain from
// a CNAME file in the published branch. Deploy without it and coghilldev.com
// stops resolving to the site — a full outage that looks like a successful
// deploy from every angle except visiting the domain.
import { existsSync, readFileSync, readdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { PRERENDER_ROUTES } from './prerender-routes.mjs'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const dist = join(root, 'dist')
const errors = []

// relPath is always written with forward slashes so the message reads the same
// on Windows and in CI; join() handles the real separator.
const require = (relPath, why) => {
  if (!existsSync(join(dist, ...relPath.split('/')))) {
    errors.push(`missing dist/${relPath} — ${why}`)
  }
}

require('index.html', 'the site root')
require('CNAME', 'GitHub Pages reads the custom domain from this file; without it coghilldev.com stops resolving')
require('.nojekyll', 'without it Pages runs Jekyll and drops files and directories beginning with an underscore')
require('404.html', 'the custom 404 handler')

// Each client-side route needs its own directory so Pages answers HTTP 200 on a
// direct hit. A 404 still renders correctly in a browser, but crawlers and the
// Google Ads review bot read the status code, not the rendered page.
for (const route of PRERENDER_ROUTES) {
  const rel = `${route.replace(/^\//, '')}/index.html`
  require(rel, `pre-rendered route ${route} must answer HTTP 200 on a direct hit`)
}

// A CNAME holding the wrong domain is worse than a missing one: it silently
// hands the site to a domain that isn't configured for it.
const cnamePath = join(dist, 'CNAME')
if (existsSync(cnamePath)) {
  const cname = readFileSync(cnamePath, 'utf8').trim()
  if (cname !== 'coghilldev.com') {
    errors.push(`dist/CNAME contains "${cname}", expected "coghilldev.com"`)
  }
}

// Catches a build that emitted HTML but no JS/CSS — the page would load as a
// blank shell, which is easy to miss in a CI log full of green checks.
const assetsDir = join(dist, 'assets')
if (!existsSync(assetsDir)) {
  errors.push('missing dist/assets — the build produced no JS or CSS bundles')
} else {
  const assets = readdirSync(assetsDir)
  if (!assets.some((f) => f.endsWith('.js'))) errors.push('dist/assets contains no .js bundle')
  if (!assets.some((f) => f.endsWith('.css'))) errors.push('dist/assets contains no .css bundle')
}

if (errors.length) {
  console.error('[verify-dist] build output is not deployable:\n')
  for (const e of errors) console.error(`  ✗ ${e}`)
  console.error('\nRefusing to continue. Deploying this would break the live site.')
  process.exit(1)
}

console.log(`[verify-dist] ok — root, CNAME, .nojekyll, 404.html, assets, and ${PRERENDER_ROUTES.length} pre-rendered routes present`)
