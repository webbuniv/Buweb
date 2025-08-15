// import SectionTitle from "../Common/SectionTitle";
// import Image from "next/image";
// import img1 from "../../public/images/vc/vc.jpg";

// import React, { useState } from "react";
// import Link from "next/link";
// import { FaArrowRight } from "react-icons/fa";
// export const img = "/images/vc/vc.jpg";
// const Welcome = () => {
//   return (
//     <>
//       <section id="features" className="bg-primary/[.03] pt-8 -mt-5">
//         <div className="container mt-12">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-60">
//             <div className="flex flex-col mt-10 ">
//               {/* Section title on big screens */}
//               <div className=" mb-8 hidden md:flex md:flex-col">
//                 <div className="ml-12 wow fadeInUp w-full" data-wow-delay=".1s">
//                   <h2 className="mb-2 font-bold !leading-tight text-black/80 dark:text-white md:text-xl">
//                     Welcome To
//                   </h2>
//                   <h1 className="mb-4 text-3xl font-bold !leading-tight text-black/80 dark:text-white sm:text-4xl md:text-[45px]">
//                     Bugema University
//                   </h1>
//                   <p className="text-base !leading-relaxed text-body-color md:text-lg">
//                     We understand the importance of
//                     quality assurance. We have developed the best procedures to ensure
//                     the highest standards of excellence in academic delivery and
//                     performance. Experience an inclusive and enriching learning environment
//                     where equal opportunities, academic excellence, and a
//                     commitment to success of the students define our core
//                     values. Together, we can shape a brighter future.
//                   </p>
//                 </div>

//                 <div className="duration-300 md:text-lg rounded-md py-1 px-3 md:py-2 md:px-4 ml-12 mt-4 w-[170px] transition-all hover:scale-105">
//                   {/* <Link
//                     href="/whybugema"
//                     className="text-base font-semibold text-white"
//                   >
//                     <span className="flex items-center gap-2 justify-center">
//                       Explore More
//                       <FaArrowRight />
//                     </span>
//                   </Link> */}
//                   <Link 
//                     href="/whybugema"
//                     className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-semibold mt-2"
//                     // whileHover={{ scale: 1.05 }}
//                     // whileTap={{ scale: 0.95 }}
//                   >
//                     Read more...
//                   </Link>
//                 </div>
//               </div>

//               {/* Section title on small screens */}
//               <div className="mb-8 block md:hidden text-sm">
//                 <div className="wow fadeInUp w-full" data-wow-delay=".1s">
//                   <h1 className="mb-4 text-3xl font-bold !leading-tight text-black/80 dark:text-white sm:text-4xl">
//                     Welcome to
//                   </h1>
//                   <div className="">
//                     <Image
//                       className="img1 mb-2 rounded"
//                       src={img}
//                       alt="Bugema University"
//                       width="600"
//                       height="250"
//                     />
//                   </div>
//                   <p className="text-base !leading-relaxed text-body-color md:text-lg">
//                     Join us at Bugema University, where education is embraced as
//                     a catalyst for empowerment and change. Experience an
//                     inclusive and enriching learning environment where equal
//                     opportunities, academic excellence, and a commitment to the
//                     success of the students define our core values. Together, we
//                     can shape a brighter future through education.
//                   </p>
//                 </div>

//                 <div className="bg-primary rounded-md py-1 px-3 mt-4 w-[170px]">
//                   <Link
//                     href="/whybugema"
//                     className="text-base font-semibold text-white "
//                   >
//                     <span className="flex items-center gap-2 justify-center">
//                       Explore More
//                       <FaArrowRight />
//                     </span>
//                   </Link>
//                 </div>
//               </div>
//             </div>

//             <div className="">
//               <Image
//                 className="img1 hidden md:block mt-28 rounded"
//                 src={img}
//                 alt="Bugema University"
//                 width={500}
//                 height={245}
//               />
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Welcome;
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

