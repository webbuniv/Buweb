"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Play, Users, BookOpen, Award } from "lucide-react"
import { Button } from "@/components/ui/button"

const heroSlides = [
  {
    id: 1,
    title: "Excellence in Education",
    subtitle: "Shaping Tomorrow's Leaders",
    description:
      "Join thousands of students who have transformed their lives through quality education at Bugema University.",
    image: "/placeholder.svg?height=800&width=1200",
    cta: "Apply Now",
    stats: { students: "15,000+", programs: "50+", years: "30+" },
  },
  {
    id: 2,
    title: "Innovation & Research",
    subtitle: "Pioneering the Future",
    description: "Discover cutting-edge research opportunities and innovative programs designed for the modern world.",
    image: "/placeholder.svg?height=800&width=1200",
    cta: "Explore Programs",
    stats: { research: "200+", labs: "25+", patents: "15+" },
  },
  {
    id: 3,
    title: "Global Community",
    subtitle: "Connect. Learn. Grow.",
    description: "Be part of a diverse, international community that prepares you for success in a globalized world.",
    image: "/placeholder.svg?height=800&width=1200",
    cta: "Join Us",
    stats: { countries: "40+", alumni: "25,000+", partnerships: "100+" },
  },
]

const floatingElements = [
  { icon: Users, position: "top-20 left-20", delay: 0 },
  { icon: BookOpen, position: "top-40 right-32", delay: 1 },
  { icon: Award, position: "bottom-32 left-32", delay: 2 },
]

export default function ModernHero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
    setIsAutoPlaying(false)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
  }

  return (
    <section className="relative h-screen overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      {/* Background Slides */}
      <div className="absolute inset-0">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-110"
            }`}
          >
            <img src={slide.image || "/placeholder.svg"} alt={slide.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
          </div>
        ))}
      </div>

      {/* Floating Elements */}
      {floatingElements.map((element, index) => {
        const Icon = element.icon
        return (
          <div
            key={index}
            className={`absolute ${element.position} hidden lg:block`}
            style={{
              animation: `float 6s ease-in-out infinite ${element.delay}s`,
            }}
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-full p-4 border border-white/20">
              <Icon className="w-8 h-8 text-white" />
            </div>
          </div>
        )
      })}

      {/* Main Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            {heroSlides.map((slide, index) => (
              <div
                key={slide.id}
                className={`transition-all duration-1000 ${
                  index === currentSlide ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 absolute"
                }`}
              >
                <div className="mb-6">
                  <span className="inline-block px-4 py-2 bg-blue-600/80 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-4">
                    {slide.subtitle}
                  </span>
                  <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">{slide.title}</h1>
                  <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl leading-relaxed">
                    {slide.description}
                  </p>
                </div>

                {/* Stats */}
                <div className="flex flex-wrap gap-8 mb-8">
                  {Object.entries(slide.stats).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-3xl md:text-4xl font-bold text-white mb-1">{value}</div>
                      <div className="text-gray-300 capitalize text-sm">{key}</div>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
                    {slide.cta}
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg bg-transparent"
                  >
                    <Play className="w-5 h-5 mr-2" />
                    Watch Video
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center gap-4">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 transition-all"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="flex gap-2">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide ? "bg-white scale-125" : "bg-white/50 hover:bg-white/70"
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="p-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 transition-all"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 z-20">
        <div className="flex flex-col items-center text-white">
          <span className="text-sm mb-2 rotate-90 origin-center">Scroll</span>
          <div className="w-px h-12 bg-white/50">
            <div
              className="w-px bg-white transition-all duration-300"
              style={{ height: `${((currentSlide + 1) / heroSlides.length) * 100}%` }}
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(1deg); }
          66% { transform: translateY(5px) rotate(-1deg); }
        }
      `}</style>
    </section>
  )
}
