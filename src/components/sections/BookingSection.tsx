'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { SplitReveal } from '@/components/primitives/SplitReveal'
import { Send, Phone, MapPin } from 'lucide-react'

export default function BookingSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real scenario, this would send via EmailJS or similar
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <section id="contact" className="relative bg-muted py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Left - Booking form */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-4 inline-block tracking-[0.2em] text-primary text-xs uppercase"
            >
              Book Now
            </motion.span>

            <SplitReveal
              as="h2"
              type="words"
              stagger={0.05}
              duration={0.8}
              className="font-heading text-4xl leading-tight font-bold text-foreground md:text-5xl"
            >
              Book Your Appointment
            </SplitReveal>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-4 text-foreground/70"
            >
              Ready for a new look? Fill out the form and we will get back to you
              shortly to confirm your appointment.
            </motion.p>

            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              onSubmit={handleSubmit}
              className="mt-10 space-y-5"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full rounded-xl border border-border bg-surface px-4 py-3.5 text-sm text-foreground placeholder:text-foreground/40 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  required
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full rounded-xl border border-border bg-surface px-4 py-3.5 text-sm text-foreground placeholder:text-foreground/40 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <select
                  value={formData.service}
                  onChange={(e) =>
                    setFormData({ ...formData, service: e.target.value })
                  }
                  required
                  className="w-full rounded-xl border border-border bg-surface px-4 py-3.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                >
                  <option value="">Select Service</option>
                  <option value="hair-dressing">Hair Dressing</option>
                  <option value="braiding">Braiding & Weaving</option>
                  <option value="makeup">Makeup</option>
                  <option value="treatment">Hair Treatment</option>
                  <option value="styling">Blow-dry & Styling</option>
                  <option value="other">Other</option>
                </select>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) =>
                    setFormData({ ...formData, date: e.target.value })
                  }
                  className="w-full rounded-xl border border-border bg-surface px-4 py-3.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <textarea
                placeholder="Any special requests?"
                rows={3}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full resize-none rounded-xl border border-border bg-surface px-4 py-3.5 text-sm text-foreground placeholder:text-foreground/40 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />

              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition-all hover:bg-primary-dark"
              >
                {submitted ? '✓ Sent Successfully!' : 'Send Booking Request'}
                {!submitted && <Send size={16} />}
              </button>
            </motion.form>
          </div>

          {/* Right - Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <div className="rounded-2xl bg-surface p-10 shadow-sm border border-border">
              <h3 className="font-heading text-2xl font-bold text-foreground">
                Get in Touch
              </h3>
              <p className="mt-3 text-sm text-foreground/60">
                Prefer to call or message? We are here for you.
              </p>

              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      Call or WhatsApp
                    </p>
                    <a
                      href="tel:+256700769398"
                      className="text-sm text-foreground/60 transition-colors hover:text-primary"
                    >
                      +256 700 769 398
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      Location
                    </p>
                    <p className="text-sm text-foreground/60">
                      Salaama Road, Makindye
                      <br />
                      Kampala, Uganda
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-xl bg-muted p-6">
                <p className="text-sm font-semibold text-foreground">
                  Open Hours
                </p>
                <div className="mt-3 space-y-2 text-sm text-foreground/60">
                  <div className="flex justify-between">
                    <span>Monday – Sunday</span>
                    <span className="font-medium text-primary">9AM - 9PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Public Holidays</span>
                    <span className="font-medium text-primary">9AM - 6PM</span>
                  </div>
                </div>
              </div>

              <a
                href="https://wa.me/256700769398"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3.5 text-sm font-semibold text-white transition-all hover:bg-primary-dark"
              >
                <Phone size={16} />
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
