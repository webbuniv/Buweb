"use client";

import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import SectionTitle from "../Common/SectionTitle";
import Modal from "../Helper/Modal";
export const img = "/images/nav/palm-girls1.jpg";

// Countdown Date for the Graduation Ceremony
const targetDate = new Date("2024-11-10T00:00:00");

const ExploreGraduation = () => {
  const [showModal, setShowModal] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState("");
  const [currentTime, setCurrentTime] = useState("");

  // Show/Hide Modal Handlers
  const showModalHandler = () => setShowModal(true);
  const closeModalHandler = () => setShowModal(false);

  // Animation on scroll
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

  useEffect(() => {
    const intervalId = setInterval(() => {
      const options: Intl.DateTimeFormatOptions = { 
        timeZone: 'UTC', 
        hour: 'numeric', 
        minute: 'numeric', 
        second: 'numeric', 
        hour12: false 
      };

      const time = new Date().toLocaleString('en-US', options);
      setCurrentTime(time);
    }, 1000); // Update every second

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  // Countdown Timer and Clock
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const distance = targetDate.getTime() - now.getTime();

      
      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        setTimeRemaining(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      } else {
        setTimeRemaining("Congratulations to all graduates!");
      }
      
      setCurrentTime(now.toLocaleTimeString('en-US', { timeZone: 'Africa/Kampala' }));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <section id="features" className="bg-primary/[.03] -lg:mt-[200px]">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 ">

            <div
              className={`wow fadeInUp overflow-hidden rounded-md h-[400px] ${animate ? "slider slide--slower" : ""}`}
              data-wow-delay=".15s"
            >
              {/* <iframe
                width="500"
                height="300"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                src="https://www.youtube.com/embed/6HUQdC6WwbA?si=NFVTl_-aO3p2MsPI"
                className="w-full h-full"
              ></iframe> */}
              <iframe width="560" height="315" src="https://www.youtube.com/embed/Xeans-2Hvdg?si=DOmtdqBPBxfGWq8B" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
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
            {/* Left Column: Wall Clock */}
            <div className="flex justify-center items-center">
              <div className="text-center">
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  Current Time
                </h2>
                <p className="text-5xl font-bold text-gray-800 dark:text-gray-100">
                  {currentTime}
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                  {new Date().toLocaleDateString('en-US', { timeZone: 'Africa/Kampala' })}
                </p>
              </div>
            </div>

            {/* Right Column: Countdown Timer */}
            <div className="flex flex-col items-center justify-center">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                Graduation Countdown
              </h2>
              <p className="text-4xl font-bold text-red-600 dark:text-red-400 mb-4">
                {timeRemaining}
              </p>
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
