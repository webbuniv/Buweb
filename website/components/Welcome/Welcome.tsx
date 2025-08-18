"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
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

  return (
    <section className="bg-slate-50/50 dark:bg-slate-900/50 py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* Content Section */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="space-y-4">
              <motion.h2 variants={itemVariants} className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                Welcome To
              </motion.h2>
              <motion.h1
                variants={itemVariants}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-tight"
              >
                Bugema University
              </motion.h1>
            </div>

            <motion.p
              variants={itemVariants}
              className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl"
            >
              We understand the importance of quality assurance. We have developed the best procedures to ensure the
              highest standards of excellence in academic delivery and performance. Experience an inclusive and
              enriching learning environment where equal opportunities, academic excellence, and a commitment to success
              of the students define our core values. Together, we can shape a brighter future.
            </motion.p>

            <motion.div variants={itemVariants}>
              <Button asChild size="lg" className="group">
                <Link href="/whybugema" className="flex items-center gap-2">
                  Explore More
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div variants={itemVariants} className="relative order-first lg:order-last">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="/images/vc/vc.jpg"
                alt="Bugema University Campus"
                width={600}
                height={400}
                className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-100 dark:bg-blue-900/30 rounded-full blur-xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-slate-100 dark:bg-slate-800/30 rounded-full blur-xl" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Welcome

