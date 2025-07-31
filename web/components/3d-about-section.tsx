"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Heart, Target, Eye, Lightbulb, Shield, Compass, Zap, Users } from "lucide-react"

const values = [
  {
    icon: Heart,
    title: "Integrity",
    description: "Upholding the highest moral and ethical standards in all our endeavors and relationships.",
    color: "from-red-500 to-pink-500",
    delay: 0.1,
  },
  {
    icon: Target,
    title: "Excellence",
    description: "Pursuing the highest quality in education, research, and service delivery to our community.",
    color: "from-blue-500 to-cyan-500",
    delay: 0.2,
  },
  {
    icon: Eye,
    title: "Innovation",
    description: "Embracing creative solutions and forward-thinking approaches to modern education.",
    color: "from-purple-500 to-indigo-500",
    delay: 0.3,
  },
  {
    icon: Lightbulb,
    title: "Empowerment",
    description: "Enabling students to reach their full potential and make meaningful impact in society.",
    color: "from-yellow-500 to-orange-500",
    delay: 0.4,
  },
  {
    icon: Shield,
    title: "Faith",
    description: "Grounding our educational mission in Christian values and spiritual development.",
    color: "from-green-500 to-emerald-500",
    delay: 0.5,
  },
  {
    icon: Compass,
    title: "Service",
    description: "Preparing students for lives of meaningful service to God, community, and humanity.",
    color: "from-teal-500 to-blue-500",
    delay: 0.6,
  },
  {
    icon: Zap,
    title: "Leadership",
    description: "Developing transformational leaders who create positive change in their fields.",
    color: "from-orange-500 to-red-500",
    delay: 0.7,
  },
  {
    icon: Users,
    title: "Community",
    description: "Fostering an inclusive environment where diversity is celebrated and valued.",
    color: "from-pink-500 to-purple-500",
    delay: 0.8,
  },
]

export function ThreeDAboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-10%" })
  const [hoveredValue, setHoveredValue] = useState<number | null>(null)

  return (
    <section className="py-24 bg-white dark:bg-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-10 w-96 h-96 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-green-500/5 to-teal-500/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "4s" }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -100, rotateY: -20 }}
            animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
            transition={{ duration: 1, type: "spring", stiffness: 80 }}
            className="space-y-8 perspective-1000"
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500/10 to-teal-500/10 rounded-full text-green-600 dark:text-green-400 font-medium backdrop-blur-sm border border-green-200/20"
              >
                <Heart className="w-5 h-5 mr-2" />
                About Bugema University
              </motion.div>

              <motion.h2
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Committed to{" "}
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">
                  Excellence in Service
                </span>
              </motion.h2>

              <motion.div
                className="space-y-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <p>
                  For over seven decades, Bugema University has been a beacon of quality education in Uganda and East
                  Africa. We are committed to providing holistic Christian education that prepares students for
                  productive lives of useful service to God and humanity.
                </p>
                <p>
                  Our diverse community represents over 17 countries, creating a rich multicultural environment where
                  students gain global perspectives while maintaining strong ethical foundations rooted in Christian
                  values.
                </p>
              </motion.div>
            </div>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Our Mission</h3>
              <div className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
                <p className="text-lg text-gray-700 dark:text-gray-300 italic pl-6 leading-relaxed">
                  "To provide an excellent and distinctive holistic Christian education designed to prepare our students
                  through training for productive lives of useful service to God and humanity."
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
              >
                Learn More About Us
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Content - Values Cards */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="text-center mb-12">
              <motion.h3
                className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Our Core Values
              </motion.h3>
              <motion.p
                className="text-lg text-gray-600 dark:text-gray-300"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                The principles that guide everything we do at Bugema University
              </motion.p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 perspective-1000">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 50,
                    rotateX: -30,
                    scale: 0.9,
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
                    duration: 0.6,
                    delay: value.delay,
                    type: "spring",
                    stiffness: 100,
                  }}
                  whileHover={{
                    scale: 1.05,
                    rotateY: 10,
                    rotateX: 5,
                    z: 30,
                  }}
                  onHoverStart={() => setHoveredValue(index)}
                  onHoverEnd={() => setHoveredValue(null)}
                  className="transform-gpu preserve-3d cursor-pointer"
                >
                  <Card className="relative h-full bg-gradient-to-br from-white to-gray-50 dark:from-slate-800 dark:to-slate-900 border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group rounded-2xl">
                    {/* Gradient overlay */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-10 transition-all duration-500`}
                    />

                    {/* Glow effect */}
                    <div
                      className={`absolute -inset-1 bg-gradient-to-r ${value.color} rounded-2xl blur opacity-0 group-hover:opacity-20 transition-all duration-500`}
                    />

                    <CardContent className="relative p-6 h-full flex flex-col">
                      <motion.div
                        className={`w-14 h-14 mb-4 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center shadow-lg`}
                        animate={
                          hoveredValue === index
                            ? {
                                rotateY: 360,
                                scale: 1.1,
                              }
                            : {}
                        }
                        transition={{ duration: 0.6 }}
                      >
                        <value.icon className="h-7 w-7 text-white" />
                      </motion.div>

                      <h4 className="font-bold text-gray-900 dark:text-white mb-3 text-xl">{value.title}</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed flex-grow">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Decorative element */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1, delay: 1.2 }}
              className="relative mx-auto w-40 h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 rounded-full shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
