'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '#work', label: 'work' },
  { href: '#skills', label: 'skills' },
  { href: '#about', label: 'about' },
  { href: '#contact', label: 'contact' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const progressX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0a0a0a]/70 backdrop-blur-xl border-b border-[#1a1a1a]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo — animated underline on hover */}
          <a
            href="#top"
            className="font-serif text-base tracking-tight text-[#ededed] link-underline"
          >
            Shivam Sharma
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-[#a3a3a3] hover:text-[#fbbf24] transition-colors link-underline"
              >
                {link.label}
              </a>
            ))}
            <a
              href="mailto:shivamsharma4c@gmail.com"
              className="text-sm text-[#ededed] hover:text-[#fbbf24] transition-colors link-underline"
            >
              email ↗
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-[#ededed]"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Scroll progress — thin gold line at the very bottom of the nav */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-[#fbbf24] origin-left"
        style={{ scaleX: progressX }}
      />

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-[#1a1a1a]"
          >
            <div className="px-6 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block font-serif text-2xl text-[#ededed] hover:text-[#fbbf24] transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="mailto:shivamsharma4c@gmail.com"
                onClick={() => setMobileOpen(false)}
                className="block font-serif text-2xl text-[#fbbf24]"
              >
                email ↗
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
