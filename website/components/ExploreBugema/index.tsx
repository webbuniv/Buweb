"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import Link from "next/link"
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
    <section 
    style={{ backgroundImage: "url('https://fra.cloud.appwrite.io/v1/storage/buckets/676995bd003a7bc1e278/files/686658bc0026975fda0f/view?project=674dcf7b003d57db960a')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backdropFilter: 'blur(50px)',
                backgroundBlendMode:"multiply",
                backgroundColor: 'rgba(0, 0, 0, 0.3)'
         }}
    className="bg-slate-50/50 py-16 lg:py-20 rounded--full mt-4" ref={ref}>
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
          <motion.div className="order-1 lg:order-2 space-y-6 bg-red-600w p-4 " 
        //   style={{ backgroundImage: "url('/images/compound.jpg')",
        //         backgroundSize: 'cover',
        //         backgroundPosition: 'center',
        //         backdropFilter: 'blur(50px)',
        //         backgroundBlendMode:"multiply",
        //         backgroundColor: 'rgba(0, 0, 0, 0.2)'
        //  }}
          variants={itemVariants}>
            <div className="space-y-4">
              <motion.h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight"
                variants={itemVariants}
              >
                Discover Your Path at <span className="text-red-600">Bugema  <span className="bg-black/40 text-blue-600" >University !</span></span>
              </motion.h2>

              <motion.div
                className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
                variants={itemVariants}
              />
            </div>

            <motion.div className="space-y-4 text-white leading-relaxed bg-black/40 p-4" variants={itemVariants}>
              <p className="text-lg">
                At Bugema, it&apos;s not just about academics; it&apos;s about nurturing your{" "}
                <span className="font-semibold text-red-600 bg-red-50">mind, heart, and hands</span>. Bugema fosters holistic
                excellence – where character development meets intellectual growth.
              </p>

              <p className="text-lg">
                With <span className="font-semibold text-blue-600 bg-red-50">Flexible Intakes</span>, whether you&#39;re a fresh high
                school graduate or a working professional seeking advancement, Bugema offers multiple intakes throughout
                the year. No need to wait – start your journey now.
              </p>

              <p className="text-lg font-medium text-white">
                Bugema University, where dreams take root, friendships flourish, and purpose unfolds. Join us today –
                your adventure awaits!
              </p>
            </motion.div>

            <motion.div className="flex flex-wrap gap-4 pt-4" variants={itemVariants}>
              <Link href="https://erms.bugemauniv.ac.ug/application/"  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 border border-red-600 font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl">
                Apply Now
              </Link >
              {/* <button className="border-2 border-blue-600 text-blue-600 hover:bg-red-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200">
                Learn More
              </button> */}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Video
