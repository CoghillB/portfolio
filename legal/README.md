# legal/

Templates, records and open questions behind anything Coghilldev says in public.

**Signed releases are filed by Brayden, at client offboarding, before anything is
published — outside this repository. See `releases/README.md`.**

| Path | What it is |
| --- | --- |
| `claims-log.md` | Every public claim and its evidence. Add a row when you write a claim, not later |
| `checklists/client-offboarding.md` | Run at handover. Contains the blocking release step |
| `templates/testimonial-release.md` | The release. One page, plain language, sent to every client |
| `templates/privacy-policy.md` | Reusable privacy policy partial for client builds |
| `releases/README.md` | Where signed releases live, and why not here |
| `releases/index.md` | Pointer records for signed releases. No personal information |
| `open-questions.md` | Privacy questions that are **open**. Nothing here is resolved |

## The two rules worth knowing without opening a file

**Before publishing a claim:** can you point to evidence for this exact claim that
existed *before* you wrote it? If not, soften it to an opinion or delete it. Then
add a row to `claims-log.md`.

**Before publishing anything about a client:** is there a signed, dated release on
file, and does its date precede publication? Permission obtained afterwards does
not fix a testimonial already published.

## What lives here vs. in the app

This directory holds source documents and records. The **published** privacy
policy is rendered from `src/data/legal.js` via
`src/components/sections/Privacy.jsx`. If `open-questions.md` and
`src/data/legal.js` disagree about which processors receive personal information,
that's a compliance bug rather than a docs inconsistency.

> Not legal advice. The templates are worth one review by a BC lawyer — they're
> reused for every client, so a single review covers all of them.
