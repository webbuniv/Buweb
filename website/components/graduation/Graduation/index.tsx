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
  { type: 'image', src: "/images/graduation/gra.jpeg" },
  // { type: 'image', src: "/images/graduation/.jpeg" },
  { type: 'image', src: "/images/graduation/graduation.jpeg" }
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

const Graduation = () => {
  return (
    <>
    <section id="home" className="hero-section w-full lg:h-[800px] h-[700px] mt-[120px] relative z-10 mb-[300px] lg:-mb-[300px] flex flex-col md:flex-row">
        {/* Left Column: Information about the Entrepreneurship Class Exhibition */}
        <div className="w-full md:w-1/2 h-full flex bg-gray-100 dark:bg-gray-500 p-8 mb-[100px] md:p-12 lg:h-[500px] ">
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">
            30th Graduation Ceremony
            </h2>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300">
            Join us as we celebrate the hard work, dedication, and achievements of our graduates at the 30th Graduation Ceremony. This milestone event honors the accomplishments of students who have shown remarkable resilience and commitment to excellence. Family, friends, and faculty are all invited to witness this proud moment as we send off our graduates with inspiring speeches, awards, and a renewed sense of purpose. 
            </p>
          </div>
        </div>
        {/* Right Column: Slider */}
        <div className="w-full md:w-1/2 h-full flex items-center p-4 md:p-6 md:mb-6">
          <Slider {...sliderSettings} className="w-full">
            {heroMedia.map((media, index) => (
              <HeroSlide key={index} media={media} />
            ))}
          </Slider>
        </div>

      </section>
    </>
  );
};

export default Graduation;
