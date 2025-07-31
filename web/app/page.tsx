import { TopContactBar } from "@/components/top-contact-bar"
import { ProfessionalNavbar } from "@/components/professional-navbar"
import { HeroSlider } from "@/components/hero-slider"
import { ThreeDAboutSection } from "@/components/3d-about-section"
import { NewsEventsSection } from "@/components/news-events-section"
import { ThreeDFooter } from "@/components/3d-footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <TopContactBar />
      <ProfessionalNavbar />
      <HeroSlider />
      <ThreeDAboutSection />
      <NewsEventsSection />
      <ThreeDFooter />
    </main>
  )
}
