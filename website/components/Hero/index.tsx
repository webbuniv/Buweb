import Link from "next/link";
import { FaArrowDownLong, FaArrowRightLong } from 'react-icons/fa6';
import { BiBookOpen, BiSolidPencil } from 'react-icons/bi';
import { motion } from 'framer-motion';

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
      repeat: Infinity
    }
  },
  scrollButton2: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity
    }
  },
};

// Variants for sliding text for big screens
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-200%",
    transition: {
      duration: 40,
      repeat: Infinity
    },
  },
};

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 pt-24 pb-10 md:pt-36 md:pb-24 xl:pt-44 xl:pb-40 2xl:pt-52 2xl:pb-48"
      >
        <div className="container px-4">
          <div className="flex flex-wrap justify-center md:justify-start">
            <div className="w-full px-4">

              {/* Content */}
              <motion.div
                className="text-center md:text-left space-y-4 md:space-y-8 mx-auto max-w-[800px] fadeInUp"
                data-wow-delay=".2s" 
                variants={textVariants} 
                initial="initial" 
                animate="animate"
              >

                {/* On big screens */}
                <motion.h2 className="hidden md:block uppercase text-base font-medium leading-relaxed text-gray-500/90 dark:text-white dark:opacity-90 sm:text-xl md:text-4xl" 
                variants={textVariants}>
                  Bugema University
                </motion.h2>

                {/* On small screens */}
                <motion.h2 className="md:hidden uppercase font-medium leading-relaxed text-gray-500/90 dark:text-white dark:opacity-90 sm:text-xl text-xl md:text-4xl" 
                variants={textVariants}>
                  Bugema University
                </motion.h2>

                {/* Buttons on big screens */}
                <motion.div className="hidden md:flex items-center justify-start space-x-6 md:space-x-10" 
                variants={textVariants}>

                  {/* Apply now button */}
                  <motion.div 
                    className="flex hover:scale-105 transition-all space-x-2 md:space-x-8 items-center duration-300 flex-row text-center justify-center" 
                    variants={textVariants}>
                    <motion.div 
                      className="bg-black border rounded px-1" 
                      variants={textVariants} 
                      animate="scrollButton">
                      <FaArrowRightLong className="text-white"/>
                    </motion.div>
                    <Link href="/apply" className="flex rounded-md bg-primary dark:bg-primary/60 py-1 px-3 md:py-2 md:px-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80">
                        Apply Now
                        <BiSolidPencil className="text-xl mx-2" />
                    </Link>
                  </motion.div>

                  {/* Learn more button */}
                  <motion.div 
                    className="flex hover:scale-105 transition-all duration-300 flex-col text-center items-center justify-center" 
                    variants={textVariants}>
                    <Link href="/learn-more" className="flex rounded-md bg-black/30 py-1 px-3 md:py-2 md:px-4 text-base font-semibold text-black/90 duration-300 ease-in-out hover:bg-black/30 dark:bg-transparent dark:border dark:text-white">
                        Learn More
                        <BiBookOpen className="text-xl mx-2" />
                    </Link>
                  </motion.div>

                </motion.div>

                {/* Motto on small screens */}
                <motion.h1 className="md:hidden capitalize text-3xl sm:text-4xl font-bold leading-tight text-black/90 dark:text-primary sm:leading-tight md:text-5xl md:leading-tight" 
                variants={textVariants}>
                  Excellence <br/>in service
                </motion.h1>

                {/* Motto on big screens */}
                <motion.h1 className="hidden md:block capitalize text-3xl sm:text-4xl font-bold leading-tight text-black/90 dark:text-primary sm:leading-tight md:text-6xl md:leading-tight" 
                variants={textVariants}>
                  We envision <br/>excellence in service
                </motion.h1>

                {/* Subtitle */}
                <motion.h2 className="capitalize text-black/70 dark:text-white/40 md:text-black/80 text-xl dark:font-bold leading-tight sm:leading-tight md:text-3xl md:leading-tight" 
                variants={textVariants}>
                  Make your <br className="md:hidden"/>dreams come true
                </motion.h2>

                {/* Buttons on small screens */}
                <motion.div className="md:hidden flex flex-col items-center justify-center space-y-4" 
                variants={textVariants}>

                  {/* Apply now button */}
                  <motion.div 
                    className="flex hover:scale-105 transition-all duration-300 space-y-6 flex-col items-center " 
                    variants={textVariants}>
                      <motion.div 
                        className="bg-black border rounded py-1" 
                        variants={textVariants} 
                        animate="scrollButton2">
                        <FaArrowDownLong className="text-white" />
                      </motion.div>
                      <Link href="/apply" className="flex rounded-md bg-primary dark:bg-primary/60 py-2 px-4 md:py-2 md:px-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80">
                          Apply Now
                          <BiSolidPencil className="text-xl mx-2" />
                      </Link>
                  </motion.div>

                  {/* Learn more button */}
                  <motion.div className="flex hover:scale-105 transition-all duration-300 flex-col text-center items-center justify-center" 
                  variants={textVariants}>
                    <Link href="/learn-more"  className="mt-4 flex rounded-md bg-black/30 py-1 px-3 md:py-2 md:px-4 text-lg font-semibold text-black/90 duration-300 ease-in-out hover:bg-black/30 dark:bg-transparent dark:border dark:text-white">
                        Learn More
                        <BiBookOpen className="text-xl mx-2" />
                    </Link>
                  </motion.div>

                </motion.div>

              </motion.div>

              {/* Sliding bg text container on big screens */}
              <motion.div 
                className="hidden md:block slidingTextContainer text-[#0000001f] dark:text-[#ffffff09] w-[220%] font-bold" 
                variants={sliderVariants} 
                initial="initial" 
                animate="animate"
              >
                Bugema University
              </motion.div>

            </div>
          </div>
        </div>

        {/* Background designs */}
        <div className="absolute top-0 right-0 z-[-1] opacity-30 lg:opacity-100">
          <svg
            width="450"
            height="556"
            viewBox="0 0 450 556"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="277"
              cy="63"
              r="225"
              fill="url(#paint0_linear_25:217)"
            />
            <circle
              cx="17.9997"
              cy="182"
              r="18"
              fill="url(#paint1_radial_25:217)"
            />
            <circle
              cx="76.9997"
              cy="288"
              r="34"
              fill="url(#paint2_radial_25:217)"
            />
            <circle
              cx="325.486"
              cy="302.87"
              r="180"
              transform="rotate(-37.6852 325.486 302.87)"
              fill="url(#paint3_linear_25:217)"
            />
            <circle
              opacity="0.8"
              cx="184.521"
              cy="315.521"
              r="132.862"
              transform="rotate(114.874 184.521 315.521)"
              stroke="url(#paint4_linear_25:217)"
            />
            <circle
              opacity="0.8"
              cx="356"
              cy="290"
              r="179.5"
              transform="rotate(-30 356 290)"
              stroke="url(#paint5_linear_25:217)"
            />
            <circle
              opacity="0.8"
              cx="191"
              cy="302"
              r="133.5"
              transform="rotate(113.991 191 302)"
              fill="url(#paint6_linear_25:217)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_25:217"
                x1="-54.5003"
                y1="-178"
                x2="321"
                y2="288"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <radialGradient
                id="paint1_radial_25:217"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(17.9997 182) rotate(90) scale(18)"
              >
                <stop offset="0.145833" stopColor="#4A6CF7" stopOpacity="0.64" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </radialGradient>
              <radialGradient
                id="paint2_radial_25:217"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(76.9997 288) rotate(90) scale(34)"
              >
                <stop offset="0.145833" stopColor="#4A6CF7" stopOpacity="0.64" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </radialGradient>
              <linearGradient
                id="paint3_linear_25:217"
                x1="226.775"
                y1="-66.1546"
                x2="292.157"
                y2="351.421"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_25:217"
                x1="184.521"
                y1="182.159"
                x2="184.521"
                y2="448.882"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint5_linear_25:217"
                x1="356"
                y1="110"
                x2="356"
                y2="470"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint6_linear_25:217"
                x1="191"
                y1="168.5"
                x2="191"
                y2="435.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 z-[-1] opacity-20 lg:opacity-100">
          <svg
            width="364"
            height="201"
            viewBox="0 0 364 201"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.5"
              d="M-123.015 68.999C-142.223 35.223-160.87 -40.401-116.93 -61.592C-73.4968 -82.347 25.6739 -20.3061 38.4864 -8.74515C51.2989 2.81583 77.3888 34.367 86.7204 55.0002C113.675 111.5 85.8159 149 64.4851 158.5C31.9851 173.5 -6.51491 172.5 -36.5149 158.5C-69.0149 142.5 -103.015 118.999 -123.015 68.999Z"
              fill="url(#paint0_linear_25:218)"
            />
            <path
              opacity="0.3"
              d="M-123.015 68.999C-142.223 35.223-160.87 -40.401-116.93 -61.592C-73.4968 -82.347 25.6739 -20.3061 38.4864 -8.74515C51.2989 2.81583 77.3888 34.367 86.7204 55.0002C113.675 111.5 85.8159 149 64.4851 158.5C31.9851 173.5 -6.51491 172.5 -36.5149 158.5C-69.0149 142.5 -103.015 118.999 -123.015 68.999Z"
              fill="url(#paint1_linear_25:218)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_25:218"
                x1="86.7204"
                y1="24.9998"
                x2="-159.108"
                y2="155.849"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_25:218"
                x1="64.4851"
                y1="27.9683"
                x2="-160.27"
                y2="143.982"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>
    </>
  );
};

export default Hero;
