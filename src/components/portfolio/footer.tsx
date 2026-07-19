'use client'

import { Mail, Github, Linkedin, ArrowUp } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-[#1a1a1a] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 lg:px-8 py-16 text-center">
        {/* Big name as a closing statement */}
        <div className="mb-12">
          <div className="font-mono text-xs text-[#a3a3a3] mb-3">shivam sharma</div>
          <div className="font-serif text-5xl md:text-7xl tracking-tight text-[#a3a3a3] hover:text-[#fbbf24] transition-colors duration-500 cursor-default">
            let&apos;s build.
          </div>
        </div>

        <div className="flex flex-col items-center gap-6 pt-8 border-t border-[#1f1f1f]">
          <div className="flex items-center gap-5">
            <a
              href="mailto:shivamsharma4c@gmail.com"
              className="text-[#a3a3a3] hover:text-[#fbbf24] transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/shivamsharma-3"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#a3a3a3] hover:text-[#fbbf24] transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/shivam-sharma1203/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#a3a3a3] hover:text-[#fbbf24] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="#top"
              className="text-[#a3a3a3] hover:text-[#fbbf24] transition-colors flex items-center gap-1.5 font-mono text-xs"
              aria-label="Back to top"
            >
              top
              <ArrowUp className="w-3 h-3" />
            </a>
          </div>
          <div className="font-mono text-xs text-[#a3a3a3]">
            © 2026 shivam sharma · india
          </div>
        </div>
      </div>
    </footer>
  )
}
