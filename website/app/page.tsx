import ModernHero from "@/components/ModernHero"
import StatsSection from "@/components/StatsSection"
import AboutSection from "@/components/AboutSection"
import FeaturesSection from "@/components/FeaturesSection"
import ProgramsShowcase from "@/components/ProgramsShowcase"
import TestimonialsSection from "@/components/TestimonialsSection"
import NewsEventsSection from "@/components/NewsEventsSection"
import ModernFooter from "@/components/ModernFooter"

export default function Home() {
  return (
    <main className="min-h-screen">
      <ModernHero />
      <StatsSection />
      <AboutSection />
      <FeaturesSection />
      <ProgramsShowcase />
      <TestimonialsSection />
      <NewsEventsSection />
      <ModernFooter />
    </main>
  )
}
