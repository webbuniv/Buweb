'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGraduationCap, FaChalkboardTeacher, FaLaptop, FaPrayingHands } from 'react-icons/fa';

const DropdownMenu = ({ items, isVisible, onMouseLeave }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center"
          onMouseLeave={onMouseLeave}
        >
          <div className="bg-white rounded-md shadow-lg overflow-hidden w-full max-w-xs">
            <div className="py-1" role="menu" aria-orientation="vertical">
              {items.map((item, index) => (
                <Link key={index} href={item.href}>
                  <motion.div
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                    whileHover={{ backgroundColor: '#f3f4f6' }}
                  >
                    {item.title}
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const AboutSection = () => {
  const [dropdownVisible, setDropdownVisible] = useState<string | null>(null);

  const professionalCoursesItems = [
    { title: "School of Science and Technology", href: "/courses/school-of-science" },
    { title: "School of Health and Allied Sciences", href: "/courses/school-of-health" },
    { title: "School of Theology and Religious Studies", href: "/courses/school-of-theology" },
    { title: "School of Agriculture and Applied Sciences", href: "/courses/school-of-agric" },
    { title: "School of Business", href: "/courses/school-of-business" },
    { title: "School of Education, Humanities and Social Sciences", href: "/courses/school-of-education" },
    { title: "School of Graduate Studies, Research & Publications", href: "/courses/school-of-graduate" },
  ];

  const expertLecturersItems = [
    { title: "School of Science and Technology", href: "/schools/school-of-science" },
    { title: "School of Health and Allied Sciences", href: "/schools/school-of-health" },
    { title: "School of Theology and Religious Studies", href: "/schools/school-of-theology" },
    { title: "School of Agriculture and Applied Sciences", href: "/schools/school-of-agric" },
    { title: "School of Business", href: "/schools/school-of-business" },
    { title: "School of Education, Humanities and Social Sciences", href: "/schools/school-of-education" },
    { title: "School of Graduate Studies, Research & Publications", href: "/schools/school-of-graduate" },
  ];

  const sectionData = [
    {
      title: "Professional Courses",
      description: "We offer a wide range of professional courses across our faculties, including CISCO certifications, Microsoft certifications, CPA preparation, and more.",
      icon: <FaGraduationCap className="text-4xl text-blue-600 mb-4" />,
      imageSrc: "/images/schools/lab1.jpg",
      imageAlt: "Professional Courses",
      buttonText: "Explore Courses",
      buttonLink: "/courses",
      dropdownItems: professionalCoursesItems,
    },
    {
      title: "Expert Lecturers",
      description: "Our experienced lecturers bring industry knowledge and market experience to the classroom, ensuring our students receive high-quality education.",
      icon: <FaChalkboardTeacher className="text-4xl text-green-600 mb-4" />,
      imageSrc: "/images/features/bu.jpg",
      imageAlt: "Expert Lecturers",
      buttonText: "Meet Our Faculty",
      buttonLink: "/faculty",
      dropdownItems: expertLecturersItems,
    },
    {
      title: "Blended Learning",
      description: "Our blended learning approach combines traditional classroom instruction with interactive online components, catering to diverse learning needs.",
      icon: <FaLaptop className="text-4xl text-purple-600 mb-4" />,
      imageSrc: "/images/schools/lab1.jpg",
      imageAlt: "Blended Learning",
      buttonText: "Explore E-Learning",
      buttonLink: "/elearning",
    },
    {
      title: "Worship and Spirituality",
      description: "We provide a nurturing environment for spiritual growth, offering worship services and spaces that cater to diverse religious and spiritual needs.",
      icon: <FaPrayingHands className="text-4xl text-yellow-600 mb-4" />,
      imageSrc: "/images/church/prr.jpeg",
      imageAlt: "Worship and Spirituality",
      buttonText: "Learn More",
      buttonLink: "/spiritual-life",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center text-gray-800 dark:text-white mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Excellence in Education
        </motion.h2>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {sectionData.map((section, index) => (
            <motion.div 
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden relative"
              variants={itemVariants}
            >
              <div className="relative h-64">
                <Image
                  src={section.imageSrc}
                  alt={section.imageAlt}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 hover:scale-110"
                />
                {section.dropdownItems && (
                  <DropdownMenu
                    items={section.dropdownItems}
                    isVisible={dropdownVisible === section.title}
                    onMouseLeave={() => setDropdownVisible(null)}
                  />
                )}
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  {section.icon}
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white ml-4">{section.title}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6">{section.description}</p>
                <motion.div
                  className="relative"
                  onMouseEnter={() => setDropdownVisible(section.title)}
                  onTouchStart={() => setDropdownVisible(section.title)}
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block bg-blue-600 text-white py-2 px-6 rounded-full font-semibold shadow-lg hover:bg-blue-700 transition-colors duration-300"
                  >
                    {section.buttonText}
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;

