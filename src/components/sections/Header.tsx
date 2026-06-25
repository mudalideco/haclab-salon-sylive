'use client'

import { usstate, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Team', href: '#team' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  const [isOpen, setIsOpen] = usstate(false)
  const [scrolled, setScrolled] = usstate(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#home" className="flex items-center gap-2">
          <span className="text-2xl font-heading font-bold text-primary">
            Sylive
          </span>
          <span className="hidden text-xs tracking-widest text-secondary sm:block">
            BEAUTY SALON
          </span>
        </a>

        <!-- Desktop nav -->
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-secondary transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-primary-dark"
          >
            Book Now
          </a>
        </nav>

        <!-- Mobile toggle -->
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-50 text-secondary md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <!-- Mobile nav overlay -->
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-20 top-0 z-40 flex flex-col items-center justify-center gap-8 bg-white/95 backdrop-blur-lg md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-heading text-secondary transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-4 rounded-full bg-primary px-10 py-3 text-lg font-semibold text-white"
            >
              Book Now
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
