'use client';
import { useState } from "react";
import Image from "next/image";
import im3 from "../../public/images/features/reg.jpg";
import { motion } from "framer-motion";
// import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import './style.css';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { ServiceData2 } from "@/app/constants/schools";
import { ServiceData3 } from "@/app/constants/schools";
import { ServiceData4 } from "@/app/constants/schools";
import { ServiceData5 } from "@/app/constants/schools";
import { FreeMode, Pagination, Navigation } from "swiper/modules";

import { RxArrowLeft, RxArrowRight, RxArrowTopRight } from "react-icons/rx";
import { fadeIn } from "@/utils/motion";

const AboutSectionOne = () => {
  
  const [swiper, setSwiper] = useState(null);

  const [activeContent, setActiveContent] = useState("image");

  const handleButtonClick = (content) => {
    setActiveContent(content);
  };

  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">

              <div className="flex flex-col md:space-x-4 space-y-2">
                <div className="px-4">
                  <p className="text-base !leading-relaxed text-body-color md:text-lg">
                    Research and innovation
                  </p>
                  <h2 className="mb-4 text-3xl font-bold !leading-tight text-black/80 dark:text-white sm:text-4xl md:text-[45px]">
                    We strive to achieve an inclusive, people-centred culture for our community of researchers
                  </h2>
                </div>
                <div className="grid gap-x-5 gap-y-8 md:grid-cols-1">
                  <div className="relative">
                    <div
                      className="flex items-center md:text-3xl rounded-md py-1 px-3 md:py-2 md:px-4 text-base font-semibold dark:text-white duration-300 ease-in-out hover:bg-primary/80 cursor-pointer"
                      onClick={() => handleButtonClick("Research strengths")}
                    >
                      <h1 className="text-body-color dark:text-white">Research strengths</h1>
                    </div>
                  </div>
                  <div className="relative">
                    <div
                      className="flex items-center md:text-3xl rounded-md py-1 px-3 md:py-2 md:px-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80 cursor-pointer"
                      onClick={() => handleButtonClick("REF2021 results")}
                    >
                      <h1 className="text-body-color dark:text-white">REF2021 results</h1>
                    </div>
                  </div>
                  <div className="relative">
                    <div
                      className="flex items-center md:text-3xl rounded-md py-1 px-3 md:py-2 md:px-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80 cursor-pointer"
                      onClick={() => handleButtonClick("Impact")}
                    >
                      <h1 className="text-body-color dark:text-white">Impact</h1>
                    </div>
                  </div>
                  <div>
                    <div
                      className="flex items-center md:text-3xl rounded-md py-1 px-3 md:py-2 md:px-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80 cursor-pointer"
                      onClick={() => handleButtonClick("Business and partnerships")}
                    >
                      <h1 className="text-body-color dark:text-white">Business and partnerships</h1>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative mt-4">
                {activeContent === "image" && (
                  <div className="relative">
                    <Image
                      className="img1"
                      src={im3}
                      alt="Bugema University"
                      width="600"
                      height="150"
                    />
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                      <div className="text-center animate-y-translation mb-4 text-3xl font-bold !leading-tight text-black/80 dark:text-white sm:text-4xl md:text-[30px]">
                        <h2>Bugema University research</h2>
                      </div>
                    </div>
                  </div>
                )}
                {activeContent === "Research strengths" && (
                  <div className="relative">
                    <div className="-mt-44 flex h-screen flex-col items-center justify-center md:hidden">
                      <Swiper
                        navigation
                        loop={true}
                        slidesPerView={1}
                        freeMode={true}
                        pagination={{ clickable: true }}
                        modules={[FreeMode, Pagination, Navigation]}
                        className="max-w-[90%] lg:max-w-[80%]"
                      >
                        {ServiceData2.map((item, index) => (
                          <SwiperSlide key={item.title} className="">
                            <motion.div
                              variants={fadeIn("right", "spring", index * 0.5, 0.75)}
                              initial="hidden"
                              whileInView="show"
                              exit="hidden"
                            >
                              <a
                                className="group relative mx-auto mb-12 flex h-[250px] w-[280px] cursor-pointer flex-col gap-6 overflow-hidden rounded-xl px-6 py-8 text-white shadow-lg lg:h-[400px] lg:w-[350px]"
                              >
                                <div
                                  className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-125"
                                  style={{ backgroundImage: `url(${item.backgroundImage})` }}
                                />
                                <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-50 dark:opacity-50 dark:group-hover:opacity-70" />
                                <div className="relative flex flex-col gap-2">
                                  <h1 className="text-2xl">{item.title}</h1>
                                  <p className="lg:text-[24px]">{item.content}</p>
                                </div>
                              </a>
                            </motion.div>
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </div>

                    <div className="-mt-10 hidden h-screen flex-col items-center justify-center md:flex">
                      <Swiper
                        loop={true}
                        breakpoints={{
                          340: {
                            slidesPerView: 2,
                            spaceBetween: 15,
                          },
                          700: {
                            slidesPerView: 3,
                            spaceBetween: 15,
                          },
                        }}
                        freeMode={true}
                        pagination={{ clickable: true }}
                        modules={[FreeMode, Pagination]}
                        className="max-w-[90%] lg:max-w-[80%]"
                      >
                        {ServiceData2.map((item, index) => (
                          <SwiperSlide key={item.title} className="">
                            <motion.div
                              variants={fadeIn("right", "spring", index * 0.5, 0.75)}
                              initial="hidden"
                              whileInView="show"
                              exit="hidden"
                            >
                              <a
                                className="group relative mb-14 flex h-[250px] w-[215px] cursor-pointer flex-col gap-6 overflow-hidden rounded-xl px-6 py-8 text-white shadow-lg lg:h-[400px] lg:w-[350px]"
                              >
                                <div
                                  className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-125"
                                  style={{ backgroundImage: `url(${item.backgroundImage})` }}
                                />
                                <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-50 dark:opacity-50 dark:group-hover:opacity-70" />
                                <div className="relative flex flex-col gap-2">
                                  <h1 className="text-2xl lg:text-3xl">{item.title}</h1>
                                  <p className="lg:text-[24px]">{item.content}</p>
                                </div>
                                <button className="bg-transparent border border-white py-2 px-4 rounded-lg transition-all duration-500 transform translate-x-0 hover:bg-white hover:text-black">
                                  Read More
                                  <span className="absolute top-0 left-0 w-full h-full bg-black opacity-0 group-hover:opacity-50"></span>
                                </button>
                              </a>
                            </motion.div>
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </div>
                  </div>
                )}
                  {activeContent === "REF2021 results" && (
                  <div className="relative">
                    <div className="-mt-44 flex h-screen flex-col items-center justify-center md:hidden">
                      <Swiper
                        navigation
                        loop={true}
                        slidesPerView={1}
                        freeMode={true}
                        pagination={{ clickable: true }}
                        modules={[FreeMode, Pagination, Navigation]}
                        className="max-w-[90%] lg:max-w-[80%]"
                      >
                        {ServiceData3.map((item, index) => (
                          <SwiperSlide key={item.title} className="">
                            <motion.div
                              variants={fadeIn("right", "spring", index * 0.5, 0.75)}
                              initial="hidden"
                              whileInView="show"
                              exit="hidden"
                            >
                              <a
                                className="group relative mx-auto mb-12 flex h-[250px] w-[280px] cursor-pointer flex-col gap-6 overflow-hidden rounded-xl px-6 py-8 text-white shadow-lg lg:h-[400px] lg:w-[350px]"
                              >
                                <div
                                  className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-125"
                                  style={{ backgroundImage: `url(${item.backgroundImage})` }}
                                />
                                <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-50 dark:opacity-50 dark:group-hover:opacity-70" />
                                <div className="relative flex flex-col gap-2">
                                  <h1 className="text-2xl">{item.title}</h1>
                                  <p className="lg:text-[24px]">{item.content}</p>
                                </div>
                              </a>
                            </motion.div>
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </div>

                    <div className="-mt-10 hidden h-screen flex-col items-center justify-center md:flex">
                      <Swiper
                        loop={true}
                        breakpoints={{
                          340: {
                            slidesPerView: 2,
                            spaceBetween: 15,
                          },
                          700: {
                            slidesPerView: 3,
                            spaceBetween: 15,
                          },
                        }}
                        freeMode={true}
                        pagination={{ clickable: true }}
                        modules={[FreeMode, Pagination]}
                        className="max-w-[90%] lg:max-w-[80%]"
                      >
                        {ServiceData3.map((item, index) => (
                          <SwiperSlide key={item.title} className="">
                            <motion.div
                              variants={fadeIn("right", "spring", index * 0.5, 0.75)}
                              initial="hidden"
                              whileInView="show"
                              exit="hidden"
                            >
                              <a
                                className="group relative mb-14 flex h-[250px] w-[215px] cursor-pointer flex-col gap-6 overflow-hidden rounded-xl px-6 py-8 text-white shadow-lg lg:h-[400px] lg:w-[350px]"
                              >
                                <div
                                  className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-125"
                                  style={{ backgroundImage: `url(${item.backgroundImage})` }}
                                />
                                <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-50 dark:opacity-50 dark:group-hover:opacity-70" />
                                <div className="relative flex flex-col gap-2">
                                  <h1 className="text-2xl lg:text-3xl">{item.title}</h1>
                                  <p className="lg:text-[24px]">{item.content}</p>
                                </div>
                                <button className="bg-transparent border border-white py-2 px-4 rounded-lg transition-all duration-500 transform translate-x-0 hover:bg-white hover:text-black">
                                  Read More
                                  <span className="absolute top-0 left-0 w-full h-full bg-black opacity-0 group-hover:opacity-50"></span>
                                </button>
                              </a>
                            </motion.div>
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </div>
                  </div>
                )}

                   {activeContent === "Impact" && (
                  <div className="relative">
                    <div className="-mt-44 flex h-screen flex-col items-center justify-center md:hidden">
                      <Swiper
                        navigation
                        loop={true}
                        slidesPerView={1}
                        freeMode={true}
                        pagination={{ clickable: true }}
                        modules={[FreeMode, Pagination, Navigation]}
                        className="max-w-[90%] lg:max-w-[80%]"
                      >
                        {ServiceData4.map((item, index) => (
                          <SwiperSlide key={item.title} className="">
                            <motion.div
                              variants={fadeIn("right", "spring", index * 0.5, 0.75)}
                              initial="hidden"
                              whileInView="show"
                              exit="hidden"
                            >
                              <a
                                className="group relative mx-auto mb-12 flex h-[250px] w-[280px] cursor-pointer flex-col gap-6 overflow-hidden rounded-xl px-6 py-8 text-white shadow-lg lg:h-[400px] lg:w-[350px]"
                              >
                                <div
                                  className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-125"
                                  style={{ backgroundImage: `url(${item.backgroundImage})` }}
                                />
                                <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-50 dark:opacity-50 dark:group-hover:opacity-70" />
                                <div className="relative flex flex-col gap-2">
                                  <h1 className="text-2xl">{item.title}</h1>
                                  <p className="lg:text-[24px]">{item.content}</p>
                                </div>
                              </a>
                            </motion.div>
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </div>

                    <div className="-mt-10 hidden h-screen flex-col items-center justify-center md:flex">
                      <Swiper
                        loop={true}
                        breakpoints={{
                          340: {
                            slidesPerView: 2,
                            spaceBetween: 15,
                          },
                          700: {
                            slidesPerView: 3,
                            spaceBetween: 15,
                          },
                        }}
                        freeMode={true}
                        pagination={{ clickable: true }}
                        modules={[FreeMode, Pagination]}
                        className="max-w-[90%] lg:max-w-[80%]"
                      >
                        {ServiceData4.map((item, index) => (
                          <SwiperSlide key={item.title} className="">
                            <motion.div
                              variants={fadeIn("right", "spring", index * 0.5, 0.75)}
                              initial="hidden"
                              whileInView="show"
                              exit="hidden"
                            >
                              <a
                                className="group relative mb-14 flex h-[250px] w-[215px] cursor-pointer flex-col gap-6 overflow-hidden rounded-xl px-6 py-8 text-white shadow-lg lg:h-[400px] lg:w-[350px]"
                              >
                                <div
                                  className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-125"
                                  style={{ backgroundImage: `url(${item.backgroundImage})` }}
                                />
                                <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-50 dark:opacity-50 dark:group-hover:opacity-70" />
                                <div className="relative flex flex-col gap-2">
                                  <h1 className="text-2xl lg:text-3xl">{item.title}</h1>
                                  <p className="lg:text-[24px]">{item.content}</p>
                                </div>
                                <button className="bg-transparent border border-white py-2 px-4 rounded-lg transition-all duration-500 transform translate-x-0 hover:bg-white hover:text-black">
                                  Read More
                                  <span className="absolute top-0 left-0 w-full h-full bg-black opacity-0 group-hover:opacity-50"></span>
                                </button>
                              </a>
                            </motion.div>
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </div>
                  </div>
                )}

                  {activeContent === "Business and partnerships" && (
                  <div className="relative">
                    <div className="-mt-44 flex h-screen flex-col items-center justify-center md:hidden">
                      <Swiper
                        navigation
                        loop={true}
                        slidesPerView={1}
                        freeMode={true}
                        pagination={{ clickable: true }}
                        modules={[FreeMode, Pagination, Navigation]}
                        className="max-w-[90%] lg:max-w-[80%]"
                      >
                        {ServiceData5.map((item, index) => (
                          <SwiperSlide key={item.title} className="">
                            <motion.div
                              variants={fadeIn("right", "spring", index * 0.5, 0.75)}
                              initial="hidden"
                              whileInView="show"
                              exit="hidden"
                            >
                              <a
                                className="group relative mx-auto mb-12 flex h-[250px] w-[280px] cursor-pointer flex-col gap-6 overflow-hidden rounded-xl px-6 py-8 text-white shadow-lg lg:h-[400px] lg:w-[350px]"
                              >
                                <div
                                  className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-125"
                                  style={{ backgroundImage: `url(${item.backgroundImage})` }}
                                />
                                <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-50 dark:opacity-50 dark:group-hover:opacity-70" />
                                <div className="relative flex flex-col gap-2">
                                  <h1 className="text-2xl">{item.title}</h1>
                                  <p className="lg:text-[24px]">{item.content}</p>
                                </div>
                              </a>
                            </motion.div>
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </div>

                    <div className="-mt-10 hidden h-screen flex-col items-center justify-center md:flex">
                      <Swiper
                        loop={true}
                        breakpoints={{
                          340: {
                            slidesPerView: 2,
                            spaceBetween: 15,
                          },
                          700: {
                            slidesPerView: 3,
                            spaceBetween: 15,
                          },
                        }}
                        freeMode={true}
                        pagination={{ clickable: true }}
                        modules={[FreeMode, Pagination]}
                        className="max-w-[90%] lg:max-w-[80%]"
                      >
                        {ServiceData5.map((item, index) => (
                          <SwiperSlide key={item.title} className="">
                            <motion.div
                              variants={fadeIn("right", "spring", index * 0.5, 0.75)}
                              initial="hidden"
                              whileInView="show"
                              exit="hidden"
                            >
                              <a
                                className="group relative mb-14 flex h-[250px] w-[215px] cursor-pointer flex-col gap-6 overflow-hidden rounded-xl px-6 py-8 text-white shadow-lg lg:h-[400px] lg:w-[350px]"
                              >
                                <div
                                  className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-125"
                                  style={{ backgroundImage: `url(${item.backgroundImage})` }}
                                />
                                <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-50 dark:opacity-50 dark:group-hover:opacity-70" />
                                <div className="relative flex flex-col gap-2">
                                  {/* <item.icon className="h-[32px] w-[32px]" /> */}
                                  <h1 className="text-2xl lg:text-3xl">{item.title}</h1>
                                  <p className="lg:text-[24px]">{item.content}</p>
                                </div>
                                <button className="bg-transparent border border-white py-2 px-4 rounded-lg transition-all duration-500 transform translate-x-0 hover:bg-white hover:text-black">
                                  Read More
                                  <span className="absolute top-0 left-0 w-full h-full bg-black opacity-0 group-hover:opacity-50"></span>
                                </button>
                              </a>
                            </motion.div>
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </div>
                  </div>
                )}


                {activeContent !== "image" && activeContent !== "Research strengths" && (
                  <div className="flex h-[150px] items-center justify-center">
                    <h2 className="text-2xl font-bold">{activeContent}</h2>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutSectionOne;
