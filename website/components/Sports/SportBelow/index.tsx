import React from "react";
import Image from "next/image";
import SectionTitle from "../../Common/SectionTitle";
import Link from "next/link";

 

const SportsBelow: React.FC = () => {
  return (
    <section className="px-8">
      <div className="container grid grid-cols-1 lg:grid-cols-3 gap-4 lg:mb-20 lg:mt-10 mt-10">

        {/* Left-hand side (section title) */}
        <div className="lg:flex lg:justify-end lg:mt-20 ">
          <div
            className="wow fadeInUp w-full mx-auto text-start"
            data-wow-delay=".1s"
          >
            <h2 className="mb-4 text-3xl font-bold !leading-tight text-black/80 dark:text-white sm:text-4xl md:text-[45px]">
            Football
            </h2>
            <p className="text-base !leading-relaxed text-body-color md:text-lg">
            The most effective way to manage plant disease is by prevention. Know exactly where, what and when to spray, even down to the best time of day. Save costs on chemicals and spraying while you maximize protection.
            </p>
            <Link href='/sports/football'>
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
              src="/images/life/football/footb.jpg"
              alt="Bugema University"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Second image (allowed to move outside the boundaries of the first image) */}
          <div className="absolute -bottom-10 -right-10 w-[60%] h-[50%]">
            <img
              src="/images/life/football/foote.jpg"
              alt="Bugema University"
              className="w-full h-full object-cover shadow-lg"
            />
          </div>
        </div>


      </div>
      {/* SECOND ROW */}
      <div className="container grid grid-cols-1 lg:grid-cols-3 gap-4 lg:mb-20 lg:mt-10 mt-20">

        {/* Right-hand side (news articles) */}
        <div className="lg:col-span-2 relative overflow-visible">
          {/* First image (covers the entire column) */}
          <div className="h-96">
            <img
              src="/images/life/basketball/baskf.jpg"
              alt="Bugema University"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Second image (allowed to move outside the boundaries of the first image) */}
          <div className="absolute -bottom-10 -left-10 w-[60%] h-[50%]">
            <img
              src="/images/life/basketball/baskd.jpg"
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
            BasketBall
            </h2>
            <p className="text-base !leading-relaxed text-body-color md:text-lg">
            The system calculates a dynamic, daily infection risk that takes into account conditions for fungal growth, plant growth, crop type, and previous crop protection applications. The system also recommends the day and time to minimize environmental loss.
            </p>
            <Link href='/sports/basketball'>
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
      <div className="container grid grid-cols-1 lg:grid-cols-3 gap-4 lg:mb-20 lg:mt-10 mt-20 mb-20">

        {/* Left-hand side (section title) */}
        <div className="lg:flex lg:justify-end lg:mt-20 sm:mb-20">
          <div
            className="wow fadeInUp w-full mx-auto text-start"
            data-wow-delay=".1s"
          >
            <h2 className="mb-4 text-3xl font-bold !leading-tight text-black/80 dark:text-white sm:text-4xl md:text-[45px]">
            NetBall
            </h2>
            <p className="text-base !leading-relaxed text-body-color md:text-lg">
            The most effective way to manage plant disease is by prevention. Know exactly where, what and when to spray, even down to the best time of day. Save costs on chemicals and spraying while you maximize protection.
            </p>
            <Link href='/sports/netball'>
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
              src="/images/life/netball/neta.jpeg"
              alt="Bugema University"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Second image (allowed to move outside the boundaries of the first image) */}
          <div className="absolute -bottom-10 -right-10 w-[60%] h-[50%]">
            <img
              src="/images/life/netball/netc.jpeg"
              alt="Bugema University"
              className="w-full h-full object-cover shadow-lg"
            />
          </div>
        </div>


      </div>
      {/* FOURTH ROW */}
      <div className="container grid grid-cols-1 lg:grid-cols-3 gap-4 lg:mb-20 lg:mt-10 mt-20">
        {/* Right-hand side (news articles) */}
        <div className="lg:col-span-2 relative overflow-visible">
          {/* First image (covers the entire column) */}
          <div className="h-96">
            <img
              src="/images/life/basketball/baskf.jpg"
              alt="Bugema University"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Second image (allowed to move outside the boundaries of the first image) */}
          <div className="absolute -bottom-10 -left-10 w-[60%] h-[50%]">
            <img
              src="/images/life/basketball/baskf.jpg"
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
            TableTenis
            </h2>
            <p className="text-base !leading-relaxed text-body-color md:text-lg">
            The system calculates a dynamic, daily infection risk that takes into account conditions for fungal growth, plant growth, crop type, and previous crop protection applications. The system also recommends the day and time to minimize environmental loss.
            </p>
            <Link href='/sports/tabletenis'>
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
      {/* FIFTH ROW */}
      <div className="container grid grid-cols-1 lg:grid-cols-3 gap-4 lg:mb-20 lg:mt-10 mt-20 mb-20">

        {/* Left-hand side (section title) */}
        <div className="lg:flex lg:justify-end lg:mt-20 sm:mb-20">
          <div
            className="wow fadeInUp w-full mx-auto text-start"
            data-wow-delay=".1s"
          >
            <h2 className="mb-4 text-3xl font-bold !leading-tight text-black/80 dark:text-white sm:text-4xl md:text-[45px]">
            Volleyball
            </h2>
            <p className="text-base !leading-relaxed text-body-color md:text-lg">
            The most effective way to manage plant disease is by prevention. Know exactly where, what and when to spray, even down to the best time of day. Save costs on chemicals and spraying while you maximize protection.
            </p>
            <Link href='/sports/volleyball'>
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
              src="/images/life/basketball/baskf.jpg"
              alt="Bugema University"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Second image (allowed to move outside the boundaries of the first image) */}
          <div className="absolute -bottom-10 -right-10 w-[60%] h-[50%]">
            <img
              src="/images/life/basketball/baskf.jpg"
              alt="Bugema University"
              className="w-full h-full object-cover shadow-lg"
            />
          </div>
        </div>


      </div>
      {/* SIXTH ROW */}
      <div className="container grid grid-cols-1 lg:grid-cols-3 gap-4 lg:mb-20 lg:mt-10 mt-20">

        {/* Right-hand side (news articles) */}
        <div className="lg:col-span-2 relative overflow-visible">
          {/* First image (covers the entire column) */}
          <div className="h-96">
            <img
              src="/images/life/Woodball/wooda.jpg"
              alt="Bugema University"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Second image (allowed to move outside the boundaries of the first image) */}
          <div className="absolute -bottom-10 -left-10 w-[60%] h-[50%]">
            <img
              src="/images/life/Woodball/woode.jpg"
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
            Woodball
            </h2>
            <p className="text-base !leading-relaxed text-body-color md:text-lg">
            The system calculates a dynamic, daily infection risk that takes into account conditions for fungal growth, plant growth, crop type, and previous crop protection applications. The system also recommends the day and time to minimize environmental loss.
            </p>
            <Link href='/sports/woodball'>
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
    </section>
  );
};

export default SportsBelow;

