import Link from "next/link";
import { FaArrowDownLong, FaArrowRightLong } from "react-icons/fa6";
import { BiBookOpen, BiSolidPencil } from "react-icons/bi";
import { motion } from "framer-motion";
import HeroVideo from "../HeroVideo/HeroVideo";
import HeroOverlay from "../HeroOverlay/HeroOverlay";

export const bgImage = "/images/features/life.jpg";
export const heroVid = "/video/welcome.mp4";

// Variants for hero content
const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    x: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
  scrollButton2: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};


const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="hero-section w-full h-[200px] md:h-[800px] relative z-10"
      >
        <HeroVideo src={heroVid} />
        <HeroOverlay
          title="BUGEMA UNIVERSITY"
          subtitle="Excellence In Service"
          buttonText="Apply Now"
          buttonLink="/apply-now"
        />
      </section>

      <div className="container px-4 mt-5 w-full h-full">
        <div className="flex flex-wrap justify-center md:justify-between">
          <div className="w-full px-4 md:w-2/3">
            {/* Content */}
            <motion.div
              className="text-center md:text-left space-y-4 md:space-y-8 mx-auto max-w-[800px] fadeInUp"
              data-wow-delay=".2s"
              variants={textVariants}
              initial="initial"
              animate="animate"
            >
              {/* On big screens */}
              {/* <motion.h2 className="hidden md:block uppercase text-base font-medium leading-relaxed text-white dark:opacity-90 sm:text-xl md:text-4xl" 
                variants={textVariants}>
                  Bugema University
                </motion.h2> */}

              {/* On small screens */}
              <motion.h2
                className="md:hidden uppercase font-medium leading-relaxed text-gray-500/70 dark:text-white dark:opacity-90 sm:text-xl text-2xl"
                variants={textVariants}
              >
                Bugema University
              </motion.h2>

              {/* Buttons on big screens */}
              {/* <motion.div className="hidden md:flex items-center justify-start space-x-6 md:space-x-10" 
                variants={textVariants}> */}

              {/* Apply now button */}
              {/* <motion.div 
                    className="flex hover:scale-105 transition-all space-x-2 md:space-x-8 items-center duration-300 flex-row text-center justify-center" 
                    variants={textVariants}>
                    <motion.div 
                      className="bg-black border rounded px-1" 
                      variants={textVariants} 
                      animate="scrollButton">
                      <FaArrowRightLong className="text-white"/>
                    </motion.div>
                    <Link href="https://apply.bugemauniv.ac.ug/" claseducasName="flex rounded-md bg-primary dark:bg-primary/60 py-1 px-3 md:py-2 md:px-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80">
                        Apply Now
                        <BiSolidPencil className="text-xl mx-2" />
                    </Link>
                  </motion.div> */}

              {/* Learn more button */}
              {/* <motion.div 
                    className="flex hover:scale-105 transition-all duration-300 flex-col text-center items-center justify-center" 
                    variants={textVariants}>
                    <Link href="/learn-more" className="flex rounded-md bg-black/30 py-1 px-3 md:py-2 md:px-4 text-base font-semibold text-black/90 duration-300 ease-in-out hover:bg-black/30 dark:bg-transparent dark:border dark:text-white">
                        Learn More
                        <BiBookOpen className="text-xl mx-2" />
                    </Link>
                  </motion.div>

                </motion.div> */}

              {/* Motto on small screens */}
              <motion.h1
                className="md:hidden capitalize text-3xl sm:text-4xl font-bold leading-tight text-black/70 dark:text-primary sm:leading-tight md:text-5xl md:leading-tight"
                variants={textVariants}
              >
                Excellence <br />
                in service
              </motion.h1>

              {/* Motto on big screens */}
              {/* <motion.h1 className="hidden md:block capitalize text-3xl sm:text-4xl font-bold leading-tight text-black/90 dark:text-primary sm:leading-tight md:text-6xl md:leading-tight" 
                variants={textVariants}>
                  We envision <br/>excellence in service
                </motion.h1> */}

              {/* Subtitle */}
              {/* <motion.h2 className="hidden capitalize text-black/70 dark:text-white/40 md:text-black/80 text-xl dark:font-bold leading-tight sm:leading-tight md:text-3xl md:leading-tight" 
                variants={textVariants}>
                  Make your <br className="md:hidden"/>dreams come true
                </motion.h2> */}

              {/* Buttons on small screens */}
              <motion.div
                className="md:hidden flex flex-col items-center justify-center space-y-4"
                variants={textVariants}
              >
                {/* Apply now button */}
                <motion.div
                  className="flex hover:scale-105 transition-all duration-300 space-y-6 flex-col items-center "
                  variants={textVariants}
                >
                  <motion.div
                    className="bg-black border rounded py-1"
                    variants={textVariants}
                    animate="scrollButton2"
                  >
                    <FaArrowDownLong className="text-white" />
                  </motion.div>
                  <Link
                    href="/apply"
                    className="flex rounded-md bg-primary dark:bg-primary/60 py-2 px-4  text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                  >
                    Apply Now
                    <BiSolidPencil className="text-xl mx-2" />
                  </Link>
                </motion.div>

                {/* Learn more button */}
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

            {/* Sliding bg text container on big screens */}
            {/* <motion.div 
                className="hidden md:block slidingTextContainer text-[#0000001f] dark:text-[#ffffff09] w-[220%] font-bold" 
                variants={sliderVariants} 
                initial="initial" 
                animate="animate"
              >
                Bugema University
              </motion.div> */}
          </div>

          {/* Rotating Photos/Logos */}
          {/* <div className=" w-full md:w-1/3 hidden sm:flex flex-col items-center justify-center space-y-6 md:space-y-10"> */}
          {/* <motion.img 
                src="/images/logo/bugema.png" 
                alt="Logo 1" 
                className="w-1000 h-500 md:w-40 md:h-40" 
                variants={rotateVariants} 
                animate="animate"
              /> */}
          {/* </div> */}
        </div>
      </div>
    </>
  );
};

export default Hero;
