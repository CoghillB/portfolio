// Route paths, and the one safe way to compare against them.
//
// GitHub Pages serves each pre-rendered route as a directory (see
// scripts/generate-spa-fallbacks.mjs), so it 301s /portfolio to /portfolio/.
// The trailing-slash form is what every real visitor and crawler lands on in
// production, even though the dev server answers /portfolio directly.
//
// React Router normalizes that trailing slash when matching <Route path>, so
// the right page renders either way — but a plain `pathname === '/portfolio'`
// comparison does not, and silently takes the wrong branch in production only.
// Always compare through isPortfolioRoute / normalizePath.
export const BUSINESS_ROUTE = '/'
export const PORTFOLIO_ROUTE = '/portfolio'
export const PRIVACY_ROUTE = '/privacy'

export const normalizePath = (pathname) => pathname.replace(/\/+$/, '') || '/'

export const isPortfolioRoute = (pathname) => normalizePath(pathname) === PORTFOLIO_ROUTE

// The routes that actually render the scrolling sections the nav and footer
// anchors point at. Everything else (currently just /privacy) is a standalone
// page, where `#pricing` matches no element on the page: clicking it would
// silently do nothing. Navbar and Footer use this to decide whether an anchor
// is a same-page scroll or a trip back to the business page.
const SECTION_ROUTES = new Set([BUSINESS_ROUTE, PORTFOLIO_ROUTE])

export const isSectionRoute = (pathname) => SECTION_ROUTES.has(normalizePath(pathname))
