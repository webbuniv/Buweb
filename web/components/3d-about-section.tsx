"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Users, Globe, Award, BookOpen, Microscope, Heart, Target, ArrowRight } from "lucide-react"

const features = [
  {
    icon: GraduationCap,
    title: "Academic Excellence",
    description: "8 schools offering over 120 programs across diverse fields of study",
    color: "from-blue-500 to-indigo-600",
  },
  {
    icon: Users,
    title: "Diverse Community",
    description: "Students from over 17 countries creating a global learning environment",
    color: "from-emerald-500 to-teal-600",
  },
  {
    icon: Globe,
    title: "Global Recognition",
    description: "Internationally accredited programs with worldwide recognition",
    color: "from-purple-500 to-violet-600",
  },
  {
    icon: Award,
    title: "75+ Years Legacy",
    description: "Three-quarters of a century of educational excellence and innovation",
    color: "from-orange-500 to-red-600",
  },
  {
    icon: BookOpen,
    title: "Research Focus",
    description: "Cutting-edge research facilities and opportunities for innovation",
    color: "from-cyan-500 to-blue-600",
  },
  {
    icon: Microscope,
    title: "Modern Facilities",
    description: "State-of-the-art laboratories, libraries, and learning spaces",
    color: "from-pink-500 to-rose-600",
  },
]

const values = [
  {
    icon: Heart,
    title: "Christian Values",
    description: "Holistic education grounded in Christian principles and values",
  },
  {
    icon: Target,
    title: "Excellence",
    description: "Commitment to the highest standards in education and service",
  },
  {
    icon: Users,
    title: "Community",
    description: "Building strong relationships and fostering collaboration",
  },
]

export function ThreeDAboutSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-100/20 to-purple-100/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
            About Bugema University
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Excellence in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Service</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            For over 75 years, Bugema University has been a beacon of quality holistic Christian education, preparing
            students for productive lives of service to God and humanity.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">Shaping Leaders for Tomorrow</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our commitment to academic excellence, spiritual growth, and character development has produced over
                50,000 graduates who are making significant contributions in their communities and professions
                worldwide.
              </p>
            </div>

            {/* Values */}
            <div className="space-y-4">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start space-x-4 p-4 rounded-lg hover:bg-white/50 transition-colors"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <value.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{value.title}</h4>
                    <p className="text-gray-600 text-sm">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
              >
                <Link href="/about">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/virtual-tour">Take Virtual Tour</Link>
              </Button>
            </div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600&text=Campus+Overview"
                alt="Bugema University Campus"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl"
              />

              {/* Floating Stats Cards */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute -top-6 -left-6 bg-white rounded-xl shadow-lg p-4 border"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">15,000+</div>
                  <div className="text-sm text-gray-600">Students</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-4 border"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-600">17+</div>
                  <div className="text-sm text-gray-600">Countries</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group"
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/70 backdrop-blur-sm">
                <CardContent className="p-8 text-center">
                  <div
                    className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10" />
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">Ready to Join Our Community?</h3>
              <p className="text-xl mb-8 opacity-90">Take the first step towards your future at Bugema University</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="https://apply.bugemauniv.ac.ug">
                    Apply Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
                  asChild
                >
                  <Link href="/contact">Contact Admissions</Link>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
