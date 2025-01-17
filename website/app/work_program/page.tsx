'use client';
import React from 'react'
import Image from 'next/image'
import { useState, useEffect } from 'react';
import { BookOpenIcon } from '@heroicons/react/solid';
import { GlobeAltIcon } from '@heroicons/react/solid';
import { StarIcon } from '@heroicons/react/solid';
import { EyeIcon } from '@heroicons/react/solid';
import image from "@/public/images/features/bu.jpg";
import sport from "@/public/images/life/sport.jpg";
import Slider from "react-slick";
import { BiChevronDown } from 'react-icons/bi';

const Workp = () => {

      const [animate, setAnimate] = useState(false);
      const [animate1, setAnimate1] = useState(false);
      const [animate2, setAnimate2] = useState(false);

      const animated = () => {
            if (window.scrollY >=100) {
                  setAnimate(true);
            } else {
                  setAnimate(false);
            }
          };
          useEffect(() => {
            window.addEventListener("scroll", animated);
            return () => {
              window.removeEventListener("scroll", animated);
            };
          }, []);
// A N I M A T  E D 1
          const animated1 = () => {
            if (window.scrollY >= 1000) {
                  setAnimate1(true);
            } else {
                  setAnimate1(false);
            }
          };
          useEffect(() => {
            window.addEventListener("scroll", animated1);
            return () => {
              window.removeEventListener("scroll", animated1);
            };
          }, []);

          const animated2 = () => {
            if (window.scrollY >= 2000) {
                  setAnimate2(true);
            } else {
                  setAnimate2(false);
            }
          };
          useEffect(() => {
            window.addEventListener("scroll", animated2);
            return () => {
              window.removeEventListener("scroll", animated2);
            };
          }, []);


  return (
      <div className='flex flex-col md:mt-[90px]'>
            <div className=" overflow-hidden -ml-28 flex flex-col relative min-h-screen" style={{ backgroundImage:`url('/images/workp/DSC_0267.jpg')`,transform:'revert' ,backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center', backgroundBlendMode:'multiply'}}  >
            
                  <div className='flex '>

                        <div className="  md:text-center z-10 md:text-start ml-32 md:ml-0 mt-32 md:mt-52 flex flex-col " >

                              <div className="slider slide--slow fade-in-slowest text-center md:text-left md:ml-28 mt-32 ">

                                          
                                    <h1 className="text-left  text-3xl fade-in md:text-8xl text-pink-400 font-bold ">
                                    <span className='text-white'> Fund </span> 

                                    your  <span className="text-blue-500  fade-in-slowest ">
                                    studies
                                          </span>
                                    </h1>


                              </div>

                              <div className=' slider slide--fast text-left md:text-center ml-3 md:ml-28 mt-10'>
                                    <h1 className=' text-2xl md:text-4xl font-bold text-pink-400'>
                                    through the school&apos;s work programme

                                    <span className='text-left text-blue-500'>
                                    {/* <Typewriter
                                          words={[' Software Engineer {%  %}',' Web Developer < / > and web designer',' Networker'] }
                                          loop={100}
                                          cursor
                                          cursorStyle='_'
                                          typeSpeed={100}
                                          deleteSpeed={100}
                                          delaySpeed={4000}
                                          
                                          />  */}
                                          </span><br/>

                                    </h1>

                                    <h1 className='slider slide--slow md:ml-3 text-left mt-10 text-2xl md:text-4xl font-bold text-white'>
                                          Get to work in the various school&apos;s projects and <br /> earn credit on your students&apos; account ...
                                    </h1>
                              </div>
                              <div className=' flex justify-center items-center mt-10' >
                              <BiChevronDown className='text-6xl md:ml-20 color'  style={{cursor:'pointer'}} />
                              </div>






                        </div>

                        <div className='transform skew-x-12  borderc bg-gradient-to-r from-purple-900 -mr-20 hidden md:block'
                        //  style={{ backgroundImage:`url('/images/features/bu.jpg')` ,backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center', backgroundBlendMode:'multiply,'}}
                        >
                        {/* <Image src={image} alt='code' layout='object-fit' width={700} height={600} className='   backdrop-blur-md -ml-5 mt-52 px-0  transform -skew-x-12 rounded-lg' style={{backgroundBlendMode:'multiply'}}/> */}
                        
                        </div>

                  </div>

                  

                  


      
            </div>


            {/* W O R K   P R O G R A M   H E A D*/}
            <div className='flex'>
                        <div
                              className={` my-24 wow fadeInUp w-full flex flex-col md:flex-row justify-center items-center mx-auto`}
                              data-wow-delay=".1s" >

                              <div className=" flex flex-col ml-[10%] justify-center items-center rounded-lg bg-dark">
                                    <Image src={image} alt="dean" width={400} height={200} className='rounded-lg' />

                                    <h2 className="mb-4 text-3xl font-bold !leading-tight text-black/70 dark:text-white sm:text-4xl md:text-[45px]">
                                          Dean
                                    </h2>
                                    <h1 className="mb-4 text-body-color">HEAD  WORK PROGRAM</h1>
                              </div>

                              <div className="  flex flex-col text-center md:text-start -mt-10 md:w-[90%] md:px-6">
                                    <p className="text-base !leading-relaxed md:text-lg">
                                    
                                    </p>
                              </div>

                              


                        </div>
            </div>



            {/* W O R K   P R O G R A M   O N E  */}
            <div className={`wow mt-20 fadeInUp w-full gap-16 max-w-full justify-center items-center  md:flex md:mb-20 ${animate?"slider-up slide-up-faster":""}`} data-wow-delay=".1s">

                  <div className="-my-10 text-start flex-col ml-[10%] items-center  md:text-start -mt-12 md:w-[90%] md:px-6">
                        <h2 className="mb-4 text-2xl font-bold  !leading-tight text-[#0000FF]/70 dark:text-white sm:text-4xl md:text-[45px]">
                              Empowering Innovative Minds
                        </h2>
                        <p className=" text-base !leading-relaxed text-black md:text-lg ">
                        </p>
                  </div>

                  

                  <div className=" hidden md:block bg-dark flex ml-[4%] mr-[2%]" >
                        <div className="absolute right-1 z-40  mr-34 -mt-8">
                              <Image src={image} alt="dean" layout="intrisic" width={400} height={700} className="mr-5" />
                              
                        </div>

                        <Image src={image} alt="dean" layout="intrisic" width={1000} height={500} className="" />
                        
                  </div>

            </div>



            {/* W O R K   P R O G R A M   T W O */}

            <div className={`wow mt-20 md:mb-32 fadeInUp w-full gap-16 max-w-full justify-center items-center  md:flex ${animate1?"slider-up slide-up-faster":""} ` } data-wow-delay=".1s">

                  <div className=" hidden md:block bg-dark flex ml-[4%] mr-[2%]" >

                        <Image src={image} alt="dean" layout="intrisic" width={1000} height={500} className="" />
                        
                  </div>

                  <div className="-my-10 text-start flex-col ml-[10%] items-center  md:text-start -mt-12 md:w-[90%] md:px-6">
                        <h2 className="mb-4 text-2xl font-bold  !leading-tight text-[#0000FF]/70 dark:text-white sm:text-4xl md:text-[45px]">
                              
                        </h2>
                        <p className=" text-base !leading-relaxed text-black md:text-lg ">
                       
                       </p>
                  </div>

            </div>


            {/* W O R K   P R O G R A M   T H R E E  */}
      </div>

  )
}

export default Workp;