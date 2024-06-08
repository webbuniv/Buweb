"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination, Navigation } from "swiper/modules";

import { RxArrowLeft, RxArrowRight, RxArrowTopRight } from "react-icons/rx";
import { ServiceData } from "@/app/constants/news";
import SectionTitle from "../Common/SectionTitle";

import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";

export default function NewsCarousel() {
  const [swiper, setSwiper] = useState(null);

  return (
    <div>
      {/* Latest News Section title */}
      <SectionTitle
        title="Our Latest News"
        paragraph="Stay up to date with the latest trending news in Bugema University. Check out some of the latest news happening around the various campuses."
      />

      {/* Carousel on small devices */}
      <div className="-mt-44 flex h-screen flex-col items-center justify-center md:hidden">
        <Swiper 
            navigation
          onSwiper={setSwiper}
          loop={true}
          slidesPerView={1}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination, Navigation]}
          className="max-w-[90%] lg:max-w-[80%]"
        >
          {ServiceData.map((item, index) => (
            <SwiperSlide key={item.title} className="">
              <motion.div
                variants={fadeIn("right", "spring", index * 0.5, 0.75)}
                initial="hidden"
                whileInView="show"
                exit="hidden"
              >
                <Link
                  href={item.cardlink}
                  className="group relative mx-auto mb-12 flex h-[250px] w-[280px] cursor-pointer flex-col gap-6 overflow-hidden rounded-xl px-6 py-8 text-white shadow-lg lg:h-[400px] lg:w-[350px]"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-125"
                    style={{ backgroundImage: `url(${item.backgroundImage})` }}
                  />
                  <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-50 dark:opacity-50 dark:group-hover:opacity-70" />
                  <div className="relative flex flex-col gap-3">
                    <item.icon className="text-blue-600 group-hover:text-blue-400 h-[32px] w-[32px]" />
                    <h1 className="text-2xl">{item.title}</h1>
                    <p className="lg:text-[24px]">{item.content}</p>
                  </div>
                </Link>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Carousel on big devices */}
      <div className="-mt-10 hidden h-screen flex-col items-center justify-center md:flex">
        <Swiper
          onSwiper={setSwiper}
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
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="max-w-[90%] lg:max-w-[80%]"
        >
          {ServiceData.map((item, index) => (
            <SwiperSlide key={item.title} className="">
              <motion.div
                variants={fadeIn("right", "spring", index * 0.5, 0.75)}
                initial="hidden"
                whileInView="show"
                exit="hidden"
              >
                <Link
                  href={item.cardlink}
                  className="group relative mb-14 flex h-[250px] w-[215px] cursor-pointer flex-col gap-6 overflow-hidden rounded-xl px-6 py-8 text-white shadow-lg lg:h-[400px] lg:w-[350px]"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-125"
                    style={{ backgroundImage: `url(${item.backgroundImage})` }}
                  />
                  <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-50 dark:opacity-50 dark:group-hover:opacity-70" />
                  <div className="relative flex flex-col gap-3">
                    <item.icon className="text-blue-600 group-hover:text-blue-400 h-[32px] w-[32px]" />
                    <h1 className="text-2xl lg:text-3xl">{item.title}</h1>
                    <p className="lg:text-[24px]">{item.content}</p>
                  </div>
                  <RxArrowTopRight className="group-hover:text-blue-500 absolute bottom-5 left-5 h-[35px] w-[35px] text-white duration-100 group-hover:rotate-45" />
                </Link>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Swiper nav controllers on big screens */}
      <div className="mx-auto -mt-44 mb-10 hidden md:flex justify-center space-x-4 md:-mt-16">
        <button
          onClick={() => swiper.slidePrev()}
          className="rounded-full bg-body-color p-[1rem] transition-all duration-300 hover:scale-110 dark:bg-primary/50"
        >
          <RxArrowLeft className="font-bold text-white" />
        </button>
        <button
          onClick={() => swiper.slideNext()}
          className="rounded-full bg-body-color p-[1rem] transition-all duration-300 hover:scale-110 dark:bg-primary/50"
        >
          <RxArrowRight className="font-bold text-white" />
        </button>
      </div>

    </div>
  );
}
