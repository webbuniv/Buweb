import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import Image from 'next/image';
import featuresData from "./featuresData";
import img from "../../public/images/features/life.jpg";
import img1 from "../../public/images/features/bu.jpg";
import img2 from "../../public/images/features/bb.jpg";

import im from "../../public/images/features/bbb.jpg";
import im1 from "../../public/images/features/int.jpg";
import im2 from "../../public/images/features/post.jpg";
import im3 from "../../public/images/features/reg.jpg";
import { BiSolidPencil } from 'react-icons/bi';
import './style.css';
import React, { useState } from 'react';
import Link from 'next/link';

const Features = () => {
  const [hoveredButton, setHoveredButton] = useState(null);

  const getBackgroundColor = () => {
    switch (hoveredButton) {
        case 'undergraduate':
            return 'blue';
        case 'postgraduate':
            return 'lightcoral';
        case 'international':
            return 'lightblue';
        default:
            return '';
    }
};

  return (
    <>
      <section
        id="features"
        className="bg-primary/[.03] py-16 md:py-20 lg:py-28"
      >
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-14 ">
            <div>

              {/* Section title on big screens */}
              <div className="mb-8 hidden md:block">
                <SectionTitle
                  title="Offering an excellent and distinctive wholistic christian education designed to prepare our students through training for productive lives of useful service to God."
                  paragraph=""
                  // center
                  />
              </div>

              {/* Section title on small screens */}
              <div className="mb-8 block md:hidden text-sm">
                <SectionTitle
                  title="Offering an excellent and distinctive wholistic christian education designed to prepare our students through training for productive lives of useful service to God."
                  paragraph=""
                  // center
                  />
              </div>

              <div className="grid grid-cols-2 gap-x-8 gap-y-14">
                <div>
                  <Link href="/whybugema"
                    className="animated-button flex rounded-md bg-primary/60 py-1 px-3 md:py-2 md:px-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                    onMouseEnter={() => setHoveredButton('whyBugema')}
                    onMouseLeave={() => setHoveredButton(null)}
                  >
                  <span className="icon-container">
                    <BiSolidPencil className="hidden md:block text-xl mx-2" />
                  </span>
                  Why Bugema
                
                  </Link>
                </div>
              <div>
                  <Link href="studentlife"
                    className="animated-button flex rounded-md bg-primary/60 py-1 px-3 md:py-2 md:px-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                    onMouseEnter={() => setHoveredButton('studentLife')}
                    onMouseLeave={() => setHoveredButton(null)}
                  >
                  <span className="icon-container ">
                    <BiSolidPencil className="hidden md:block text-xl mx-2" />
                  </span>
                  Student life
                  
                  </Link>
                </div>
              </div>
            </div>

            <div>
            <Image
              className="img1"
              src={
                hoveredButton === 'studentLife'
                  ? img
                  : hoveredButton === 'whyBugema'
                  ? img2
                  : img1
              }
              alt="Bugema University"
              width="600"
              height="250"
            />
            {/* <Image className="img1" src={img1} alt="Bugema University" width="600" height="150"/> */}
            </div>
          </div>

          {/* <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div> */}
        </div>
      </section>


      {/*second section */}
      <section
        id="features"
        className="bg-primary/[.03] md:py-20 "
      >
        <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8 ">

          {/* Left side container */}
          <div className="flex flex-col md:space-x-4 space-y-2 " >
            
              {/* Title and subtitle container */}
              <div className="px-4">
                <p className="text-base !leading-relaxed text-body-color md:text-lg">
                  Studying at Bugema University
                </p>
                <h2 className="mb-4 text-3xl font-bold !leading-tight text-black/80 dark:text-white sm:text-4xl md:text-[45px]">
                  No matter how far you have come, you can always go further.
                </h2>
              </div>

              {/* Buttons container */}
              <div className="grid gap-x-5 gap-y-8 md:grid-cols-1">
                  <div
                    className="flex items-center button2 md:text-3xl animated2-button rounded-md py-1 px-3 md:py-2 md:px-4 text-base font-semibold dark:text-white duration-300 ease-in-out hover:bg-primary/80"
                    style={{ backgroundColor: hoveredButton === 'under' ? 'blue' : '' }}
                    onMouseEnter={() => setHoveredButton('under')}
                    onMouseLeave={() => setHoveredButton(null)}
                  >
                  <span className="icon-container">
                    <BiSolidPencil className="text-body-color dark:text-white text-xl mx-2" />
                  </span>
                  <h1 className=" text-body-color dark:text-white">
                    Undergraduate study
                  </h1>
                  </div>
               <div>
                  <div
                    className="flex items-center button2 md:text-3xl animated2-button rounded-md py-1 px-3 md:py-2 md:px-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                    style={{ backgroundColor: hoveredButton === 'post' ? 'lightcoral' : '' }}
                    onMouseEnter={() => setHoveredButton('post')}
                    onMouseLeave={() => setHoveredButton(null)}
                  >
                  <span className="icon-container">
                    <BiSolidPencil className="text-body-color dark:text-white text-xl mx-2" />
                  </span>
                  <h1 className=" text-body-color dark:text-white">
                    Postgraduate study
                  </h1>
                  </div>
                </div>
                <div>
                  <div
                    className="flex items-center button2 md:text-3xl animated2-button rounded-md py-1 px-3 md:py-2 md:px-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                    style={{ backgroundColor: hoveredButton === 'international' ? 'lightblue' : '' }}
                    onMouseEnter={() => setHoveredButton('int')}
                    onMouseLeave={() => setHoveredButton(null)}
                  >
                  <span className="icon-container ">
                    <BiSolidPencil className=" text-body-color dark:text-white text-xl mx-2" />
                  </span>
                  <h1 className=" text-body-color dark:text-white">
                    International
                  </h1>
                  </div>
                </div>
              </div>
          </div>

          {/* Right side container */}
          <div className="containerr">
           <div className="skewed-containerr">
            <Image
              className="img1"
              src={
                hoveredButton === 'post'
                  ? im2
                  : hoveredButton === 'under'
                  ? im3
                  : hoveredButton === 'int'
                  ? im1
                  : im
              }
              alt="Bugema University"
              width="600"
              height="150"
            />
          {/* <Image className="img1" src={img1} alt="Bugema University" width="600" height="150"/> */}
          </div>
          <div className="triangle-top-right" ></div>
          <div className="triangle-bottom-left" ></div>
          </div>

        </div>
        <div className="container1 md:mt-16 mt-8 grid grid-cols-3 gap-x-8 md:grid-cols-1 lg:grid-cols-2">
          <div className="skewed left" ></div>
          <div className="skewed center"></div>
          <div className="skewed right"></div>
        </div>
        </div>
      </section>
    </>
  );
};

export default Features;