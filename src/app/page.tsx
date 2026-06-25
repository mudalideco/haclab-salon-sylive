import Header from '@/components/sections/Header'
import HeroSection from '@/components/sections/HeroSection'
import AboutSection from '@/components/sections/AboutSection'
import ServicesSection from '@/components/sections/ServicesSection'
import GallerySection from '@/components/sections/GallerySection'
import PricingSection from '@/components/sections/PricingSection'
import TeamSection from '@/components/sections/TeamSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import FeaturesSection from '@/components/sections/FeaturesSection'
import LocationSection from '@/components/sections/LocationSection'
import BookingSection from '@/components/sections/BookingSection'
import OffersSection from '@/components/sections/OffersSection'
import CTASection from '@/components/sections/CTASection'
import FooterSection from '@/components/sections/FooterSection'
import { SmoothScrollProvider } from '@/components/primitives/SmoothScrollProvider'

export default function Home() {
  return (
    <SmoothScrollProvider>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <GallerySection />
        <PricingSection />
        <TeamSection />
        <TestimonialsSection />
        <FeaturesSection />
        <LocationSection />
        <OffersSection />
        <BookingSection />
        <CTASection />
      </main>
      <FooterSection />
    </SmoothScrollProvider>
  )
}
