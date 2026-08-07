# Baseline — <CLIENT> — <YYYY-MM>

Copy this file into `proof/<client>/baseline-<YYYY-MM>/README.md` and fill it in.
Leave nothing blank: an unavailable metric is recorded as **not available** with
a reason. A blank field is unusable as evidence because it cannot be
distinguished from an omission.

## Context

| | |
|---|---|
| Client | |
| Trade / sector | |
| Case | **A** (replacing an existing site) / **B** (no prior website) |
| New site launched at time of capture? | **No** — confirmed on <DATE> |
| What "launch" means here | e.g. DNS cutover to the new host |
| Captured by | |
| Capture date(s) | |

## Metrics

Every row needs all four columns filled. `value + window + tool + timestamp`.

| Metric | Value | Measurement window | Tool | Captured at | Artifact file |
|---|---|---|---|---|---|
| Form submissions (30d) | | | | | |
| Form submissions (90d) | | | | | |
| Call volume | | | | | |
| LCP (run 1 / 2 / 3) | | | | | |
| INP (run 1 / 2 / 3) | | | | | |
| CLS (run 1 / 2 / 3) | | | | | |
| Indexed pages | | | | | |
| Search impressions | | | | | |
| Search clicks | | | | | |
| Sessions | | | | | |
| Traffic sources | | | | | |
| Top pages | | | | | |

### Page speed run conditions

Required — the same page produces very different numbers across these, so a
figure without them cannot be compared to the post-launch capture.

- Device profile (mobile / desktop):
- Throttling:
- Lab or field data:
- URL tested:

### Analytics platform

- Platform:
- Timezone setting:
- Account / property:

## Not available

List every metric that could not be captured **and why**. This section being
non-empty is normal and expected.

| Metric | Why unavailable |
|---|---|
| | |

## Estimates vs measurements

Anything here that came from the client's recollection rather than a tool.
**These are not measurements and cannot support a published figure.**

| Item | Client's estimate | Why no measurement exists |
|---|---|---|
| | | |

## Artifacts in this folder

| File | What it is | Tool | Captured at |
|---|---|---|---|
| | | | |

## Privacy check

Per `proof/README.md`, before committing:

- [ ] No client lead data, customer names, emails or phone numbers included
- [ ] No client revenue or traffic figures the client would object to being public
- [ ] Anything sensitive is stored outside this public repo, with its location
      recorded here instead of the data itself

Storage location for anything held outside the repo:

## Follow-ups

- [ ] Row added to `legal/claims-log.md`
- [ ] Post-launch capture scheduled for: <DATE>
- [ ] Post-launch capture will use the **same** tools, window length and run
      conditions recorded above
- [ ] Signed release on file / in progress: <reference or issue link>
