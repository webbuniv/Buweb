import React from "react";
import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import Link from "next/link";

 

const AgricultureBelow: React.FC = () => {
  return (
    <section className="px-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:mb-20 lg:mt-10 mt-10">

        {/* Left-hand side (section title) */}
        <div className="lg:flex lg:justify-end lg:mt-20 ">
          <div
            className="wow fadeInUp w-full mx-auto text-start"
            data-wow-delay=".1s"
          >
            <h2 className="mb-4 text-3xl font-bold !leading-tight text-black/80 dark:text-white sm:text-4xl md:text-[45px]">
            Optimize Spray Timing
            </h2>
            <p className="text-base !leading-relaxed text-body-color md:text-lg">
            The most effective way to manage plant disease is by prevention. Know exactly where, what and when to spray, even down to the best time of day. Save costs on chemicals and spraying while you maximize protection.
            </p>
            <Link href='/agriprogram'>
              <button
              type="button"
              className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Explore More
                {/* <img src="/images/user.svg" alt="icon" className="inline-block w-4 h-4 ml-2" /> */}
              </button>
            </Link>
          </div>
          
        </div>

        {/* Right-hand side (news articles) */}
        <div className="lg:col-span-2 relative overflow-visible">
          {/* First image (covers the entire column) */}
          <div className="h-96">
            <img
              src="/images/agric/home.jpg"
              alt="Bugema University"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Second image (allowed to move outside the boundaries of the first image) */}
          <div className="absolute -bottom-10 -right-10 w-[60%] h-[50%]">
            <img
              src="/images/agric/hom.jpg"
              alt="Bugema University"
              className="w-full h-full object-cover shadow-lg"
            />
          </div>
        </div>


      </div>
      {/* SECOND ROW */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:mb-20 lg:mt-10 mt-20">

        {/* Right-hand side (news articles) */}
        <div className="lg:col-span-2 relative overflow-visible">
          {/* First image (covers the entire column) */}
          <div className="h-96">
            <img
              src="/images/agric/ho.jpg"
              alt="Bugema University"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Second image (allowed to move outside the boundaries of the first image) */}
          <div className="absolute -bottom-10 -left-10 w-[60%] h-[50%]">
            <img
              src="/images/agric/car.jpg"
              alt="Bugema University"
              className="w-full h-full object-cover shadow-lg"
            />
          </div>
        </div>

        {/* RIGHT-hand side (section title) */}
        <div className="lg:flex lg:justify-end lg:mt-20 mt-20">
          <div
            className="wow fadeInUp w-full mx-auto text-start"
            data-wow-delay=".1s"
          >
            <h2 className="mb-4 text-3xl font-bold !leading-tight text-black/80 dark:text-white sm:text-4xl md:text-[45px]">
            Reduce Chemical Use
            </h2>
            <p className="text-base !leading-relaxed text-body-color md:text-lg">
            The system calculates a dynamic, daily infection risk that takes into account conditions for fungal growth, plant growth, crop type, and previous crop protection applications. The system also recommends the day and time to minimize environmental loss.
            </p>
            <Link href='/agriprogramtwo'>
            <button
            type="button"
            className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Explore More
              {/* <img src="/images/user.svg" alt="icon" className="inline-block w-4 h-4 ml-2" /> */}
            </button>
          </Link>
          </div>
        </div>
      </div>
      {/* THIRD ROW */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:mb-20 lg:mt-10 mt-20 mb-20">

        {/* Left-hand side (section title) */}
        <div className="lg:flex lg:justify-end lg:mt-20 sm:mb-20">
          <div
            className="wow fadeInUp w-full mx-auto text-start"
            data-wow-delay=".1s"
          >
            <h2 className="mb-4 text-3xl font-bold !leading-tight text-black/80 dark:text-white sm:text-4xl md:text-[45px]">
            Optimize Spray Timing
            </h2>
            <p className="text-base !leading-relaxed text-body-color md:text-lg">
            The most effective way to manage plant disease is by prevention. Know exactly where, what and when to spray, even down to the best time of day. Save costs on chemicals and spraying while you maximize protection.
            </p>
            <Link href='/agripro'>
            <button
            type="button"
            className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Explore More About Our Crops
              {/* <img src="/images/user.svg" alt="icon" className="inline-block w-4 h-4 ml-2" /> */}
            </button>
          </Link>
          </div>
        </div>

        {/* Right-hand side (news articles) */}
        <div className="lg:col-span-2 relative overflow-visible">
          {/* First image (covers the entire column) */}
          <div className="h-96">
            <img
              src="/images/agric/croro.jpeg"
              alt="Bugema University"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Second image (allowed to move outside the boundaries of the first image) */}
          <div className="absolute -bottom-10 -right-10 w-[60%] h-[50%]">
            <img
              src="/images/agric/crppo.jpeg"
              alt="Bugema University"
              className="w-full h-full object-cover shadow-lg"
            />
          </div>
        </div>


      </div>
    </section>
  );
};

export default AgricultureBelow;

