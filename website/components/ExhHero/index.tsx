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
  { type: 'image', src: "/images/exhibition/ex.jpeg" },
  { type: 'image', src: "/images/exhibition/i.jpeg" },

  // { type: 'image', src: "/images/exhibition/h.jpeg" },
  // { type: 'image', src: "/images/exhibition/h.jpeg" },
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
      <section id="home" className="hero-section w-full lg:h-[800px] h-[700px] mt-[120px] relative z-10 mb-[200px] lg:-mb-[200px] flex flex-col md:flex-row">
        {/* Left Column: Slider */}
        <div className="w-full md:w-1/2 h-full flex items-center p-4 md:p-6 -mb-[200px] md:mb-6">
          <Slider {...sliderSettings} className="w-full">
            {heroMedia.map((media, index) => (
              <HeroSlide key={index} media={media} />
            ))}
          </Slider>
        </div>

        {/* Right Column: Information about the Entrepreneurship Class Exhibition */}
        <div className="w-full md:w-1/2 h-full flex bg-gray-100 dark:bg-gray-800 p-8 md:p-12 lg:h-[500px] ">
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
    </>
  );
};

export default ExhHero;
