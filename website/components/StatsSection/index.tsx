"use client"
import { motion } from "framer-motion"
import { Users, BookOpen, Globe, Award, GraduationCap, Building } from "lucide-react"

const stats = [
  {
    icon: Users,
    value: "10,000+",
    label: "Active Students",
    description: "From 17+ countries worldwide",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: GraduationCap,
    value: "25,000+",
    label: "Alumni Network",
    description: "Successful graduates globally",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: BookOpen,
    value: "50+",
    label: "Academic Programs",
    description: "Undergraduate & postgraduate",
    color: "from-purple-500 to-violet-500",
  },
  {
    icon: Building,
    value: "8",
    label: "Schools & Faculties",
    description: "Diverse academic divisions",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Globe,
    value: "17+",
    label: "Countries",
    description: "International student body",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: Award,
    value: "25+",
    label: "Years of Excellence",
    description: "Established since 1999",
    color: "from-indigo-500 to-blue-500",
  },
]

const StatsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Bugema University
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              By the Numbers
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover the impact and reach of our academic excellence through these key statistics
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 },
              }}
              className="group relative"
            >
              <div className="relative bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-slate-700 overflow-hidden">
                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                />

                {/* 3D Icon Container */}
                <motion.div
                  whileHover={{
                    rotateY: 15,
                    rotateX: 15,
                    scale: 1.1,
                  }}
                  transition={{ duration: 0.3 }}
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${stat.color} mb-6 shadow-lg`}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <stat.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Content */}
                <div className="relative z-10">
                  <motion.div
                    initial={{ scale: 0.8 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                    className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-2"
                  >
                    {stat.value}
                  </motion.div>

                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">{stat.label}</h3>

                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{stat.description}</p>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center space-x-4 bg-white dark:bg-slate-800 rounded-full px-8 py-4 shadow-lg border border-gray-100 dark:border-slate-700">
            <span className="text-gray-700 dark:text-gray-300 font-medium">Ready to join our community?</span>
            <motion.a
              href="http://erms.bugemauniv.ac.ug/application"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
            >
              Apply Now
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default StatsSection
