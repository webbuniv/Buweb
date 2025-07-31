"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Play, ArrowRight, GraduationCap, Users, Award } from "lucide-react"

const slides = [
  {
    id: 1,
    title: "Excellence in Christian Education",
    subtitle: "Shaping Leaders for Tomorrow",
    description:
      "For over 75 years, Bugema University has been providing quality holistic Christian education that prepares students for productive lives of service to God and humanity.",
    image: "/placeholder.svg?height=600&width=1200&text=Campus+Life",
    cta: "Apply Now",
    ctaLink: "https://apply.bugemauniv.ac.ug",
    stats: [
      { icon: Users, value: "15,000+", label: "Students" },
      { icon: GraduationCap, value: "120+", label: "Programs" },
      { icon: Award, value: "75+", label: "Years of Excellence" },
    ],
  },
  {
    id: 2,
    title: "World-Class Research Facilities",
    subtitle: "Innovation Meets Education",
    description:
      "Our state-of-the-art research centers and laboratories provide students with hands-on experience in cutting-edge technology and scientific discovery.",
    image: "/placeholder.svg?height=600&width=1200&text=Research+Labs",
    cta: "Explore Research",
    ctaLink: "/research",
    stats: [
      { icon: Users, value: "500+", label: "Research Projects" },
      { icon: GraduationCap, value: "8", label: "Research Centers" },
      { icon: Award, value: "200+", label: "Publications" },
    ],
  },
  {
    id: 3,
    title: "Vibrant Campus Community",
    subtitle: "Where Friendships Flourish",
    description:
      "Experience a diverse and inclusive campus environment with students from over 17 countries, creating a truly global learning community.",
    image: "/placeholder.svg?height=600&width=1200&text=Student+Community",
    cta: "Campus Life",
    ctaLink: "/student-life",
    stats: [
      { icon: Users, value: "17+", label: "Countries" },
      { icon: GraduationCap, value: "50+", label: "Clubs & Societies" },
      { icon: Award, value: "3", label: "Campuses" },
    ],
  },
]

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <section className="relative h-screen overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
      {/* Background Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0"
        >
          <Image
            src={slides[currentSlide].image || "/placeholder.svg"}
            alt={slides[currentSlide].title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-white space-y-6"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="space-y-4"
                >
                  <div className="inline-block px-4 py-2 bg-blue-600/20 backdrop-blur-sm rounded-full border border-blue-400/30">
                    <span className="text-blue-300 text-sm font-medium">{slides[currentSlide].subtitle}</span>
                  </div>

                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                    {slides[currentSlide].title}
                  </h1>

                  <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl">
                    {slides[currentSlide].description}
                  </p>
                </motion.div>

                {/* Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="grid grid-cols-3 gap-6 py-6"
                >
                  {slides[currentSlide].stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <stat.icon className="h-8 w-8 mx-auto mb-2 text-blue-400" />
                      <div className="text-2xl font-bold">{stat.value}</div>
                      <div className="text-sm text-gray-400">{stat.label}</div>
                    </div>
                  ))}
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <Button
                    asChild
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg group"
                  >
                    <Link href={slides[currentSlide].ctaLink}>
                      {slides[currentSlide].cta}
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>

                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm group bg-transparent"
                    onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                  >
                    <Play className="mr-2 h-5 w-5" />
                    Watch Video
                  </Button>
                </motion.div>
              </motion.div>
            </AnimatePresence>

            {/* Decorative Elements */}
            <div className="hidden lg:block relative">
              <motion.div
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 20,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-white/20 rounded-full"
              />
              <motion.div
                animate={{
                  rotate: [360, 0],
                  scale: [1, 0.9, 1],
                }}
                transition={{
                  duration: 15,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-blue-400/30 rounded-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center space-x-4">
          {/* Slide Indicators */}
          <div className="flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75"
                }`}
              />
            ))}
          </div>

          {/* Arrow Controls */}
          <div className="flex space-x-2 ml-6">
            <Button
              variant="ghost"
              size="sm"
              onClick={prevSlide}
              className="text-white hover:bg-white/10 backdrop-blur-sm"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={nextSlide}
              className="text-white hover:bg-white/10 backdrop-blur-sm"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          {/* Auto-play Toggle */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className={`text-white hover:bg-white/10 backdrop-blur-sm ml-4 ${isAutoPlaying ? "bg-white/20" : ""}`}
          >
            <Play className={`h-4 w-4 ${isAutoPlaying ? "opacity-100" : "opacity-50"}`} />
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white/70"
      >
        <div className="flex flex-col items-center space-y-2">
          <div className="w-px h-8 bg-gradient-to-b from-transparent to-white/50" />
          <span className="text-xs uppercase tracking-wider">Scroll</span>
        </div>
      </motion.div>
    </section>
  )
}
