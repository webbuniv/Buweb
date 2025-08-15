"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Play, GraduationCap, Users, Award, BookOpen, Globe, Target } from "lucide-react"
import Image from "next/image"

const heroCards = [
  {
    icon: GraduationCap,
    title: "Excellence in Education",
    description: "World-class academic programs with industry-relevant curriculum",
    color: "from-blue-600 to-blue-700",
    delay: 0,
  },
  {
    icon: Users,
    title: "Diverse Community",
    description: "Students from over 17 countries creating a rich cultural experience",
    color: "from-amber-500 to-amber-600",
    delay: 0.2,
  },
  {
    icon: Award,
    title: "Recognition & Awards",
    description: "Nationally recognized for academic excellence and innovation",
    color: "from-emerald-600 to-emerald-700",
    delay: 0.4,
  },
  {
    icon: BookOpen,
    title: "Research Focus",
    description: "Leading research initiatives solving real-world problems",
    color: "from-blue-600 to-blue-700",
    delay: 0.6,
  },
  {
    icon: Globe,
    title: "Global Perspective",
    description: "International partnerships and exchange programs",
    color: "from-amber-500 to-amber-600",
    delay: 0.8,
  },
  {
    icon: Target,
    title: "Career Success",
    description: "95% graduate employment rate within 6 months",
    color: "from-emerald-600 to-emerald-700",
    delay: 1.0,
  },
]

const FloatingElement = ({ className, delay = 0 }: { className: string; delay?: number }) => (
  <motion.div
    className={`absolute rounded-full blur-xl ${className}`}
    animate={{
      y: [-20, 20, -20],
      x: [-10, 10, -10],
      rotate: [0, 180, 360],
    }}
    transition={{
      duration: 8,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
      delay,
    }}
  />
)

export function ThreeDHeroSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/placeholder.svg?height=1080&width=1920&text=Bugema+University+Campus"
          alt="Bugema University Campus"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-800/80 to-emerald-900/90" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <FloatingElement className="top-20 left-10 w-32 h-32 bg-amber-500/20" delay={0} />
        <FloatingElement className="top-40 right-20 w-24 h-24 bg-blue-500/20" delay={2} />
        <FloatingElement className="bottom-40 left-20 w-40 h-40 bg-emerald-500/20" delay={4} />
        <FloatingElement className="bottom-20 right-10 w-28 h-28 bg-amber-500/20" delay={6} />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%239C92AC' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -100, rotateY: -30 }}
            animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-white space-y-8"
            style={{
              transform: `rotateY(${mousePosition.x * 5}deg) rotateX(${mousePosition.y * 5}deg)`,
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20">
                <motion.span
                  className="w-3 h-3 bg-gradient-to-r from-amber-400 to-emerald-400 rounded-full mr-3"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                />
                Excellence in Service Since 1948
              </div>

              <motion.h1
                className="text-4xl md:text-6xl font-bold text-white leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.4 }}
              >
                Shape Your Future at{" "}
                <span className="bg-gradient-to-r from-amber-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">
                  Bugema University
                </span>
              </motion.h1>

              <motion.p
                className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-2xl"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.6 }}
              >
                Where knowledge meets opportunity. Join a diverse community of learners from over 17 countries and
                experience quality holistic Christian education with hands-on learning.
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white font-semibold group transform hover:scale-105 transition-all duration-300 shadow-2xl"
              >
                Apply Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 group bg-transparent backdrop-blur-sm transform hover:scale-105 transition-all duration-300"
              >
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                Watch Campus Tour
              </Button>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1 }}
              className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20"
            >
              {[
                { value: "15K+", label: "Students" },
                { value: "8", label: "Schools" },
                { value: "17+", label: "Countries" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  whileHover={{ scale: 1.1, rotateY: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-emerald-400 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/70">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - 3D Cards */}
          <motion.div
            initial={{ opacity: 0, x: 100, rotateY: 30 }}
            animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="perspective-1000"
          >
            <div className="grid grid-cols-2 gap-6">
              {heroCards.map((card, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 100, rotateX: -45, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, y: 0, rotateX: 0, scale: 1 } : {}}
                  transition={{
                    duration: 0.8,
                    delay: card.delay,
                    type: "spring",
                    stiffness: 100,
                  }}
                  whileHover={{
                    scale: 1.05,
                    rotateY: 15,
                    rotateX: 10,
                    z: 50,
                  }}
                  className="transform-gpu"
                >
                  <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:border-white/40 group h-full overflow-hidden relative">
                    {/* Gradient Background */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}
                    />

                    <CardContent className="p-6 text-center relative z-10">
                      <motion.div
                        className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 backdrop-blur-sm"
                        whileHover={{ rotateY: 180 }}
                        transition={{ duration: 0.6 }}
                      >
                        <card.icon className="h-8 w-8 text-white" />
                      </motion.div>
                      <h3 className="font-bold text-white mb-3 text-lg">{card.title}</h3>
                      <p className="text-sm text-white/80 leading-relaxed">{card.description}</p>
                    </CardContent>

                    {/* Hover Glow Effect */}
                    <div
                      className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r ${card.color} blur-xl -z-10`}
                    />
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          className="w-8 h-12 border-2 border-white/30 rounded-full flex justify-center cursor-pointer hover:border-white/50 transition-colors"
          whileHover={{ scale: 1.1 }}
        >
          <motion.div
            className="w-1 h-4 bg-white/50 rounded-full mt-2"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
