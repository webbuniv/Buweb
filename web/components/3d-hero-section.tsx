"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Play, GraduationCap, Users, Award, BookOpen, Globe, Building } from "lucide-react"

const heroCards = [
  {
    icon: GraduationCap,
    title: "Academic Excellence",
    description: "World-class education with cutting-edge curriculum and innovative teaching methods",
    color: "from-blue-500 to-purple-600",
    delay: 0.1,
  },
  {
    icon: Users,
    title: "Global Community",
    description: "Students from 17+ countries creating a diverse and inclusive learning environment",
    color: "from-green-500 to-teal-600",
    delay: 0.2,
  },
  {
    icon: Award,
    title: "Recognition",
    description: "Nationally acclaimed for innovation, research excellence, and student success",
    color: "from-orange-500 to-red-600",
    delay: 0.3,
  },
  {
    icon: BookOpen,
    title: "Research Focus",
    description: "Leading research initiatives addressing real-world challenges and solutions",
    color: "from-purple-500 to-pink-600",
    delay: 0.4,
  },
  {
    icon: Globe,
    title: "Global Impact",
    description: "Alumni making a difference in communities worldwide through service and leadership",
    color: "from-cyan-500 to-blue-600",
    delay: 0.5,
  },
  {
    icon: Building,
    title: "Modern Campus",
    description: "State-of-the-art facilities designed for 21st-century learning and innovation",
    color: "from-yellow-500 to-orange-600",
    delay: 0.6,
  },
]

export function ThreeDHeroSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute top-40 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-40 left-20 w-80 h-80 bg-green-500/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "4s" }}
        />
        <div
          className="absolute bottom-20 right-40 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "6s" }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -100, rotateY: -30 }}
            animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
            transition={{ duration: 1, type: "spring", stiffness: 100 }}
            className="text-white space-y-8 perspective-1000"
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-md rounded-full text-sm font-medium border border-white/20 glow-effect">
                <span className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-3 animate-pulse" />
                Excellence in Service Since 1948
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Transform Your
                <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent animate-gradient">
                  Future at Bugema
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-2xl">
                Join a vibrant community of learners from over 17 countries. Experience world-class education with
                hands-on learning, cutting-edge research, and transformative opportunities.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 group"
              >
                Apply Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 bg-transparent backdrop-blur-sm px-8 py-4 rounded-xl group"
              >
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Campus Tour
              </Button>
            </motion.div>

            {/* Quick Stats with 3D Effect */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20"
            >
              {[
                { value: "15K+", label: "Students" },
                { value: "8", label: "Schools" },
                { value: "17+", label: "Countries" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center transform-gpu perspective-1000"
                  whileHover={{
                    scale: 1.1,
                    rotateY: 10,
                    z: 20,
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/70 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - 3D Cards Grid */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="perspective-2000"
          >
            <div className="grid grid-cols-2 gap-6">
              {heroCards.map((card, index) => (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 100,
                    rotateX: -30,
                    rotateY: -30,
                    scale: 0.8,
                  }}
                  animate={
                    isInView
                      ? {
                          opacity: 1,
                          y: 0,
                          rotateX: 0,
                          rotateY: 0,
                          scale: 1,
                        }
                      : {}
                  }
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
                  onHoverStart={() => setHoveredCard(index)}
                  onHoverEnd={() => setHoveredCard(null)}
                  className="transform-gpu preserve-3d cursor-pointer"
                >
                  <Card className="relative h-full bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden group hover:bg-white/15 transition-all duration-500">
                    {/* Gradient Background */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                    />

                    {/* Glow Effect */}
                    <div
                      className={`absolute -inset-1 bg-gradient-to-r ${card.color} rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                    />

                    <CardContent className="relative p-6 text-center h-full flex flex-col justify-center">
                      <motion.div
                        className="w-16 h-16 mx-auto mb-4 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300"
                        animate={
                          hoveredCard === index
                            ? {
                                rotateY: 360,
                                scale: 1.1,
                              }
                            : {}
                        }
                        transition={{ duration: 0.6 }}
                      >
                        <card.icon className="h-8 w-8 text-white" />
                      </motion.div>

                      <h3 className="font-bold text-white mb-3 text-lg">{card.title}</h3>
                      <p className="text-sm text-white/80 leading-relaxed">{card.description}</p>
                    </CardContent>
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
        <div className="w-8 h-12 border-2 border-white/30 rounded-full flex justify-center backdrop-blur-sm">
          <motion.div
            className="w-2 h-4 bg-white/50 rounded-full mt-2"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          />
        </div>
      </motion.div>
    </section>
  )
}
