import { ThreeDHeroSection } from "@/components/3d-hero-section"
import { ThreeDStatsSection } from "@/components/3d-stats-section"
import { ThreeDAboutSection } from "@/components/3d-about-section"
import { NewsEventsSection } from "@/components/news-events-section"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <ThreeDHeroSection />
      <ThreeDStatsSection />
      <ThreeDAboutSection />
      <NewsEventsSection />
    </main>
  )
}
