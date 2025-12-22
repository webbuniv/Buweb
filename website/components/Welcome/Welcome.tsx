"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Award, Users, BookOpen, GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"

const Welcome = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6,
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

  const stats = [
    { icon: Users, value: "5,000+", label: "Students" },
    { icon: BookOpen, value: "95+", label: "Programs" },
    { icon: Award, value: "75+", label: "Years" },
  ]

  return (
    <section className="relative mt-20 bg-gradient-to-br from-gray-50 via-blue-50/50 to-blue-200 dark:from-slate-900 dark:via-slate-900/95 dark:to-slate-800 p-10 py-20 lg:py-0 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/30 dark:bg-blue-900/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-100/40 dark:bg-amber-900/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-100/20 to-transparent dark:from-blue-900/10 rounded-full blur-3xl" />
      </div>

      <div className="container  mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* Content Section */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/50 rounded-full"
            >
              <span className="text-xl font-medium text-blue-700 dark:text-blue-300">Excellence in Service</span>
            </motion.div>

            {/* Heading */}
            <div className="space-y-3">
              <motion.p variants={itemVariants} className="text-lg font-medium text-blue-600 dark:text-blue-400">
                Welcome To
              </motion.p>
              <motion.h1
                variants={itemVariants}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-tight"
              >
                Bugema{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent">
                    University
                  </span>
                  <span className="absolute bottom-2 left-0 w-full h-3 bg-amber-300/50 dark:bg-amber-500/30 -skew-x-3 -z-0" />
                </span>
              </motion.h1>
            </div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl"
            >
              We understand the importance of quality assurance. We have developed the best procedures to ensure the
              highest standards of excellence in academic delivery and performance. Experience an inclusive and
              enriching learning environment where equal opportunities, academic excellence, and a commitment to success
              define our core values.
            </motion.p>

            {/* Stats */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-6 pt-2">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white dark:bg-slate-800 shadow-md border border-slate-100 dark:border-slate-700">
                    <stat.icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-xl font-bold text-slate-900 dark:text-white">{stat.value}</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{stat.label}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div variants={itemVariants} className="pt-4">
              <Button
                asChild
                size="lg"
                className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-base rounded-xl shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/30 transition-all duration-300"
              >
                <Link href="/whybugema" className="flex items-center gap-2">
                  Explore More
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div variants={itemVariants} className="relative  order-first lg:order-last h-full bg-red-500">
            {/* Main Image */}
            <div className="relative h-full group">
              <div className="relative overflow-hidden h-full  shadow-2xl ">
                <Image
                  src="/images/vc/vc2.jpg"
                  alt="Bugema University Campus"
                  width={600}
                  height={450}
                  className="w-full h-full flex object-cover   hover:scale-105 transition-transform duration-700"
                  priority
                />
                {/* <div className="absolute inset-0 z-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" /> */}
              </div>

              {/* Floating accent card - top right */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute -top-4 -right-4 md:-right-8 bg-transparent group-hover:bg-blue-600/40 animate-pulse    rounded-full shadow-xl p-4 border border-slate-100  transition duration-2000 "
              >
                <div className="flex items-center gap-3">
                  <div className="flex rounded-full" >
                        <Image src="/bu_logo.png" alt="Checkmark" width={100} height={100} className="rounded-full  group-hover:scale-75 transition-transform duration-700" />
                  </div>
                </div>
              </motion.div>

              {/* Floating accent card - bottom left */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="absolute bottom-0 left-0 right-0 hidden fade-in  group-hover:flex bg-gradient-to-t from-red-700 via-red-600 to-transparent shadow-xl p-4 transition duration-1000 "
              >
                <div className="flex items-start gap-3 flex-col text-start">
                  <h1 className="text-white font-bold text-xl">
                        Vice Chancellor
                  </h1>
                  <div>
                    <h1>
                            <span className=" text-2xl font-extrabold text-white">
                                Prof. Dr. Israel Matsiko Kafeero
                            </span>
                    </h1>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-blue-200/50 dark:bg-blue-900/30 rounded-full blur-2xl -z-10" />
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-amber-200/50 dark:bg-amber-900/20 rounded-full blur-2xl -z-10" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Welcome
