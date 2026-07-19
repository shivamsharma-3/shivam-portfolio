'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight, ArrowLeft, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import type { CaseStudy } from '@/lib/case-studies'

export default function CaseStudyPage({ study }: { study: CaseStudy }) {
  return (
    <article className="relative">
      {/* Back link */}
      <div className="max-w-4xl mx-auto px-6 lg:px-8 pt-10">
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#a3a3a3] hover:text-[#fbbf24] transition-colors group"
        >
          <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
          Back to work
        </Link>
      </div>

      {/* Header */}
      <header className="max-w-4xl mx-auto px-6 lg:px-8 pt-16 pb-20 md:pt-24 md:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-baseline gap-4 mb-8"
        >
          <span className="font-mono text-xs text-[#a3a3a3]">{study.num}</span>
          <span className="h-px flex-1 max-w-[80px] bg-[#2a2622]" />
          <span className="font-mono text-xs text-[#a3a3a3] uppercase tracking-widest">
            case study
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-5xl md:text-7xl tracking-tight text-[#fafafa] leading-[0.95] mb-6"
        >
          {study.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-[#d4d4d4] leading-snug max-w-2xl mb-10"
        >
          {study.tagline}
        </motion.p>

        {/* Visit live site — prominent CTA */}
        <motion.a
          href={study.href}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="inline-flex items-center gap-2 px-5 py-3 border border-[#fbbf24]/40 bg-[#fbbf24]/[0.06] hover:bg-[#fbbf24]/[0.12] hover:border-[#fbbf24] text-[#fbbf24] font-mono text-xs uppercase tracking-widest transition-all duration-300 group mb-2"
        >
          <span>Visit live site</span>
          <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </motion.a>

        {/* Meta grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-[#2a2622]"
        >
          {[
            { label: 'Year', value: study.year },
            { label: 'Role', value: study.role },
            { label: 'Build time', value: study.metric },
            { label: 'Stack', value: study.stack.slice(0, 2).join(', ') },
          ].map((item) => (
            <div key={item.label}>
              <div className="font-mono text-[10px] uppercase tracking-widest text-[#a3a3a3] mb-1.5">
                {item.label}
              </div>
              <div className="text-sm text-[#ededed]">{item.value}</div>
            </div>
          ))}
        </motion.div>
      </header>

      {/* Summary — large lead paragraph */}
      <section className="max-w-4xl mx-auto px-6 lg:px-8 pb-20 md:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-serif text-2xl md:text-3xl text-[#ededed] leading-snug tracking-tight">
            {study.summary}
          </p>
        </motion.div>
      </section>

      {/* Metrics strip */}
      {study.metrics.length > 0 && (
        <section className="border-y border-[#2a2622] bg-[#1c1916]/30">
          <div className="max-w-5xl mx-auto px-6 lg:px-8 py-12 md:py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {study.metrics.map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="font-serif text-3xl md:text-4xl text-[#fbbf24] tracking-tight">
                  {m.value}
                </div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-[#a3a3a3] mt-2 leading-snug">
                  {m.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      )}

      {/* Problem */}
      <section className="max-w-4xl mx-auto px-6 lg:px-8 py-20 md:py-28">
        <div className="grid md:grid-cols-12 gap-8 md:gap-12">
          <div className="md:col-span-4">
            <div className="font-mono text-xs uppercase tracking-widest text-[#fbbf24] mb-4">
              The problem
            </div>
          </div>
          <div className="md:col-span-8">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6 }}
              className="text-base md:text-lg text-[#d4d4d4] leading-relaxed"
            >
              {study.problem}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="max-w-4xl mx-auto px-6 lg:px-8 py-20 md:py-28 border-t border-[#2a2622]">
        <div className="grid md:grid-cols-12 gap-8 md:gap-12">
          <div className="md:col-span-4">
            <div className="font-mono text-xs uppercase tracking-widest text-[#fbbf24] mb-4">
              The approach
            </div>
          </div>
          <div className="md:col-span-8">
            <div className="space-y-8">
              {study.approach.map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex gap-5"
                >
                  <div className="font-mono text-xs text-[#a3a3a3] pt-1 tabular-nums shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <p className="text-base md:text-lg text-[#d4d4d4] leading-relaxed">
                    {point}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-5xl mx-auto px-6 lg:px-8 py-20 md:py-28 border-t border-[#2a2622]">
        <div className="mb-12 md:mb-16">
          <div className="font-mono text-xs uppercase tracking-widest text-[#fbbf24] mb-4">
            What I built
          </div>
          <h2 className="font-serif text-3xl md:text-5xl text-[#fafafa] tracking-tight leading-tight max-w-2xl">
            Features that earned the price tag.
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-px bg-[#2a2622]">
          {study.features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-[#141210] p-8 md:p-10"
            >
              <div className="font-mono text-xs text-[#fbbf24] mb-3 tabular-nums">
                {String(i + 1).padStart(2, '0')}
              </div>
              <h3 className="font-serif text-xl md:text-2xl text-[#fafafa] tracking-tight mb-3">
                {f.title}
              </h3>
              <p className="text-sm text-[#d4d4d4] leading-relaxed">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Lessons */}
      <section className="max-w-4xl mx-auto px-6 lg:px-8 py-20 md:py-28 border-t border-[#2a2622]">
        <div className="grid md:grid-cols-12 gap-8 md:gap-12">
          <div className="md:col-span-4">
            <div className="font-mono text-xs uppercase tracking-widest text-[#fbbf24] mb-4">
              {study.lessonsTitle || 'What I learned'}
            </div>
          </div>
          <div className="md:col-span-8">
            <ul className="space-y-6">
              {study.lessons.map((lesson, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="flex gap-4"
                >
                  <span className="text-[#fbbf24] text-lg leading-snug shrink-0">—</span>
                  <p className="text-base md:text-lg text-[#d4d4d4] leading-relaxed">
                    {lesson}
                  </p>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* What's next */}
      <section className="max-w-4xl mx-auto px-6 lg:px-8 py-20 md:py-28 border-t border-[#2a2622]">
        <div className="grid md:grid-cols-12 gap-8 md:gap-12">
          <div className="md:col-span-4">
            <div className="font-mono text-xs uppercase tracking-widest text-[#fbbf24] mb-4">
              What&apos;s next
            </div>
          </div>
          <div className="md:col-span-8">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-base md:text-lg text-[#d4d4d4] leading-relaxed"
            >
              {study.whatsNext}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Stack + links */}
      <section className="border-t border-[#2a2622] bg-[#1c1916]/30">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16 md:py-20">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-[#a3a3a3] mb-4">
                Tech stack
              </div>
              <div className="flex flex-wrap gap-2">
                {study.stack.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-[11px] uppercase tracking-wider px-3 py-1.5 border border-[#2a2622] text-[#d4d4d4]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-[#a3a3a3] mb-4">
                Links
              </div>
              <div className="flex flex-col gap-3">
                <a
                  href={study.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline inline-flex items-center gap-2 text-sm text-[#ededed] hover:text-[#fbbf24] transition-colors group w-fit"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>{study.href.replace(/^https?:\/\//, '').replace(/\/$/, '')}</span>
                  <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
                <Link
                  href="/#contact"
                  className="link-underline inline-flex items-center gap-2 text-sm text-[#ededed] hover:text-[#fbbf24] transition-colors group w-fit"
                >
                  <span>Want something like this built?</span>
                  <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next project / back to work */}
      <section className="max-w-4xl mx-auto px-6 lg:px-8 py-20 md:py-28 text-center">
        <Link
          href="/#work"
          className="inline-flex items-center gap-3 font-serif text-2xl md:text-3xl text-[#fafafa] hover:text-[#fbbf24] transition-colors group"
        >
          <span className="italic">Back to all work</span>
          <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </Link>
      </section>
    </article>
  )
}
