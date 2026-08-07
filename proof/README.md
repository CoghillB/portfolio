# proof/

Evidence store for anything Coghilldev might one day say in public.

## Why this directory exists

Canada's Competition Act requires an **adequate and proper test made before the
claim** for any performance representation. "Before" is the operative word — a
measurement taken after publishing does not cure the claim. So the sequence
matters as much as the number, and this directory exists to record the sequence.

The practical consequence: **a client's pre-launch state is only capturable
once.** After launch it is gone permanently, and with it every possibility of a
defensible before/after statement about that build.

## Layout

```
proof/
  _procedure/
    baseline-capture.md        the checklist to run before a client site launches
    baseline-index-template.md  copy this into each client's baseline folder
  <client>/
    baseline-<YYYY-MM>/
      README.md               filled-in copy of the index template
      <raw exports, screenshots, JSON>
    post-launch-<YYYY-MM>/    the matching "after", same discipline
```

## Rules

1. **Raw artifacts, not retyped summaries.** Store the export, the screenshot,
   the JSON. A hand-copied figure is evidence of your typing, not of what the
   tool showed.
2. **Every metric carries four things**: value, measurement window, tool used,
   capture timestamp. A number without its window and method is not evidence.
3. **Never edit a captured artifact.** If a capture was wrong, capture again
   into a new dated folder and note why. Editing destroys the thing that makes
   it evidence.
4. **Log it in `legal/claims-log.md`** once evidence exists, so the claim and its
   substantiation are linked rather than merely both existing.

## ⚠️ Before committing anything here

**This repository is public and deploys to GitHub Pages.** Client analytics,
form submissions and lead data are the client's confidential business
information, and some of it is personal information subject to BC PIPA.

Before every commit to `proof/`:

- [ ] Does this contain client lead data, customer names, email addresses, or
      phone numbers? → **Do not commit.** Store outside the repo and commit only
      the index describing where it lives.
- [ ] Does this contain client revenue or traffic figures the client would not
      want public? → same.
- [ ] Is the client's permission on file for anything intended for publication?
      See `legal/templates/testimonial-release.md` (issue A1).

Aggregate technical measurements (page speed, Core Web Vitals) are generally
safe. Anything derived from real people generally is not.

**A public repo is not a filing cabinet.** When in doubt, keep the artifact out
and commit the pointer.
