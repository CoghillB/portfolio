# Privacy policy template — client builds

A fill-in privacy policy for a client site built on the Astro + Cloudflare
starter (issue G1). Copy it into the client's site as a real page at a stable
route — `/privacy` — and link it from the site footer and from the point of
collection on every form.

**Nothing here is legal advice.** It is disclosure scaffolding: it makes the
client say out loud what their site actually does. If their situation is
unusual, they need a lawyer, not a template.

---

## How to use it

1. Copy everything below `--- POLICY STARTS HERE ---` into the client's page.
2. Replace every `{{PLACEHOLDER}}`. There is a checklist at the bottom.
3. Delete every `[OPTIONAL: ...]` block that does not apply, and delete the
   markers from the ones that do.
4. **Walk the site before publishing.** Open the network tab on a fresh page
   load and list every third-party host it talks to. Fonts, maps embeds, chat
   widgets, review carousels, booking iframes, analytics, pixels — each one is a
   recipient of the visitor's IP address, and each one belongs in the table. A
   policy that names only the form is wrong on most sites.
5. Send the filled draft to the client and get them to confirm the retention
   periods and the privacy contact **before** it goes live. Those are statements
   about how they run their business, not about how the site is built, and they
   are the two things a template cannot know.

### The rules that keep this honest

- **Describe what happens, not what sounds reassuring.** Delete any sentence
  that would still read fine if the underlying fact were the opposite.
- **Name recipients.** "Trusted third parties" names nobody and discloses
  nothing.
- **State a number for retention.** "As long as necessary" is not a retention
  period; it is a way of not stating one.
- **Do not promise security properties you have not verified.** "Encrypted in
  transit" is checkable. "Your data is safe with us" is not.

---

--- POLICY STARTS HERE ---

# Privacy Policy

_Last updated: {{LAST_UPDATED}}_

{{BUSINESS_NAME}} operates {{WEBSITE_DOMAIN}} from {{BUSINESS_CITY}},
{{BUSINESS_PROVINCE}}. Personal information collected through this website is
handled under {{PRIVACY_LAW}}.

> Default for a British Columbia business: _British Columbia's Personal
> Information Protection Act (PIPA)_. A client in Alberta, Quebec, or one whose
> activity crosses provincial or national borders may be under different or
> additional law. Confirm before publishing rather than inheriting this default.

## Who is responsible

{{PRIVACY_LAW}} requires a designated person responsible for how this business
handles personal information, and requires their contact details to be
published. For {{BUSINESS_NAME}} that is:

**{{PRIVACY_CONTACT_NAME}}**
{{PRIVACY_CONTACT_TITLE}}, {{BUSINESS_NAME}}
{{PRIVACY_CONTACT_EMAIL}}
{{PRIVACY_CONTACT_PHONE}}

Use that contact for anything on this page: a question, a request to see what we
hold about you, a correction, or a request to delete it.

## What we collect, and why

### When you use a form on this site

{{FORM_NAME}} collects: {{FORM_FIELDS}}.

We use it to {{FORM_PURPOSE}}. We do not use it for anything else, we do not add
you to a mailing list without asking, and we do not sell, rent or trade it.

[OPTIONAL — repeat this block for each additional form: quote request, booking,
newsletter signup, callback request. A site with three forms needs three
entries, because they collect different things for different reasons.]

### When you simply load a page

Loading a page here sends a request to the companies that host and serve the
site, and to any third-party content embedded in the page. Each receives your IP
address, your browser and device details, and which page you asked for. They are
listed in the next section.

[OPTIONAL — analytics or advertising: {{ANALYTICS_TOOLS}} runs on this site and
records which pages are viewed and where visitors arrived from. Say plainly
whether it runs on every page load or only after consent. If it runs
unconditionally, say that — do not imply a consent gate that does not exist.]

## Who else receives it

| Who | What they receive | Why | Where they are hosted |
|---|---|---|---|
| **Cloudflare** (Pages and Workers) | Your IP address and request details for every page; the full contents of any form you submit | It serves this website and handles form submissions | Cloudflare's global edge network — see the note below |
| **{{LEAD_DESTINATION}}** | Your form submission and everything in it | It is where enquiries are delivered and stored so we can answer them | {{LEAD_DESTINATION_REGION}} |
| [OPTIONAL] **{{CRM_NAME}}** | Your contact details and our correspondence with you | It is where we track enquiries and customers | {{CRM_REGION}} |
| [OPTIONAL] **{{ANALYTICS_TOOLS}}** | Your IP address, browser details, and pages viewed | Website analytics / advertising measurement | {{ANALYTICS_REGION}} |
| [OPTIONAL — add a row per embed: maps, fonts, chat, booking, reviews] | Your IP address and browser details | It powers {{EMBED_PURPOSE}} on this page | {{EMBED_REGION}} |

We disclose personal information to no one beyond this list, except where the
law requires it.

### About where your information is stored

This website is served by Cloudflare, which routes requests through whichever of
its data centres is closest to the visitor. **Storage inside Canada is not
guaranteed**: information submitted through this site may be processed or stored
outside Canada, and while it is outside Canada it is subject to the laws of the
country it is in — including lawful access by that country's authorities.

We are telling you this because it is true of how the site is built, not because
we have concluded it is unimportant.

## How long we keep it

- An enquiry that does not turn into work is deleted within
  {{ENQUIRY_RETENTION_MONTHS}} months of our last contact.
- If you become a customer, your records are kept while we are working for you,
  and afterwards for {{TAX_RECORD_RETENTION_YEARS}} years from the end of the
  tax year they relate to, because the Canada Revenue Agency requires records
  that support a tax filing to be retained.
- Information collected automatically when you load a page is held by the
  companies listed above under their own retention schedules, which we do not
  control and cannot delete on your behalf.

## Seeing, correcting or deleting what we hold

Contact {{PRIVACY_CONTACT_NAME}} using the details above. You can ask:

- what personal information we hold about you
- what it has been used for, and who it has been disclosed to
- for anything incorrect to be corrected
- for it to be deleted

We will respond within 30 days. There is no charge for a request about your own
information. If you are not satisfied with how we handled it, you can take it to
{{REGULATOR}}.

> Default for a British Columbia business: the Office of the Information and
> Privacy Commissioner for British Columbia, oipc.bc.ca.

## Consent, and taking it back

Submitting a form is how you consent to our using those details to respond to
you. You can withdraw that consent at any time by contacting us, and we will
delete what we hold — apart from the tax records described above, which we are
required to keep.

## Security

{{WEBSITE_DOMAIN}} is served over HTTPS, so what you type into a form is
encrypted between your browser and the service that receives it. Once delivered,
your submission is stored in {{LEAD_DESTINATION}} and is subject to that
provider's security.

## Changes to this policy

If this policy changes, the date at the top changes with it.

--- POLICY ENDS HERE ---

---

## Placeholder checklist

Every one of these must be replaced before the page is published. A published
policy containing `{{` is worse than no policy: it is visible evidence that
nobody read it.

| Placeholder | What goes in it |
|---|---|
| `{{LAST_UPDATED}}` | Date the policy text was last changed |
| `{{BUSINESS_NAME}}` | The client's business name, as they trade |
| `{{WEBSITE_DOMAIN}}` | The live domain, e.g. `example.ca` |
| `{{BUSINESS_CITY}}` / `{{BUSINESS_PROVINCE}}` | Where the business operates from |
| `{{PRIVACY_LAW}}` | The governing statute — BC default noted above |
| `{{REGULATOR}}` | The oversight body for that statute |
| `{{PRIVACY_CONTACT_NAME}}` | The named person responsible — a person, not "our team" |
| `{{PRIVACY_CONTACT_TITLE}}` | Their role, e.g. Owner, Privacy Officer |
| `{{PRIVACY_CONTACT_EMAIL}}` | A monitored address. Verify it receives mail. |
| `{{PRIVACY_CONTACT_PHONE}}` | Optional; delete the line if not offered |
| `{{FORM_NAME}}` | e.g. "The quote request form" |
| `{{FORM_FIELDS}}` | The exact fields, from the form markup — not from memory |
| `{{FORM_PURPOSE}}` | Why, in the client's own words |
| `{{LEAD_DESTINATION}}` | Where submissions land: the inbox provider, and its provider name |
| `{{LEAD_DESTINATION_REGION}}` | Where that provider hosts it, if known; say so plainly if not |
| `{{CRM_NAME}}` / `{{CRM_REGION}}` | If leads flow into a CRM. Delete the row if none. |
| `{{ANALYTICS_TOOLS}}` / `{{ANALYTICS_REGION}}` | Every analytics or ad tag on the site |
| `{{EMBED_PURPOSE}}` / `{{EMBED_REGION}}` | One row per third-party embed |
| `{{ENQUIRY_RETENTION_MONTHS}}` | Confirm with the client. Do not assume. |
| `{{TAX_RECORD_RETENTION_YEARS}}` | CRA baseline is 6; confirm with their accountant |

## Before this template is used on a live client site

The cross-border questions in [`../open-questions.md`](../open-questions.md) are
**open**, and question 3 — Cloudflare data residency — applies to every site
built from this template. The "About where your information is stored" section
above discloses the situation to the client's visitors. It does not resolve it,
and it is not a substitute for resolving it.
