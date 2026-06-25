'use client'

import { motion } from 'framer-motion'
import { SplitReveal } from '@/components/primitives/SplitReveal'
import { Sparkles, Clock, MapPin } from 'lucide-react'

const highlights = [
  {
    icon: Sparkles,
    label: 'Professional Styling',
    desc: 'Expert hair dressing, braiding, and beauty services by skilled stylists.',
  },
  {
    icon: Clock,
    label: 'Open Daily',
    desc: 'Serving you 7 days a week from 9:00 AM to 9:00 PM. Convenient hours.',
  },
  {
    icon: MapPin,
    label: 'Makindye Location',
    desc: 'Easily accessible on Salaama Road, Makindye, Kampala.',
  },
]

export default function AboutSection() {
  return (
    <section id="about" className="relative bg-background py-24 md:py-32">
      <!-- Decorative element -->
      <div className="absolute top-0 right-0 h-64 w-64 opacity-5">
        <div className="h-full w-full rounded-full bg-primary blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <!-- Left - Image collage -->
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <div
                className="h-full w-full bg-cover bg-center"
                style={{
                    backgroundImage:
                  "url('https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=800&h=1000&fit=crop')",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
            </div>
            <!-- Floating card -->
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -bottom-6 -right-6 rounded-2xl bg-surface p-6 shadow-xl lg:-right-10"
            >
              <p className="font-heading text-4xl font-bold text-primary">7+</p>
              <p className="mt-1 text-sm text-foreground/60">Years of Beauty</p>
            </motion.div>
          </motion.div>

          <!-- Right - Content -->
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-4 inline-block tracking-[0.2em] text-primary text-xs uppercase"
            >
              About Us
            </motion.span>

            <SplitReveal
              as="h2"
              type="words"
              stagger={0.05}
              duration={0.8}
              className="font-heading text-4xl leading-tight font-bold text-foreground md:text-5xl"
            >
              Beauty That Speaks Volumes
            </SplitReveal>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-6 leading-relaxed text-foreground/70"
            >
              Welcome to <strong>Sylive Beauty Salon</strong>, your trusted beauty
              destination on Salaama Road, Makindye. We are a full-service salon
              specializing in professional hair dressing, braiding, styling, and
              beauty treatments.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-4 leading-relaxed text-foreground/70"
            >
              At Sylive, we believe beauty is more than appearance &mdash; it&apos;s confidence.
              Whether you need a fresh new look, elegant braids, or a quick touch-up,
              our skilled team is dedicated to making you look and feel your best.
            </motion.p>

            <!-- Highlights grid -->
            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                  className="rounded-xl bg-surface p-5 shadow-sm border border-border"
                >
                  <item.icon className="mb-3 h-5 w-5 text-primary" />
                  <h3 className="font-heading text-sm font-bold text-foreground">
                    {item.label}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-foreground/60">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
