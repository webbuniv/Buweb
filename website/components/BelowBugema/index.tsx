'use client'

import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaWpforms, FaScroll, FaGlobe } from "react-icons/fa";
import { IoBookOutline } from "react-icons/io5";

const AboutSectionBu = () => {
  const [animate, setAnimate] = useState(false);
  const controls = useAnimation();

  const animated = () => {
    if (window.scrollY >= 100) {
      setAnimate(true);
      controls.start("visible");
    } else {
      setAnimate(false);
      controls.start("hidden");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", animated);
    return () => {
      window.removeEventListener("scroll", animated);
    };
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  const iconVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
  };

  const cards = [
    {
      title: "Our Mission",
      content: "To offer an excellent and distinctive holistic Christian education designed to prepare students, through training, research, and scholarship, for productive lives of useful service to God and to the community with integrity, honesty and loyalty.",
      icon: FaWpforms,
      color: "bg-blue-600",
    },
    {
      title: "Our Vision",
      content: 'Bugema University envisions training for "Excellence in Service".',
      icon: FaGlobe ,
      color: "bg-red-600",
    },
    {
      title: "Our Philosophy",
      content: "Bugema University holds as its philosophy the belief that true education fosters the restoration of the lost image of God in human beings through the harmonious development of the physical, mental, social, and spiritual dimensions of life.",
      icon: IoBookOutline,
      color: "bg-blue-600",
    },
    {
      title: "Accreditation",
      content: "Bugema University holds accreditation from the Adventist Accrediting Association based in Maryland, USA. (AAA) and chartered by the Republic of Uganda through the National Council of Higher Education, as an institution of higher learning.",
      icon: FaScroll,
      color: "bg-red-600",
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          animate={controls}
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              className={`${card.color} rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl`}
            >
              <div className="p-6 flex flex-col items-center text-center">
                <motion.div
                  variants={iconVariants}
                  className="mb-4"
                >
                  <card.icon className="w-12 h-12 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-2">{card.title}</h3>
                <p className="text-white text-opacity-90 text-sm">{card.content}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSectionBu;

