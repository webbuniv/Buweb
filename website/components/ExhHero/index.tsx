import React from 'react';
import Link from "next/link";
import { FaArrowDownLong, FaArrowRightLong } from "react-icons/fa6";
import { BiBookOpen, BiSolidPencil } from "react-icons/bi";
import { motion } from "framer-motion";
import Slider from "react-slick";
import HeroSlide from "./HeroSlide";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const heroMedia = [
  // { type: 'video', src: "https://res.cloudinary.com/duaqiajka/video/upload/v1719686933/WELCOME_VIDEO_og2jma.mp4" },
  { type: 'image', src: "/images/exhibition/i.jpeg" },

  { type: 'image', src: "/images/exhibition/h.jpeg" },
  { type: 'image', src: "/images/exhibition/h.jpeg" },
  // { type: 'image', src: "/images/nav/palm-girls.jpg" },
  // { type: 'image', src: "/images/nav/grad.jpg" }
];

const textVariants = {
  initial: { x: -500, opacity: 0 },
  animate: {
    x: 0, opacity: 1, transition: { duration: 1, staggerChildren: 0.1 }
  },
  scrollButton: { opacity: 0, x: 10, transition: { duration: 2, repeat: Infinity } },
  scrollButton2: { opacity: 0, y: 10, transition: { duration: 2, repeat: Infinity } },
};

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 600,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 6000
};

const ExhHero = () => {
  return (
    <>
      <section id="home" className="hero-section w-full lg:h-[800px] h-[700px] mt-[120px] relative z-10 lg:-mb-[200px] flex flex-col md:flex-row">
        {/* Left Column: Slider */}
        <div className="w-full md:w-1/2 h-full flex items-center">
          <Slider {...sliderSettings} className="w-full">
            {heroMedia.map((media, index) => (
              <HeroSlide key={index} media={media} />
            ))}
          </Slider>
        </div>

        {/* Right Column: Information about the Entrepreneurship Class Exhibition */}
        <div className="w-full md:w-1/2 h-full flex bg-gray-100 dark:bg-gray-800 p-8 md:p-12 lg:h-[500px]">
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">
              Entrepreneurship Class Exhibition 2024 - 2025
            </h2>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300">
              Join us to explore innovative business ideas and projects created by students, showcasing creativity and entrepreneurial skills. This exhibition highlights the journey of future entrepreneurs and offers insights into their transformative projects.
            </p>
          </div>
        </div>
      </section>

      <div className="block md:hidden container px-4 mt-[120px] mb-[50px] w-full h-full">
        <div className="flex flex-wrap justify-center md:justify-between">
          <div className="w-full px-4 md:w-2/3">
            <motion.div
              className="text-center md:text-left space-y-4 md:space-y-8 mx-auto max-w-[800px] fadeInUp"
              data-wow-delay=".2s"
              variants={textVariants}
              initial="initial"
              animate="animate"
            >
              <motion.h2
                className="md:hidden uppercase font-medium leading-relaxed text-gray-500/70 dark:text-white dark:opacity-90 sm:text-xl text-2xl"
                variants={textVariants}
              >
                Entreprenuership Exhibition 
              </motion.h2>
              <motion.h1
                className="md:hidden capitalize text-3xl sm:text-4xl font-bold leading-tight text-black/70 dark:text-primary sm:leading-tight md:text-5xl md:leading-tight"
                variants={textVariants}
              >
                At<br /> Bugema University
              </motion.h1>
              <motion.div
                className="md:hidden flex flex-col items-center justify-center space-y-4"
                variants={textVariants}
              >
                <motion.div
                  className="flex hover:scale-105 transition-all duration-300 space-y-6 flex-col items-center "
                  variants={textVariants}
                >
                  <motion.div
                    className="bg-black/50 border rounded py-1"
                    variants={textVariants}
                    animate="scrollButton2"
                  >
                    <FaArrowDownLong className="text-white" />
                  </motion.div>
                  <Link

                    href="http://erms.bugemauniv.ac.ug/application"
                    className="flex rounded-md bg-primary dark:bg-primary/60 py-2 px-4  text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                  >
                    Apply Now
                    <BiSolidPencil className="text-xl mx-2" />
                  </Link>
                </motion.div>
                <motion.div
                  className="flex hover:scale-105 transition-all duration-300 flex-col text-center items-center justify-center"
                  variants={textVariants}
                >
                  <Link
                    href="/learn-more"
                    className="mt-4 flex rounded-md bg-black/30 py-1 px-3 md:py-2 md:px-4 text-lg font-semibold text-black/90 duration-300 ease-in-out hover:bg-black/30 dark:bg-transparent dark:border dark:text-white"
                  >
                    Learn More
                    <BiBookOpen className="text-xl mx-2" />
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExhHero;
