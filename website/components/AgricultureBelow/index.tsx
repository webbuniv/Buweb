'use client'

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ChevronRight } from 'lucide-react';
import AgricultureStats from "./agriculture-stats";
import TestimonialCarousel from "./testimonial-carousel";

const FeatureSection: React.FC<{
  title: string;
  description: string;
  imageSrc: string;
  secondaryImageSrc: string;
  linkHref: string;
  reversed?: boolean;
}> = ({ title, description, imageSrc, secondaryImageSrc, linkHref, reversed = false }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${reversed ? 'lg:flex-row-reverse' : ''}`} ref={ref}>
      <motion.div
        className={`relative overflow-visible ${reversed ? 'lg:order-2' : ''}`}
        initial={{ opacity: 0, x: reversed ? 50 : -50 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="h-[400px] relative rounded-lg overflow-hidden">
          <Image
            src={imageSrc || "/placeholder.svg"}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className={`absolute -bottom-10 ${reversed ? '-left-10' : '-right-10'} w-[60%] h-[50%]`}>
          <Image
            src={secondaryImageSrc || "/placeholder.svg"}
            alt={`${title} secondary`}
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
        </div>
      </motion.div>
      <motion.div
        className={`${reversed ? 'lg:order-1' : ''}`}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900 dark:to-indigo-900 p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold mb-4 text-blue-700 dark:text-blue-300">{title}</h2>
          <p className="text-base mb-6 text-gray-700 dark:text-gray-300">{description}</p>
          <Link href={linkHref} passHref>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out flex items-center">
              Explore More
              <ChevronRight className="ml-2 h-4 w-4" />
            </button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

const AgricultureBelow: React.FC = () => {
  const [activeSection, setActiveSection] = useState("spray");

  const sections = [
    {
      id: "spray",
      title: "Optimize Spray Timing",
      description: "The most effective way to manage plant disease is by prevention. Know exactly where, what and when to spray, even down to the best time of day. Save costs on chemicals and spraying while you maximize protection.",
      imageSrc: "/images/agric/home.jpg",
      secondaryImageSrc: "/images/agric/hom.jpg",
      linkHref: "/agriprogram"
    },
    {
      id: "chemical",
      title: "Reduce Chemical Use",
      description: "Our system calculates a dynamic, daily infection risk that takes into account conditions for fungal growth, plant growth, crop type, and previous crop protection applications. The system also recommends the day and time to minimize environmental loss.",
      imageSrc: "/images/agric/ho.jpg",
      secondaryImageSrc: "/images/agric/car.jpg",
      linkHref: "/agriprogramtwo"
    },
    {
      id: "sustainable",
      title: "Sustainable Farming Practices",
      description: "Embrace sustainable farming practices that not only optimize crop yield but also preserve the environment. Our advanced techniques help you reduce water usage, minimize soil erosion, and promote biodiversity in your agricultural ecosystem.",
      imageSrc: "/images/agric/croro.jpeg",
      secondaryImageSrc: "/images/agric/crppo.jpeg",
      linkHref: "/agripro"
    }
  ];

  return (
    <section className="px-4 py-16 bg-gradient-to-b from-blue-50 to-indigo-50 dark:from-blue-900 dark:to-indigo-900">
      <div className="container mx-auto space-y-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-blue-800 dark:text-blue-200">
            Revolutionizing Agriculture at Bugema University
          </h1>
          <p className="text-xl text-center mb-12 text-gray-700 dark:text-gray-300">
            Discover our cutting-edge agricultural practices and technologies
          </p>
        </motion.div>

        <div className="flex justify-center space-x-4 mb-8">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`px-4 py-2 rounded-md transition-colors duration-300 ${
                activeSection === section.id
                  ? "bg-blue-600 text-white"
                  : "bg-white text-blue-600 hover:bg-blue-100"
              }`}
            >
              {section.title}
            </button>
          ))}
        </div>

        {sections.map((section, index) => (
          <div key={section.id} style={{ display: activeSection === section.id ? 'block' : 'none' }}>
            <FeatureSection
              title={section.title}
              description={section.description}
              imageSrc={section.imageSrc}
              secondaryImageSrc={section.secondaryImageSrc}
              linkHref={section.linkHref}
              reversed={index % 2 !== 0}
            />
          </div>
        ))}

        <AgricultureStats />
        
        <TestimonialCarousel />
      </div>
    </section>
  );
};

export default AgricultureBelow;

