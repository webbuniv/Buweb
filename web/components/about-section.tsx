"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Heart, Target, Eye, Lightbulb } from "lucide-react"

const values = [
  {
    icon: Heart,
    title: "Integrity",
    description: "Upholding the highest moral and ethical standards in all our endeavors.",
  },
  {
    icon: Target,
    title: "Excellence",
    description: "Pursuing the highest quality in education, research, and service delivery.",
  },
  {
    icon: Eye,
    title: "Innovation",
    description: "Embracing creative solutions and forward-thinking approaches to education.",
  },
  {
    icon: Lightbulb,
    title: "Empowerment",
    description: "Enabling students to reach their full potential and make meaningful impact.",
  },
]

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-10%" })

  return (
    <section className="section-padding bg-white dark:bg-slate-900">
      <div className="container mx-auto container-padding">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-bugema-green/10 rounded-full text-bugema-green font-medium">
                <Heart className="w-4 h-4 mr-2" />
                About Bugema University
              </div>
              <h2 className="heading-lg text-foreground">
                Committed to <span className="gradient-text">Excellence in Service</span>
              </h2>
              <p className="text-body leading-relaxed">
                For over five decades, Bugema University has been a beacon of quality education in Uganda and East
                Africa. We are committed to providing holistic Christian education that prepares students for productive
                lives of useful service to God and humanity.
              </p>
              <p className="text-body leading-relaxed">
                Our diverse community represents over 17 countries, creating a rich multicultural environment where
                students gain global perspectives while maintaining strong ethical foundations.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Our Mission</h3>
              <p className="text-body italic border-l-4 border-bugema-gold pl-4">
                "To provide an excellent and distinctive holistic Christian education designed to prepare our students
                through training for productive lives of useful service to God."
              </p>
            </div>

            <Button size="lg" className="bg-bugema-blue hover:bg-bugema-blue/90 group">
              Learn More About Us
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          {/* Right Content - Values Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Core Values</h3>
              <p className="text-body">The principles that guide everything we do at Bugema University</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{
                    duration: 0.6,
                    delay: 0.4 + index * 0.1,
                    type: "spring",
                    stiffness: 100,
                  }}
                  whileHover={{
                    scale: 1.05,
                    rotateY: 10,
                    z: 20,
                  }}
                  className="perspective-1000"
                >
                  <Card className="h-full bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 mb-4 bg-gradient-to-br from-bugema-blue/10 to-bugema-gold/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <value.icon className="h-6 w-6 text-bugema-blue" />
                      </div>
                      <h4 className="font-semibold text-foreground mb-2 text-lg">{value.title}</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Decorative element */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1, delay: 0.8 }}
              className="relative mx-auto w-32 h-1 bg-gradient-to-r from-bugema-blue via-bugema-gold to-bugema-green rounded-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
