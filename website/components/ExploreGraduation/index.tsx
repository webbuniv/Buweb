"use client";

import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import SectionTitle from "../Common/SectionTitle";
import Modal from "../Helper/Modal";
export const img = "/images/nav/palm-girls1.jpg";

// Define the structure of timeRemaining
interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  milliseconds: number;
}

// Countdown Date for the Graduation Ceremony
const targetDate = new Date("2024-11-10T00:00:00");

const ExploreGraduation = () => {
  const [animate, setAnimate] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    milliseconds: 0,
  });
  const [currentTime, setCurrentTime] = useState(new Date());

  const animated = () => {
    if (window.scrollY >= 1000) {
      setAnimate(true);
    } else {
      setAnimate(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", animated);
    return () => window.removeEventListener("scroll", animated);
  }, []);

  // Update Uganda current time and countdown every 100 milliseconds
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date(new Date().toLocaleString("en-US", { timeZone: "Africa/Kampala" }));
      setCurrentTime(now);

      const distance = targetDate.getTime() - now.getTime();
      if (distance > 0) {
        setTimeRemaining({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
          milliseconds: Math.floor(distance % 1000),
        });
      } else {
        setTimeRemaining({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          milliseconds: 0,
        });
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <section id="features" className="bg-primary/[.03] pt-8 -mt-[100px]">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 ">

            <div
              className={`wow fadeInUp overflow-hidden rounded-md h-[400px] ${animate ? "slider slide--slower" : ""}`}
              data-wow-delay=".15s"
            >
              <iframe
                width="500"
                height="300"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                src="https://www.youtube.com/embed/6HUQdC6WwbA?si=NFVTl_-aO3p2MsPI"
                className="w-full h-full"
              ></iframe>
            </div>

            <div className="flex flex-col ">
              {/* Section title on big screens */}
              <div className={`mb-8 hidden md:flex md:flex-col ${animate ? "slider-right slide--slower" : ""}`}>
                <div className="wow fadeInUp w-full" data-wow-delay=".1s">
                  <h1 className="mb-4 text-3xl font-bold !leading-tight text-black/80 dark:text-white sm:text-4xl md:text-[45px]">
                    The 30th Graduation Ceremony
                  </h1>
                  <p className="text-base !leading-relaxed text-body-color md:text-lg">
                    Congratulations to the 30th graduating class of Bugema University! Today, we celebrate your remarkable journey of hard work, resilience, and dedication. You have overcome challenges, achieved milestones, and have grown into skilled, compassionate individuals ready to make a positive impact on the world. As you step into this new chapter, may you carry forward the values and knowledge you have gained here. We are immensely proud of each of you and excited to see the bright futures you will create. Go forth with confidence, and may your achievements continue to inspire those around you. Congratulations, graduates!
                  </p>
                </div>
              </div>

              {/* Section title on small screens */}
              <div className="mb-8 block md:hidden text-sm">
                <div className="wow fadeInUp w-full" data-wow-delay=".1s">
                  <h1 className="mb-4 text-3xl font-bold !leading-tight text-black/80 dark:text-white sm:text-4xl">
                    The 30th Graduation
                  </h1>
                  <p className="text-base !leading-relaxed text-body-color md:text-lg">
                    Congratulations to the 30th graduating class of Bugema University! Today, we celebrate your remarkable journey of hard work, resilience, and dedication. You have overcome challenges, achieved milestones, and have grown into skilled, compassionate individuals ready to make a positive impact on the world. As you step into this new chapter, may you carry forward the values and knowledge you have gained here. We are immensely proud of each of you and excited to see the bright futures you will create. Go forth with confidence, and may your achievements continue to inspire those around you. Congratulations, graduates!
                  </p>
                </div>
              </div>
            </div>
          </div>

          
           {/* Clock and Timer Section */}
           <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Left Column: Circular Analog Clock */}
            <div className="flex justify-center items-center">
              <div className="relative w-40 h-40 bg-white border-4 border-gray-200 rounded-full flex items-center justify-center shadow-lg">
                {/* Hour Hand */}
                <div
                  className="absolute w-1 h-10 bg-gray-800 origin-bottom rounded-full"
                  style={{ transform: `rotate(${(currentTime.getHours() % 12) * 30 + currentTime.getMinutes() * 0.5}deg)` }}
                ></div>
                {/* Minute Hand */}
                <div
                  className="absolute w-1 h-14 bg-gray-600 origin-bottom rounded-full"
                  style={{ transform: `rotate(${currentTime.getMinutes() * 6}deg)` }}
                ></div>
                {/* Second Hand */}
                <div
                  className="absolute w-[1px] h-16 bg-red-500 origin-bottom"
                  style={{ transform: `rotate(${currentTime.getSeconds() * 6}deg)` }}
                ></div>
                {/* Center Dot */}
                <div className="absolute w-3 h-3 bg-black rounded-full"></div>
              </div>
            </div>

            {/* Right Column: Countdown Timer */}
            <div className="flex flex-col items-center justify-center">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                Graduation Countdown
              </h2>
              <div className="flex space-x-2 text-center">
                <div className="text-4xl font-bold text-red-600 dark:text-red-400">{timeRemaining.days}d</div>
                <div className="text-4xl font-bold text-red-600 dark:text-red-400">{timeRemaining.hours}h</div>
                <div className="text-4xl font-bold text-red-600 dark:text-red-400">{timeRemaining.minutes}m</div>
                <div className="text-4xl font-bold text-red-600 dark:text-red-400">{timeRemaining.seconds}s</div>
                <div className="text-2xl font-bold text-red-600 dark:text-red-400">{timeRemaining.milliseconds}ms</div>
              </div>
              <p className="text-lg text-gray-600 dark:text-gray-300 mt-1">
                Congratulations to all the graduates of Bugema University!
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ExploreGraduation;
