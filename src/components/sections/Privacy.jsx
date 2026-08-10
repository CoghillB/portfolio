import { Link } from 'react-router-dom'
import { SectionHeading } from '../Reveal'
import { PORTFOLIO_ROUTE } from '../../routes'
import {
  ENQUIRY_RETENTION_MONTHS,
  POLICY_LAST_UPDATED,
  TAX_RECORD_RETENTION_YEARS,
  privacyOfficer,
  thirdParties,
} from '../../data/legal'

// The published privacy policy for coghilldev.com (issue A2).
//
// A route, not a modal and not a section of another page, for two reasons: BC
// PIPA expects the policy to be *available*, which means a stable address a
// person can be pointed at, and a modal cannot be linked to, bookmarked,
// printed, or read by a crawler.
//
// The wording rule for anything edited here: describe what actually happens.
// Every third party named below currently receives data on a real page load —
// they are named because the code puts them there, not because naming them
// looks thorough. If a paragraph here stops matching the code, the code wins
// and the paragraph is wrong.
const OIPC_URL = 'https://www.oipc.bc.ca/'
const OPEN_QUESTIONS_URL = 'https://github.com/CoghillB/portfolio/blob/main/legal/open-questions.md'

// The policy is long-form prose in a codebase whose other pages are cards and
// grids, so the shared rhythm lives in these two rather than being retyped at
// every heading.
//
// Deliberately not wrapped in <Reveal>: every other page here fades its content
// in on scroll, but that makes the text conditional on an IntersectionObserver
// firing. A marketing section that fails to appear is a blemish; a privacy
// policy that fails to appear is an undisclosed collection. This page renders
// with no JavaScript gate between the visitor and the text.
const Heading = ({ id, children }) => (
  <h2 id={id} className="mt-14 font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
    {children}
  </h2>
)

const P = ({ children }) => <p className="mt-4 leading-relaxed text-ink-soft">{children}</p>

export const Privacy = () => (
  <section id="privacy" className="relative px-6 pt-28 pb-24 sm:pt-40">
    <div className="mx-auto max-w-3xl">
      <SectionHeading
        eyebrow="Privacy"
        title="Privacy policy"
        kicker="What this site collects, why, who else ends up holding it, and how to get it corrected or deleted."
      />

      <div>
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-muted">
          Last updated {POLICY_LAST_UPDATED}
        </p>

        <P>
          Coghilldev is a sole proprietorship operated by {privacyOfficer.name} in Kelowna, British Columbia.
          Personal information collected through coghilldev.com is handled under British Columbia&apos;s{' '}
          <em>Personal Information Protection Act</em> (PIPA).
        </P>

        <Heading>Who is responsible</Heading>
        <P>
          PIPA requires a business to designate one person as responsible for how it handles personal information, and
          to publish how to reach them. For Coghilldev that is:
        </P>
        <div className="mt-5 rounded-2xl border border-line bg-card p-5">
          <p className="text-sm font-semibold text-ink">{privacyOfficer.name}</p>
          <p className="text-sm text-ink-muted">{privacyOfficer.title}, Coghilldev — Kelowna, BC</p>
          <a
            href={`mailto:${privacyOfficer.email}`}
            className="mt-2 inline-block text-sm text-accent-3 hover:underline"
          >
            {privacyOfficer.email}
          </a>
        </div>
        <P>
          That address is the one to use for anything on this page: a question, a request to see what I hold about you,
          a correction, or a request to delete it. It reaches me directly.
        </P>

        <Heading>What I collect, and why</Heading>

        <h3 className="mt-8 font-display text-lg font-semibold text-ink">When you send the contact form</h3>
        <P>
          The form collects your <strong className="text-ink">name</strong>, your{' '}
          <strong className="text-ink">email address</strong>, your{' '}
          <strong className="text-ink">phone number</strong> (optional), and the{' '}
          <strong className="text-ink">message</strong> you write. That is the whole list. There are no hidden fields.
        </P>
        <P>
          I use it to read your enquiry and reply to it, and — if it turns into work — to contact you about that work
          and to invoice it. I do not use it for anything else, I do not add you to a mailing list, and I do not sell,
          rent or trade it.
        </P>

        <h3 className="mt-8 font-display text-lg font-semibold text-ink">When you simply load a page</h3>
        <P>
          Before you type anything, loading a page on this site sends a request to three other companies: the hosting
          that serves the page, Google&apos;s font servers, and a Google Ads conversion tag. Each of them receives your
          IP address, your browser and device details, and which page you asked for. The tag is there to measure whether
          an advertisement led to an enquiry.
        </P>
        <P>
          The Google Ads tag runs on <strong className="text-ink">every page load</strong>. It is not held back behind a
          consent prompt, and this notice is the only notice of it. Whether it ought to be behind a consent prompt is a
          question I have not answered — see{' '}
          <a href="#not-settled" className="text-accent-3 hover:underline">
            what is not settled
          </a>{' '}
          at the end.
        </P>

        <h3 className="mt-8 font-display text-lg font-semibold text-ink">Stored in your browser</h3>
        <P>
          Your light or dark theme choice is saved in your own browser&apos;s local storage so the site opens the way you
          left it. It stays on your device, it is not sent anywhere, and I never see it.
        </P>

        <Heading>Who else receives it</Heading>
        <P>
          These are every third party that receives personal information from a visit to this site. Each one is here
          because the site actually sends data to it today.
        </P>
        <ul className="mt-6 space-y-4">
          {thirdParties.map((party) => (
            <li key={party.name} className="rounded-2xl border border-line bg-card p-5">
              <p className="font-semibold text-ink">{party.name}</p>
              <dl className="mt-3 space-y-2 text-sm">
                <div>
                  <dt className="text-xs uppercase tracking-wider text-ink-muted">Receives</dt>
                  <dd className="text-ink-soft">{party.receives}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wider text-ink-muted">Why</dt>
                  <dd className="text-ink-soft">{party.why}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wider text-ink-muted">Hosted</dt>
                  <dd className="text-ink-soft">{party.where}</dd>
                </div>
              </dl>
            </li>
          ))}
        </ul>
        <P>
          Beyond that list, I disclose personal information to no one — except where the law requires me to, in which
          case I will tell you unless I am prohibited from doing so.
        </P>

        <Heading>How long it is kept</Heading>
        <P>
          An enquiry that never becomes work is deleted within{' '}
          <strong className="text-ink">{ENQUIRY_RETENTION_MONTHS} months</strong> of the last message between us.
        </P>
        <P>
          If we do work together, our correspondence and your project records are kept for as long as I am working for
          you. After that, records that support a tax filing — invoices and the correspondence behind them — are kept
          for {TAX_RECORD_RETENTION_YEARS} years from the end of the tax year they belong to, because the Canada Revenue
          Agency requires it. That obligation outlasts a deletion request, and I would rather say so than promise you a
          deletion I cannot carry out.
        </P>
        <P>
          The data collected automatically when you load a page is held by Google and by the hosting provider under
          their own retention schedules. I do not control those, and I cannot delete that data on your behalf.
        </P>

        <Heading>Seeing, correcting or deleting what I hold</Heading>
        <P>Email the privacy officer above. Under PIPA you can ask me:</P>
        <ul className="mt-4 space-y-2 text-ink-soft">
          {[
            'what personal information I hold about you',
            'what it has been used for, and who it has been disclosed to',
            'to correct anything that is wrong',
            'to delete it',
          ].map((item) => (
            <li key={item} className="flex gap-3 leading-relaxed">
              <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-3" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <P>
          I will respond within 30 days, which is the deadline PIPA sets. There is no charge for a request about your
          own information. If you are not satisfied with how I handled it, you can take it to the Office of the
          Information and Privacy Commissioner for British Columbia at{' '}
          <a href={OIPC_URL} target="_blank" rel="noreferrer" className="text-accent-3 hover:underline">
            oipc.bc.ca
          </a>
          .
        </P>

        <Heading>Consent, and taking it back</Heading>
        <P>
          Sending the contact form is how you consent to my using those details to reply to you. You can withdraw that
          consent at any time by emailing the privacy officer, and I will delete what I hold — apart from the tax
          records described above, which I am required to keep.
        </P>

        <Heading>Security</Heading>
        <P>
          coghilldev.com is served over HTTPS, so what you type into the form is encrypted between your browser and the
          service that delivers it. Once delivered, your message sits in my business mailbox and is subject to that
          provider&apos;s security, not mine.
        </P>

        <Heading>Changes to this policy</Heading>
        <P>
          If this policy changes, the date at the top changes with it. This website is built from a public repository,
          so every past version of this page and the exact date it changed are on public record — you do not have to
          take my word for what it said before.
        </P>

        <Heading id="not-settled">What is not settled</Heading>
        <P>
          Several of the companies above are hosted in the United States, which means personal information collected
          here can leave Canada. There are open legal questions about what that requires of me — including whether the
          Google Ads tag needs a consent mechanism rather than only this disclosure.
        </P>
        <P>
          I have not answered those questions, and I am not qualified to. Rather than assert a comfortable conclusion, I
          have written down exactly what is unresolved, in public, at{' '}
          <a href={OPEN_QUESTIONS_URL} target="_blank" rel="noreferrer" className="text-accent-3 hover:underline">
            legal/open-questions.md
          </a>
          . When they are answered properly, this page changes.
        </P>

        <div className="mt-14 border-t border-line pt-6 text-sm text-ink-muted">
          <p>
            Questions about any of this go to{' '}
            <a href={`mailto:${privacyOfficer.email}`} className="text-accent-3 hover:underline">
              {privacyOfficer.email}
            </a>
            .
          </p>
          <p className="mt-2">
            <Link to="/" className="hover:text-ink">
              Website services
            </Link>{' '}
            ·{' '}
            <Link to={PORTFOLIO_ROUTE} className="hover:text-ink">
              Developer portfolio
            </Link>
          </p>
        </div>
      </div>
    </div>
  </section>
)

export default Privacy
