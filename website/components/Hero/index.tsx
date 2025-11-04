"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect, useMemo } from "react"
import { ChevronLeft, ChevronRight, ExternalLink, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HeroMedia {
  type: "video" | "image" | "no-overlay"
  src: string
  title?: string
  description?: string
  link?: string
  linkText?: string
}

const heroMedia: HeroMedia[] = [
           {
    type: "image",
    src: "https://cloud.appwrite.io/v1/storage/buckets/676995bd003a7bc1e278/files/686e8a2e0035bf8439de/view?project=674dcf7b003d57db960a&mode=admin",
    title: "The 31ST GRADUATION CEREMONY",
    description:
      "Caps. Gowns. Dreams. Counting down to a day of honour, joy, and new beginnings. Graduation is on the horizon... Your moment to shine is coming soon. Graduation awaits – are you ready?",
  },
         {
    type: "image",
    
    src: "https://fra.cloud.appwrite.io/v1/storage/buckets/676995bd003a7bc1e278/files/68f530b0002a2a814f0e/view?project=674dcf7b003d57db960a&mode=admin",
    title: "The Annual Cultural Fest : Celebrating Diversity and Unity at Bugema University",
    description:" It's a spectacular celebration where the diverse tapestry of the student body is woven together, transforming the campus into a dynamic hub of tradition, music, and performance.",
    link: "http://bugemauniv.ac.ug/events/68ef5c13001137001105",
    linkText: "explore more",
  },  
        {
    type: "image",
    
    src: "https://fra.cloud.appwrite.io/v1/storage/buckets/676995bd003a7bc1e278/files/68dfd6160038674ab136/view?project=674dcf7b003d57db960a&mode=admin",
    title: "We are now an officially Accredited Test Center (ATC) for ICDL Certification",
    description:
      "This means we can now administer exams for the International Certification of Digital Literacy (ICDL), the world's leading digital skills qualification..",
    link: "http://erms.bugemauniv.ac.ug/application",
    linkText: "",
  },
 
//     {
//     type: "image",
//     src: "https://fra.cloud.appwrite.io/v1/storage/buckets/676995bd003a7bc1e278/files/68af0e5e003ba1ea676a/view?project=674dcf7b003d57db960a&mode=admin",
//     title: "Bugema University Administration tours the upcoming Science Complex",
//     description:
//       "This is to ensure gradual progress towards providing students with a state of the art learning facility.",
//     link: "https://www.bugemauniv.ac.ug/news/68af1c190013b091c145",
//     linkText: "Read More",
//   },
    {
    type: "image",
    src: "https://fra.cloud.appwrite.io/v1/storage/buckets/676995bd003a7bc1e278/files/68a34fae001b3f7550d4/view?project=674dcf7b003d57db960a&mode=admin",
    title: "Walking the Path of Knowledge Together",
    description:
      "Still on the road of discovery and growth, every step counts on this academic journey, forward together the journey goes on. It Never Stops Until we make it.",
    link: "https://www.bugemauniv.ac.ug/news/68641e0d0012974a663d",
    linkText: "",
  },


]

interface HeroSlideProps {
  media: HeroMedia
  isActive: boolean
}

const HeroSlide = ({ media, isActive }: HeroSlideProps) => {
          function useCountdown(target: Date) {
          const [now, setNow] = useState(() => new Date());
          useEffect(() => {
            const t = setInterval(() => setNow(new Date()), 1000);
            return () => clearInterval(t);
          }, []);
          const diff = Math.max(0, target.getTime() - now.getTime());
          const s = Math.floor(diff / 1000);
          const d = Math.floor(s / 86400);
          const h = Math.floor((s % 86400) / 3600);
          const m = Math.floor((s % 3600) / 60);
          const sec = s % 60;
          return { d, h, m, s: sec, done: diff === 0 };
        }
        const grad = useMemo(() => {
            const t = new Date();
            t.setHours(23, 59, 59, 999);
            t.setDate(t.getDate() + 4); // 4 days from now
            return t;
          }, []);
         const { d, h, m, s, done } = useCountdown(grad);
  return (
    <div className="relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden">
      {media.type === "video" ? (
        <video className="absolute inset-0 w-full h-full object-cover" autoPlay muted loop playsInline>
          <source src={media.src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <>
          <div className={` absolute md:hidden top-28 left-[25%] z-50 zoom-in flex text-blue-600 flex-col w-[50%] bg-white bg-opacity-70 backdrop-blur-lg  px-3 md:px-5 py-2 md:py-3 rounded-md text-center font-bold`}>
          <div className="text-[10px] md:text-xs uppercase opacity-90">Graduation Count Down</div>
          <div className="flex items-center gap-1 md:gap-2 font-mono">
            {[
              { v: d, label: "D" },     
              { v: h, label: "H" },
              { v: m, label: "M" },
              { v: s, label: "S" },
            ].map((t) => (
              <div
                key={t.label}
                className="bg-white/15 backdrop-blur px-1.5 md:px-2 py-0.5 md:py-1 rounded md:rounded-md text-xs md:text-sm font-semibold"
              >
                {String(t.v).padStart(2, "0")}
                <span className="ml-1 text-[9px] md:text-[10px] opacity-80">{t.label}</span>
              </div>
            ))}
          </div>
        </div>

         <Image
          src={media.src || "/placeholder.svg"}
          alt={media.title || "Hero slide"}
          fill
          className="object-cover"
          priority={isActive}
          sizes="100vw"
        />
        </>
      )}

      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

      {/* Content overlay */}
      {media.type !== "no-overlay" && (media.title || media.description) && (
        <div className="absolute inset-0 flex items-end">
          <div className="w-full p-6 md:p-8 lg:p-12">
            <div className="max-w-4xl mx-auto text-white">
              {media.title && (
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">{media.title}</h1>
              )}
              {media.description && (
                <p className="text-sm md:text-base lg:text-lg mb-6 leading-relaxed opacity-90 max-w-2xl">
                  {media.description}
                </p>
              )}
              {media.link && media.linkText && (
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Link href={media.link} className="inline-flex items-center gap-2">
                    {media.linkText}
                    {media.linkText === "Apply Now" ? (
                      <FileText className="w-4 h-4" />
                    ) : (
                      <ExternalLink className="w-4 h-4" />
                    )}
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-advance slides
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroMedia.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + heroMedia.length) % heroMedia.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % heroMedia.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  return (
    <section className="relative w-full">
      {/* Slides container */}
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {heroMedia.map((media, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <HeroSlide media={media} isActive={index === currentSlide} />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-all duration-200 text-white"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-all duration-200 text-white"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {heroMedia.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentSlide ? "bg-white scale-110" : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
        <div
          className="h-full bg-white transition-all duration-100 ease-linear"
          style={{
            width: isAutoPlaying ? "100%" : "0%",
            animation: isAutoPlaying ? "progress 6s linear infinite" : "none",
          }}
        />
      </div>

      <style jsx>{`
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </section>
  )
}
