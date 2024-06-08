"use client"

import React from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';

import { FreeMode, Pagination, Navigation } from 'swiper/modules';

import { RxArrowLeft, RxArrowRight, RxArrowTopRight } from 'react-icons/rx';
import { ServiceData } from '@/app/constants/news';
import SectionTitle from '../Common/SectionTitle';

export default function NewsCarousel() {

  const swiper = useSwiper();

  return (
    <div className=''>

        {/* Latest News Section title */}
        <SectionTitle
            title="Our Latest News"
            paragraph="Stay up to date with the latest trending news in Bugema University. Check out some of the latest news happening around the various campuses."      
        />

        {/* Carousel on small devices */}
        <div className='md:hidden -mt-44 flex items-center justify-center flex-col h-screen'>
            <Swiper 
                slidesPerView={1}

                freeMode={true}
                pagination={{
                    clickable: true
                }}
                modules={[FreeMode, Pagination]}
                className='max-w-[90%] lg:max-w-[80%]'
            >

                {ServiceData.map((item) => (
                    <SwiperSlide key={item.title} className=''>
                        <div className='flex flex-col gap-6 mx-auto mb-12 group relative shadow-lg text-white rounded-xl px-6 py-8 h-[250px] w-[280px] lg:h-[400px] lg:w-[350px] overflow-hidden cursor-pointer'>
                            <div 
                                className='absolute inset-0 bg-cover bg-center group-hover:scale-125 transition-all duration-700' 
                                style={{backgroundImage: `url(${item.backgroundImage})`}}
                            />
                            <div 
                                className='absolute inset-0 bg-black opacity-40 dark:opacity-50 dark:group-hover:opacity-70 group-hover:opacity-50' 
                            />
                            <div className="relative flex flex-col gap-3">
                                <item.icon className='text-blue-600 group-hover:text-blue-400 w-[32px] h-[32px]' />
                                <h1 className="text-2xl lg:text-3xl">{item.title}</h1>
                                <p className='lg:text-[24px]'>{item.content}</p>
                            </div>
                            <RxArrowTopRight className='absolute bottom-5 left-5 w-[35px] h-[35px] text-white group-hover:text-blue-500 group-hover:rotate-45 duration-100'/>
                        </div>
                    </SwiperSlide>
                ))}

            </Swiper>
            
        </div>

        {/* Carousel on big devices */}
        <div className='hidden md:flex -mt-10 items-center justify-center flex-col h-screen'>
           
            <Swiper 
                breakpoints={{
                    340: {
                        slidesPerView: 2,
                        spaceBetween: 15
                    },
                    700: {
                        slidesPerView: 3,
                        spaceBetween: 15
                    }
                }}

                freeMode={true}
                pagination={{
                    clickable: true
                }} 
                modules={[FreeMode, Pagination]}
                className='max-w-[90%] lg:max-w-[80%]'
            >

                {ServiceData.map((item) => (
                    
                    <SwiperSlide key={item.title} className=''>
                        <div>
                            <Link href={item.cardlink} className='flex flex-col gap-6 mb-14 group relative shadow-lg text-white rounded-xl px-6 py-8 h-[250px] w-[215px] lg:h-[400px] lg:w-[350px] overflow-hidden cursor-pointer'>
                                <div 
                                    className='absolute inset-0 bg-cover bg-center group-hover:scale-125 transition-all duration-700' 
                                    style={{backgroundImage: `url(${item.backgroundImage})`}}
                                />
                                <div 
                                    className='absolute inset-0 bg-black opacity-40 dark:opacity-50 dark:group-hover:opacity-70 group-hover:opacity-50' 
                                />
                                <div className="relative flex flex-col gap-3">
                                    <item.icon className='text-blue-600 group-hover:text-blue-400 w-[32px] h-[32px]' />
                                    <h1 className="text-2xl lg:text-3xl">{item.title}</h1>
                                    <p className='lg:text-[24px]'>{item.content}</p>
                                </div>
                                <RxArrowTopRight className='absolute bottom-5 left-5 w-[35px] h-[35px] text-white group-hover:text-blue-500 group-hover:rotate-45 duration-100'/>
                            </Link>
                        </div>
                        
                    </SwiperSlide>
                    
                ))}
            
            
            </Swiper>
            
        </div>
        
        {/* Swiper nav controllers */}
        <div className='flex justify-center mx-auto -mt-44 md:-mt-16 mb-10 space-x-4'>
            <button onClick={() => swiper.slideNext()} className='dark:bg-primary/50 bg-body-color rounded-full p-[1rem] hover:scale-110 transition-all duration-300'>
                <RxArrowLeft className='font-bold text-white' />
            </button>
            <button onClick={() => swiper.slidePrev()} className='dark:bg-primary/50 bg-body-color rounded-full p-[1rem] hover:scale-110 transition-all duration-300'>
                <RxArrowRight className='font-bold text-white' />
            </button>
        </div>

    </div>

    
    
  )
}
