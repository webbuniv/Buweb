"use client"

import { motion, useInView, useMotionValue, useSpring } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Users, BookOpen, GraduationCap, Award, Globe, Building, Trophy, Star } from "lucide-react"

const stats = [
  {
    icon: Users,
    value: 15000,
    label: "Active Students",
    suffix: "+",
    color: "from-blue-500 to-blue-600",
    description: "Diverse student body",
  },
  {
    icon: BookOpen,
    value: 120,
    label: "Academic Programs",
    suffix: "+",
    color: "from-purple-500 to-purple-600",
    description: "Comprehensive curriculum",
  },
  {
    icon: GraduationCap,
    value: 25000,
    label: "Graduates",
    suffix: "+",
    color: "from-green-500 to-green-600",
    description: "Success stories worldwide",
  },
  {
    icon: Award,
    value: 75,
    label: "Years of Excellence",
    suffix: "+",
    color: "from-orange-500 to-orange-600",
    description: "Legacy of quality education",
  },
  {
    icon: Globe,
    value: 17,
    label: "Countries Represented",
    suffix: "+",
    color: "from-teal-500 to-teal-600",
    description: "Global community",
  },
  {
    icon: Building,
    value: 8,
    label: "Schools & Faculties",
    suffix: "",
    color: "from-red-500 to-red-600",
    description: "Specialized education",
  },
  {
    icon: Trophy,
    value: 95,
    label: "Employment Rate",
    suffix: "%",
    color: "from-indigo-500 to-indigo-600",
    description: "Graduate success",
  },
  {
    icon: Star,
    value: 50,
    label: "Research Projects",
    suffix: "+",
    color: "from-pink-500 to-pink-600",
    description: "Innovation & discovery",
  },
]

function AnimatedCounter({ value, duration = 2000 }: { value: number; duration?: number }) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { duration: duration })

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true)
      motionValue.set(value)
    }
  }, [isInView, value, hasAnimated, motionValue])

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      setCount(Math.floor(latest))
    })
    return unsubscribe
  }, [springValue])

  return <span ref={ref}>{count.toLocaleString()}</span>
}

export function ThreeDStatsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-10%" })

  return (
    <section className="section-padding bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-blue-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-500/3 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "4s" }}
        />
      </div>

      <div className="container mx-auto container-padding relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full text-blue-600 dark:text-blue-400 font-medium mb-6 backdrop-blur-sm border border-blue-500/20"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Award className="w-5 h-5 mr-2" />
            Our Impact & Achievements
          </motion.div>

          <motion.h2
            className="heading-lg text-foreground mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Transforming Lives Through{" "}
            <span className="gradient-text bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">
              Excellence
            </span>
          </motion.h2>

          <motion.p
            className="text-body max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            For over 75 years, Bugema University has been at the forefront of quality Christian education, producing
            graduates who make a significant difference in their communities and the world at large.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100, rotateX: -45, scale: 0.8 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0, scale: 1 } : {}}
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
              className="perspective-1000"
            >
              <Card className="relative h-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group overflow-hidden preserve-3d">
                {/* Gradient Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}
                />

                {/* Animated Border */}
                <div className="absolute inset-0 rounded-lg">
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300`}
                  />
                </div>

                <CardContent className="relative p-8 text-center z-10">
                  <motion.div
                    className={`w-20 h-20 mx-auto mb-6 rounded-3xl bg-gradient-to-br ${stat.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    whileHover={{ rotateY: 180 }}
                    transition={{ duration: 0.6 }}
                  >
                    <stat.icon className="h-10 w-10 text-white" />
                  </motion.div>

                  <div className="space-y-3">
                    <motion.div
                      className={`text-5xl lg:text-6xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300`}
                      whileHover={{ rotateX: 10 }}
                    >
                      <AnimatedCounter value={stat.value} />
                      {stat.suffix}
                    </motion.div>

                    <h3 className="text-foreground font-bold text-xl mb-2">{stat.label}</h3>
                    <p className="text-muted-foreground text-sm">{stat.description}</p>
                  </div>

                  {/* Floating Particles */}
                  <div className="absolute inset-0 pointer-events-none">
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className={`absolute w-2 h-2 bg-gradient-to-r ${stat.color} rounded-full opacity-0 group-hover:opacity-60`}
                        style={{
                          left: `${20 + i * 30}%`,
                          top: `${20 + i * 20}%`,
                        }}
                        animate={{
                          y: [-10, -30, -10],
                          opacity: [0, 0.6, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                          delay: i * 0.5,
                        }}
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional decorative elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 1 }}
          className="relative mt-20 text-center"
        >
          <div className="inline-flex items-center space-x-4">
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 rounded-full" />
            <motion.div
              className="w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            />
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 via-purple-500 to-blue-500 rounded-full" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
