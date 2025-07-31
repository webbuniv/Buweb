"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Play, ArrowRight, Users, BookOpen, Award, Globe } from "lucide-react"

const heroSlides = [
  {
    id: 1,
    image: "/placeholder.svg?height=800&width=1200&text=Campus+Main+Building",
    title: "Excellence in Christian Education",
    subtitle: "Shaping Leaders for Tomorrow",
    description:
      "Join over 15,000 students from 17+ countries in our mission to provide quality holistic Christian education that prepares students for productive lives of service.",
    cta: "Apply Now",
    ctaLink: "/admissions/apply",
    stats: [
      { icon: Users, value: "15,000+", label: "Students" },
      { icon: BookOpen, value: "120+", label: "Programs" },
      { icon: Award, value: "75+", label: "Years of Excellence" },
      { icon: Globe, value: "17+", label: "Countries" },
    ],
  },
  {
    id: 2,
    image: "/placeholder.svg?height=800&width=1200&text=Students+in+Laboratory",
    title: "Innovation Through Research",
    subtitle: "Advancing Knowledge, Transforming Lives",
    description:
      "Our state-of-the-art facilities and dedicated faculty provide students with hands-on learning experiences that prepare them for successful careers in their chosen fields.",
    cta: "Explore Programs",
    ctaLink: "/academics/programs",
    stats: [
      { icon: BookOpen, value: "8", label: "Schools" },
      { icon: Users, value: "500+", label: "Faculty" },
      { icon: Award, value: "95%", label: "Employment Rate" },
      { icon: Globe, value: "50+", label: "Research Projects" },
    ],
  },
  {
    id: 3,
    image: "/placeholder.svg?height=800&width=1200&text=Campus+Life+Activities",
    title: "Vibrant Campus Community",
    subtitle: "Where Friendships and Futures Begin",
    description:
      "Experience a rich campus life with diverse cultural activities, sports, clubs, and organizations that help you grow personally and professionally while building lifelong connections.",
    cta: "Campus Life",
    ctaLink: "/student-life",
    stats: [
      { icon: Users, value: "100+", label: "Student Clubs" },
      { icon: Award, value: "20+", label: "Sports Teams" },
      { icon: Globe, value: "365", label: "Days of Activities" },
      { icon: BookOpen, value: "24/7", label: "Library Access" },
    ],
  },
  {
    id: 4,
    image: "/placeholder.svg?height=800&width=1200&text=Graduation+Ceremony",
    title: "Your Success Story Starts Here",
    subtitle: "Join Our Alumni Network",
    description:
      "Become part of a global network of successful graduates who are making a difference in their communities and industries worldwide. Your journey to excellence begins at Bugema.",
    cta: "Alumni Stories",
    ctaLink: "/alumni",
    stats: [
      { icon: Users, value: "50,000+", label: "Alumni" },
      { icon: Globe, value: "40+", label: "Countries" },
      { icon: Award, value: "85%", label: "Career Advancement" },
      { icon: BookOpen, value: "∞", label: "Opportunities" },
    ],
  },
]

export function HeroSlider() {
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
    <section className="relative h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src={heroSlides[currentSlide].image || "/placeholder.svg"}
              alt={heroSlides[currentSlide].title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/60 to-transparent" />
          </div>

          {/* Content */}
          <div className="relative z-10 h-full flex items-center">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <motion.div
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-white space-y-8"
                >
                  <div className="space-y-6">
                    <motion.div
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="inline-block px-4 py-2 bg-amber-500/20 backdrop-blur-sm rounded-full text-sm font-medium border border-amber-400/30"
                    >
                      {heroSlides[currentSlide].subtitle}
                    </motion.div>

                    <motion.h1
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                      className="text-4xl md:text-6xl font-bold leading-tight"
                    >
                      {heroSlides[currentSlide].title}
                    </motion.h1>

                    <motion.p
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                      className="text-xl text-white/90 leading-relaxed max-w-2xl"
                    >
                      {heroSlides[currentSlide].description}
                    </motion.p>
                  </div>

                  <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    className="flex flex-col sm:flex-row gap-4"
                  >
                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold group" asChild>
                      <a href={heroSlides[currentSlide].ctaLink}>
                        {heroSlides[currentSlide].cta}
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-white/30 text-white hover:bg-white/10 bg-transparent backdrop-blur-sm"
                    >
                      <Play className="mr-2 h-5 w-5" />
                      Watch Video
                    </Button>
                  </motion.div>

                  {/* Stats */}
                  <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/20"
                  >
                    {heroSlides[currentSlide].stats.map((stat, index) => (
                      <div key={index} className="text-center">
                        <stat.icon className="h-8 w-8 mx-auto mb-2 text-amber-400" />
                        <div className="text-2xl font-bold">{stat.value}</div>
                        <div className="text-sm text-white/70">{stat.label}</div>
                      </div>
                    ))}
                  </motion.div>
                </motion.div>

                {/* Right Content - Feature Cards */}
                <motion.div
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="hidden lg:block"
                >
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { title: "World-Class Faculty", desc: "Learn from industry experts and renowned academics" },
                      { title: "Modern Facilities", desc: "State-of-the-art labs, libraries, and learning spaces" },
                      { title: "Global Network", desc: "Connect with students and alumni worldwide" },
                      { title: "Career Support", desc: "Comprehensive career services and job placement" },
                    ].map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                        className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
                      >
                        <h3 className="font-semibold text-white mb-2">{feature.title}</h3>
                        <p className="text-sm text-white/80">{feature.desc}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center space-x-4">
          {/* Slide Indicators */}
          <div className="flex space-x-2">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Arrow Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-20">
        <motion.div
          className="h-full bg-amber-400"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 6, ease: "linear" }}
          key={currentSlide}
        />
      </div>
    </section>
  )
}
