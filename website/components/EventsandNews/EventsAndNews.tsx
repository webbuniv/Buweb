import React, { useEffect, useState } from 'react';
import { Swiper as SwiperComponent, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Event, News } from '@/types/types';
import Image from 'next/image';
import SectionTitle from '../Common/SectionTitle'
import Link from 'next/link';
const EventsAndNews: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [news, setNews] = useState<News[]>([]);

  const fetchEvents = async () => {
    try {
      const response = await fetch('https://buweb.onrender.com/events');
      const data = await response.json();
      setEvents(data);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  const fetchNews = async () => {
    try {
      const response = await fetch('https://buweb.onrender.com/news');
      const data = await response.json();
      setNews(data);
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };

  useEffect(() => {
    fetchEvents();
    fetchNews();
  }, []);

  const slideStyle = " flex flex-col rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark  md:max-w-xl md:flex-row h-[200px]";
  const imgStyle = "h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:!rounded-none md:!rounded-s-lg";
  const contentStyle = "flex flex-col justify-center p-6";
  const titleStyle = "mb-2 text-xl font-medium dark:text-black";
  const textStyle = "mb-4 text-base dark:text-black";
  const dateStyle = "text-xs text-surface/75 dark:text-neutral-300 dark:text-black";

  return (
    <section id='eventsnadnews' className='mt-10'>
        <SectionTitle
          title="Events And News"
          paragraph="You'll find a wealth of 
        knowledge and insights on various topics related to academia, student life, research, and more."
          center
        />
        <div className="flex flex-col md:flex-row gap-4 container mt-10">

            {/* Events Column */}
            <div className="w-full h-[300px] md:w-1/2 relative">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 dark:text-white">Upcoming Events</h2>
            <SwiperComponent
                spaceBetween={30}
                centeredSlides
                autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                }}
                pagination={{
                clickable: true,
                renderBullet: (index, className) => `<span class="${className} bg-gray-300 w-4 h-[280] rounded-full inline-block mx-1"></span>`,
                }}
                navigation
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {events.map((event) => (

                  
                    <SwiperSlide key={event._id}>
                    <div className={slideStyle}>
                    
                    <Image
                        className={imgStyle}
                        src={event.coverPhotoUrl}
                        alt={event.title}
                        width={200}
                        height={200}
                    />
                    <div className={contentStyle}>
                      <Link href={`/events/${event._id}`}>
                        <h3 className={titleStyle}>{event.title}</h3>
                        <p className={textStyle}>{event.description}</p>
                        <p className={dateStyle}>{new Date(event.date).toLocaleDateString()}</p>
                        <p className={dateStyle}>{event.location}</p>
                      </Link>
                    </div>
                    </div>
                </SwiperSlide>
                ))}
            </SwiperComponent>
            </div>

            {/* News Column */}
            <div className="w-full md:w-1/2 relative">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 dark:text-white">Happening Around Campus</h2>
            <SwiperComponent
                spaceBetween={30}
                centeredSlides
                autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                }}
                pagination={{
                clickable: true,
                renderBullet: (index, className) => `<span class="${className} bg-gray-300 w-4 h-4 rounded-full inline-block mx-1"></span>`,
                }}
                navigation
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {news.map((item) => (
                <SwiperSlide key={item._id}>
                    <div className={slideStyle}>
                    <Image
                        className={imgStyle}
                        src={item.photo}
                        alt={item.title}
                        width={200}
                        height={200}
                    />
                    <div className={contentStyle}>
                      <Link href={`/news/${item._id}`}>
                        <h3 className={titleStyle}>{item.title}</h3>
                        <p className={textStyle}>{item.content}</p>
                        <p className={dateStyle}>{new Date(item.date).toLocaleDateString()}</p>
                        </Link>
                    </div>
                    </div>
                </SwiperSlide>
                ))}
            </SwiperComponent>
            </div>
            </div>
    </section>
  );
};

export default EventsAndNews;
