"use client";

import Image from "next/image";
// import { HiAcademicCap } from "react-icons/hi";
// import { FaScroll } from "react-icons/fa6";
// import { FaMoneyCheckDollar } from "react-icons/fa6";
// import { IoCameraSharp } from "react-icons/io5";
// import {IoClipboardOutline} from "react-icons/io5";
// import {FaWpforms} from "react-icons/fa";
// import {IoBookOutline} from "react-icons/io5";
import { useState,useEffect } from "react";
import Link from "next/link";


const AgricBelowHero = () => {

      const [animate, setAnimate] = useState(false);

      const animated = () => {
            if (window.scrollY >= 1) {
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

  return (
    <section className="top-0 bg-gray-100">
            <div className="container  -my-4">
                  <div className="container mx-auto">
                        <div className="flex flex-wrap items-center justify-center al -mx-6 gap-2 lg:gap-6">
                              <div className={`w-full px-4 lg:w-1/2 xl:w-1/6 transition-transform duration-300 lg:hover:scale-105 cursor-pointer rounded bg-gray-300 ${animate ?"slider-up slide-up-faster":"" }`}>
                                    <div className="wow fadeInUp relative mx-auto mb-6 aspect-[25/24] lg:m-0 flex flex-col justify-center items-center text-center" data-wow-delay=".15s ">

                                          {/* <FaWpforms className="w-10 h-8  text-black dark:text-white items-center"/> */}

                                          <h3 className="mb-2 mt-3 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
                                          8+
                                          </h3>
                                          <p className="mb-4 text-base text-black ">
                                          African Cities
                                          </p>
                                          {/* <Link href="https://apply.bugemauniv.ac.ug/">
                                                <button className="px-6 py-2 text-white bg-[#e72725] rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                                                      Apply Now
                                                </button>
                                          </Link> */}
                                    </div>
                              </div>
                              <div className={`w-full px-4 lg:w-1/2 xl:w-1/6 transition-transform duration-300 lg:hover:scale-105 cursor-pointer rounded bg-gray-300 ${animate ?"slider-up slide-up-faster":"" }`}>
                                    <div className="wow fadeInUp relative mx-auto mb-6 aspect-[25/24] lg:m-0 flex flex-col justify-center items-center text-center" data-wow-delay=".15s ">

                                          {/* <FaWpforms className="w-10 h-8  text-black dark:text-white items-center"/> */}

                                          <h3 className="mb-2 mt-3 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
                                          1500+
                                          </h3>
                                          <p className="mb-4 text-base text-black ">
                                          Community Champions
                                          </p>
                                          {/* <Link href="https://apply.bugemauniv.ac.ug/">
                                                <button className="px-6 py-2 text-white bg-[#e72725] rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                                                      Apply Now
                                                </button>
                                          </Link> */}
                                    </div>
                              </div>
                              <div className={`w-full px-4 lg:w-1/2 xl:w-1/6 transition-transform duration-300 lg:hover:scale-105 cursor-pointer rounded bg-gray-300 ${animate ?"slider-up slide-up-fast":"" } `}>
                                    <div className="wow fadeInUp relative mx-auto mb-6 aspect-[25/24] lg:m-0 flex flex-col justify-center items-center text-center" data-wow-delay=".15s">
                                          {/* <FaMoneyCheckDollar className="w-10 h-8 text-black dark:text-white items-center"/> */}
                                          <h3 className="mb-2 mt-3 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
                                                67+
                                          </h3>
                                          <p className="mb-4 text-base text-black">
                                          Data Records
                                          </p>
                                    
                                          {/* <Link href="/finances.pdf" target="_blank" rel="noopener noreferrer">
                                                <button className="px-6 py-2 text-white bg-[#234297] rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                                                      Explore
                                                </button>
                                          </Link> */}
                                    </div>
                              </div>
                              <div className={`w-full px-4 lg:w-1/2 xl:w-1/6 transition-transform duration-300 lg:hover:scale-105 cursor-pointer rounded bg-gray-300 ${animate ?"slider-up slide-up-slow":"" }`}>
                                    <div className="wow fadeInUp relative mx-auto mb-6 aspect-[25/24] lg:m-0 flex flex-col justify-center items-center text-center" data-wow-delay=".15s">
                                          {/* <IoBookOutline className="w-10 h-8 text-black dark:text-white items-center"/> */}
                                          <h3 className="mb-2 mt-3 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
                                          10+
                                          </h3>
                                          <p className="mb-4 text-base text-black dark:text-gray-300">
                                          Research Papers
                                          </p>
                                          {/* <Link href="https://erms.bugemauniv.ac.ug/student/">
                                                <button className="px-6 py-2 text-white bg-[#e72725] rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                                                      Login
                                                </button>
                                          </Link> */}
                                          
                                    </div>
                              </div>
                              <div className={`w-full px-4 lg:w-1/2 xl:w-1/6 transition-transform duration-300 lg:hover:scale-105 cursor-pointer rounded bg-gray-300 ${animate ?"slider-up slide-up-slower":"" } `}>
                                    <div className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] lg:m-0 flex flex-col justify-center items-center text-center" data-wow-delay=".15s">
                                          {/* <FaScroll className="w-10 h-8 text-black dark:text-white "/> */}
                                          <h3 className="mb-2 mt-3 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
                                          300+
                                          </h3>
                                          <p className="mb-2 text-base text-black ">
                                          Partners
                                          </p>
                                          {/* <Link href="https://unche.or.ug/institution/bugema-university/">
                                                <button className="px-6 py-2 mt-2 text-white bg-[#234297] rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                                                      Learn More
                                                </button>
                                          </Link> */}
                                          
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
    </section>
  );
};

export default AgricBelowHero;
