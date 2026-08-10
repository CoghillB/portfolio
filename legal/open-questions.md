# legal/open-questions.md

Questions about Coghilldev's privacy obligations that are **open**. Nothing here
has been answered, and nothing here should be treated as answered.

## Why this file exists rather than a conclusion

Issue A2 published a privacy policy for coghilldev.com. Writing that policy
surfaced a set of cross-border questions — personal information collected on
this site leaves Canada — and the honest position is that they are unresolved.

The failure mode this file exists to prevent is the comfortable answer: writing
"this is probably fine" into a policy, shipping it, and having that sentence
become the record of a decision nobody actually made. An open question written
down is a liability you can see. An open question papered over is one you find
out about from someone else.

**Every item below is unresolved. Do not close one by reasoning about it here.**
These are the questions worth an hour of a BC privacy lawyer's time. Close them
with an answer from someone qualified to give one, record who gave it and when,
and only then change the policy.

---

## The four open questions

### 1. EmailJS — does routing form data to a US processor engage PIPEDA?

- **What it does:** every contact form submission on coghilldev.com is sent to
  EmailJS, which relays it to the business inbox. See
  `src/components/sections/Contact.jsx`.
- **What it receives:** name, email address, phone number, message.
- **Where:** United States.
- **The question:** BC PIPA governs Coghilldev's intra-provincial activity. Does
  routing personal information through a US-hosted processor make the activity
  something other than intra-provincial, and engage PIPEDA in addition to PIPA?
- **Status:** OPEN. Not answered.

### 2. Google Ads tag `AW-10816741322` — disclosure, or consent?

- **What it does:** loads on **every page** of coghilldev.com, unconditionally,
  before the visitor interacts with anything. Hardcoded in `index.html`.
- **What it receives:** IP address, browser and device details, page viewed.
- **Where:** United States.
- **The question, part one:** same cross-border question as EmailJS.
- **The question, part two, and it is separate:** is a disclosure in the privacy
  policy sufficient, or does this require a **consent mechanism** — the visitor
  agreeing before the tag fires, rather than being told after? These are
  different obligations and the second is not satisfied by the first.
- **Status:** OPEN, both parts. Not answered.
- **Note:** A2 explicitly did not build a cookie-consent banner, because
  building one would presume the answer to part two. A2 also did not remove the
  tag — it may be load-bearing for campaigns already running, and that is
  Brayden's call, not a side effect of a compliance issue.

### 3. Cloudflare Pages / Workers — data residency for client builds

- **What it does:** the client-build stack (issue G1) serves client sites from
  Cloudflare Pages and handles their lead forms through a Cloudflare Worker.
- **What it receives:** whatever the client's form collects — typically name,
  contact details, and a description of the job.
- **Where:** Cloudflare's edge. Canadian data residency is **not guaranteed**;
  lead data may transit or rest outside Canada.
- **The question:** what does that require of a client's privacy policy, and
  does it require anything of Coghilldev as the party that chose the stack? This
  is an open question for **every client policy**, not only Brayden's.
- **Status:** OPEN. Not answered.
- **Consequence while open:** the client template at
  `legal/templates/privacy-policy.md` carries this as a disclosure to the
  client's visitors, not as a resolved position.

### 4. Any future CRM — resolve *before* adoption

- **What it would do:** hold client and prospect contact records.
- **Where:** unknown, because none has been adopted.
- **The question:** where it stores data, under whose law, and what its adoption
  would require of both this policy and every client policy.
- **Status:** OPEN, and deliberately so. Resolve before adopting a CRM, not
  after. Migrating personal information into a system and *then* asking where it
  lives is the expensive order to do this in.

---

## Processors that receive personal information

Everything found in the repository that receives personal information from a
visit to coghilldev.com. This mirrors `thirdParties` in `src/data/legal.js`,
which is what the published policy renders — if the two disagree, one of them is
a compliance bug.

| Processor | Found in | Receives | Hosted | Cross-border status |
|---|---|---|---|---|
| **EmailJS** | `src/components/sections/Contact.jsx`, `emailjs-com` in `package.json` | Name, email, phone, message | United States | **Open — question 1** |
| **Microsoft (Outlook)** | Not in the repo. It is the EmailJS service the form is connected to (Outlook, authenticated as `brayden.coghill@coghilldev.com`) | The delivered message and everything in it | Microsoft data centres; the region holding this mailbox has **not been confirmed** | **Open** — confirm the mailbox region, then record whether it raises the same question as 1 |
| **Google — Google Ads tag `AW-10816741322`** | `index.html` | IP address, browser and device details, page viewed | United States | **Open — question 2, both parts** |
| **Google — Google Fonts** | `index.html` (`fonts.googleapis.com`, `fonts.gstatic.com`) | IP address, browser details, on every page load | United States | **Open.** A font request is a request: it carries an IP address to a US server whether or not anyone thinks of it as tracking. Self-hosting the fonts would remove this processor entirely and is worth pricing against the effort. |
| **GitHub Pages** | `.github/workflows/deploy.yml`, `public/CNAME` | IP address and request logs for every page served | United States (GitHub / Microsoft) | **Open.** The site cannot be served without a host, so this one is unavoidable rather than optional — but it is still a US processor and the policy names it. |
| **Cloudflare Pages / Workers** | Not in this repo — the client-build stack, issue G1 | Client lead form submissions | Cloudflare edge; residency not guaranteed | **Open — question 3** |

### Not a processor, recorded so nobody has to re-derive it

- **Theme preference** (`localStorage` key `theme`, set in `index.html` and
  `src/context/ThemeContext.jsx`) stays in the visitor's own browser and is
  never transmitted. It is not a disclosure and does not belong in the table.

---

## Answered questions

None yet. When one is answered, move it here with the date, who answered it, and
what changed in the policy as a result — not just the conclusion. A conclusion
without its source is the same problem this file was written to avoid.

---

> This file is scaffolding for a conversation with a lawyer, not legal advice,
> and nothing in it is a legal opinion.
