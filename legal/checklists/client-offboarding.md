# Client offboarding checklist

Run at handover, while the relationship is warm and the project is fresh.

Copy this into the client's record and tick it off. The release step is the one
that expires: asking six months later, out of the blue, is a much harder
conversation and the most likely route to never getting one.

---

## 1. Handover

- [ ] Client can log in and make their own edits, and has done it once with you
      watching — not just been shown
- [ ] Domain, hosting and email confirmed working and in the client's name where
      they should be
- [ ] Contact and quote forms tested end to end, with the client confirming a test
      submission arrived
- [ ] Client knows how to reach you and what response time they can expect

## 2. Care plan

- [ ] Care plan presented as **included by default**, with an explicit opt-out —
      not offered as an upsell
- [ ] Tier recorded, or the opt-out recorded as an opt-out
- [ ] Annual prepay option presented
- [ ] Recorded in the attach-rate log (#30). **Log it even if they declined** — a
      missing decline makes the denominator wrong and the attach rate meaningless

## 3. 🔒 Case study release — BLOCKING

**Nothing about this client gets published until this is done.** Not a quote, not
their name, not their logo, not a screenshot, not a number. Publishing a
testimonial without written permission obtained *beforehand* is reviewable
conduct under Competition Act s. 74.02, and a release signed afterwards does not
fix it.

- [ ] Sent `legal/templates/testimonial-release.md`
- [ ] Signed copy received, **dated**, with the signatory's name and role
- [ ] The signature date is **before** any publication date
- [ ] Every item is either ticked or clearly left blank — no ambiguous boxes
- [ ] Any figures in section 2 are itemised, with a source for each
- [ ] Filed per `legal/releases/README.md` — **not committed to this repository**
- [ ] Row added to `legal/releases/index.md`
- [ ] Any permitted figures added to section F of `legal/claims-log.md`, each with
      its own evidence

**If the client declines:** that's a perfectly normal outcome. Record the decline
so nobody asks again or assumes consent later, and move on. A declined release
costs nothing; an assumed one is the expensive kind.

**If the client hasn't replied:** it is not signed. An unanswered email is not
permission.

## 4. Proof capture

- [ ] Post-launch measurement captured, if a pre-launch baseline exists — using
      the **same tools, window length and run conditions** as the baseline, or the
      comparison isn't one. See `proof/_procedure/baseline-capture.md`
- [ ] If no baseline was captured before launch, record that plainly. The case
      study can still carry qualitative work and a quote; it cannot carry measured
      before/after figures, and inventing them is the failure this whole workflow
      exists to prevent

## 5. Follow-ups

- [ ] Google review requested, if that was part of the arrangement
- [ ] Referral introduction requested, if that was part of the arrangement
- [ ] Actual build hours recorded against the 8–10 hour target (#34)
- [ ] Funnel record closed out with the outcome (#31)

---

## The publication gate — spec for #26 and #20

The release requirement has to be enforced by a check, not by memory. Neither the
case-study pipeline (#26) nor the claim linter (#20) exists yet, so this is the
contract they must implement.

**TODO (#26):** case study front matter must include:

```yaml
release: legal/releases/index.md#<reference-id>   # required, non-empty
metrics:
  - value: "19 quote requests/month"
    evidence: proof/<client>/post-launch-2026-09/   # required per metric
    window: "90 days"
    tool: "client CRM export"
```

**TODO (#20):** the linter must fail the build when:

1. A case study has a missing or empty `release:` field.
2. A `release:` value doesn't resolve to a real entry in
   `legal/releases/index.md`.
3. Any entry under `metrics:` lacks an `evidence:` pointer.
4. A case study contains a bare percentage or dollar figure with no adjacent
   source, or a dollar figure with no CAD/USD marker.

Until both land, this checklist is the only gate — which is exactly why the
release step above is marked blocking rather than merely recommended.

> Not legal advice. The Competition Act references are the reason for the
> sequence, not a substitute for a lawyer reading the release once.
