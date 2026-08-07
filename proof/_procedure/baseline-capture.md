# Pre-launch baseline capture

Run this **before** a client site goes live. It cannot be run afterwards.

Budget ~1–2 hours. That is the entire cost of keeping a future before/after
statement defensible; skipping it forfeits the possibility permanently.

---

## 0 · Before you start

- [ ] Confirm the new site has **not** launched yet. Write the confirmed
      pre-launch status and the date into the baseline `README.md`
- [ ] Confirm what "launch" means for this client — DNS cutover, or the moment
      the new site is publicly reachable at all. Ambiguity here is how a
      baseline gets captured a week late
- [ ] Get access you will need *now*, not mid-capture: analytics, Search
      Console, form/CRM inbox, call tracking if any
- [ ] Create `proof/<client>/baseline-<YYYY-MM>/` and copy
      `baseline-index-template.md` into it as `README.md`

## 1 · Establish which case this is

**Case A — replacing an existing website.** There is a real before state.
Capture everything below.

**Case B — the client has no prior website** (new business, or first site).
There is no traffic history to capture, and that is fine: **a documented zero is
still evidence.** Record explicitly that there was no prior site, no prior
traffic, and a form submission volume of zero, with the date. That record is
what later supports a measurement like *"in the first 90 days after launch the
site received N quote requests"* — a measurement of what happened, not a
comparison claim about what the site caused.

Write down which case applies before capturing. It changes what the evidence can
later support, and getting this wrong is how an unsupportable comparison gets
written months later in good faith.

## 2 · Form submission volume

- [ ] Count over a **defined window** (last 30 and 90 days if available)
- [ ] Record the window explicitly — a count with no window is meaningless
- [ ] Note the source: form inbox, CRM, spam folder included or not
- [ ] Export or screenshot the underlying list, **redacting personal
      information** — you need the count and the dates, never the leads
- [ ] Case B: record `0` with a note that no form existed

## 3 · Call volume

- [ ] Capture if available at all — call tracking, phone bill, client's own count
- [ ] **If unavailable, record "not available" and why.** An explicit
      unavailable is evidence; a blank field is ambiguous and unusable later
- [ ] If the number is the client's own recollection, label it as an **estimate
      by the client**, not a measurement. Never promote a recollection to a
      measured figure

## 4 · Page speed / Core Web Vitals

- [ ] LCP, INP, CLS
- [ ] Record the **tool**, and the run conditions: mobile or desktop, throttling,
      lab or field data. The same page yields very different numbers across
      these, so a figure without conditions cannot be compared to anything
- [ ] Run 3 times and record all three — single runs are noisy enough to
      manufacture an improvement on their own
- [ ] Save the raw output (JSON export or full screenshot), not just the score

## 5 · Search visibility

- [ ] Whatever is genuinely obtainable. Do not invent precision here
- [ ] Indexed page count
- [ ] If Search Console access exists: impressions and clicks over a defined
      window, branded vs non-branded if separable
- [ ] Screenshot with the date range visible in the frame
- [ ] Case B: record that the domain was not indexed, with the date checked

## 6 · Analytics snapshot

- [ ] Sessions, traffic sources, top pages over a defined window
- [ ] Export raw where possible
- [ ] Note the analytics platform and its timezone setting — a timezone
      mismatch silently shifts every window you later compare against
- [ ] Case B: record that no analytics existed

## 7 · Close out

- [ ] Baseline `README.md` complete: every metric has value, window, tool,
      timestamp
- [ ] Unavailable items recorded as unavailable **with the reason**
- [ ] Run the privacy checklist in `proof/README.md` before committing
- [ ] Add a row to `legal/claims-log.md`: what evidence exists, where it lives,
      date obtained
- [ ] Schedule the matching post-launch capture. **Use the same tools, the same
      window length, and the same run conditions** — a before/after comparison
      across different methods is not a comparison
- [ ] Confirm a signed release is on file or in progress before any of this is
      published (`legal/templates/testimonial-release.md`)

---

## What this evidence does and does not license

**Supports:** *"Form submissions went from 4 to 19 per month, measured in the
client's CRM over the 90 days before and after launch."* A measurement, with its
method, that a reader could verify.

**Does not support:** *"We doubled their leads."* Even when the arithmetic is
right. It attributes causation the measurement cannot establish, and drops the
window and method that make the figure meaningful.

**Never supports:** any statement about what a *future* client should expect. A
single measured result is not a basis for a prediction, and presenting it as one
is a performance representation requiring substantiation that does not exist.

When writing the case study, state what was measured and how. Let the reader
draw the conclusion.
