// The facts the privacy policy states, kept as data rather than prose.
//
// BC PIPA requires notice of what is collected, why, and who it is disclosed
// to. `thirdParties` is that disclosure list, and the policy page renders it
// directly — so the page cannot drift out of date while this list changes, and
// a reviewer can read the whole disclosure in one place instead of hunting
// through paragraphs.
//
// Adding a row here is a legal act, not a copy tweak. A new script, font host,
// analytics tag, form handler or CRM is a new recipient of personal
// information, and the policy has to name it *before* it ships. If the new
// recipient is hosted outside Canada, add it to legal/open-questions.md too.
import { profile } from './content'

// Shown at the top of the policy. Bump it whenever the policy text changes.
export const POLICY_LAST_UPDATED = 'August 9, 2026'

// PIPA s.4(3) requires a designated individual responsible for the business's
// compliance, and s.5 requires their contact information to be published.
export const privacyOfficer = {
  name: profile.name,
  title: 'Privacy Officer',
  email: profile.email,
}

// How long an enquiry that never became work is kept. Stated as a number
// because "as long as necessary" is not a retention period — it is a way of
// avoiding stating one.
export const ENQUIRY_RETENTION_MONTHS = 24

// The Canada Revenue Agency requires records supporting a tax filing to be kept
// six years from the end of the tax year they relate to. That obligation
// outlives a deletion request, so the policy says so rather than promising a
// deletion it cannot perform.
export const TAX_RECORD_RETENTION_YEARS = 6

// Every third party that receives personal information from a visit to this
// site. `where` is deliberately factual about hosting location: it is the field
// that drives the cross-border questions in legal/open-questions.md.
export const thirdParties = [
  {
    name: 'EmailJS',
    receives: 'Your name, email address, phone number and message.',
    why: 'It is the service that delivers the contact form to my inbox. The form does not reach me any other way.',
    where: 'United States',
  },
  {
    // EmailJS is connected to an Outlook service authenticated as the
    // brayden.coghill@coghilldev.com account, so Microsoft is the party that
    // holds the message once it has been delivered.
    name: 'Microsoft (Outlook)',
    receives: 'The delivered message, and everything you wrote in it.',
    why: 'It hosts the business inbox that EmailJS delivers to, and stores the message afterwards.',
    where: 'Microsoft data centres',
  },
  {
    name: 'Google — Google Ads conversion tag',
    receives: 'Your IP address, browser and device details, and which page you loaded.',
    why: 'It measures whether an ad led to an enquiry. It loads on every page, before you interact with anything.',
    where: 'United States',
  },
  {
    name: 'Google — Google Fonts',
    receives: 'Your IP address and browser details.',
    why: 'The typefaces this site uses are requested from Google servers when the page loads.',
    where: 'United States',
  },
  {
    name: 'GitHub Pages',
    receives: 'Your IP address and the requests your browser makes for the page and its files.',
    why: 'It is the hosting that serves this website.',
    where: 'United States',
  },
]
