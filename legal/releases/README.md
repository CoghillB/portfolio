# legal/releases/

Where signed releases are filed, and who files them.

**Brayden files them, at offboarding, before anything is published.** There is no
one else, which is exactly why it's a checklist item (`../checklists/client-offboarding.md`)
rather than something to remember.

## ⚠️ Signed releases do not go in this repository

**This repo is public and deploys to GitHub Pages.** A signed release carries a
handwritten signature, a named individual, and their job title — personal
information under BC PIPA, belonging to someone who agreed to a case study, not
to having their signature published.

The same rule `proof/README.md` applies to client data applies here: **commit the
pointer, not the document.**

### Where the signed copies live

Outside this repo, in a backed-up location. Record the actual location in
`index.md` so a future you can find it without guessing.

Requirements for wherever that is:

- Backed up — a signed release that only exists on one laptop is one failure away
  from a case study that has to be taken down
- Retained as long as the case study is published, plus a reasonable period after.
  The evidence has to outlive the claim
- Findable by reference ID

## index.md — what goes in the repo

A pointer record with no personal information: reference ID, business name, date
signed, what was granted, and where the signed copy lives. **No signatory name, no
signature image, no scan.**

A business name is company information rather than personal information, and it's
going to be public in the case study anyway. But if a client hasn't yet agreed to
be named publicly, use the reference ID alone until they have.

## Reference IDs

`REL-<year>-<nn>` — `REL-2026-01`, `REL-2026-02`. Sequential, never reused. Case
study front matter points at one of these (see the publication gate spec in
`../checklists/client-offboarding.md`).

## If a client revokes

The release template promises removal from anything Brayden controls within **10
business days**.

- [ ] Unpublish the case study, and anything reusing the quote — proposals, social
      posts, the pricing page
- [ ] Mark the `index.md` row revoked, with the date. **Don't delete the row** —
      the record that permission once existed and was withdrawn is itself worth
      keeping
- [ ] Remove the client's rows from section F of `../claims-log.md`
- [ ] Retain the signed release itself. It's the evidence that publication was
      authorised at the time

> Not legal advice. Retention periods in particular are worth confirming with a BC
> privacy lawyer — see `../open-questions.md`.
