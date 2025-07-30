"use client"
import { motion } from "framer-motion"
import { GraduationCap, Users, Globe, BookOpen, Award, Lightbulb, Heart, Zap, Target } from "lucide-react"

const features = [
  {
    icon: GraduationCap,
    title: "Academic Excellence",
    description: "World-class education with internationally recognized programs and qualifications.",
    color: "from-blue-500 to-cyan-500",
    delay: 0.1,
  },
  {
    icon: Users,
    title: "Diverse Community",
    description: "Students from 17+ countries creating a rich multicultural learning environment.",
    color: "from-green-500 to-emerald-500",
    delay: 0.2,
  },
  {
    icon: Globe,
    title: "Global Perspective",
    description: "International partnerships and exchange programs for global exposure.",
    color: "from-purple-500 to-violet-500",
    delay: 0.3,
  },
  {
    icon: BookOpen,
    title: "Research Focus",
    description: "Cutting-edge research opportunities across multiple disciplines.",
    color: "from-orange-500 to-red-500",
    delay: 0.4,
  },
  {
    icon: Award,
    title: "Industry Recognition",
    description: "Strong partnerships with leading organizations and employers.",
    color: "from-pink-500 to-rose-500",
    delay: 0.5,
  },
  {
    icon: Lightbulb,
    title: "Innovation Hub",
    description: "State-of-the-art facilities fostering creativity and innovation.",
    color: "from-indigo-500 to-blue-500",
    delay: 0.6,
  },
  {
    icon: Heart,
    title: "Holistic Development",
    description: "Focus on character building and spiritual growth alongside academics.",
    color: "from-teal-500 to-green-500",
    delay: 0.7,
  },
  {
    icon: Zap,
    title: "Modern Technology",
    description: "Advanced learning technologies and digital resources for enhanced education.",
    color: "from-yellow-500 to-orange-500",
    delay: 0.8,
  },
  {
    icon: Target,
    title: "Career Success",
    description: "Comprehensive career services and job placement support for graduates.",
    color: "from-red-500 to-pink-500",
    delay: 0.9,
  },
]

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Cpath d='m0 40l40-40h-40v40zm40 0v-40h-40l40 40z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            y: [0, -30, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-20 w-24 h-24 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            y: [0, 40, 0],
            rotate: [0, -15, 0],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-32 right-32 w-32 h-32 bg-gradient-to-br from-green-400/20 to-blue-500/20 rounded-full blur-xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Why Choose
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Bugema University?
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover what makes us the preferred choice for students seeking excellence in higher education
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: feature.delay }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 },
              }}
              className="group relative"
            >
              <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-white/30 transition-all duration-300 overflow-hidden">
                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />

                {/* 3D Icon Container */}
                <motion.div
                  whileHover={{
                    rotateY: 15,
                    rotateX: 15,
                    scale: 1.1,
                  }}
                  transition={{ duration: 0.3 }}
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                  style={{ perspective: "1000px" }}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-blue-200 transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-white/5 to-white/10 rounded-full opacity-50 group-hover:opacity-70 transition-opacity duration-300" />
                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-br from-white/5 to-white/10 rounded-full opacity-30 group-hover:opacity-50 transition-opacity duration-300" />

                {/* Hover Effect Line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                  className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${feature.color} origin-left`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 bg-white/10 backdrop-blur-lg rounded-2xl px-8 py-6 border border-white/20">
            <div className="text-center sm:text-left">
              <h3 className="text-xl font-semibold text-white mb-2">Ready to Experience Excellence?</h3>
              <p className="text-gray-300">
                Join thousands of students who chose Bugema University for their academic journey
              </p>
            </div>
            <motion.a
              href="http://erms.bugemauniv.ac.ug/application"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 whitespace-nowrap"
            >
              Apply Today
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturesSection
