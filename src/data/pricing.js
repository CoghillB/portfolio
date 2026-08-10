// Single source for every published price.
//
// Change a number here and it changes everywhere it appears — the hero, the
// pricing page, and the proposal generator once that lands. Nothing should
// hardcode a price anywhere else; that is the whole point of this file.
//
// All amounts are CAD. Never render one without the currency: silently mixing
// CAD and USD is a defect, and some of the figures this business quotes against
// (e.g. published cost-per-lead benchmarks) are USD.

export const CURRENCY = 'CAD'

// The standard productized build: a fixed-scope contractor site.
//
// `amount` moves 2500 -> 3500 once THREE case studies of real client work are
// published. That is a trigger, not a date — and it counts real client work
// only, not demos or self-directed projects. As of now there are zero.
//
// `pages` is the fixed scope: home, services, service areas, about, contact
// with quote form, gallery. Keep it in step with the build template — if the
// template grows a seventh page type, that is a change to what $2,500 buys, not
// a detail.
export const BUILD_STANDARD = {
  amount: 2500,
  pages: 6,
}

// Multi-location: more than one service area or storefront to represent.
export const BUILD_MULTI_LOCATION = {
  amount: 6500,
}

// Custom work and web apps. Quoted, and deliberately open-ended upward — this
// is the only tier where "from" is honest rather than evasive.
export const BUILD_CUSTOM_FROM = {
  amount: 12000,
}

// Formats to "$2,500". Takes the amount only, so the currency label stays an
// explicit decision at the call site rather than something a reader has to
// assume.
export const formatPrice = (amount) => `$${amount.toLocaleString('en-CA')}`
