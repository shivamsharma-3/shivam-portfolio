'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import { caseStudies } from '@/lib/case-studies'

export default function Projects() {
  const featured = caseStudies[0] // ResearchOps AI
  const others = caseStudies.slice(1) // PitchDeck Studio + ContentPilot

  return (
    <section
      id="work"
      className="relative py-24 md:py-32 px-6 lg:px-8 border-t border-[#1a1a1a]"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section header — centered */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="font-mono text-xs text-[#737373] mb-3">01 work</div>
          <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-[#fafafa] mb-2">
            Three products. Shipped solo.
          </h2>
          <div className="font-mono text-xs text-[#737373]">2025</div>
        </motion.div>

        {/* Featured project — large */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          whileHover={{ y: -4 }}
          className="group block relative border border-[#1f1f1f] hover:border-[#fbbf24]/40 transition-colors duration-500 mb-6 overflow-hidden"
        >
          {/* Top accent line that grows on hover */}
          <div className="absolute top-0 left-0 right-0 h-px bg-[#fbbf24] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

          <Link href={`/work/${featured.slug}`} className="block p-8 md:p-12">
            {/* Header row */}
            <div className="flex items-start justify-between gap-6 mb-6 flex-wrap">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className={`font-mono text-[10px] uppercase tracking-widest ${featured.status === 'live' ? 'text-[#10b981]' : 'text-[#fbbf24]'}`}>
                    ● {featured.status}
                  </span>
                  <span className="font-mono text-[10px] text-[#737373]">
                    {featured.year} · {featured.metric}
                  </span>
                  <a
                    href={featured.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="font-mono text-[10px] uppercase tracking-widest text-[#fbbf24] hover:underline"
                  >
                    visit ↗
                  </a>
                </div>
                <h3 className="font-serif text-3xl md:text-4xl tracking-tight text-[#fafafa] mb-2 group-hover:text-[#fbbf24] transition-colors duration-300">
                  {featured.name}
                </h3>
                <p className="text-sm text-[#c4c4c4]">{featured.tagline}</p>
              </div>
              <ArrowUpRight className="w-6 h-6 text-[#737373] group-hover:text-[#fbbf24] group-hover:rotate-12 transition-all duration-300" />
            </div>

            {/* Body */}
            <p className="text-base text-[#d4d4d4] leading-relaxed max-w-2xl mb-4">
              {featured.description}
            </p>

            {/* Read case study hint */}
            <div className="inline-flex items-center gap-2 mb-8 font-mono text-[11px] uppercase tracking-widest text-[#fbbf24]">
              <span>Read case study</span>
              <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>

            <div className="flex flex-wrap gap-2">
              {featured.stack.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-[11px] px-2.5 py-1 border border-[#333333] text-[#c4c4c4]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </Link>
        </motion.div>

        {/* Two smaller projects — side by side */}
        <div className="grid md:grid-cols-2 gap-6">
          {others.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="group block relative border border-[#1f1f1f] hover:border-[#fbbf24]/40 transition-colors duration-500 overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-[#fbbf24] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

              <Link href={`/work/${project.slug}`} className="block p-6 md:p-8">
                <div className="flex items-center gap-3 mb-3 flex-wrap">
                  <span className={`font-mono text-[10px] uppercase tracking-widest ${project.status === 'live' ? 'text-[#10b981]' : 'text-[#fbbf24]'}`}>
                    ● {project.status}
                  </span>
                  <span className="font-mono text-[10px] text-[#737373]">
                    {project.year} · {project.metric}
                  </span>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="font-mono text-[10px] uppercase tracking-widest text-[#fbbf24] hover:underline"
                  >
                    visit ↗
                  </a>
                </div>

                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="font-serif text-2xl tracking-tight text-[#fafafa] group-hover:text-[#fbbf24] transition-colors duration-300">
                    {project.name}
                  </h3>
                  <ArrowUpRight className="w-4 h-4 text-[#737373] group-hover:text-[#fbbf24] group-hover:rotate-12 transition-all duration-300 flex-shrink-0 mt-1" />
                </div>

                <p className="text-xs text-[#c4c4c4] mb-4">{project.tagline}</p>
                <p className="text-sm text-[#d4d4d4] leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Read case study hint */}
                <div className="inline-flex items-center gap-2 mb-6 font-mono text-[10px] uppercase tracking-widest text-[#fbbf24]">
                  <span>Read case study</span>
                  <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[10px] px-2 py-0.5 border border-[#333333] text-[#a3a3a3]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
