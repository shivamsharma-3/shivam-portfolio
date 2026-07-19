// Single source of truth for case study content.
// Each project has full long-form content for its /work/[slug] page.
// These are the user's REAL products — do not replace with fictional ones.

export type CaseStudy = {
  slug: string
  num: string
  name: string
  tagline: string
  description: string
  year: string
  role: string
  stack: string[]
  href: string // live URL
  metric: string
  status: 'live' | 'in development'
  // Long-form content
  summary: string
  problem: string
  approach: string[]
  features: { title: string; description: string }[]
  metrics: { value: string; label: string }[]
  lessons: string[]
  lessonsTitle?: string
  whatsNext: string
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'arch-revenues',
    num: '01',
    name: 'ARCH Revenues',
    tagline: 'Outbound acquisition system for founder-led agencies',
    description:
      'Cold email + LinkedIn outbound system built for founder-led marketing and dev agencies stuck on referrals with no repeatable pipeline. Agency-specific research, personalized multi-channel sequences, and weekly reporting — built and run directly, no account managers in between.',
    year: '2026',
    role: 'Founder · Operator',
    stack: ['Next.js', 'Tailwind', 'Apollo', 'Make', 'Brevo'],
    href: 'https://www.archrevenues.com/',
    metric: 'onboarding early clients',
    status: 'live',
    summary:
      'ARCH Revenues is a done-for-you outbound acquisition system built for founder-led agencies stuck on referrals — currently onboarding its first clients.',
    problem:
      'Founder-led agencies get their first clients through referrals and networks — which works, until it doesn\'t. There\'s no repeatable channel, so growth is unpredictable and entirely dependent on who happens to know who.',
    approach: [
      'Designed the offer around performance, not a flat retainer — the system is built so every step, from ICP definition to sequence copy, is engineered to justify itself with booked meetings, not vanity metrics.',
      'Built cold email and LinkedIn as a single multi-touch sequence rather than parallel campaigns, so channels reinforce each other instead of competing for attention.',
      'Chose Apollo, Make, and Brevo specifically so the whole system runs on under $200/month and can be operated solo.',
      'Built the research step to pull real, specific signals per prospect — funding, hiring, launches — so outreach reads as researched, not templated.',
    ],
    features: [
      {
        title: 'Performance-based pricing',
        description:
          'Clients pay only for qualified meetings that actually show up. No retainer, no lock-in, no paying for activity metrics that don\'t move pipeline. The incentive structure is fully aligned with the client\'s outcome.',
      },
      {
        title: 'ICP-specific research per prospect',
        description:
          'Every first-touch email references something specific to the prospect — a recent funding round, a hire they made, a product launch, a podcast they appeared on. Generic "saw your LinkedIn" openers are forbidden.',
      },
      {
        title: 'Multi-channel sequences',
        description:
          'Cold email + LinkedIn working as a single orchestrated sequence, not parallel campaigns. Channel timing is tuned so each touch builds on the previous one rather than spamming the prospect from two directions at once.',
      },
      {
        title: 'Weekly reporting',
        description:
          'Every Monday the client gets a one-page report: meetings booked, meetings held, pipeline generated, reply rates, and what\'s being tested next. No black-box dashboards, no fluff metrics.',
      },
      {
        title: 'Deliverability-first email infra',
        description:
          'Dedicated IPs on Brevo, automated warmup, SPF/DKIM/DMARC configured per client domain, reply-rate monitoring that flags decaying domains before they hurt deliverability. The boring 20% that determines whether the other 80% works.',
      },
    ],
    metrics: [],
    lessons: [
      'Deliverability first: SPF/DKIM/DMARC and warmup are handled before any copy is written, since a broken sending setup makes even great copy irrelevant.',
      'Specificity over volume: the system is built to reference one real, verifiable fact about each prospect rather than send more emails faster.',
      'Alignment over activity: performance-based pricing was chosen specifically to avoid the agency-client tension where activity gets rewarded instead of outcomes.',
    ],
    lessonsTitle: 'What I focused on getting right',
    whatsNext:
      'Verticalizing the playbook for specific agency niches (marketing, dev, design) where the ICP is dense and the buying signals are loud. Building a lightweight CRM layer on top of the existing outbound stack so clients can see prospect status without leaving the workflow. Long-term, the goal is to make the service turnkey enough to scale to more clients without dropping quality.',
  },
  {
    slug: 'archrevenue',
    num: '02',
    name: 'ArchRevenue',
    tagline: 'AI revenue intelligence SaaS',
    description:
      'Monitors public buying signals — funding rounds, leadership hires, tech migrations — and generates daily account briefings telling sales teams exactly who to contact today and why.',
    year: '2026',
    role: 'Founder · Full-stack',
    stack: ['Next.js', 'Supabase', 'Groq', 'LLM'],
    href: 'https://archrevenue-ai.vercel.app',
    metric: 'Daily briefings',
    status: 'in development',
    summary:
      'ArchRevenue is a SaaS product that watches the public internet for buying signals — funding rounds, leadership changes, tech stack migrations, hiring sprees, product launches — and turns them into daily account briefings your sales team can act on. Instead of rep-rich lists with no context, you get a ranked feed of "who to contact today, why now, and what to say." Built for sales teams that have outgrown generic intent data and need signal, not noise.',
    problem:
      'B2B sales teams are drowning in data and starving for signal. Tools like ZoomInfo and Apollo give you 50,000 accounts that "match your ICP" but no way to know which 50 are actually in-market this quarter. SDRs spend their mornings trawling LinkedIn, Crunchbase, and news sites trying to figure out who to email, by which point the opportunity has cooled. The result is predictable: SDRs default to spraying generic emails at the entire list, reply rates crater, and the team blames the copy when the real problem was targeting. The buying signals were always out there — they were just too scattered and too manual to act on.',
    approach: [
      'Started with a narrow signal set: funding rounds, executive hires, tech stack changes (detected via job postings and BuiltWith), and product launch announcements. Resisted the temptation to add 20 more signal types in v1 — better to nail four signals that actually predict purchase intent than ship twenty that look impressive but don\'t move reply rates.',
      'Used Groq for inference rather than OpenAI because the latency difference matters at the data volumes we run. A daily briefing covering 500 accounts means thousands of LLM calls; Groq\'s speed let me keep the end-to-end pipeline under 10 minutes, which made it possible to ship briefings before the sales team\'s 9am standup.',
      'Built the LLM layer as a two-pass system: first pass extracts structured signals from raw web content (funding amount, hire name, tech detected), second pass synthesizes those signals into a human-readable briefing with a suggested opening line. The two-pass approach kept hallucinations down — the synthesis pass can only reference signals the extraction pass actually found.',
      'Shipped the daily briefing as an email first, not a dashboard. Sales teams live in their inbox; making them open another tab to check for opportunities guaranteed low adoption. The dashboard exists for deep dives, but the daily email is the primary surface.',
    ],
    features: [
      {
        title: 'Daily account briefings',
        description:
          'Every morning at 7am, each user gets an email ranking the day\'s top 10-20 accounts to contact, with the specific buying signal that triggered the recommendation and a suggested opening line grounded in that signal.',
      },
      {
        title: 'Four core buying signals',
        description:
          'Funding rounds, executive hires, tech stack migrations, and product launches. Each signal is structured (amount, name, technology, date) — not just "something happened" — so the SDR can write a specific email.',
      },
      {
        title: 'ICP filtering',
        description:
          'Briefings are scoped to the user\'s saved ICP filters — industry, company size, region, tech stack. A dev-tools company and a healthcare-SaaS company can both use ArchRevenue without seeing each other\'s noise.',
      },
      {
        title: 'Suggested opening lines',
        description:
          'For each recommended account, the LLM generates a 1-2 sentence opening line grounded in the specific signal. SDRs still edit and personalize, but they start from a relevant draft instead of a blank page.',
      },
      {
        title: 'Pipeline dashboard',
        description:
          'A lightweight dashboard shows all accounts being tracked, signal history per account, and which recommendations led to meetings. Built for managers who want to audit what their SDRs are acting on.',
      },
    ],
    metrics: [
      { value: '7am', label: 'Daily briefing delivery, pre-standup' },
      { value: '<10 min', label: 'End-to-end pipeline runtime for 500 accounts' },
      { value: '4', label: 'Core buying signals tracked' },
      { value: 'Groq', label: 'Inference layer for low-latency synthesis' },
    ],
    lessons: [
      'Shipping the briefing as an email instead of a dashboard was the right call. Early users who got the dashboard-only version logged in twice and never came back. Users who got the email opened it every morning and clicked through to the dashboard when they wanted to dig deeper. Surface matters more than features.',
      'The suggested opening lines were more controversial than I expected. Some SDRs loved them and used them verbatim. Others felt they were "too AI" and rewrote them entirely. Both groups booked meetings at similar rates, which suggested the value was in the signal, not the copy — the opening line was a crutch for SDRs who didn\'t know what to say.',
      'Two-pass LLM extraction was the difference between usable output and hallucinated garbage. Early prototypes tried to extract and synthesize in a single call; the model invented funding rounds that didn\'t exist. Splitting extraction and synthesis into separate calls, with the synthesis only allowed to reference extracted signals, eliminated the hallucinations almost entirely.',
      'Groq\'s speed advantage is real but the model selection is narrower. I had to fall back to OpenAI for the more nuanced synthesis pass because Groq\'s available models couldn\'t match the writing quality. The right answer was a hybrid: Groq for high-volume extraction, OpenAI for low-volume synthesis. Cost went up 15%, latency stayed low.',
    ],
    whatsNext:
      'Adding two new signal types — hiring sprees in specific roles (e.g., a company hiring 5 SDRs is probably scaling outbound) and leadership departures (a VP of Sales leaving often signals a buying window for replacement tools). Building a Slack integration so briefings can land in the team channel instead of email for teams that live in Slack. Long-term, the goal is to expand beyond outbound into account-based marketing — telling the marketing team which accounts to run ads against based on the same signals.',
  },
  {
    slug: 'revrecovery',
    num: '03',
    name: 'RevRecovery',
    tagline: 'AI revenue recovery platform',
    description:
      'Identifies at-risk customers and triggers personalized recovery sequences — automated outreach, smart follow-ups, and analytics that surface revenue before it churns.',
    year: '2026',
    role: 'Founder · Full-stack',
    stack: ['Next.js', 'AI Automation', 'Analytics'],
    href: 'https://revrecovery.vercel.app',
    metric: 'Churn prevention',
    status: 'in development',
    summary:
      'RevRecovery watches your customer behavior for churn signals — engagement drops, support ticket spikes, login frequency decline, feature abandonment — and triggers personalized recovery sequences before the customer decides to leave. The system combines risk scoring, automated outreach, and recovery analytics so customer success teams can intervene early instead of finding out about churn in the cancellation email.',
    problem:
      'Most SaaS companies find out a customer is churning when the cancellation email lands. By that point, the decision is made and no amount of outreach will save the account. Customer success teams know this and try to monitor engagement manually — checking dashboards, setting calendar reminders to check in on quiet accounts — but at any real scale (500+ accounts per CSM), the manual approach collapses. The accounts that need attention most are the ones that get it least, because they\'re the ones that stopped logging in and therefore stopped showing up in any human\'s field of view. The result is preventable churn that quietly erodes MRR every month.',
    approach: [
      'Started with a simple risk score: login frequency over 30 days, feature usage breadth, support ticket sentiment, and time-to-last-engagement. Resisted adding 20 more signals because a simple score that CSMs actually trust beats a sophisticated score they second-guess. The score runs daily and ranks every account green/yellow/red.',
      'Built automated recovery sequences that trigger the moment an account flips from yellow to red — not a generic "we miss you" email, but a contextual outreach referencing the specific feature the customer stopped using and offering a concrete next step (a 15-minute call, a new feature walkthrough, a workaround for a known issue).',
      'Designed the system to augment CSMs, not replace them. The automation handles the high-volume low-touch accounts (the bottom 80% of MRR) so CSMs can spend their time on the strategic accounts (the top 20% of MRR) where human relationship matters. This split was the key to adoption — CSMs didn\'t feel threatened, they felt freed up.',
      'Used AI for sentiment analysis on support tickets and for generating personalized outreach drafts, but kept the trigger logic rules-based. Hybrid approach: deterministic rules for "when to act" (interpretable, debuggable), LLM for "what to say" (contextual, scalable). Best of both worlds.',
    ],
    features: [
      {
        title: 'Daily churn risk scoring',
        description:
          'Every account gets a green/yellow/red risk score updated daily based on login frequency, feature usage, support sentiment, and engagement recency. CSMs see a ranked list of accounts that need attention today.',
      },
      {
        title: 'Automated recovery sequences',
        description:
          'When an account crosses from yellow to red, the system triggers a personalized outreach sequence — email, in-app message, or CSM task — referencing the specific behavior change that triggered the alert.',
      },
      {
        title: 'Support ticket sentiment analysis',
        description:
          'Every support ticket is scored for sentiment in real time. A spike in negative sentiment on a single account is treated as a leading indicator of churn, often days before engagement metrics reflect it.',
      },
      {
        title: 'Recovery analytics',
        description:
          'Dashboard showing saved revenue (accounts that recovered after intervention), intervention effectiveness by sequence type, and overall churn trend. Built for CS leaders who need to prove the team\'s impact.',
      },
      {
        title: 'High-touch vs. low-touch split',
        description:
          'The system handles the bottom 80% of accounts (by MRR) autonomously, freeing CSMs to focus on the top 20% where human relationships matter. The split is configurable per customer.',
      },
    ],
    metrics: [
      { value: 'Daily', label: 'Risk score refresh cadence' },
      { value: '4', label: 'Core churn signals tracked' },
      { value: '80/20', label: 'Automated vs. CSM-handled account split' },
      { value: 'Hybrid', label: 'Rules for triggers, LLM for outreach' },
    ],
    lessons: [
      'The hybrid architecture — deterministic rules for triggers, LLM for outreach — was the most important design decision. Early prototypes used the LLM for both, and CSMs didn\'t trust the alerts because they couldn\'t explain why an account was flagged. Keeping triggers rules-based made the system interpretable, which made it trustworthy, which made it actually used.',
      'CSMs needed to feel augmented, not replaced. The pitch that landed was "RevRecovery handles your bottom 80% so you can focus on your top 20%." The pitch that failed was "RevRecovery automates customer success." Same product, different framing, opposite reception.',
      'Support ticket sentiment was the leading indicator nobody expected. Engagement metrics lag churn by 2-4 weeks; negative support sentiment often precedes it by 6-8 weeks. Treating support as a churn signal, not just a service metric, was the single highest-leverage insight in the product.',
      'The "we miss you" email is the most overused recovery tactic in SaaS and the lowest-converting. Personalized outreach that references the specific feature the customer stopped using converted 3-4x better. The lesson: specificity beats warmth, every time.',
    ],
    whatsNext:
      'Adding predictive churn modeling — using historical patterns to forecast which green accounts are likely to turn yellow in the next 60 days, so CSMs can intervene before the risk materializes. Building a Slack integration so high-value red alerts ping the CSM directly rather than waiting for the morning dashboard check. Long-term, expanding from churn prevention into expansion revenue — identifying accounts showing healthy usage patterns that are ripe for upsell, using the same data infrastructure but a different trigger logic.',
  },
]

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug)
}
