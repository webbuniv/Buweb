"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Heart, Target, Eye, Lightbulb, Shield, Compass, Zap, Crown } from "lucide-react"

const values = [
  {
    icon: Heart,
    title: "Integrity",
    description: "Upholding the highest moral and ethical standards in all our endeavors and interactions.",
    color: "from-red-500 to-pink-500",
  },
  {
    icon: Target,
    title: "Excellence",
    description: "Pursuing the highest quality in education, research, and service delivery to our community.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Eye,
    title: "Innovation",
    description: "Embracing creative solutions and forward-thinking approaches to modern education challenges.",
    color: "from-purple-500 to-indigo-500",
  },
  {
    icon: Lightbulb,
    title: "Empowerment",
    description: "Enabling students to reach their full potential and make meaningful impact in society.",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Shield,
    title: "Faith",
    description: "Grounding our educational philosophy in Christian values and spiritual development.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Compass,
    title: "Service",
    description: "Dedicating ourselves to serving God, community, and humanity with purpose and passion.",
    color: "from-teal-500 to-blue-500",
  },
  {
    icon: Zap,
    title: "Leadership",
    description: "Developing transformational leaders who inspire positive change in their communities.",
    color: "from-violet-500 to-purple-500",
  },
  {
    icon: Crown,
    title: "Legacy",
    description: "Building a lasting impact that transcends generations through quality education.",
    color: "from-amber-500 to-yellow-500",
  },
]

export function ThreeDAboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-10%" })
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <section className="py-20 bg-gradient-to-br from-white via-slate-50 to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-blue-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div
          className="absolute top-0 left-0 w-full h-full opacity-40"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%239C92AC' fillOpacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <motion.div
          className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-green-500/10 to-teal-500/10 rounded-full blur-3xl"
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -100, rotateY: -20 }}
            animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.div
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-full text-green-600 dark:text-green-400 font-medium backdrop-blur-sm border border-green-500/20"
                whileHover={{ scale: 1.05, rotateX: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Heart className="w-5 h-5 mr-2" />
                About Bugema University
              </motion.div>

              <motion.h2
                className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Committed to{" "}
                <span className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Excellence in Service
                </span>
              </motion.h2>

              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  For over seven decades, Bugema University has been a beacon of quality Christian education in Uganda
                  and East Africa. We are committed to providing holistic education that prepares students for
                  productive lives of useful service to God and humanity.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  Our diverse community represents over 17 countries, creating a rich multicultural environment where
                  students gain global perspectives while maintaining strong ethical foundations rooted in Christian
                  values.
                </p>
              </motion.div>
            </div>

            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Our Mission</h3>
              <motion.div
                className="relative p-6 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-2xl border-l-4 border-gradient-to-b from-blue-500 to-green-500 shadow-lg"
                whileHover={{ scale: 1.02, rotateY: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <p className="text-gray-700 dark:text-gray-300 italic font-medium">
                  "To provide an excellent and distinctive holistic Christian education designed to prepare our students
                  through training for productive lives of useful service to God and humanity."
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white group transform hover:scale-105 transition-all duration-300 shadow-xl"
              >
                Learn More About Us
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Content - Values Cards */}
          <motion.div
            initial={{ opacity: 0, x: 100, rotateY: 20 }}
            animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="text-center mb-8">
              <motion.h3
                className="text-3xl font-bold text-gray-900 dark:text-white mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Our Core Values
              </motion.h3>
              <motion.p
                className="text-gray-600 dark:text-gray-300"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                The principles that guide everything we do at Bugema University
              </motion.p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50, rotateX: -30, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, y: 0, rotateX: 0, scale: 1 } : {}}
                  transition={{
                    duration: 0.8,
                    delay: 0.8 + index * 0.1,
                    type: "spring",
                    stiffness: 100,
                  }}
                  whileHover={{
                    scale: 1.05,
                    rotateY: 10,
                    rotateX: 5,
                    z: 30,
                  }}
                  onHoverStart={() => setHoveredCard(index)}
                  onHoverEnd={() => setHoveredCard(null)}
                  className="transform-gpu"
                >
                  <Card className="h-full bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500 group overflow-hidden relative">
                    {/* Gradient Background */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-5 group-hover:opacity-15 transition-opacity duration-300`}
                    />

                    {/* Animated Border */}
                    <motion.div
                      className={`absolute inset-0 rounded-lg bg-gradient-to-r ${value.color} opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300`}
                      animate={hoveredCard === index ? { scale: [1, 1.1, 1] } : {}}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    />

                    <CardContent className="p-6 relative z-10">
                      <motion.div
                        className={`w-14 h-14 mb-4 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                        whileHover={{ rotateY: 180 }}
                        transition={{ duration: 0.6 }}
                      >
                        <value.icon className="h-7 w-7 text-white" />
                      </motion.div>

                      <h4 className="font-bold text-gray-900 dark:text-white mb-3 text-lg group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text transition-all duration-300">
                        {value.title}
                      </h4>

                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{value.description}</p>

                      {/* Floating Particles */}
                      {hoveredCard === index && (
                        <div className="absolute inset-0 pointer-events-none">
                          {[...Array(5)].map((_, i) => (
                            <motion.div
                              key={i}
                              className={`absolute w-1 h-1 bg-gradient-to-r ${value.color} rounded-full`}
                              style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                              }}
                              animate={{
                                y: [-20, -40, -20],
                                opacity: [0, 1, 0],
                                scale: [0, 1, 0],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Number.POSITIVE_INFINITY,
                                delay: i * 0.2,
                              }}
                            />
                          ))}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Decorative element */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1, delay: 1.5 }}
              className="relative mx-auto w-48 h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 rounded-full overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/50 to-transparent"
                animate={{ x: [-200, 200] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
