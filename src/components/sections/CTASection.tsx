'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-primary py-24">
      {/* Decorative circles */}
      <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-white/5" />
      <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-white/5" />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 inline-block tracking-[0.2em] text-accent text-xs uppercase">
            Let&apos;s Get Started
          </span>

          <h2 className="font-heading text-4xl leading-tight font-bold text-white md:text-5xl">
            Ready to Transform
            <br />
            Your Look?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">
            Book your appointment today and experience the Sylive Beauty Salon
            difference. Your perfect style is just a visit away.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3.5 text-sm font-bold text-white shadow-lg transition-all hover:bg-accent/90"
            >
              Book Appointment
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
            <a
              href="tel:+256700769398"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/10"
            >
              Call +256 700 769 398
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
