"use client"

import { useState } from "react"
import { CheckCircle, Users, Target, Lightbulb, Heart, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const coreValues = [
  {
    icon: Heart,
    title: "Integrity",
    description: "We uphold the highest standards of honesty, transparency, and ethical conduct in all our endeavors.",
    color: "from-red-500 to-pink-500",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We embrace creativity and forward-thinking approaches to education and research.",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Users,
    title: "Community",
    description: "We foster an inclusive environment where diversity is celebrated and everyone belongs.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Target,
    title: "Excellence",
    description: "We strive for the highest quality in education, research, and service to our community.",
    color: "from-green-500 to-emerald-500",
  },
]

const achievements = [
  "Accredited by the National Council for Higher Education",
  "Over 25,000 successful graduates worldwide",
  "State-of-the-art facilities and modern technology",
  "Partnerships with leading international universities",
  "Award-winning faculty and research programs",
  "Comprehensive student support services",
]

export default function AboutSection() {
  const [activeValue, setActiveValue] = useState(0)

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-gradient-to-t from-purple-50 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="mb-8">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-600 text-sm font-medium mb-4">
                <Users className="w-4 h-4 mr-2" />
                About Bugema University
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Empowering Minds,
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {" "}
                  Transforming Lives
                </span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Since 1994, Bugema University has been at the forefront of higher education in Uganda, providing
                world-class education that combines academic excellence with practical skills and moral values.
              </p>
            </div>

            {/* Mission & Vision */}
            <div className="space-y-6 mb-8">
              <div className="p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border-l-4 border-blue-500">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Our Mission</h3>
                <p className="text-gray-700">
                  To provide quality, accessible, and affordable higher education that develops competent, ethical, and
                  innovative leaders for sustainable development.
                </p>
              </div>
              <div className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border-l-4 border-purple-500">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Our Vision</h3>
                <p className="text-gray-700">
                  To be a leading university in Africa, recognized for excellence in education, research, and community
                  service.
                </p>
              </div>
            </div>

            {/* Achievements */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Bugema?</h3>
              <div className="grid gap-3">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start gap-3 group">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-gray-700 group-hover:text-gray-900 transition-colors">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>

            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              Learn More About Us
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>

          {/* Right Content - Core Values */}
          <div>
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h3>
              <p className="text-gray-600">
                These fundamental principles guide everything we do and shape the character of our institution.
              </p>
            </div>

            <div className="space-y-4">
              {coreValues.map((value, index) => {
                const Icon = value.icon
                const isActive = activeValue === index

                return (
                  <div
                    key={index}
                    className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                      isActive
                        ? "border-blue-200 bg-blue-50 shadow-lg"
                        : "border-gray-100 bg-white hover:border-gray-200 hover:shadow-md"
                    }`}
                    onClick={() => setActiveValue(index)}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`p-3 rounded-lg bg-gradient-to-br ${value.color} ${
                          isActive ? "scale-110" : "scale-100"
                        } transition-transform duration-300`}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className={`text-xl font-semibold mb-2 ${isActive ? "text-blue-900" : "text-gray-900"}`}>
                          {value.title}
                        </h4>
                        <p
                          className={`leading-relaxed transition-all duration-300 ${
                            isActive ? "text-blue-700 opacity-100" : "text-gray-600 opacity-80"
                          }`}
                        >
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Stats */}
            <div className="mt-8 p-6 bg-gradient-to-r from-gray-900 to-blue-900 rounded-xl text-white">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold">30+</div>
                  <div className="text-sm opacity-80">Years</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">15K+</div>
                  <div className="text-sm opacity-80">Students</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">50+</div>
                  <div className="text-sm opacity-80">Programs</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
