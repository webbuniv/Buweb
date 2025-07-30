"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Users, Award, Globe, BookOpen } from "lucide-react"

const AboutSection = () => {
  return (
    <section className="py-20 bg-white dark:bg-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='0.1'%3E%3Cpath d='M50 50c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
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
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full"
              >
                <span className="text-blue-600 dark:text-blue-400 text-sm font-medium">About Bugema University</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
                className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight"
              >
                Transforming Lives Through
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Quality Education
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
              >
                Since 1999, Bugema University has been at the forefront of higher education in Uganda, providing
                world-class academic programs that prepare students for global success. Our commitment to excellence,
                innovation, and holistic development has made us a preferred choice for students from across Africa and
                beyond.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
                className="text-gray-600 dark:text-gray-300 leading-relaxed"
              >
                We offer a diverse range of undergraduate and postgraduate programs across eight schools, combining
                academic rigor with practical experience to ensure our graduates are well-prepared for the challenges of
                the modern world.
              </motion.p>
            </div>

            {/* Key Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">10,000+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Students</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">25+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Years</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-500 rounded-lg flex items-center justify-center">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">17+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Countries</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">50+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Programs</div>
                </div>
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
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

          {/* Right Content - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative group">
              {/* Main Image */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-3xl overflow-hidden shadow-2xl"
              >
                <img
                  src="https://cloud.appwrite.io/v1/storage/buckets/676995bd003a7bc1e278/files/686658bc0026975fda0f/view?project=674dcf7b003d57db960a&mode=admin"
                  alt="Bugema University Campus"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </motion.div>

              {/* Floating Stats Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                viewport={{ once: true }}
                className="absolute -top-6 -left-6 bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-xl border border-gray-100 dark:border-slate-700"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-1">25,000+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Alumni Worldwide</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                viewport={{ once: true }}
                className="absolute -bottom-6 -right-6 bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-xl border border-gray-100 dark:border-slate-700"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-1">95%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Graduate Employment</div>
                </div>
              </motion.div>

              {/* Decorative Elements */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl -z-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
