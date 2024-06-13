import React, { useEffect, useState, useRef } from 'react';
import { Swiper as SwiperComponent, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Event, News } from '@/types/types';

const EventsAndNews: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [news, setNews] = useState<News[]>([]);

  const eventsProgressCircle = useRef(null);
  const eventsProgressContent = useRef(null);
  const newsProgressCircle = useRef(null);
  const newsProgressContent = useRef(null);

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

  const onAutoplayTimeLeft = (s, time, progress, progressCircle, progressContent) => {
    if (progressCircle.current && progressContent.current) {
      progressCircle.current.style.setProperty('--progress', 1 - progress);
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-4">
      {/* Events Column */}
      <div className="w-full md:w-1/2 relative">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Events</h2>
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
          onAutoplayTimeLeft={(s, time, progress) => onAutoplayTimeLeft(s, time, progress, eventsProgressCircle, eventsProgressContent)}
          className="mySwiper"
        >
          {events.map((event) => (
            <SwiperSlide key={event._id}>
              <div className="bg-indigo-50 rounded-2xl h-96 flex justify-center items-center p-4">
                <div className="text-center">
                  <h3 className="text-2xl font-semibold text-indigo-600">{event.title}</h3>
                  <p className="text-sm text-gray-700 mt-2">{event.description}</p>
                  <p className="text-sm text-gray-500 mt-1">{new Date(event.date).toLocaleDateString()}</p>
                  <p className="text-sm text-gray-500 mt-1">{event.location}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={eventsProgressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={eventsProgressContent}></span>
          </div>
        </SwiperComponent>
      </div>

      {/* News Column */}
      <div className="w-full md:w-1/2 relative">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">News</h2>
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
          onAutoplayTimeLeft={(s, time, progress) => onAutoplayTimeLeft(s, time, progress, newsProgressCircle, newsProgressContent)}
          className="mySwiper"
        >
          {news.map((item) => (
            <SwiperSlide key={item._id}>
              <div className="bg-indigo-50 rounded-2xl h-96 flex justify-center items-center p-4">
                <div className="text-center">
                  <h3 className="text-2xl font-semibold text-indigo-600">{item.title}</h3>
                  <p className="text-sm text-gray-700 mt-2">{item.content}</p>
                  <p className="text-sm text-gray-500 mt-1">{new Date(item.date).toLocaleDateString()}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={newsProgressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={newsProgressContent}></span>
          </div>
        </SwiperComponent>
      </div>
    </div>
  );
};

export default EventsAndNews;
