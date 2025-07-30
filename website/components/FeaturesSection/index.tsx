"use client"

import { useState } from "react"
import {
  GraduationCap,
  Users,
  Globe,
  Award,
  Lightbulb,
  Heart,
  TrendingUp,
  Shield,
  Zap,
  Target,
  Star,
} from "lucide-react"

const features = [
  {
    icon: GraduationCap,
    title: "World-Class Education",
    description: "Internationally recognized programs designed to meet global standards and industry demands.",
    benefits: ["Accredited programs", "Expert faculty", "Modern curriculum"],
    color: "from-blue-500 to-cyan-500",
    bgColor: "from-blue-50 to-cyan-50",
  },
  {
    icon: Users,
    title: "Diverse Community",
    description: "Learn alongside students from over 40 countries in an inclusive, multicultural environment.",
    benefits: ["40+ nationalities", "Cultural exchange", "Global network"],
    color: "from-purple-500 to-pink-500",
    bgColor: "from-purple-50 to-pink-50",
  },
  {
    icon: Lightbulb,
    title: "Innovation Hub",
    description: "State-of-the-art facilities and cutting-edge research opportunities for creative minds.",
    benefits: ["Modern labs", "Research grants", "Innovation support"],
    color: "from-yellow-500 to-orange-500",
    bgColor: "from-yellow-50 to-orange-50",
  },
  {
    icon: Globe,
    title: "Global Partnerships",
    description: "Collaborate with leading universities worldwide through our extensive partnership network.",
    benefits: ["Exchange programs", "Joint degrees", "International exposure"],
    color: "from-green-500 to-emerald-500",
    bgColor: "from-green-50 to-emerald-50",
  },
  {
    icon: TrendingUp,
    title: "Career Success",
    description: "95% graduate employment rate with comprehensive career support and industry connections.",
    benefits: ["Job placement", "Career counseling", "Industry links"],
    color: "from-indigo-500 to-purple-500",
    bgColor: "from-indigo-50 to-purple-50",
  },
  {
    icon: Heart,
    title: "Holistic Development",
    description: "Focus on character building, leadership skills, and personal growth beyond academics.",
    benefits: ["Leadership training", "Character building", "Personal growth"],
    color: "from-red-500 to-pink-500",
    bgColor: "from-red-50 to-pink-50",
  },
]

const additionalFeatures = [
  { icon: Shield, text: "Safe Campus Environment" },
  { icon: Zap, text: "Fast-Track Programs Available" },
  { icon: Target, text: "Industry-Focused Curriculum" },
  { icon: Star, text: "Excellence in Teaching Awards" },
]

export default function FeaturesSection() {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null)

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23000000' fillOpacity='1' fillRule='evenodd'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-600 text-sm font-medium mb-4">
            <Award className="w-4 h-4 mr-2" />
            Why Choose Bugema
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Excellence in Every Aspect</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover what makes Bugema University the preferred choice for students seeking world-class education and
            transformative experiences.
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon
            const isHovered = hoveredFeature === index

            return (
              <div
                key={index}
                className={`group relative p-8 rounded-2xl border-2 transition-all duration-500 cursor-pointer ${
                  isHovered
                    ? "border-blue-200 shadow-2xl scale-105"
                    : "border-gray-100 shadow-lg hover:shadow-xl hover:scale-102"
                }`}
                onMouseEnter={() => setHoveredFeature(index)}
                onMouseLeave={() => setHoveredFeature(null)}
              >
                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.bgColor} opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500`}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-900 transition-colors">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-700 transition-colors">
                    {feature.description}
                  </p>

                  {/* Benefits */}
                  <div className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${feature.color}`} />
                        <span className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors">
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                />
              </div>
            )
          })}
        </div>

        {/* Additional Features */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">And Much More...</h3>
            <p className="text-gray-600">Additional benefits that set us apart</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalFeatures.map((item, index) => {
              const Icon = item.icon
              return (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 rounded-lg hover:bg-gray-50 transition-colors group"
                >
                  <div className="p-2 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
                    <Icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <span className="text-gray-700 font-medium">{item.text}</span>
                </div>
              )
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-white">
            <div className="text-center sm:text-left">
              <h3 className="text-xl font-bold mb-1">Ready to Experience Excellence?</h3>
              <p className="opacity-90">Join thousands of successful graduates</p>
            </div>
            <button className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
