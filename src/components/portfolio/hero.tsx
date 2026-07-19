'use client'

import { motion } from 'framer-motion'
import { useRef, useState } from 'react'
import { ArrowDown, Mail } from 'lucide-react'

// Magnetic button — subtle parallax pull toward cursor
function MagneticButton({
  children,
  href,
  primary = false,
}: {
  children: React.ReactNode
  href: string
  primary?: boolean
}) {
  const ref = useRef<HTMLAnchorElement>(null)
  const [pos, setPos] = useState({ x: 0, y: 0 })

  const onMove = (e: React.MouseEvent) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = (e.clientX - rect.left - rect.width / 2) * 0.25
    const y = (e.clientY - rect.top - rect.height / 2) * 0.25
    setPos({ x, y })
  }
  const onLeave = () => setPos({ x: 0, y: 0 })

  return (
    <a
      ref={ref}
      href={href}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }}
      className={`group/btn inline-flex items-center gap-2 px-6 py-3.5 text-sm transition-colors duration-300 ${
        primary
          ? 'bg-[#fafafa] text-[#0a0a0a] hover:bg-[#fbbf24]'
          : 'border border-[#404040] text-[#ededed] hover:border-[#fbbf24] hover:text-[#fbbf24]'
      }`}
    >
      {children}
    </a>
  )
}

export default function Hero() {
  // Stagger reveal — each line slides up + fades in with a tiny delay
  const lineVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, delay: 0.15 + i * 0.1, ease: [0.22, 1, 0.36, 1] },
    }),
  }

  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col justify-center px-6 lg:px-8 pt-28 pb-20 overflow-hidden"
    >
      <div className="relative max-w-6xl mx-auto w-full">
        {/* Top meta row — asymmetric, left-aligned with live clock */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-3 mb-14 md:mb-20 font-mono text-xs"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-[#10b981] opacity-60 animate-ping" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#10b981]" />
          </span>
          <span className="text-[#10b981]">available for work</span>
          <span className="text-[#404040]">/</span>
          <span className="text-[#8a8a8a]">india · IST</span>
          <span className="text-[#404040]">/</span>
          <span className="text-[#8a8a8a]">2025 grad</span>
        </motion.div>

        {/* Headline — left-aligned, massive, staggered reveal */}
        <div>
          <h1 className="font-serif text-[3rem] sm:text-6xl md:text-7xl lg:text-[6.5rem] leading-[0.95] tracking-tight text-[#fafafa] mb-10 max-w-5xl">
            <motion.span
              custom={0}
              variants={lineVariants}
              initial="hidden"
              animate="visible"
              className="block"
            >
              I build SaaS products
            </motion.span>
            <motion.span
              custom={1}
              variants={lineVariants}
              initial="hidden"
              animate="visible"
              className="block text-[#525252]"
            >
              using AI tools,
            </motion.span>
            <motion.span
              custom={2}
              variants={lineVariants}
              initial="hidden"
              animate="visible"
              className="block italic text-[#fbbf24]"
            >
              shipped in weeks.
            </motion.span>
          </h1>
        </div>

        {/* Subhead + CTAs — asymmetric two-column on desktop */}
        <div
          className="grid md:grid-cols-12 gap-8 md:gap-12 items-end"
        >
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="md:col-span-7 text-base md:text-lg text-[#c4c4c4] leading-relaxed max-w-xl"
          >
            I&apos;m Shivam — a 2025 AI &amp; Data Science grad who ships. Three SaaS
            products built solo in six months. I work at the intersection of business
            strategy and AI-assisted development, and I&apos;m looking for freelance MVP
            work or a founding product role.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.75 }}
            className="md:col-span-5 flex flex-wrap items-center gap-3 md:justify-end"
          >
            <MagneticButton href="#work" primary>
              See my work
              <ArrowDown className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-y-0.5" />
            </MagneticButton>
            <MagneticButton href="#contact">
              <Mail className="w-3.5 h-3.5" />
              Get in touch
            </MagneticButton>
          </motion.div>
        </div>

        {/* Bottom stat strip — three proof points, editorial */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-20 md:mt-28 pt-8 border-t border-[#1a1a1a] grid grid-cols-3 gap-4 md:gap-8 max-w-3xl"
        >
          {[
            { num: '03', label: 'products built', sub: '1 live, 2 in dev' },
            { num: '06', label: 'months building', sub: 'solo, no team' },
            { num: '24h', label: 'reply time', sub: 'typical' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 + i * 0.1 }}
            >
              <div className="font-serif text-3xl md:text-4xl text-[#fafafa] tracking-tight">
                {stat.num}
              </div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-[#a3a3a3] mt-1.5">
                {stat.label}
              </div>
              <div className="font-mono text-[10px] text-[#8a8a8a] mt-0.5">
                {stat.sub}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue — bottom right, more refined */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="absolute bottom-8 right-8 hidden md:flex items-center gap-3 font-mono text-[10px] text-[#8a8a8a] tracking-widest uppercase"
      >
        <span>scroll</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="block w-px h-8 bg-gradient-to-b from-[#525252] to-transparent"
        />
      </motion.div>
    </section>
  )
}
