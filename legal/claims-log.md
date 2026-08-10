# Claims log

Every claim Coghilldev makes in public, and the evidence behind it.

## The rule

A performance representation requires an **adequate and proper test made before
the claim**. "Before" is the operative word: evidence gathered after publishing
does not cure the claim. This file exists to record the sequence, not just the
conclusion.

**Before publishing any sentence, ask: can I point to evidence for this exact
claim that existed before I wrote it?** If no — soften it to an opinion, or delete
it. If yes — add a row here.

Three things that are always claims, and are easy to miss:

- A **number**, including one in a badge, a chart, or a heading.
- A **superlative or comparison** — "most popular", "best value", "cheaper than
  an agency". These need substantiation like any other claim, and with nothing
  sold yet, none of them are available.
- A **service commitment** — "tested restore", "monthly report". Substantiable in
  principle, because it is about Coghilldev's own conduct, but only once the thing
  actually exists and is being done.

Currency is part of the claim. A figure without CAD/USD is a defect, and the
source list below deliberately mixes both.

---

## A. Pricing — facts about Coghilldev's own prices

The evidence for a price is that it is the published price and it is honoured.

| Claim as published | Evidence | Evidence location | Date obtained | Where published |
| --- | --- | --- | --- | --- |
| "$2,500 CAD" flat for a 6-page contractor site | The published price; honoured as quoted | `src/data/pricing.js` → `BUILD_STANDARD` | 2026-08-10 | Homepage first screen, pricing section |
| "$6,500" multi-location | Same | `src/data/pricing.js` → `BUILD_MULTI_LOCATION` | 2026-08-10 | Pricing section |
| "$12,000 and up" custom / web apps | Same. "and up" is honest here — scope genuinely isn't fixed | `src/data/pricing.js` → `BUILD_CUSTOM_FROM` | 2026-08-10 | Pricing section |
| "Published, not quoted" | Describes Coghilldev's own practice. True as long as prices stay on the page | The pricing section itself | 2026-08-10 | Homepage first screen |
| Care plans at "$99 / $179 / $299 CAD per month" | Published prices | `src/data/pricing.js` → `CARE_PLANS` | 2026-08-10 | Pricing section |
| Annual prepay "16.7% off" | Arithmetic: pay 10 months of 12 → 2/12 = 16.67% | `src/data/pricing.js` → `ANNUAL_PREPAY_DISCOUNT_PCT`, computed not hardcoded | 2026-08-10 | Pricing section |

## B. Conduct guarantees — promises about Coghilldev's own behaviour

These cost nothing to substantiate and are the intended substitute for
performance claims. **Their evidence is that Brayden actually does them.** If one
stops being true, the copy has to change — the claim does not get to outlive the
practice.

| Claim as published | Evidence | Evidence location | Date obtained | Where published |
| --- | --- | --- | --- | --- |
| "A reply to every message within one business day" | Brayden's stated commitment, confirmed | `promises` array in `src/components/sections/WebDev.jsx` | 2026-08-10 | Homepage first screen, "Working with me" |
| "You get the price in writing before I start" | Stated commitment, confirmed | Same | 2026-08-10 | Homepage first screen, "Working with me" |
| "You deal with me, not an account manager" | True by construction — sole proprietor, no staff | Same | 2026-08-10 | Homepage first screen, "Working with me" |
| "Based in Kelowna" | True | Same | 2026-08-10 | "Working with me" |
| Care: "individual edits up to about 30 minutes each" | The scope boundary as sold. Stated to the client rather than enforced silently | `src/data/pricing.js` → `CARE_PLANS` | 2026-08-10 | Pricing section |

> **Worth measuring rather than assuming.** The one-business-day reply is the only
> guarantee here that can quietly stop being true under load. Once #29 (task
> intake) and #31 (funnel) are running, actual response times become real
> evidence for it. Until then it rests on Brayden's word, which is legitimate but
> unmeasured.

## C. ⚠️ Published service commitments that depend on work not yet built

These are on the pricing page **now**. They are promises about Coghilldev's own
conduct, so they are substantiable in principle — but only once the system behind
them exists. Nobody has bought a plan yet, so nothing is owed to anyone today.
**The moment a plan is sold, each of these becomes a commitment that must be
deliverable that month.**

| Claim as published | What it needs to be true | Blocked on | Status |
| --- | --- | --- | --- |
| "Automated backups with a **tested restore**" | An actual restore performed and timed, plus a recurring restore test. "Tested" is the load-bearing word — an untested backup is not a tested restore | #27 | **Not yet true** |
| "Uptime and SSL monitoring, with alerts" | Monitoring configured per client domain, alerts reaching Brayden | #27 | **Not yet true** |
| "Monthly check that your forms are still delivering" | A synthetic end-to-end submission per site, on a schedule | #27 | **Not yet true** |
| "Page speed budget check" | Defined budget per site and a scheduled check | #27 | **Not yet true** |
| "Monthly report" | Auto-generated, auto-sent, zero manual assembly | #28 | **Not yet true** |
| Growth: "Core Web Vitals monitoring" | CWV tracked per site | #27 | **Not yet true** |
| Growth: "Priority response" | A defined SLA that differs from the standard one, and is met | #27, #29 | **Not defined yet** |
| "Google Business Profile configured" (build) | The setup checklist | #24 | Partly — checklist pending |
| "Accessibility pass on every page" (build) | The template's accessibility work and CI check | #34 | **Not yet true** |

**Do not sell a care plan before #27 lands.** That is not a process preference —
these lines are the product, and selling them before they exist is the one way a
conduct guarantee becomes an unsubstantiated claim.

## D. Third-party statistics cleared for use

Each traced to a named primary source. **Cite the source and date inline every
time.** Label US data as US data — most of it is, and Coghilldev sells in Kelowna.

None of these are currently published anywhere. This is the approved pool, not a
record of use. When one gets used, add its location to the last column.

| Figure | Claim text must name | Source | Source date | Currency / scope | Date traced | Where published |
| --- | --- | --- | --- | --- | --- | --- |
| 1,385 construction businesses with 1–19 employees, Kelowna CMA | Source + date | StatCan table 33-10-0663-01 | Dec 2022 | — | `[NEEDS DATE]` | Not published |
| Construction is Kelowna's largest sector by business count — 15.6% of with-employee businesses | Source + date | StatCan table 33-10-0663-01 | Dec 2022 | — | `[NEEDS DATE]` | Not published |
| Kelowna CMA population 254,605 | Source + date | StatCan table 17-10-0148-01 | Jul 2025 | — | `[NEEDS DATE]` | Not published |
| Kelowna building permits +19.2% (Jan–May 2026 vs 2025) | Source + date | StatCan table 34-10-0292-01 | 2026 | **CAD** | `[NEEDS DATE]` | Not published |
| 66% of Canadian small businesses cite lack of time as their greatest digital obstacle | Source + date + n | CFIB | 17 Dec 2025, n=2,478 | — | `[NEEDS DATE]` | Not published |
| 78% of Canadian small businesses already have a website | Source + date + n | CFIB | 17 Dec 2025, n=2,478 | — | `[NEEDS DATE]` | Not published |
| 62% of local business rejections caused by signs of inactivity | Source + date + n + **US** | BrightLocal | Jul 2026, n=1,227 | **US data** | `[NEEDS DATE]` | Not published |
| 75% of local buyers decide in under 30 minutes | Source + date + n + **US** | BrightLocal | Jul 2026, n=1,227 | **US data** | `[NEEDS DATE]` | Not published |
| 55%+ of home service customers expect a reply within 1 hour | Source + date + n + **US** | Jobber | 2026, n=1,050 | **US data** | `[NEEDS DATE]` | Not published |
| 20% of home service pros manage a reply within 1 hour | Source + date + n + **US** | Jobber | 2026, n=1,050 | **US data** | `[NEEDS DATE]` | Not published |
| BC residential renovation & repair market $14.98B/yr | Source + date | CHBA, from CMHC + StatCan | 2025 | **CAD** | `[NEEDS DATE]` | Not published |
| Home & Home Improvement cost per lead, paid search: $90.92 | Source + date + **USD** | LocaliQ | 1 Jun 2026 | **USD** | `[NEEDS DATE]` | Not published |
| 95.9% of home pages have detectable WCAG failures | Source + date | WebAIM Million | Feb 2026 | — | `[NEEDS DATE]` | Not published |

**`[NEEDS DATE]`** — these were traced to primary sources during the strategy
research, but the date that tracing happened isn't recorded. Fill it in: the whole
point of the log is that the evidence demonstrably predates the claim, and a
missing date is the one column that undermines the rest of the row. Ten minutes
of work, and only Brayden has the answer.

### The one safe framing that uses these

> "55% of your customers expect a reply within an hour. Only 20% of contractors
> manage it." — *Jobber, 2026, n=1,050. US data.*

Safe because it describes a gap in the **reader's** process, not an outcome
Coghilldev promises. It stops being safe the moment it's followed by an implied
"…and I'll fix that for you."

## E. Do not use — and why

Recorded so nobody rediscovers these and assumes they're fine.

| Rejected claim | Why it can't be used |
| --- | --- |
| "A $3,500 site costs about what 38 Google leads cost" | **Arithmetically wrong across currencies.** 3,500 ÷ 90.92 = 38.5, but the price is **CAD** and $90.92 is **USD** (LocaliQ, 1 Jun 2026). At ~1.37 the real figure is ~28. Usable only with the FX rate and its date named inline — and it needs recomputing against whatever the price actually is |
| "Only ~11% of Kelowna web firms publish prices" / "2 of 18" | Brayden's own unpublished count, and an **unsubstantiated competitor comparison** either way. Would need its method, sample definition and date recorded here first — and even then it's a comparison claim. Publishing prices is still the differentiator; just don't quantify competitors to make the point |
| Care plan market bands "$30–100/mo basic, $100–250/mo mid"; "SEO campaigns $750+/mo" | Unsourced. Fine as internal pricing reasoning, never publishable |
| "Most popular" / "Best value" on any tier | Factual claims about sales volume and comparative value. Nothing has sold. Removed in #16; the visual highlight and the word "Recommended" carry the same emphasis honestly |
| Anything from the four confirmed client projects | No signed release on file yet. See section F |
| Any before/after figure for Factum | It's a demo, not a client project — no client, no baseline, nothing to measure. See #25, #43 |
| Close rate of "one in five" | Explicitly unsourced. #31 replaces it with measured data |
| Care plan attach rate | Internal operating metric. Publishing it would be a claim about the business off a single-digit sample |

## F. Client case-study figures

One row per figure, added when a release is signed. **A figure needs both** a
signed release permitting its use **and** evidence that it's true — the release
covers permission, not accuracy.

| Client | Figure | Evidence | Evidence location | Date obtained | Release ref | Where published |
| --- | --- | --- | --- | --- | --- | --- |
| _(none yet)_ | | | | | | |

Four confirmed client projects could become case studies — Kelowna Creative, Cyan
Analytics, M&B Capital, Kerion (see the `work` array in
`src/components/sections/WebDev.jsx`). Each needs a signed release from
`legal/templates/testimonial-release.md` before anything about it is published.
**Three published case studies is the trigger for the $2,500 → $3,500 move**, so
this table is also the price gate.

No pre-launch baseline exists for any of them, because all four launched before
`proof/_procedure/baseline-capture.md` was written. They can still carry
qualitative case studies and quotes — they just can't carry measured before/after
figures. The next client can, if the baseline is captured before launch.

---

> Not legal advice. This is a record-keeping discipline, and it works only if a
> row is added at the same time as the claim.
