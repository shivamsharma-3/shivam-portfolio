'use client'

import { motion } from 'framer-motion'

const tools = [
  'Cursor',
  'Claude',
  'v0',
  'Bolt',
  'Lovable',
  'Stitch',
  'Antigravity',
  'Google AI Studio',
  'Next.js',
  'Supabase',
  'Vercel',
  'Make',
  'OpenAI',
  'Groq',
  'Apollo',
  'Brevo',
]

export default function Skills() {
  // Duplicate the set exactly twice. The CSS marquee translates the flex
  // container by -50%, which equals exactly one full set width — so when
  // the animation snaps back from -50% to 0, the second set is now where
  // the first set was, and the loop is invisible. Forward-only, never
  // stops, never reverses, never visibly resets.
  // Number for each item uses `i % tools.length + 1` so the duplicated
  // second half carries the same 01..N numbering as the first half — the
  // seamless loop point stays visually identical.
  const loop = [...tools, ...tools]

  return (
    <section
      id="skills"
      className="relative py-24 md:py-32 px-6 lg:px-8 border-t border-[#1a1a1a] overflow-hidden"
    >
      <div className="max-w-5xl mx-auto text-center">
        {/* Section header — centered */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="font-mono text-xs text-[#8a8a8a] mb-3">02 skills</div>
          <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-[#fafafa]">
            What I work with.
          </h2>
        </motion.div>

        {/* Seamless infinite marquee — forward only, never pauses, never resets visibly.
            Each tool carries a small colored index number above-left of its name. */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative marquee-mask"
        >
          <div className="flex w-max animate-marquee items-end">
            {loop.map((tool, i) => {
              const num = (i % tools.length) + 1
              return (
                <div
                  key={i}
                  className="relative flex flex-col items-start"
                >
                  {/* Small index number — top-left corner, same colour as the name */}
                  <span
                    className="font-mono text-[10px] md:text-[11px] ml-1 mb-0.5 leading-none tracking-wider text-[#525252]"
                  >
                    {String(num).padStart(2, '0')}
                  </span>
                  <span className="font-serif text-3xl md:text-5xl text-[#525252] hover:text-[#fbbf24] transition-colors duration-300 cursor-default whitespace-nowrap">
                    {tool}
                    <span className="text-[#262626] mx-6">·</span>
                  </span>
                </div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
