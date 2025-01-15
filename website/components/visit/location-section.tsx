'use client'

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"

export function LocationSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [50, -50])

  return (
    <section ref={ref} className="py-12 px-4 md:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-600">
              Our Location
            </h2>
              <div className="p-6 space-y-4">
                <p className="text-lg text-gray-700">
                Bugema University is located 32 kilometers north of Kampala on Gayaza-Zirobwe Road. Public Taxis are available at a cost of Ushs 4,000 from the Old Taxi Park in Kampala city, or special cars can be hired at an approximate cost of UShs 60,000.
                </p>
                <p className="text-lg text-gray-700">
                  The location offers an excellent academic environment free from all forms of disturbances
                  associated with city centre locations, as portrayed in the{" "}
                  <Link href="#" className="text-blue-600 hover:text-blue-700 underline">
                    University Anthem
                  </Link>
                  .
                </p>
              </div>
          </div>

          <motion.div 
            style={{ y }}
            className="relative h-[600px] rounded-xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/images/footer/aerial2.png"
              alt="Aerial view of the Main Building & College of Agriculture & External Studies (CAES) building"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-4 text-sm">
              Aerial view of Bugema University.
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

