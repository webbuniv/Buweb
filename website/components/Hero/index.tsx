import React from "react";
import Link from "next/link";
import { FaArrowDownLong, FaArrowRightLong } from "react-icons/fa6";
import { BiBookOpen, BiSolidPencil } from "react-icons/bi";
import { motion } from "framer-motion";
import Slider from "react-slick";
import HeroSlide from "./HeroSlide";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import HeroOverlay from "../HeroOverlay/HeroOverlay";
import Header from "../Header";
import "slick-carousel/slick/slick-theme.css";

export const heroMedia = [
  // { type: 'video', src: "https://res.cloudinary.com/do5ubr3sa/video/upload/v1719685852/ayxyrcvleddu33lelk69.mp4" },
  //   { type: 'video', src: "https://res.cloudinary.com/djlx5iqhe/video/upload/v1731087035/WhatsApp_Video_2024-11-08_at_17.28.31_f2ee4132_gcgn3h.mp4" },

  // { type: 'no-overlay', src: "https://cloud.appwrite.io/v1/storage/buckets/676995bd003a7bc1e278/files/67fd14f700265aae6dd3/view?project=674dcf7b003d57db960a&mode=admin" },
  {
    type: "image",
    src: "https://cloud.appwrite.io/v1/storage/buckets/676995bd003a7bc1e278/files/686e8a2e0035bf8439de/view?project=674dcf7b003d57db960a&mode=admin",
    title: "The 31ST GRADUATION CEREMONY",
    description: `Caps. Gowns. Dreams. Counting down to a day of honour, joy, and new beginnings. Graduation is on the horizon ... Your moment to shine is coming soon. Graduation awaits – are you ready?`, 
        // link: "http://erms.bugemauniv.ac.ug/application",
        // linkText: "Clear Now",  
},
  {
    type: "image",
    src: "https://cloud.appwrite.io/v1/storage/buckets/676995bd003a7bc1e278/files/686658bc0026975fda0f/view?project=674dcf7b003d57db960a&mode=admin",
    title: "BUGEMA UNIVERSITY",
    description: `With a diverse culture of over 17 countries and beyond,
     Bugema University is where Knowledge meets Opportunity to offer you
      Quality education with a hands-on experience. . .`, 
        link: "http://erms.bugemauniv.ac.ug/application",
        linkText: "Apply Now",
},
  {
    type: "image",
    src: "https://cloud.appwrite.io/v1/storage/buckets/676995bd003a7bc1e278/files/68641dd3003cdff2242d/view?project=674dcf7b003d57db960a&mode=admin",
    title: "Visit from NCHE",
    description: `The institution recently hosted an official visit from the National Council for Higher Education (NCHE). The purpose of the visit was to assess academic standards...`, 
        link: "https://www.bugemauniv.ac.ug/news/68641e0d0012974a663d",
        linkText: "Read More", 
},
  //   { type: 'no-overlay', src: "/images/graduation/three.jpeg"},
  // { type: 'image', src: "https://cloud.appwrite.io/v1/storage/buckets/676995bd003a7bc1e278/files/679ca0640005017b97d8/view?project=674dcf7b003d57db960a&mode=admin"},
  //   { type: 'image', src: "/images/hero/env2.jpg" },
];

const textVariants = {
  initial: { x: -500, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 1, staggerChildren: 0.1 },
  },
  scrollButton: {
    opacity: 0,
    x: 10,
    transition: { duration: 2, repeat: Infinity },
  },
  scrollButton2: {
    opacity: 0,
    y: 10,
    transition: { duration: 2, repeat: Infinity },
  },
};

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 6000,
  fade: true,
  arrows: false,
};

const Hero = () => {
  const [CurrentSlide, setCurrentSlide] = useState(0);

  const handleBeforeChange = (oldIndex, newIndex) => {
    setCurrentSlide(newIndex);
  };
  const settings = {
    ...sliderSettings,
    beforeChange: handleBeforeChange,
  };
  return (
    <>
      <section
        id="home"
        className="  block  bg w-full lg:h-[50%]  h-[50%] relative z-10 mt-[1] mb-[14%] "
      >
        {/* <Header /> */}
        <Slider {...settings} className="">
          {heroMedia.map((media, index) => (
            <HeroSlide key={index} media={media} />
          ))}
        </Slider>

      </section>

      {/* <div className="block md:hidden container px-4 mt-[120px] mb-[50px] w-full h-full">
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
                Bugema University
              </motion.h2>
              <motion.h1
                className="md:hidden capitalize text-3xl sm:text-4xl font-bold leading-tight text-black/70 dark:text-primary sm:leading-tight md:text-5xl md:leading-tight"
                variants={textVariants}
              >
                Excellence <br /> in service
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
      </div> */}
    </>
  );
};

export default Hero;
