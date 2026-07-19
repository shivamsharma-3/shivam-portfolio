'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const btnRef = useRef<HTMLButtonElement>(null)
  const [btnPos, setBtnPos] = useState({ x: 0, y: 0 })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) {
        throw new Error(data.error || 'Failed to send')
      }
      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } catch (err) {
      setStatus('error')
      setErrorMessage(
        err instanceof Error && err.message
          ? err.message
          : 'Something went wrong. Please email me directly.'
      )
    }
  }

  const onBtnMove = (e: React.MouseEvent) => {
    if (!btnRef.current) return
    const rect = btnRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left - rect.width / 2) * 0.15
    const y = (e.clientY - rect.top - rect.height / 2) * 0.15
    setBtnPos({ x, y })
  }

  const resetForm = () => {
    setStatus('idle')
    setErrorMessage('')
  }

  const msgLen = formData.message.length
  const msgMax = 1000

  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 px-6 lg:px-8 border-t border-[#1a1a1a] overflow-hidden"
    >
      {/* Subtle warm radial — anchored bottom-right for asymmetry */}
      <div
        className="absolute -bottom-32 right-0 w-[600px] h-[500px] pointer-events-none opacity-[0.04]"
        style={{
          background: 'radial-gradient(ellipse at center, #fbbf24 0%, transparent 60%)',
        }}
      />

      <div className="relative max-w-6xl mx-auto">
        {/* Two-column layout: headline+form on left, meta panel on right.
            Right column starts at the SAME vertical level as the headline
            (not pushed down below a full-width header). */}
        <div className="grid md:grid-cols-12 gap-12 md:gap-16">
          {/* Left — headline + form */}
          <div className="md:col-span-8">
            {/* Section label */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5 }}
              className="flex items-baseline gap-4 mb-4"
            >
              <span className="font-mono text-xs text-[#8a8a8a]">04</span>
              <span className="h-px flex-1 max-w-[80px] bg-[#2a2a2a]" />
              <span className="font-mono text-xs text-[#8a8a8a] uppercase tracking-widest">
                the handshake
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="font-serif text-5xl md:text-7xl tracking-tight text-[#fafafa] leading-[0.95] max-w-4xl"
            >
              Your idea deserves to <span className="italic text-[#fbbf24]">ship.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-6 text-sm md:text-base text-[#a3a3a3] max-w-xl leading-relaxed mb-16 md:mb-20"
            >
              I&apos;m taking on two new projects this quarter. If you have a SaaS idea
              that can be built in 2–4 weeks, let&apos;s talk. I reply to every message
              within 24 hours — even if it&apos;s just to point you elsewhere.
            </motion.p>

            <AnimatePresence mode="wait">
              {status === 'success' ? (
                /* Success state — replaces the form entirely */
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.4 }}
                  className="border border-[#1f1f1f] bg-[#0c0c0c] p-10 md:p-14 min-h-[420px] flex flex-col justify-center"
                >
                  <CheckCircle className="w-8 h-8 text-[#10b981] mb-6" />
                  <h3 className="font-serif text-3xl md:text-4xl text-[#fafafa] tracking-tight mb-4 leading-tight">
                    Message received.
                  </h3>
                  <p className="text-[#a3a3a3] text-sm md:text-base leading-relaxed max-w-md mb-8">
                    Thanks for reaching out. I&apos;ll read your note carefully and
                    reply to your inbox within 24 hours. In the meantime, feel free
                    to browse the work above.
                  </p>
                  <button
                    onClick={resetForm}
                    className="self-start font-mono text-[11px] uppercase tracking-widest text-[#737373] hover:text-[#fbbf24] transition-colors"
                  >
                    ← send another
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-10"
                >
                  {/* Name + Email — numbered, stacked rows */}
                  <div className="grid sm:grid-cols-2 gap-10">
                    <div className="group">
                      <div className="flex items-baseline gap-2 mb-3">
                        <span className="font-mono text-[10px] text-[#a3a3a3] tabular-nums">
                          01
                        </span>
                        <label className="font-mono text-[10px] uppercase tracking-widest text-[#d4d4d4] group-focus-within:text-[#fbbf24] transition-colors">
                          name
                        </label>
                      </div>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Jane Founder"
                        className="w-full px-0 py-2 bg-transparent border-0 border-b border-[#404040] text-[#fafafa] placeholder:text-[#8a8a8a] focus:outline-none focus:border-[#fbbf24] transition-colors text-lg font-serif"
                      />
                    </div>
                    <div className="group">
                      <div className="flex items-baseline gap-2 mb-3">
                        <span className="font-mono text-[10px] text-[#a3a3a3] tabular-nums">
                          02
                        </span>
                        <label className="font-mono text-[10px] uppercase tracking-widest text-[#d4d4d4] group-focus-within:text-[#fbbf24] transition-colors">
                          email
                        </label>
                      </div>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="jane@startup.com"
                        className="w-full px-0 py-2 bg-transparent border-0 border-b border-[#404040] text-[#fafafa] placeholder:text-[#8a8a8a] focus:outline-none focus:border-[#fbbf24] transition-colors text-lg font-serif"
                      />
                    </div>
                  </div>

                  {/* Message — full width, taller, with counter */}
                  <div className="group">
                    <div className="flex items-baseline justify-between mb-3">
                      <div className="flex items-baseline gap-2">
                        <span className="font-mono text-[10px] text-[#a3a3a3] tabular-nums">
                          03
                        </span>
                        <label className="font-mono text-[10px] uppercase tracking-widest text-[#d4d4d4] group-focus-within:text-[#fbbf24] transition-colors">
                          what do you want to build?
                        </label>
                      </div>
                      <span
                        className={`font-mono text-[10px] tabular-nums transition-colors ${
                          msgLen > msgMax * 0.9
                            ? 'text-[#ef4444]'
                            : msgLen > 0
                            ? 'text-[#a3a3a3]'
                            : 'text-[#8a8a8a]'
                        }`}
                      >
                        {msgLen}/{msgMax}
                      </span>
                    </div>
                    <textarea
                      required
                      maxLength={msgMax}
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="I'm building a SaaS for X and need someone to ship the MVP in 3 weeks..."
                      className="w-full px-0 py-2 bg-transparent border-0 border-b border-[#404040] text-[#fafafa] placeholder:text-[#8a8a8a] focus:outline-none focus:border-[#fbbf24] transition-colors text-lg font-serif resize-none leading-relaxed"
                    />
                  </div>

                  {/* Submit row — button + inline status */}
                  <div className="flex items-center justify-between gap-6 flex-wrap pt-2">
                    <div className="min-h-[24px] flex items-center">
                      <AnimatePresence mode="wait">
                        {status === 'error' && (
                          <motion.div
                            initial={{ opacity: 0, x: -8 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -8 }}
                            className="flex items-center gap-2 text-[#ef4444] text-xs"
                          >
                            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                            <span>
                              {errorMessage || 'Something went wrong.'}{' '}
                              <a
                                href="mailto:shivamsharma4c@gmail.com"
                                className="underline hover:text-[#fbbf24] transition-colors"
                              >
                                Email directly
                              </a>
                              .
                            </span>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    <button
                      ref={btnRef}
                      type="submit"
                      disabled={status === 'loading'}
                      onMouseMove={onBtnMove}
                      onMouseLeave={() => setBtnPos({ x: 0, y: 0 })}
                      style={{ transform: `translate(${btnPos.x}px, ${btnPos.y}px)` }}
                      className="group/btn inline-flex items-center gap-3 pl-7 pr-5 py-4 bg-[#fafafa] text-[#0a0a0a] text-sm font-medium hover:bg-[#fbbf24] transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[#fafafa]"
                    >
                      {status === 'loading' ? (
                        <>
                          <span>sending</span>
                          <Loader2 className="w-4 h-4 animate-spin" />
                        </>
                      ) : (
                        <>
                          <span className="uppercase tracking-wider text-xs">send message</span>
                          <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                        </>
                      )}
                    </button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

          {/* Right — sticky meta panel, mirrors About section's pattern */}
          <aside className="md:col-span-4 md:sticky md:top-24 md:self-start space-y-px">
            {/* Availability card — with urgency */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="border border-[#1f1f1f] p-6 bg-[#0c0c0c]"
            >
              <div className="font-mono text-[10px] uppercase tracking-widest text-[#a3a3a3] mb-5">
                availability
              </div>
              <dl className="space-y-3.5 text-sm">
                <div className="flex justify-between gap-3">
                  <dt className="text-[#a3a3a3]">capacity</dt>
                  <dd className="text-[#ededed] text-right">2 projects / qtr</dd>
                </div>
                <div className="flex justify-between gap-3">
                  <dt className="text-[#a3a3a3]">response</dt>
                  <dd className="text-[#ededed] text-right">&lt; 24 hours</dd>
                </div>
                <div className="flex justify-between gap-3">
                  <dt className="text-[#a3a3a3]">typical scope</dt>
                  <dd className="text-[#ededed] text-right">2–4 week MVPs</dd>
                </div>
                <div className="flex justify-between gap-3">
                  <dt className="text-[#a3a3a3]">based in</dt>
                  <dd className="text-[#ededed] text-right">India · IST</dd>
                </div>
              </dl>
            </motion.div>

            {/* Social proof — shipped metrics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="border border-[#1f1f1f] p-6 bg-gradient-to-br from-[#0f0d08] to-[#0a0a0a]"
            >
              <div className="font-mono text-[10px] uppercase tracking-widest text-[#fbbf24] mb-5">
                track record
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <div className="font-serif text-2xl text-[#fafafa] tracking-tight">03</div>
                  <div className="font-mono text-[9px] uppercase tracking-wider text-[#a3a3a3] mt-1">
                    shipped
                  </div>
                </div>
                <div>
                  <div className="font-serif text-2xl text-[#fafafa] tracking-tight">06</div>
                  <div className="font-mono text-[9px] uppercase tracking-wider text-[#a3a3a3] mt-1">
                    months
                  </div>
                </div>
                <div>
                  <div className="font-serif text-2xl text-[#fafafa] tracking-tight">100%</div>
                  <div className="font-mono text-[9px] uppercase tracking-wider text-[#a3a3a3] mt-1">
                    solo
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Direct contact card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="border border-[#1f1f1f] p-6 bg-[#0c0c0c]"
            >
              <div className="font-mono text-[10px] uppercase tracking-widest text-[#a3a3a3] mb-5">
                or reach me directly
              </div>
              <div className="space-y-3 text-sm">
                <a
                  href="mailto:shivamsharma4c@gmail.com"
                  className="link-underline flex items-center justify-between text-[#ededed] hover:text-[#fbbf24] transition-colors group"
                >
                  <span className="font-mono text-xs">email</span>
                  <span className="text-[#525252] group-hover:text-[#fbbf24]">↗</span>
                </a>
                <a
                  href="https://github.com/shivamsharma-3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline flex items-center justify-between text-[#ededed] hover:text-[#fbbf24] transition-colors group"
                >
                  <span className="font-mono text-xs">github</span>
                  <span className="text-[#525252] group-hover:text-[#fbbf24]">↗</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/shivam-sharma1203/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline flex items-center justify-between text-[#ededed] hover:text-[#fbbf24] transition-colors group"
                >
                  <span className="font-mono text-xs">linkedin</span>
                  <span className="text-[#525252] group-hover:text-[#fbbf24]">↗</span>
                </a>
              </div>
            </motion.div>

            {/* Pull quote — operating principle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="border border-[#1f1f1f] p-6 bg-[#0c0c0c]"
            >
              <div className="font-mono text-[10px] uppercase tracking-widest text-[#a3a3a3] mb-3">
                the principle
              </div>
              <p className="font-serif text-base italic text-[#ededed] leading-snug">
                &ldquo;If your idea can be shipped in a month, we should talk. If it
                needs a year, I&apos;ll tell you who to call instead.&rdquo;
              </p>
            </motion.div>
          </aside>
        </div>
      </div>
    </section>
  )
}
