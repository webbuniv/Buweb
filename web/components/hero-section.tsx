"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Play, GraduationCap, Users, Award, BookOpen } from "lucide-react"

const heroCards = [
  {
    icon: GraduationCap,
    title: "Excellence in Education",
    description: "World-class academic programs with industry-relevant curriculum",
  },
  {
    icon: Users,
    title: "Diverse Community",
    description: "Students from over 17 countries creating a rich cultural experience",
  },
  {
    icon: Award,
    title: "Recognition & Awards",
    description: "Nationally recognized for academic excellence and innovation",
  },
  {
    icon: BookOpen,
    title: "Research Focus",
    description: "Leading research initiatives solving real-world problems",
  },
]

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 hero-gradient">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="floating-element absolute top-20 left-10 w-20 h-20 bg-bugema-gold/20 rounded-full blur-xl" />
          <div
            className="floating-element absolute top-40 right-20 w-32 h-32 bg-bugema-blue/20 rounded-full blur-xl"
            style={{ animationDelay: "2s" }}
          />
          <div
            className="floating-element absolute bottom-40 left-20 w-24 h-24 bg-bugema-green/20 rounded-full blur-xl"
            style={{ animationDelay: "4s" }}
          />
        </div>
      </div>

      <div className="container mx-auto container-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm font-medium">
                <span className="w-2 h-2 bg-bugema-gold rounded-full mr-2 animate-pulse" />
                Excellence in Service
              </div>
              <h1 className="heading-xl text-white">
                Shape Your Future at{" "}
                <span className="gradient-text bg-gradient-to-r from-bugema-gold to-bugema-green bg-clip-text text-transparent">
                  Bugema University
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-2xl">
                Where knowledge meets opportunity. Join a diverse community of learners from over 17 countries and
                experience quality education with hands-on learning.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button size="lg" className="bg-bugema-gold hover:bg-bugema-gold/90 text-black font-semibold group">
                Apply Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 group bg-transparent"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Campus Tour
              </Button>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-bugema-gold">15K+</div>
                <div className="text-sm text-white/70">Students</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-bugema-gold">8</div>
                <div className="text-sm text-white/70">Schools</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-bugema-gold">17+</div>
                <div className="text-sm text-white/70">Countries</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - 3D Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="perspective-1000"
          >
            <div className="grid grid-cols-2 gap-6">
              {heroCards.map((card, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50, rotateY: -30 }}
                  animate={{ opacity: 1, y: 0, rotateY: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.4 + index * 0.1,
                    type: "spring",
                    stiffness: 100,
                  }}
                  whileHover={{
                    scale: 1.05,
                    rotateY: 10,
                    z: 50,
                  }}
                  className="card-3d"
                >
                  <Card className="glass-card border-white/20 hover-lift group">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 mx-auto mb-4 bg-bugema-gold/20 rounded-xl flex items-center justify-center group-hover:bg-bugema-gold/30 transition-colors">
                        <card.icon className="h-6 w-6 text-bugema-gold" />
                      </div>
                      <h3 className="font-semibold text-white mb-2">{card.title}</h3>
                      <p className="text-sm text-white/70 leading-relaxed">{card.description}</p>
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
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce" />
        </div>
      </motion.div>
    </section>
  )
}
