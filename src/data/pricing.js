// Single source for every published price and plan.
//
// Change a number here and it changes everywhere it appears — the hero, the
// pricing page, and the proposal generator once that lands. Nothing should
// hardcode a price anywhere else; that is the whole point of this file.
//
// Plan contents live here too, not in the pricing component. The proposal
// generator needs the same scope text the pricing page shows, and two copies of
// it would drift — at which point a proposal promises something the page
// doesn't, or the reverse.
//
// All amounts are CAD. Never render one without the currency: silently mixing
// CAD and USD is a defect, and some figures this business quotes against (e.g.
// published cost-per-lead benchmarks) are USD.

export const CURRENCY = 'CAD'

// Formats to "$2,500". Takes the amount only, so the currency label stays an
// explicit decision at the call site rather than something a reader assumes.
export const formatPrice = (amount) => `$${amount.toLocaleString('en-CA')}`

// ---------------------------------------------------------------------------
// One-off builds
// ---------------------------------------------------------------------------

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

export const BUILD_MULTI_LOCATION = { amount: 6500 }

// Custom work and web apps. The only tier where "from" is honest rather than
// evasive, because the scope genuinely isn't fixed.
export const BUILD_CUSTOM_FROM = { amount: 12000 }

// Note there is deliberately no founder rate in this file. It is off-menu — a
// private trade for a case study release, a review and a referral on the first
// couple of proof builds — and it must never render as a published tier. Adding
// it here would put it in the client bundle.
export const BUILD_TIERS = [
  {
    id: 'standard',
    name: 'The Contractor Site',
    tagline: `A ${BUILD_STANDARD.pages}-page site for a single-location trade business.`,
    amount: BUILD_STANDARD.amount,
    // "flat" not "starting from" — the whole positioning is that this is a
    // fixed price, and "starting from" quietly reintroduces the quote.
    priceNote: 'flat',
    featured: true,
    features: [
      `${BUILD_STANDARD.pages} pages: home, services, service areas, about, contact, gallery`,
      'Quote request form, wired up and tested',
      'Built for phones first',
      'Your service areas and trades set up on each page',
      'Google Business Profile configured',
      'Accessibility pass on every page',
      'Domain, hosting and email set up for you at launch',
    ],
  },
  {
    id: 'multi-location',
    name: 'Multi-Location',
    tagline: 'For more than one location or service area to represent separately.',
    amount: BUILD_MULTI_LOCATION.amount,
    priceNote: 'flat',
    featured: false,
    features: [
      'Everything in The Contractor Site',
      'A page per location or service area',
      'Separate contact routing per location',
      'Location-specific Google Business Profiles',
    ],
  },
  {
    id: 'custom',
    name: 'Custom & Web Apps',
    tagline: 'Booking systems, dashboards, calculators, e-commerce.',
    amount: BUILD_CUSTOM_FROM.amount,
    priceNote: 'and up',
    featured: false,
    features: [
      'Scoped and priced in writing before anything starts',
      'Custom features and third-party integrations',
      'Built to grow with the business',
    ],
  },
]

// ---------------------------------------------------------------------------
// Monthly care plans
// ---------------------------------------------------------------------------

// Annual prepay: pay for 10 months, get 12. That is 2/12 off, i.e. 16.7%.
export const ANNUAL_PREPAY_MONTHS = 10
export const MONTHS_PER_YEAR = 12
export const annualPrice = (monthly) => monthly * ANNUAL_PREPAY_MONTHS
export const ANNUAL_PREPAY_DISCOUNT_PCT = (
  ((MONTHS_PER_YEAR - ANNUAL_PREPAY_MONTHS) / MONTHS_PER_YEAR) *
  100
).toFixed(1)

// Care ($179) is the recommended default, and it is centred on the page. Most
// clients are expected to land here rather than on Essentials.
//
// Essentials is deliberately thin, and that is honest rather than a gap to fill.
// These price bands came from the WordPress maintenance market, where the
// recurring story is "we patch your plugins so you don't get hacked". On a
// static stack that threat surface barely exists — good for margin, but it means
// Essentials genuinely has less to point at. Do not invent line items to make
// the column look fuller. The real value is being reachable and making changes
// fast, and that lives in Care.
//
// Essentials contains NO human labour. Every item in it runs unattended. If a
// line ever needs Brayden to do something, it does not belong in this tier.
export const CARE_PLANS = [
  {
    id: 'essentials',
    name: 'Essentials',
    amount: 99,
    tagline: 'For a site that genuinely never changes. Everything here runs automatically.',
    recommended: false,
    features: [
      'Managed hosting included',
      'Uptime and SSL monitoring, with alerts',
      'Automated backups with a tested restore',
      'Dependency updates and security patching',
      'Monthly check that your forms are still delivering',
      'Page speed budget check',
      'Monthly report',
    ],
    excludes: ['Content edits of any kind'],
  },
  {
    id: 'care',
    name: 'Care',
    amount: 179,
    tagline: 'For most people. Unlimited edits, and you can actually reach me.',
    recommended: true,
    features: [
      'Everything in Essentials',
      'Unlimited content edits — prices, hours, services, photos, text',
      'Individual edits up to about 30 minutes each',
      'No limit on how many you send',
    ],
    // Stated to the visitor, not just tracked internally. The task cap is what
    // keeps this tier profitable, and enforcing a limit the client was never
    // told about turns a scope boundary into an argument.
    excludes: ['Custom development', 'Graphic design', 'Writing your content for you'],
  },
  {
    id: 'growth',
    name: 'Growth',
    amount: 299,
    tagline: 'For a business actively adding services, locations or work to show off.',
    recommended: false,
    features: [
      'Everything in Care',
      'New pages and posts built, not just edits to existing ones',
      'Core Web Vitals monitoring',
      'Priority response',
      'A strategy call every quarter',
    ],
    excludes: ['Custom development', 'Graphic design', 'Writing your content for you'],
  },
]
