'use client'

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from 'lucide-react';

const newsData = [
  {
    category: "Entreprenuership Class Exhibition",
    title: "Showcasing Innovative Business Ideas by Students",
    link: "/exhibition",
    imageSrc: "/images/exhibition/e.jpeg",
    altText: "Image related to Exams",
  },
  // {
  //   category: "Are You Ready for Exams?",
  //   title: "The countdown has begun! As the exam days draw closer, students are encouraged to... ",
  //   link: "/",
  //   imageSrc: "/images/club/two.jpg",
  //   altText: "Image related to Exams",
  // },
  {
    category: "Sports",
    title: "Bugema University sports play a vital role in student life.",
    link: "/sports/sports",
    imageSrc: "/images/life/football/footf.jpg",
    altText: "Image related to football",
  },
  {
    category: "Students Clubs",
    title: "Unleashing Potential: Discovering the Diverse Clubs at Bugema University",
    link: "/clubs/clubs",
    imageSrc: "/images/club/r.jpg",
    altText: "Student Club",
  },
  {
    category: "Cultural Gala 2024 - 2025",
    title: "A Spectacular Cultural Gala 2024-2025: Bridging Traditions and Cultures", 
    link: "/studentlife",
    imageSrc: "/images/gala/neww.jpeg",
    altText: "Image related to cultural gala",
  },
  {
    category: "30th Graduation Ceremony",
    title: "Celebrating excellence and achievements at the 30th graduation ceremony 2024-2025", 
    link: "/graduation/graduation",
    imageSrc: "/images/graduation/a.jpg",
    altText: "Graduation 2024 - 2025 highlights",
  },
];

const CampusNews: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isLargeScreen) {
      const intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 2) % newsData.length);
      }, 5000);

      return () => clearInterval(intervalId);
    }
  }, [isLargeScreen]);

  const getVisibleNews = () => {
    if (!isLargeScreen) {
      return newsData;
    }

    const centerIndex = currentIndex;
    const leftIndex = (centerIndex - 2 + newsData.length) % newsData.length;
    const rightIndex = (centerIndex + 2) % newsData.length;

    return [
      newsData[leftIndex],
      newsData[centerIndex],
      newsData[rightIndex],
      newsData[(rightIndex + 2) % newsData.length],
    ];
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const descriptionVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const cardVariants = {
    hidden: (i: number) => ({
      opacity: 0,
      x: i % 2 === 0 ? -50 : 50,
      y: -20,
    }),
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: Math.floor(i / 2) * 0.2,
      },
    }),
    exit: (i: number) => ({
      opacity: 0,
      x: i % 2 === 0 ? -50 : 50,
      y: 20,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    }),
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      <motion.div
        className="container mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="text-center mb-12">
          <motion.h2
            variants={titleVariants}
            className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4"
          >
            Student Life at Bugema University
          </motion.h2>
          <motion.p
            variants={descriptionVariants}
            className="max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-300"
          >
            Discover a vibrant campus community that goes beyond the classroom, offering diverse activities and resources for your personal growth and leadership development.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <AnimatePresence>
            {getVisibleNews().map((news, index) => (
              <motion.article
                key={`${news.title}-${index}`}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={news.imageSrc}
                    alt={news.altText}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 hover:scale-110"
                  />
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center"
                  >
                    <Link href={news.link} className="text-white text-lg font-semibold hover:underline">
                      Read More
                    </Link>
                  </motion.div>
                </div>
                <motion.div
                  className="p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                >
                  <div className="text-sm font-medium text-indigo-600 dark:text-indigo-400 mb-2">{news.category}</div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2">
                    <Link href={news.link} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300">
                      {news.title}
                    </Link>
                  </h3>
                </motion.div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, type: "spring", stiffness: 100, damping: 15 }}
        >
          <Link
            href="/studentlife"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-300"
          >
            Explore Student Life
            <ChevronRight className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CampusNews;

