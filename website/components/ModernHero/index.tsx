"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Play, ArrowRight, Users, BookOpen, Award } from "lucide-react"

const heroSlides = [
  {
    id: 1,
    title: "Excellence in Higher Education",
    subtitle: "Shaping Tomorrow's Leaders Today",
    description:
      "Join over 10,000 students from 17+ countries in our world-class academic programs designed to prepare you for global success.",
    image:
      "https://cloud.appwrite.io/v1/storage/buckets/676995bd003a7bc1e278/files/686658bc0026975fda0f/view?project=674dcf7b003d57db960a&mode=admin",
    cta: {
      primary: { text: "Apply Now", link: "http://erms.bugemauniv.ac.ug/application" },
      secondary: { text: "Explore Programs", link: "/programs" },
    },
    stats: [
      { icon: Users, value: "10,000+", label: "Students" },
      { icon: BookOpen, value: "50+", label: "Programs" },
      { icon: Award, value: "25+", label: "Years of Excellence" },
    ],
  },
  {
    id: 2,
    title: "31st Graduation Ceremony",
    subtitle: "Celebrating Academic Achievement",
    description:
      "Witness the culmination of academic excellence as our graduates prepare to make their mark on the world.",
    image:
      "https://cloud.appwrite.io/v1/storage/buckets/676995bd003a7bc1e278/files/686e8a2e0035bf8439de/view?project=674dcf7b003d57db960a&mode=admin",
    cta: {
      primary: { text: "Learn More", link: "/graduation" },
      secondary: { text: "Watch Live", link: "/live" },
    },
  },
  {
    id: 3,
    title: "Innovation & Research",
    subtitle: "Advancing Knowledge, Transforming Lives",
    description:
      "Discover groundbreaking research and innovation that addresses real-world challenges and creates sustainable solutions.",
    image:
      "https://cloud.appwrite.io/v1/storage/buckets/676995bd003a7bc1e278/files/68641dd3003cdff2242d/view?project=674dcf7b003d57db960a&mode=admin",
    cta: {
      primary: { text: "Research Centers", link: "/research" },
      secondary: { text: "Publications", link: "/publications" },
    },
  },
]

const ModernHero = () => {
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
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }

  const currentSlideData = heroSlides[currentSlide]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <Image
              src={currentSlideData.image || "/placeholder.svg"}
              alt={currentSlideData.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 3D Floating Elements */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute top-20 right-20 w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-600 rounded-xl opacity-20 blur-sm"
        />
        <motion.div
          animate={{
            y: [0, 30, 0],
            rotate: [0, -10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-32 left-16 w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-full opacity-15 blur-sm"
        />
        <motion.div
          animate={{
            y: [0, -15, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 7,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 4,
          }}
          className="absolute top-1/2 right-32 w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg opacity-20 blur-sm"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-20 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="inline-block px-4 py-2 bg-blue-600/20 backdrop-blur-sm rounded-full border border-blue-400/30"
              >
                <span className="text-blue-300 text-sm font-medium">{currentSlideData.subtitle}</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-5xl lg:text-7xl font-bold leading-tight bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent"
              >
                {currentSlideData.title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-xl text-gray-300 leading-relaxed max-w-2xl"
              >
                {currentSlideData.description}
              </motion.p>
            </div>

            {/* Stats (if available) */}
            {currentSlideData.stats && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-8"
              >
                {currentSlideData.stats.map((stat, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="p-2 bg-blue-600/20 rounded-lg backdrop-blur-sm">
                      <stat.icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white">{stat.value}</div>
                      <div className="text-sm text-gray-400">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href={currentSlideData.cta.primary.link}
                className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                {currentSlideData.cta.primary.text}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href={currentSlideData.cta.secondary.link}
                className="group inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold rounded-xl border border-white/20 transition-all duration-300"
              >
                <Play className="mr-2 w-5 h-5" />
                {currentSlideData.cta.secondary.text}
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Content - 3D Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative group">
              <motion.div
                whileHover={{ rotateY: 5, rotateX: 5 }}
                transition={{ duration: 0.3 }}
                className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-3xl blur-xl opacity-50" />
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-4">Quick Access</h3>
                  <div className="space-y-4">
                    <Link
                      href="/admissions"
                      className="flex items-center p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-colors group"
                    >
                      <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                        <BookOpen className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-white font-semibold">Admissions</div>
                        <div className="text-gray-300 text-sm">Apply for 2024/2025</div>
                      </div>
                      <ArrowRight className="w-5 h-5 text-white ml-auto group-hover:translate-x-1 transition-transform" />
                    </Link>

                    <Link
                      href="/student-portal"
                      className="flex items-center p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-colors group"
                    >
                      <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mr-4">
                        <Users className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-white font-semibold">Student Portal</div>
                        <div className="text-gray-300 text-sm">Access your account</div>
                      </div>
                      <ArrowRight className="w-5 h-5 text-white ml-auto group-hover:translate-x-1 transition-transform" />
                    </Link>

                    <Link
                      href="/virtual-tour"
                      className="flex items-center p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-colors group"
                    >
                      <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mr-4">
                        <Award className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-white font-semibold">Virtual Tour</div>
                        <div className="text-gray-300 text-sm">Explore our campus</div>
                      </div>
                      <ArrowRight className="w-5 h-5 text-white ml-auto group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
        <div className="flex items-center space-x-4">
          <button
            onClick={prevSlide}
            className="p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white hover:bg-white/20 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="flex space-x-2">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? "bg-white scale-125" : "bg-white/40 hover:bg-white/60"
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white hover:bg-white/20 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Auto-play Toggle */}
      <button
        onClick={() => setIsAutoPlaying(!isAutoPlaying)}
        className="absolute top-8 right-8 z-30 p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white hover:bg-white/20 transition-colors"
      >
        {isAutoPlaying ? (
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          >
            <Play className="w-6 h-6" />
          </motion.div>
        ) : (
          <Play className="w-6 h-6" />
        )}
      </button>
    </section>
  )
}

export default ModernHero
