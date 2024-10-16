import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
import SectionTitle from "../../Common/SectionTitle";
import Link from "next/link";
 

const ClubBelow: React.FC = () => {
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
            ICT Club
          </h2>
          <p className="text-base !leading-relaxed text-body-color md:text-lg">
          The Bugema University ICT Club is a vibrant community of students who share a passion for technology and innovation. The club offers a platform for students to explore various areas of ICT, from software development to cybersecurity, while working on real-world projects and organizing tech events.
          </p>
          <Link href="/clubs/ict">
            <button
              type="button"
              className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Explore More
            </button>
          </Link>
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
            src="/images/club/gdsc.png"
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
            src="/images/club/club.jpeg"
            alt="Bugema University"
            className="w-full h-full object-cover shadow-lg"
          />
        </div>
      </div>
    </div>
      {/* SECOND ROW */}
      {/* <div className="container grid grid-cols-1 lg:grid-cols-3 gap-4 lg:mb-20 lg:mt-10 mt-20">

        <div className="lg:col-span-2 relative overflow-visible">
          <div className="h-96">
            <img
              src="/images/church/choi.jpeg"
              alt="Bugema University"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute -bottom-10 -left-10 w-[60%] h-[50%]">
            <img
              src="/images/church/pr.jpeg"
              alt="Bugema University"
              className="w-full h-full object-cover shadow-lg"
            />
          </div>
        </div>

        <div className="lg:flex lg:justify-end lg:mt-20 mt-20">
          <div
            className="wow fadeInUp w-full mx-auto text-start"
            data-wow-delay=".1s"
          >
            <h2 className="mb-4 text-3xl font-bold !leading-tight text-black/80 dark:text-white sm:text-4xl md:text-[45px]">
            Our Choir
            </h2>
            <p className="text-base !leading-relaxed text-body-color md:text-lg">
            Bugema Universitys choir is a vibrant part of our religious community, offering students the chance to express their faith through music. With a diverse repertoire of traditional hymns, contemporary worship songs, and gospel music, the choir plays a central role in our church services and 
            </p>
            <Link href='/religious/choir'>
            <button
            type="button"
            className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Explore More
            </button>
          </Link>
          </div>
        </div>
      </div> */}
      {/* THIRD ROW */}
      {/* <div className="container grid grid-cols-1 lg:grid-cols-3 gap-4 lg:mb-20 lg:mt-10 mt-20 mb-20">

       
        <div className="lg:flex lg:justify-end lg:mt-20 sm:mb-20">
          <div
            className="wow fadeInUp w-full mx-auto text-start"
            data-wow-delay=".1s"
          >
            <h2 className="mb-4 text-3xl font-bold !leading-tight text-black/80 dark:text-white sm:text-4xl md:text-[45px]">
            Prayers
            </h2>
            <p className="text-base !leading-relaxed text-body-color md:text-lg">
            Bugema University places a strong emphasis on the power of prayer as a cornerstone of spiritual life. The university organizes regular prayer sessions, including morning devotionals, weekly prayer meetings, and special prayer retreats, providing a space for students and faculty to seek guidance, reflect on their faith, and 
            </p>
            <Link href='/religious/prayer'>
            <button
            type="button"
            className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Explore More 
            </button>
          </Link>
          </div>
        </div>

        <div className="lg:col-span-2 relative overflow-visible">
          <div className="h-96">
            <img
              src="/images/church/men.jpeg"
              alt="Bugema University"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute -bottom-10 -right-10 w-[60%] h-[50%]">
            <img
              src="/images/church/chh.jpeg"
              alt="Bugema University"
              className="w-full h-full object-cover shadow-lg"
            />
          </div>
        </div>


      </div> */}
      
    </section>
  );
};

export default ClubBelow;

