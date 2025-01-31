import React from 'react';
import Link from "next/link";
import { FaArrowDownLong, FaArrowRightLong } from "react-icons/fa6";
import { BiBookOpen, BiSolidPencil } from "react-icons/bi";
import { motion } from "framer-motion";
import Slider from "react-slick";
import HeroSlide from "./HeroSlide";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from 'react';
import HeroOverlay from '../HeroOverlay/HeroOverlay';
import Header from '../Header';

export const heroMedia = [
  // { type: 'video', src: "https://res.cloudinary.com/do5ubr3sa/video/upload/v1719685852/ayxyrcvleddu33lelk69.mp4" },
//   { type: 'video', src: "https://res.cloudinary.com/djlx5iqhe/video/upload/v1731087035/WhatsApp_Video_2024-11-08_at_17.28.31_f2ee4132_gcgn3h.mp4" },
{ type: 'image', src: "/images/hero/land1.jpg" },
  { type: 'image', src: "/images/hero/Lymphdema.jpg"},
//   { type: 'no-overlay', src: "/images/graduation/three.jpeg"},
  { type: 'image', src: "/images/hero/env1.jpg"},
//   { type: 'image', src: "/images/hero/env2.jpg" },
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
  autoplaySpeed: 6000,
  fade:true
  
};


const Hero = () => {
      const [CurrentSlide, setCurrentSlide] = useState(0);

      const handleBeforeChange = (oldIndex, newIndex) => {
            setCurrentSlide(newIndex);
          };
      const settings = {
      ...sliderSettings,
      beforeChange: handleBeforeChange,
      }
  return (
    <>
      <section id="home" className="  hidden md:block  hero-section bg w-full lg:h-[50%]  h-[50%] relative z-10 mt-[1] mb-[14%] ">
      <Header />
        <Slider {...settings} className="">
          {heroMedia.map((media, index) => (
            <HeroSlide key={index} media={media} />
          ))}
        </Slider>
{/*=================== CUSTOMIZING THE SLIDER TO HAVE DIFFERENT OVERLAY WORDS FOR DIFFERENT SLIDES ===================*/ }
        {CurrentSlide ===0 && <HeroOverlay 
              title3="Welcome to Bugema University"
              subtitle3="With a diverse culture of over 17 countries and beyond, Bugema University is where Knowledge meets Opportunity"
               subtitle2=""
              // subtitle3="to offer you Quality education with a hands-on experience. . ."
              title={undefined} title2={undefined}  subtitle={undefined}   buttonText={undefined} buttonLink={undefined}
            />}
            {CurrentSlide ===1 && <HeroOverlay 
              // title2="Service."
              title3="Bugema University Hosts a Free Medical Camp Focused on treating patients Lymphdema"
              subtitle2="https://www.bugemauniv.ac.ug/hospital"
              subtitle3="Read More"
              title={undefined} title2={undefined}  subtitle={undefined} buttonText={undefined} buttonLink={undefined} 
            />}

{CurrentSlide ===2 && <HeroOverlay 
              // title2="Service."
              title3="Kick start your Higher Eduction at Bugema University "
              subtitle2="https://erms.bugemauniv.ac.ug/application/"
              subtitle3="January Intake is Ongoing Apply Here"
              title={undefined} title2={undefined}  subtitle={undefined} buttonText={undefined} buttonLink={undefined} 
            />}

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
      </div>
    </>
  );
};

export default Hero;
