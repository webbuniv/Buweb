import { HeroSlider } from "@/components/hero-slider"
import { ThreeDAboutSection } from "@/components/3d-about-section"
import { NewsEventsSection } from "@/components/news-events-section"

export default function Home() {
  return (
    <>
      <HeroSlider />
      <ThreeDAboutSection />
      <NewsEventsSection />
    </>
  )
}
