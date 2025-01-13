'use client'

import React, { useState } from 'react';
import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight, FaMapMarkerAlt, FaTaxi, FaCar } from "react-icons/fa";

const AboutSectionWbu = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          A Brief History of Bugema University
        </motion.h2>
        
        <motion.div 
          className="flex flex-col lg:flex-row gap-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="flex-1" variants={itemVariants}>
            <div className="prose prose-lg dark:prose-invert">
              <p>
                With the entry of the Adventist church in Uganda in 1927 came also the first Adventist
                educational institution in Nchwanga in West Central Uganda. The primary function of
                the institution was to train pastors and church workers.
              </p>
              <p className={`mt-4 ${isExpanded ? '' : 'line-clamp-3'}`}>
                In 1948 the institution moved to a newly purchased property of 640 acres in Bugema, 34 Kilometers from Kampala. Two
                years later a secondary education at O level was started. By 1970 a junior college began
                its operations training pastors for the field. Four years later, the denomination upgraded
                the institution into a four-year seminary, granting bachelor&apos;s degrees in theology (BTh).
                In 1985 business was added, and in 1990 education. In 1994, the institution obtained
                a government license to operate as a university.
              </p>
              {!isExpanded && (
                <button 
                  onClick={() => setIsExpanded(true)}
                  className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-semibold mt-2"
                >
                  Read more...
                </button>
              )}
              {isExpanded && (
                <>
                  <p className="mt-4">
                    The Adventist Accrediting Association (AAA) visited the University in 1995 and recommended accreditation to Bachelor of
                    Theology, Bachelor of Business Administration (in Management and Accounting), and
                    Bachelor of Arts in Religion.
                  </p>
                  <p className="mt-4">
                    Subsequent visit of the AAA and International Board of Education (IBE) allowed the
                    university to restructure their programs under two schools: School of Arts and Social
                    Sciences and School of Business. The former includes four departments: Development
                    Studies, Education, Social Work and Social Administration, and Theology and Religious
                    Studies. The later includes three departments: Accounting and Finance, Management,
                    and Information Technology. Under these departments, the university offers 12 degree
                    programs with various majors and several vocational certificates and professional
                    licenses.
                  </p>
                </>
              )}
            </div>
            <motion.div 
              className="mt-8"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/whybugemaUn"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition duration-300"
              >
                Explore More
                <FaArrowRight className="ml-2" />
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div className="lg:w-1/3" variants={itemVariants}>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Address</h3>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <div className="flex items-start mb-4">
                <FaMapMarkerAlt className="text-red-500 text-2xl mr-4 mt-1" />
                <p className="text-gray-600 dark:text-gray-300">
                  Bugema University is located 32 kilometers north of Kampala on Gayaza-Zirobwe Road.
                </p>
              </div>
              <div className="flex items-center mb-4">
                <FaTaxi className="text-yellow-500 text-2xl mr-4" />
                <p className="text-gray-600 dark:text-gray-300">
                  Public Taxis are available at a cost of Ushs 4,000 from the Old Taxi Park in Kampala city.
                </p>
              </div>
              <div className="flex items-center">
                <FaCar className="text-blue-500 text-2xl mr-4" />
                <p className="text-gray-600 dark:text-gray-300">
                  Special cars can be hired at an approximate cost of UShs 60,000.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSectionWbu;

