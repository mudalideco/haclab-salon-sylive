'use client'

import { motion } from 'framer-motion'
import { SplitReveal } from '@/components/primitives/SplitReveal'
import {
  Scissors,
  Sparkles,
  Eye,
  Brush,
  Heart,
  Sun,
} from 'lucide-react'

const services = [
  {
    icon: Scissors,
    title: 'Hair Dressing',
    desc: 'Professional cuts, trims, and styling for all hair types. Modern and classic looks.',
    highlight: true,
  },
  {
    icon: Sparkles,
    title: 'Braiding & Weaving',
    desc: 'Expert braids, twists, weaves, and extensions. Custom styles to suit your personality.',
    highlight: false,
  },
  {
    icon: Eye,
    title: 'Makeup & Beauty',
    desc: 'Flawless makeup application for everyday glam, events, and special occasions.',
    highlight: false,
  },
  {
    icon: Brush,
    title: 'Hair Treatment',
    desc: 'Deep conditioning, scalp treatments, and hair repair for healthy, beautiful hair.',
    highlight: false,
  },
  {
    icon: Heart,
    title: 'Blow-dry & Styling',
    desc: 'Sleek blow-dries, curls, updos, and special occasion styling for any event.',
    highlight: false,
  },
  {
    icon: Sun,
    title: 'Mobile Money',
    desc: 'Airtel Money and MTN Mobile Money services available for your convenience.',
    highlight: false,
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
}

export default function ServicesSection() {
  return (
    <section id="services" className="relative bg-muted py-24 md:py-32">
      <!-- Decorative -->
      <div className="absolute bottom-0 left-0 h-96 w-96 opacity-[0.03]">
        <div className="h-full w-full rounded-full bg-primary blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <!-- Section header -->
        <div className="mx-auto max-w-2xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 inline-block tracking-[0.2em] text-primary text-xs uppercase"
          >
            Our Services
          </motion.span>

          <SplitReveal
            as="h2"
            type="words"
            stagger={0.05}
            duration={0.8}
            className="font-heading text-4xl leading-tight font-bold text-foreground md:text-5xl"
          >
            Everything You Need
          </SplitReveal>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-4 text-foreground/70"
          >
            From classic cuts to creative styles, we offer a complete range of
            beauty services to keep you looking your best.
          </motion.p>
        </div>

        <!-- Services grid -->
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className={`group rounded-2xl, p-8 transition-all duration-300 ${
                service.highlight
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-surface text-foreground shadow-sm hover:shadow-md border border-border'
              }`}
            >
              <service.icon
                className={`mb-5 h-8 w-8 ${
                  service.highlight ? 'text-accent' : 'text-primary'
                }`}
              />
              <h3
                className={`font-heading text-xl font-bold ${
                  service.highlight ? 'text-white' : 'text-foreground'
                }`}
              >
                {service.title}
              </h3>
              <p
                className={mt-3 text-sm leading-relaxed ${
                  service.highlight ? 'text-white/80' : 'text-foreground/60'
                }`}
              >
                {service.desc}
              </p>
              {service.highlight && (
                <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-accent">
                  Most Popular
                </span>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
