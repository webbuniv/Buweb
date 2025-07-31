"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  GraduationCap,
  Users,
  Award,
  BookOpen,
  Globe,
  Target,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
} from "lucide-react"
import Image from "next/image"

const aboutFeatures = [
  {
    icon: GraduationCap,
    title: "Academic Excellence",
    description: "Rigorous academic programs designed to challenge and inspire students to reach their full potential.",
    color: "from-blue-600 to-blue-700",
    stats: "120+ Programs",
  },
  {
    icon: Users,
    title: "Diverse Community",
    description: "A vibrant multicultural environment with students and faculty from over 17 countries worldwide.",
    color: "from-emerald-600 to-emerald-700",
    stats: "17+ Countries",
  },
  {
    icon: Award,
    title: "Proven Track Record",
    description: "75+ years of educational excellence with graduates making significant contributions globally.",
    color: "from-amber-500 to-amber-600",
    stats: "75+ Years",
  },
  {
    icon: BookOpen,
    title: "Research Innovation",
    description: "Cutting-edge research facilities and opportunities for undergraduate and graduate students.",
    color: "from-purple-600 to-purple-700",
    stats: "50+ Projects",
  },
  {
    icon: Globe,
    title: "Global Impact",
    description: "Alumni network spanning across continents, making positive changes in their communities.",
    color: "from-teal-600 to-teal-700",
    stats: "50,000+ Alumni",
  },
  {
    icon: Target,
    title: "Career Success",
    description: "Comprehensive career services ensuring 95% of graduates secure employment within 6 months.",
    color: "from-rose-600 to-rose-700",
    stats: "95% Success Rate",
  },
]

const achievements = [
  { label: "National University Ranking", value: "Top 5", icon: Star },
  { label: "Graduate Employment Rate", value: "95%", icon: TrendingUp },
  { label: "International Partnerships", value: "25+", icon: Globe },
  { label: "Research Publications", value: "500+", icon: BookOpen },
]

export function ThreeDAboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-white via-slate-50 to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-blue-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div
          className="absolute top-0 left-0 w-full h-full opacity-40"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%239C92AC' fillOpacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="absolute top-20 right-20 w-32 h-32 sm:w-64 sm:h-64 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-40 h-40 sm:w-80 sm:h-80 bg-emerald-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400 text-sm font-medium mb-4">
            About Bugema University
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
            Transforming Lives Through
            <span className="bg-gradient-to-r from-blue-600 via-emerald-600 to-amber-500 bg-clip-text text-transparent block">
              Quality Education
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            For over 75 years, Bugema University has been at the forefront of providing quality holistic Christian
            education that prepares students for productive lives of service to God and humanity.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-12 sm:mb-16 lg:mb-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 lg:space-y-8"
          >
            <div className="space-y-4 lg:space-y-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                Why Choose Bugema University?
              </h3>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                We combine academic rigor with Christian values, creating an environment where students not only excel
                academically but also develop strong moral character and leadership skills.
              </p>
            </div>

            {/* Key Points */}
            <div className="space-y-3 sm:space-y-4">
              {[
                "Accredited programs recognized internationally",
                "Experienced faculty with industry expertise",
                "Modern facilities and cutting-edge technology",
                "Strong alumni network and career support",
                "Affordable tuition with scholarship opportunities",
              ].map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300">{point}</span>
                </motion.div>
              ))}
            </div>

            {/* Achievements */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-6 border-t border-gray-200 dark:border-gray-700">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="text-center p-3 sm:p-4 bg-white/50 dark:bg-gray-800/50 rounded-xl backdrop-blur-sm"
                >
                  <achievement.icon className="h-6 w-6 sm:h-8 sm:w-8 mx-auto mb-2 text-blue-600" />
                  <div className="text-lg sm:text-2xl font-bold text-gray-900 dark:text-white">{achievement.value}</div>
                  <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{achievement.label}</div>
                </motion.div>
              ))}
            </div>

            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white group w-full sm:w-auto"
            >
              Learn More About Us
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative order-first lg:order-last"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/placeholder.svg?height=600&width=800&text=University+Campus+Life"
                alt="Bugema University Campus"
                width={800}
                height={600}
                className="object-cover w-full h-64 sm:h-80 lg:h-96"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

              {/* Floating Stats */}
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
                <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-xl p-3 sm:p-4">
                  <div className="grid grid-cols-3 gap-2 sm:gap-4 text-center">
                    <div>
                      <div className="text-lg sm:text-2xl font-bold text-blue-600">15K+</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">Students</div>
                    </div>
                    <div>
                      <div className="text-lg sm:text-2xl font-bold text-emerald-600">8</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">Schools</div>
                    </div>
                    <div>
                      <div className="text-lg sm:text-2xl font-bold text-amber-600">75+</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">Years</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {aboutFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group"
            >
              <Card className="h-full bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <CardContent className="p-6 sm:p-8 text-center relative overflow-hidden">
                  {/* Background Gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  />

                  {/* Icon */}
                  <motion.div
                    className={`w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotateY: 180 }}
                    transition={{ duration: 0.6 }}
                  >
                    <feature.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Stats */}
                  <div
                    className={`inline-block px-3 sm:px-4 py-2 bg-gradient-to-r ${feature.color} text-white rounded-full text-xs sm:text-sm font-semibold`}
                  >
                    {feature.stats}
                  </div>

                  {/* Hover Effect */}
                  <motion.div
                    className="absolute inset-0 border-2 border-transparent group-hover:border-blue-200 dark:group-hover:border-blue-700 rounded-xl transition-all duration-300"
                    animate={hoveredCard === index ? { scale: 1.02 } : { scale: 1 }}
                  />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
