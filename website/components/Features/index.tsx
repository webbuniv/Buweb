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
        <div className="grid grid-cols-2 gap-x-8 gap-y-14 md:grid-cols-1 lg:grid-cols-2">
          <div className="col-6" >
            <SectionTitle
              title="For ambition that can take you anywhere, get your start at Bugema University"
              paragraph=""
              // center
              />
               <div className="grid grid-cols-2 -mb-40 gap-x-8 gap-y-14 md:grid-cols-1 lg:grid-cols-2">
                <div>
                  <button
                    className="animated-button flex rounded-md bg-primary/60 py-1 px-3 md:py-2 md:px-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                    onMouseEnter={() => setHoveredButton('whyBugema')}
                    onMouseLeave={() => setHoveredButton(null)}
                  >
                  <span className="icon-container">
                    <BiSolidPencil className="text-xl mx-2" />
                  </span>
                  Why Bugema
                 
                  </button>
                </div>
               <div>
                  <button
                    className="animated-button flex rounded-md bg-primary/60 py-1 px-3 md:py-2 md:px-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                    onMouseEnter={() => setHoveredButton('studentLife')}
                    onMouseLeave={() => setHoveredButton(null)}
                  >
                  <span className="icon-container">
                    <BiSolidPencil className="text-xl mx-2" />
                  </span>
                  Student life
                  
                  </button>
                </div>
              </div>
          </div>
          <div className="col-6">
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
        className="bg-primary/[.03] py-16 md:py-20 "
      >
        <div className="container">
        <div className="grid grid-cols-2 gap-x-8 gap-y-8 md:grid-cols-1 lg:grid-cols-2">
          <div className="col-6 flex flex-col space-y-2" >
            <SectionTitle
            paragraph="Studying at Bugema University"
              title="No matter how far you've come, you can always go further."
              // center
              />
               <div className="grid gap-x-5 gap-y-8 md:grid-cols-1">
                <div>
                  <div
                    className="button2 flex animated2-button rounded-md py-1 px-3 items-center py-2 text-lg md:text-xl lg:text-2xl font-semibold text-white transition bg-blue-500 hover:bg-blue-600"
                    style={{ backgroundColor: hoveredButton === 'under' ? 'blue' : '' }}
                    onMouseEnter={() => setHoveredButton('under')}
                    onMouseLeave={() => setHoveredButton(null)}
                  >
                  <span className="icon-container">
                    <BiSolidPencil className="text-xl mx-2" />
                  </span>
                     Undergraduate study
                  </div>
                </div>
               <div>
                  <div
                    className="button2 animated2-button rounded-md py-1 px-3 md:py-2 md:px-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                    style={{ backgroundColor: hoveredButton === 'post' ? 'lightcoral' : '' }}
                    onMouseEnter={() => setHoveredButton('post')}
                    onMouseLeave={() => setHoveredButton(null)}
                  >
                  <span className="icon-container">
                    <BiSolidPencil className="text-xl mx-2" />
                  </span>
                     Postgraduate study
                  </div>
                </div>
                <div>
                  <div
                    className="button2 animated2-button rounded-md py-1 px-3 md:py-2 md:px-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                    style={{ backgroundColor: hoveredButton === 'international' ? 'lightblue' : '' }}
                    onMouseEnter={() => setHoveredButton('int')}
                    onMouseLeave={() => setHoveredButton(null)}
                  >
                  <span className="icon-container">
                    <BiSolidPencil className="text-xl mx-2" />
                  </span>
                  International
                  </div>
                </div>
              </div>
          </div>
          <div className="col-6">
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
             <div className="triangle-top-right absolute top-0 right-0 border-solid border-transparent border-t-0 border-r-80 border-b-330 border-l-0 border-gray-900"></div>
             <div className="triangle-bottom-left absolute bottom-0 left-0 border-solid border-transparent border-t-345 border-r-0 border-b-10 border-l-90 border-gray-900"></div>
          </div>
        </div>
        </div>
        <div className="container1 -mt-60 grid grid-cols-3 gap-x-8 md:grid-cols-1 lg:grid-cols-2">
            <div className="skewed w-150 h-65 bg-gray-900"></div>
            <div className="skewed w-150 h-65 bg-gray-900"></div>
            <div className="skewed w-150 h-65 bg-gray-900"></div>
        </div>

          {/* <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div> */}
        </div>
      </section>
    </>
  );
};

export default Features;
