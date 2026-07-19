'use client'

import { motion } from 'framer-motion'

// Editorial timeline — each chapter is a year-stamped beat in the story
const chapters = [
  {
    year: '2025',
    marker: 'the pivot',
    title: 'I stopped waiting for the job my degree was supposed to get me.',
    body: "Halfway through my final year of an AI & Data Science degree, I realized the path I was on wasn't the one I wanted. So I started building — not because I had a plan, but because I had a feeling that shipping things was the only way forward.",
  },
  {
    year: 'Jan 2026',
    marker: 'first ship',
    title: 'ARCH Revenues — an outbound acquisition system for founder-led agencies.',
    body: "Cold email + LinkedIn sequences, agency-specific research, weekly reporting, run directly with no handoffs. Built solo, shipped live, currently onboarding early clients.",
  },
  {
    year: 'Mar 2026',
    marker: 'second ship',
    title: 'RevRecovery — AI revenue recovery platform.',
    body: "Identifies at-risk customers and triggers personalized recovery sequences: automated outreach, smart follow-ups, and analytics that surface revenue before it churns. Built solo, shipped live in weeks using AI-assisted development.",
  },
  {
    year: 'Jun 2026',
    marker: 'third ship',
    title: 'ArchRevenue — AI revenue intelligence SaaS.',
    body: "Monitors public buying signals — funding rounds, leadership hires, tech migrations — and generates daily account briefings telling sales teams exactly who to contact today and why. Three products built solo in six months.",
  },
  {
    year: 'now',
    marker: 'open to work',
    title: 'Looking for freelance MVP work or a founding product role.',
    body: "If you have a SaaS idea and need it shipped in 2–4 weeks, an internal tool that needs building, or an early-stage AI startup that needs a founding product engineer who ships fast — I'm the person. I bring a business-first perspective that most builders don't.",
  },
]

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 md:py-32 px-6 lg:px-8 border-t border-[#1a1a1a]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header — editorial, left-aligned with chapter index */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-20 md:mb-28"
        >
          <div className="flex items-baseline gap-4 mb-4">
            <span className="font-mono text-xs text-[#8a8a8a]">03</span>
            <span className="h-px flex-1 max-w-[80px] bg-[#2a2a2a]" />
            <span className="font-mono text-xs text-[#8a8a8a] uppercase tracking-widest">
              the story
            </span>
          </div>
          <h2 className="font-serif text-5xl md:text-7xl tracking-tight text-[#fafafa] leading-[0.95] max-w-3xl">
            How I got <span className="italic text-[#fbbf24]">here.</span>
          </h2>
          <p className="mt-6 text-sm md:text-base text-[#a3a3a3] max-w-xl leading-relaxed">
            Five beats. One trajectory. Built solo, shipped live, no shortcuts.
          </p>
        </motion.div>

        {/* Two-column editorial layout: timeline spine + side meta */}
        <div className="grid md:grid-cols-12 gap-8 md:gap-16">
          {/* Left — timeline narrative */}
          <div className="md:col-span-8">
            <div className="relative">
              {/* Vertical spine — runs through all chapters */}
              <div className="absolute left-[7px] md:left-[9px] top-2 bottom-2 w-px bg-gradient-to-b from-[#2a2a2a] via-[#2a2a2a] to-transparent" />

              <div className="space-y-16 md:space-y-24">
                {chapters.map((ch, i) => (
                  <motion.article
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6, delay: 0.05 }}
                    className="relative pl-8 md:pl-12"
                  >
                    {/* Node on the spine */}
                    <span className="absolute left-0 top-2 flex h-[15px] w-[15px] md:h-[19px] md:w-[19px] items-center justify-center">
                      <span className="h-1.5 w-1.5 md:h-2 md:w-2 rounded-full bg-[#fbbf24] ring-4 ring-[#0a0a0a]" />
                    </span>

                    {/* Chapter meta — year + marker */}
                    <div className="flex items-center gap-3 mb-3">
                      <span className="font-mono text-xs text-[#fbbf24] tracking-wider">
                        {ch.year}
                      </span>
                      <span className="h-px w-6 bg-[#333333]" />
                      <span className="font-mono text-[10px] uppercase tracking-widest text-[#8a8a8a]">
                        {ch.marker}
                      </span>
                    </div>

                    {/* Chapter title — serif, editorial */}
                    <h3 className="font-serif text-xl md:text-2xl lg:text-3xl tracking-tight text-[#fafafa] leading-tight mb-4 max-w-2xl">
                      {ch.title}
                    </h3>

                    {/* Body — drop cap on first chapter for editorial feel */}
                    <p
                      className={`text-sm md:text-base text-[#c4c4c4] leading-relaxed max-w-2xl ${
                        i === 0
                          ? 'first-letter:font-serif first-letter:text-5xl first-letter:md:text-6xl first-letter:float-left first-letter:mr-2 first-letter:mt-1 first-letter:leading-none first-letter:text-[#fbbf24]'
                          : ''
                      }`}
                    >
                      {ch.body}
                    </p>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>

          {/* Right — sticky meta panel */}
          <aside className="md:col-span-4 md:sticky md:top-24 md:self-start space-y-px">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="border border-[#1f1f1f] p-6 bg-[#0c0c0c]"
            >
              <div className="font-mono text-[10px] uppercase tracking-widest text-[#8a8a8a] mb-5">
                currently
              </div>
              <dl className="space-y-3.5 text-sm">
                <div className="flex justify-between gap-3">
                  <dt className="text-[#737373]">building</dt>
                  <dd className="text-[#ededed] text-right">MVPs for SaaS founders</dd>
                </div>
                <div className="flex justify-between gap-3">
                  <dt className="text-[#737373]">learning</dt>
                  <dd className="text-[#ededed] text-right">sales outreach at scale</dd>
                </div>
                <div className="flex justify-between gap-3">
                  <dt className="text-[#737373]">next 30d</dt>
                  <dd className="text-[#fbbf24] text-right">50 pitches</dd>
                </div>
                <div className="flex justify-between gap-3">
                  <dt className="text-[#737373]">based in</dt>
                  <dd className="text-[#ededed] text-right">India · IST</dd>
                </div>
                <div className="flex justify-between gap-3">
                  <dt className="text-[#737373]">open to</dt>
                  <dd className="text-[#ededed] text-right">freelance · full-time</dd>
                </div>
              </dl>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="border border-[#1f1f1f] p-6 bg-[#0c0c0c]"
            >
              <div className="font-mono text-[10px] uppercase tracking-widest text-[#8a8a8a] mb-5">
                elsewhere
              </div>
              <div className="space-y-3 text-sm">
                <a
                  href="mailto:shivamsharma4c@gmail.com"
                  className="link-underline flex items-center justify-between text-[#ededed] hover:text-[#fbbf24] transition-colors group"
                >
                  <span>email</span>
                  <span className="text-[#525252] group-hover:text-[#fbbf24]">↗</span>
                </a>
                <a
                  href="https://github.com/shivamsharma-3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline flex items-center justify-between text-[#ededed] hover:text-[#fbbf24] transition-colors group"
                >
                  <span>github</span>
                  <span className="text-[#525252] group-hover:text-[#fbbf24]">↗</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/shivam-sharma1203/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline flex items-center justify-between text-[#ededed] hover:text-[#fbbf24] transition-colors group"
                >
                  <span>linkedin</span>
                  <span className="text-[#525252] group-hover:text-[#fbbf24]">↗</span>
                </a>
              </div>
            </motion.div>

            {/* Pull quote — editorial accent */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="border border-[#1f1f1f] p-6 bg-gradient-to-br from-[#0f0d08] to-[#0a0a0a]"
            >
              <div className="font-mono text-[10px] uppercase tracking-widest text-[#fbbf24] mb-3">
                operating principle
              </div>
              <p className="font-serif text-lg italic text-[#ededed] leading-snug">
                &ldquo;Ship the thing. Iterate after.&rdquo;
              </p>
            </motion.div>
          </aside>
        </div>
      </div>
    </section>
  )
}
