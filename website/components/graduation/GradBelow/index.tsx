import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
import SectionTitle from "../../Common/SectionTitle";
import Link from "next/link";
 

const GradBelow: React.FC = () => {
  const [isSwapped, setIsSwapped] = useState(false);

  useEffect(() => {
    // Swap images every 5 seconds
    const interval = setInterval(() => {
      setIsSwapped((prev) => !prev);
    }, 4000); // Change time interval as needed (5000ms = 5s)

    // Clear the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="px-8">
      <div className="container grid grid-cols-1 lg:grid-cols-3 gap-4 lg:mb-20 lg:mt-10 mt-10">
      {/* Left-hand side (section title) */}
      <div className="lg:flex lg:justify-end lg:mt-20">
        <div
          className="wow fadeInUp w-full mx-auto text-start"
          data-wow-delay=".1s"
        >
          <h2 className="mb-4 text-3xl font-bold !leading-tight text-black/80 dark:text-white sm:text-4xl md:text-[45px]">
            Programs
          </h2>
          <p className="text-base !leading-relaxed text-body-color md:text-lg">
          The Bugema University.
          </p>
          {/* <Link href="/clubs/ict">
            <button
              type="button"
              className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Explore More
            </button>
          </Link> */}
        </div>
      </div>

      {/* Right-hand side (news articles) */}
      <div className="lg:col-span-2 relative overflow-visible">
        {/* First image (covers the entire column) */}
        <div
          className={`h-96 transition-all duration-1000 ${
            isSwapped ? "animate-shrink-out" : "animate-grow-in"
          }`}
        >
          <img
            src="/images/graduation/three.jpeg"
            alt="Bugema University"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Second image (allowed to move outside the boundaries of the first image) */}
        <div
          className={`absolute -bottom-10 -right-10 w-[90%] h-[80%] transition-all duration-1000 ${
            isSwapped ? "animate-grow-in" : "animate-shrink-out"
          }`}
        >
          <img
            src="/images/graduation/two.jpeg"
            alt="Bugema University"
            className="w-full h-full object-cover shadow-lg"
          />
        </div>
      </div>
    </div>
      
    </section>
  );
};

export default GradBelow;

