// The client-side routes that need a pre-rendered directory in dist/.
//
// Shared by generate-spa-fallbacks.mjs (which writes them) and verify-dist.mjs
// (which checks they were written). Keeping the list in one place is the point:
// when these drifted apart previously, a route could stop being pre-rendered
// without anything failing.
//
// Keep in sync with the <Route> paths in src/App.jsx. "/" is covered by
// dist/index.html and does not need an entry.
export const PRERENDER_ROUTES = ['/portfolio', '/web-development', '/privacy']
