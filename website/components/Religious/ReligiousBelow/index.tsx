import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
import SectionTitle from "../../Common/SectionTitle";
import Link from "next/link";
 

const ReligiousBelow: React.FC = () => {
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
            Football
          </h2>
          <p className="text-base !leading-relaxed text-body-color md:text-lg">
            Football at Bugema University is more than just a sport; it’s a
            tradition that brings together students, staff, and the community.
            Our teams have consistently performed at top levels in both national
            and regional competitions. With state-of-the-art facilities and
            experienced coaches, we foster talent and teamwork on and off the
            field. Football here promotes physical fitness, leadership, and a
            sense of unity among players and fans alike.
          </p>
          <Link href="/sports/football">
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
            src="/images/life/football/footb.jpg"
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
            Basketball at Bugema University offers students a chance to develop their skills in a highly competitive environment. Our basketball team is known for its agility, teamwork, and consistent performance in inter-university tournaments. With a focus on both mental and physical development, we provide the facilities and coaching necessary to excel on the court while promoting discipline and sportsmanship.
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
            Bugema Universitys Netball team showcases strong leadership, teamwork, and strategic play. Our team participates in various regional and national competitions, continually striving for excellence. With dedicated training sessions, modern facilities, and experienced coaching staff, our players are equipped to excel both on and off the court.
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
            Bugema University provides an excellent platform for Table Tennis enthusiasts to refine their skills. With state-of-the-art facilities and regular tournaments, our players have the opportunity to compete at the highest level. The focus is on both physical and mental agility, fostering a spirit of sportsmanship and excellence.
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
            Volleyball at Bugema University is more than just a sport—it’s a community. Our teams engage in regular training and competitive matches, fostering teamwork, resilience, and excellence. With modern facilities and dedicated coaches, students have the opportunity to excel both on and off the court.
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
            Woodball is a unique sport at Bugema University, offering students the chance to develop precision, focus, and strategy. Our dedicated facilities and experienced coaches ensure that both beginners and seasoned players thrive. With regular tournaments, Woodball fosters camaraderie and a competitive spirit among our students.
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

export default ReligiousBelow;

