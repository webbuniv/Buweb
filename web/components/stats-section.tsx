"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Users, BookOpen, GraduationCap, Award, Globe, Building } from "lucide-react"

const stats = [
  {
    icon: Users,
    value: 15000,
    label: "Active Students",
    suffix: "+",
    color: "text-bugema-blue",
  },
  {
    icon: BookOpen,
    value: 120,
    label: "Academic Programs",
    suffix: "+",
    color: "text-bugema-gold",
  },
  {
    icon: GraduationCap,
    value: 25000,
    label: "Graduates",
    suffix: "+",
    color: "text-bugema-green",
  },
  {
    icon: Award,
    value: 50,
    label: "Years of Excellence",
    suffix: "+",
    color: "text-bugema-blue",
  },
  {
    icon: Globe,
    value: 17,
    label: "Countries Represented",
    suffix: "+",
    color: "text-bugema-gold",
  },
  {
    icon: Building,
    value: 8,
    label: "Schools & Faculties",
    suffix: "",
    color: "text-bugema-green",
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

export function StatsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-10%" })

  return (
    <section className="section-padding bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-900">
      <div className="container mx-auto container-padding">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-bugema-blue/10 rounded-full text-bugema-blue font-medium mb-4">
            <Award className="w-4 h-4 mr-2" />
            Our Impact
          </div>
          <h2 className="heading-lg text-foreground mb-6">
            Transforming Lives Through <span className="gradient-text">Education</span>
          </h2>
          <p className="text-body max-w-3xl mx-auto">
            For over 50 years, Bugema University has been at the forefront of quality education, producing graduates who
            make a difference in their communities and the world.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                z: 20,
              }}
              className="perspective-1000"
            >
              <Card className="relative h-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-bugema-blue/5 group-hover:to-bugema-blue/10 transition-all duration-300" />

                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-bugema-blue via-bugema-gold to-bugema-green rounded-lg blur opacity-0 group-hover:opacity-20 transition-all duration-300" />

                <CardContent className="relative p-8 text-center">
                  <div
                    className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-bugema-blue/10 to-bugema-gold/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <stat.icon className={`h-8 w-8 ${stat.color}`} />
                  </div>

                  <div className="space-y-2">
                    <div
                      className={`text-4xl lg:text-5xl font-bold ${stat.color} group-hover:scale-110 transition-transform duration-300`}
                    >
                      <AnimatedCounter value={stat.value} />
                      {stat.suffix}
                    </div>
                    <p className="text-muted-foreground font-medium text-lg">{stat.label}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional decorative elements */}
        <div className="relative mt-16">
          <div className="absolute top-0 left-1/4 w-px h-32 bg-gradient-to-b from-transparent via-bugema-blue/30 to-transparent" />
          <div className="absolute top-0 right-1/4 w-px h-32 bg-gradient-to-b from-transparent via-bugema-gold/30 to-transparent" />
        </div>
      </div>
    </section>
  )
}
