"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const Video = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="bg-slate-50/50 py-16 lg:py-20" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Video Container */}
          <motion.div className="order-2 lg:order-1" variants={itemVariants}>
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl bg-gray-900">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/JXhx8grHl-M?si=v6pONihls9EULtGa"
                title="Bugema University - Discover Your Path"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </motion.div>

          {/* Content Container */}
          <motion.div className="order-1 lg:order-2 space-y-6" variants={itemVariants}>
            <div className="space-y-4">
              <motion.h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
                variants={itemVariants}
              >
                Discover Your Path at <span className="text-blue-600">Bugema University!</span>
              </motion.h2>

              <motion.div
                className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
                variants={itemVariants}
              />
            </div>

            <motion.div className="space-y-4 text-gray-700 leading-relaxed" variants={itemVariants}>
              <p className="text-lg">
                At Bugema, it&apos;s not just about academics; it&apos;s about nurturing your{" "}
                <span className="font-semibold text-gray-900">mind, heart, and hands</span>. Bugema fosters holistic
                excellence – where character development meets intellectual growth.
              </p>

              <p className="text-lg">
                With <span className="font-semibold text-blue-600">Flexible Intakes</span>, whether you&#39;re a fresh high
                school graduate or a working professional seeking advancement, Bugema offers multiple intakes throughout
                the year. No need to wait – start your journey now.
              </p>

              <p className="text-lg font-medium text-gray-900">
                Bugema University, where dreams take root, friendships flourish, and purpose unfolds. Join us today –
                your adventure awaits!
              </p>
            </motion.div>

            <motion.div className="flex flex-wrap gap-4 pt-4" variants={itemVariants}>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl">
                Apply Now
              </button>
              <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200">
                Learn More
              </button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Video
