"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Users, Award, Globe, BookOpen, Target, Heart } from "lucide-react"

const AboutSection = () => {
  const stats = [
    { icon: Users, value: "10,000+", label: "Students" },
    { icon: Award, value: "25+", label: "Years" },
    { icon: Globe, value: "17+", label: "Countries" },
    { icon: BookOpen, value: "50+", label: "Programs" },
  ]

  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "Committed to the highest standards in education and research",
    },
    {
      icon: Heart,
      title: "Integrity",
      description: "Building character and ethical leadership in all we do",
    },
    {
      icon: Globe,
      title: "Diversity",
      description: "Embracing multicultural perspectives and global citizenship",
    },
  ]

  return (
    <section className="py-20 bg-white dark:bg-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fillOpacity='0.05'%3E%3Cpolygon points='50 0 60 40 100 50 60 60 50 100 40 60 0 50 40 40'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium mb-4"
              >
                About Bugema University
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6"
              >
                Transforming Lives Through
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Quality Education
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8"
              >
                Since 1999, Bugema University has been at the forefront of higher education in Uganda, providing
                world-class academic programs that prepare students for global success. Our commitment to excellence,
                innovation, and holistic development has made us a preferred destination for students from across Africa
                and beyond.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8"
              >
                We believe in nurturing not just academic excellence, but also character development, critical thinking,
                and leadership skills that enable our graduates to make meaningful contributions to society.
              </motion.p>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-4 bg-gray-50 dark:bg-slate-800 rounded-xl"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <Link
                href="/about"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Learn More About Us
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Content - Values */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Our Core Values</h3>

              <div className="space-y-6">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 10 }}
                    className="flex items-start space-x-4 p-4 bg-white dark:bg-slate-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <value.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{value.title}</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{value.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Mission Statement */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white"
            >
              <h3 className="text-xl font-bold mb-4">Our Mission</h3>
              <p className="leading-relaxed">
                To provide quality, accessible, and affordable higher education that transforms lives and communities
                through innovative teaching, research, and service, while upholding Christian values and principles.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
