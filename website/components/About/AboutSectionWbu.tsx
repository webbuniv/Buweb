'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from "framer-motion";
import {  FaMapMarkerAlt, FaTaxi, FaCar } from "react-icons/fa";
import worship from "../../public/images/schools/theology.jpg";

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

  const expandVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { 
      opacity: 1, 
      height: 'auto',
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    }
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
                <motion.button 
                  onClick={() => setIsExpanded(true)}
                  className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-semibold mt-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Read more...
                </motion.button>
              )}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={expandVariants}
                  >
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
                    <div className="mt-8">
                      <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Further Expansion</h3>
                      <div className="flex flex-col lg:flex-row gap-8">
                        <div className="flex-1">
                          <p>
                            In year 2000, the university had student population of 800. There was a need to expand
                            the offerings in various departments especially in the Department of Education. As
                            a result, the following teaching courses were introduced in education: Geography,
                            Mathematics, Chemistry, Biology, Physics, English Language and Literature in English.
                            The school of Social Sciences also expanded to include Development Studies. During
                            the AAA evaluation of 2004 the student population was 1,236. Students come from 15
                            countries of Africa.
                          </p>
                          <p className="mt-4">
                            In 2008, the administration embarked on an extensive promotion for the university
                            in Central, South and East Africa. In this same year the AAA evaluation team visited.
                          </p>
                        </div>
                        <div className="flex-1">
                          <p>
                            Bugema and found the enrollment at 2000 students. The growth of the university
                            was appreciated by both the AAA and the National Council of Higher Education in
                            Uganda which in turn recommended Bugema to the President of Uganda to be given
                            a Charter on June 29, 2009. His Excellency President Yoweri Kaguta Museveni signed
                            the Charter on April 26, 2010. As all chartered universities in Africa are expected to do,
                            Bugema started a Graduate School. The subsequent visits of IBE (2010) and AAA (2011)
                            allowed the University to run a Graduate Program in Business Administration (MBA),
                            in Education (MA), in Development (MA), and in Counseling Psychology (MSc), and
                            an MPH program.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-8">
                      <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Current Offerings</h3>
                      <div className="flex flex-col lg:flex-row gap-8 items-center">
                        <div className="flex-1">
                          <p>
                            Currently, Bugema University offers a wide range of undergraduate programs in
                            areas of Health Sciences, Natural Sciences, Education, Theology and religious studies,
                            Social Sciences, Business and Computing and informatics. At Graduate studies level,
                            the programs include Business Administration, Development Studies, Counseling
                            Psychology, Public Health, Education, Computer Science, Social Work and Social
                            Administration. Furthermore, the Graduate School offers PhD programs in Rural
                            Development, Environmental Management and Education.
                          </p>
                        </div>
                        <div className="flex-1">
                          <Image
                            src={worship}
                            alt="Bugema University Campus"
                            width={500}
                            height={300}
                            className="rounded-lg shadow-lg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mt-8">
                      <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Aim & Objectives</h3>
                      <p>Bugema University aims to develop the whole person; therefore, the following objectives reflect this holistic approach:</p>
                      <ul className="list-disc list-inside space-y-2 mt-4">
                        <li>To provide academic programs which will allow the students to acquaint themselves with various fields of knowledge and to acquire skills that will facilitate personal, social, academic, and professional development in order to meet individual and societal demands.</li>
                        <li>To instill in the students an unswerving allegiance to the principles of Christian faith and a sense of personal responsibility so that they are prepared to render useful service to God and to humanity.</li>
                        <li>To lay emphasis on applied research relevant to the development needs of the community, including encouraging research leading to the development of patents.</li>
                        <li>To encourage all faculties to devote part of their time to research for publication in internationally recognized journals.</li>
                        <li>To select its students solely on the basis of merit while taking cognizance of the need to apply special criteria to potentially able but disadvantaged students.</li>
                        <li>To continue upgrading the quality of its teaching, research and administrative staff through vigorous staff development and staff appraisal schemes.</li>
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
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

