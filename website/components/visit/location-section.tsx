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
            <h2 className="text-3xl md:text-4xl font-bold text-red-600">
              Our Location
            </h2>
              <div className="p-6 space-y-4">
                <p className="text-lg text-gray-700">
                  Bugema University is located on Makerere Hill which is one of the many hills on which Kampala,
                  the capital city of Uganda, is built. The main Campus is about 5 km to the North of the city centre
                  covering an area of 300 acres.
                </p>
                <p className="text-lg text-gray-700">
                  The location offers an excellent academic environment free from all forms of disturbances
                  associated with city centre locations, as portrayed in the{" "}
                  <Link href="#" className="text-green-600 hover:text-green-700 underline">
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
              src="/images/club/r.jpg"
              alt="Aerial view of the Main Building & College of Agriculture & External Studies (CAES) building"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-4 text-sm">
              Aerial view of the Main Building & College of Agriculture & External Studies (CAES) building
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

