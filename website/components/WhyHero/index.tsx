import Image from 'next/image';
import Link from "next/link";
import { FaArrowDownLong, FaArrowRightLong } from 'react-icons/fa6';
import { BiBookOpen, BiSolidPencil } from 'react-icons/bi';
import { motion } from 'framer-motion';
// import background from '../../public/images/features/int.jpg'

export const bgImage = '/images/features/int.jpg'

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

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      duration: 20,
      repeat: Infinity
    },
  },
};

const WhyHero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden pt-[120px] pb-10 md:pt-[150px] md:pb-[100px] xl:pt-[180px] xl:pb-[160px] 2xl:pt-[210px] 2xl:pb-[200px]"
        style={{backgroundImage: `url(${bgImage})`}}
      >
        <div className="container" >
          <div
            className="-mx-4 flex flex-wrap"
          >
            
            <div className=" w-full px-4">

              {/* Content */}
              <motion.div
                className=" text-center md:text-start wow space-y-4 md:space-y-8 mx-auto max-w-[800px] fadeInUp ml-8"
                data-wow-delay=".2s" 
                variants={textVariants} 
                initial="initial" 
                animate="animate"
              >

                {/* On big screens */}
                <motion.h2 className="head hidden md:block uppercase text-base font-medium !leading-relaxed text-gray-500/90 dark:text-white dark:opacity-90 sm:text-xl md:text-4xl" 
                variants={textVariants}>
                  Why Bugema
                </motion.h2>

                {/* On small screens */}
                <motion.h2 className="head-sm md:hidden uppercase font-medium !leading-relaxed text-gray-500/90 dark:text-white dark:opacity-90 sm:text-xl text-xl md:text-4xl" 
                variants={textVariants}>
                  Why Bugema
                </motion.h2>

                {/* Buttons on big screens */}
                <motion.div className="hidden md:flex items-center justify-start space-x-10" 
                variants={textVariants}>

                  {/* Apply now button */}
                  <motion.div 
                    className="flex hover:scale-105 transition-all space-x-8 items-center duration-300 flex-row text-center justify-center" 
                    variants={textVariants}>
                    <motion.div 
                      className="bg-black border rounded px-1" 
                      variants={textVariants} 
                      animate="scrollButton">
                      <FaArrowRightLong className="text-white"/>
                    </motion.div>
                    <button
                      className="flex rounded-md bg-primary dark:bg-primary/60 py-1 px-3 md:py-2 md:px-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                    >
                    Apply Now
                    <span>
                      <BiSolidPencil className="text-xl mx-2" />
                    </span>
                    </button>
                  </motion.div>

                  {/* Learn more button */}
                  <motion.div 
                    className="flex hover:scale-105 transition-all duration-300 flex-col text-center items-center justify-center" 
                    variants={textVariants}>
                  <motion.button
                    className="flex rounded-md bg-black/30 py-1 px-3 md:py-2 md:px-4 text-base font-semibold text-black/90 duration-300 ease-in-out hover:bg-black/30 dark:bg-transparent dark:border dark:text-white" 
                    variants={textVariants}
                  >
                    Learn More
                    <motion.span>
                      <BiBookOpen className="text-xl mx-2" />
                    </motion.span>
                  </motion.button>
                  </motion.div>

                </motion.div>

                {/* Motto on small screens */}
                <motion.h1 className="motto md:hidden capitalize text-5xl font-bold leading-tight text-black/90 dark:text-primary sm:text-4xl sm:leading-tight md:text-6xl md:leading-tight" 
                variants={textVariants}>
                  Excellence <br/>in service
                </motion.h1>

                {/* Motto on big screens */}
                <motion.h1 className="motto hidden md:block capitalize text-3xl font-bold leading-tight text-black/90 dark:text-primary sm:text-4xl sm:leading-tight md:text-6xl md:leading-tight" 
                variants={textVariants}>
                  We envision <br/>excellence in service
                </motion.h1>

                {/* Subtitle */}
                <motion.h2 className="dream capitalize text-black/70 dark:text-white/40 md:text-black/80 text-2xl dark:font-bold leading-tight dark:text-gray-700 sm:text-xl sm:leading-tight md:text-3xl md:leading-tight" 
                variants={textVariants}>
                  Make your <br className="md:hidden"/>dreams come true
                </motion.h2>

                {/* Buttons on small screens */}
                <motion.div className="md:hidden flex flex-col items-center justify-center " 
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
                    <button
                      className="flex rounded-md bg-primary dark:bg-primary/60 py-2 px-4 md:py-2 md:px-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                    >
                    Apply Now
                    <span>
                      <BiSolidPencil className="text-xl mx-2" />
                    </span>
                    </button>
                  </motion.div>

                  {/* Learn more button */}
                  <motion.div className="flex hover:scale-105 transition-all duration-300 flex-col text-center items-center justify-center" 
                  variants={textVariants}>
                  <motion.button
                    className="mt-9 flex rounded-md bg-black/30 py-1 px-3 md:py-2 md:px-4 text-lg font-semibold text-black/90 duration-300 ease-in-out hover:bg-black/30 dark:bg-transparent dark:border dark:text-white" 
                    variants={textVariants}
                  >
                    Learn More
                    <motion.span>
                      <BiBookOpen className="text-xl mx-2" />
                    </motion.span>
                  </motion.button>
                  </motion.div>

                </motion.div>

              </motion.div>

              {/* Sliding bg text container on big screens*/}
              <motion.div 
                className="hidden md:block slidingTextContainer text-black dark:text-white font-bold opacity-75 dark:opacity-40" 
                variants={sliderVariants} 
                initial="initial" 
                animate="animate"
              >
                Why Bugema.
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
              cx="191.659"
              cy="302.659"
              r="133.362"
              transform="rotate(133.319 191.659 302.659)"
              fill="url(#paint6_linear_25:217)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_25:217"
                x1="-54.5003"
                y1="-178"
                x2="222"
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
                <stop offset="0.145833" stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.08" />
              </radialGradient>
              <radialGradient
                id="paint2_radial_25:217"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(76.9997 288) rotate(90) scale(34)"
              >
                <stop offset="0.145833" stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.08" />
              </radialGradient>
              <linearGradient
                id="paint3_linear_25:217"
                x1="226.775"
                y1="-66.1548"
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
                <stop offset="1" stopColor="white" stopOpacity="0" />
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
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint6_linear_25:217"
                x1="118.524"
                y1="29.2497"
                x2="166.965"
                y2="338.63"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 z-[-1] opacity-30 lg:opacity-100">
          <svg
            width="364"
            height="201"
            viewBox="0 0 364 201"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.88928 72.3303C33.6599 66.4798 101.397 64.9086 150.178 105.427C211.155 156.076 229.59 162.093 264.333 166.607C299.076 171.12 337.718 183.657 362.889 212.24"
              stroke="url(#paint0_linear_25:218)"
            />
            <path
              d="M-22.1107 72.3303C5.65989 66.4798 73.3965 64.9086 122.178 105.427C183.155 156.076 201.59 162.093 236.333 166.607C271.076 171.12 309.718 183.657 334.889 212.24"
              stroke="url(#paint1_linear_25:218)"
            />
            <path
              d="M-53.1107 72.3303C-25.3401 66.4798 42.3965 64.9086 91.1783 105.427C152.155 156.076 170.59 162.093 205.333 166.607C240.076 171.12 278.718 183.657 303.889 212.24"
              stroke="url(#paint2_linear_25:218)"
            />
            <path
              d="M-98.1618 65.0889C-68.1416 60.0601 4.73364 60.4882 56.0734 102.431C120.248 154.86 139.905 161.419 177.137 166.956C214.37 172.493 255.575 186.165 281.856 215.481"
              stroke="url(#paint3_linear_25:218)"
            />
            <circle
              opacity="0.8"
              cx="214.505"
              cy="60.5054"
              r="49.7205"
              transform="rotate(-13.421 214.505 60.5054)"
              stroke="url(#paint4_linear_25:218)"
            />
            <circle cx="220" cy="63" r="43" fill="url(#paint5_radial_25:218)" />
            <defs>
              <linearGradient
                id="paint0_linear_25:218"
                x1="184.389"
                y1="69.2405"
                x2="184.389"
                y2="212.24"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_25:218"
                x1="156.389"
                y1="69.2405"
                x2="156.389"
                y2="212.24"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_25:218"
                x1="125.389"
                y1="69.2405"
                x2="125.389"
                y2="212.24"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_25:218"
                x1="93.8507"
                y1="67.2674"
                x2="89.9278"
                y2="210.214"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_25:218"
                x1="214.505"
                y1="10.2849"
                x2="212.684"
                y2="99.5816"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <radialGradient
                id="paint5_radial_25:218"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(220 63) rotate(90) scale(43)"
              >
                <stop offset="0.145833" stopColor="white" stopOpacity="0" />
                <stop offset="1" stopColor="white" stopOpacity="0.08" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </section>
    </>
  );
};

export default WhyHero;
