"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Users, BookOpen, GraduationCap, Award, Globe, Building, Trophy, Star } from "lucide-react"

const stats = [
  {
    icon: Users,
    value: 15000,
    label: "Active Students",
    suffix: "+",
    color: "from-blue-500 to-cyan-500",
    description: "Diverse learners from around the world",
  },
  {
    icon: BookOpen,
    value: 120,
    label: "Academic Programs",
    suffix: "+",
    color: "from-purple-500 to-pink-500",
    description: "Comprehensive educational offerings",
  },
  {
    icon: GraduationCap,
    value: 25000,
    label: "Graduates",
    suffix: "+",
    color: "from-green-500 to-emerald-500",
    description: "Alumni making global impact",
  },
  {
    icon: Award,
    value: 75,
    label: "Years of Excellence",
    suffix: "+",
    color: "from-orange-500 to-red-500",
    description: "Decades of educational leadership",
  },
  {
    icon: Globe,
    value: 17,
    label: "Countries Represented",
    suffix: "+",
    color: "from-teal-500 to-blue-500",
    description: "Truly international community",
  },
  {
    icon: Building,
    value: 8,
    label: "Schools & Faculties",
    suffix: "",
    color: "from-indigo-500 to-purple-500",
    description: "Specialized academic divisions",
  },
  {
    icon: Trophy,
    value: 50,
    label: "Awards & Recognition",
    suffix: "+",
    color: "from-yellow-500 to-orange-500",
    description: "National and international honors",
  },
  {
    icon: Star,
    value: 95,
    label: "Graduate Success Rate",
    suffix: "%",
    color: "from-pink-500 to-rose-500",
    description: "Career placement excellence",
  },
]

function AnimatedCounter({ value, duration = 2000 }: { value: number; duration?: number }) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true)
      let startTime: number
      const startValue = 0

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime
        const elapsed = currentTime - startTime
        const progress = Math.min(elapsed / duration, 1)

        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4)
        const currentValue = Math.floor(startValue + (value - startValue) * easeOutQuart)

        setCount(currentValue)

        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }

      requestAnimationFrame(animate)
    }
  }, [isInView, value, duration, hasAnimated])

  return <span ref={ref}>{count.toLocaleString()}</span>
}

export function ThreeDStatsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-10%" })

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-900 dark:via-blue-900 dark:to-purple-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "3s" }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full text-blue-600 dark:text-blue-400 font-medium mb-6 backdrop-blur-sm border border-blue-200/20">
            <Award className="w-5 h-5 mr-2" />
            Our Impact & Achievement
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Transforming Lives Through{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">
              Excellence
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            For over 75 years, Bugema University has been at the forefront of quality education, producing graduates who
            make a meaningful difference in their communities and the world.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 100,
                rotateX: -30,
                scale: 0.8,
              }}
              animate={
                isInView
                  ? {
                      opacity: 1,
                      y: 0,
                      rotateX: 0,
                      scale: 1,
                    }
                  : {}
              }
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{
                scale: 1.05,
                rotateY: 10,
                rotateX: 5,
                z: 30,
              }}
              className="perspective-1000 transform-gpu"
            >
              <Card className="relative h-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group rounded-2xl">
                {/* Gradient overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-all duration-500`}
                />

                {/* Glow effect */}
                <div
                  className={`absolute -inset-1 bg-gradient-to-r ${stat.color} rounded-2xl blur opacity-0 group-hover:opacity-20 transition-all duration-500`}
                />

                <CardContent className="relative p-8 text-center h-full flex flex-col justify-between">
                  <div>
                    <motion.div
                      className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg`}
                      whileHover={{
                        rotateY: 360,
                        scale: 1.1,
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      <stat.icon className="h-10 w-10 text-white" />
                    </motion.div>

                    <motion.div
                      className="space-y-2 mb-4"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div
                        className={`text-4xl lg:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                      >
                        <AnimatedCounter value={stat.value} />
                        {stat.suffix}
                      </div>
                      <p className="text-gray-900 dark:text-white font-semibold text-lg">{stat.label}</p>
                    </motion.div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{stat.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Decorative elements */}
        <div className="relative mt-20">
          <div className="absolute top-0 left-1/4 w-px h-32 bg-gradient-to-b from-transparent via-blue-500/30 to-transparent" />
          <div className="absolute top-0 right-1/4 w-px h-32 bg-gradient-to-b from-transparent via-purple-500/30 to-transparent" />
          <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-green-500/30 to-transparent" />
        </div>
      </div>
    </section>
  )
}
