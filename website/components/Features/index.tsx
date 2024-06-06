import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import Image from 'next/image';
import featuresData from "./featuresData";
import img from "../../public/images/features/life.jpg";
import img1 from "../../public/images/features/bu.jpg";
import img2 from "../../public/images/features/bb.jpg";
import { BiSolidPencil } from 'react-icons/bi';
import './style.css';
import React, { useState } from 'react';

const Features = () => {
  const [hoveredButton, setHoveredButton] = useState(null);

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
               <div className="grid grid-cols-2 gap-x-8 gap-y-14 md:grid-cols-1 lg:grid-cols-2">
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
            height="150"
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
        className="bg-primary/[.03] py-16 md:py-20 lg:py-28"
      >
        <div className="container">
        <div className="grid grid-cols-2 gap-x-8 gap-y-14 md:grid-cols-1 lg:grid-cols-2">
          <div className="col-6" >
            <SectionTitle
            paragraph="Studying at Bugema University"
              title="No matter how far you've come, you can always go further."
              // center
              />
               <div className="grid gap-x-5 gap-y-8 md:grid-cols-1">
                <div>
                  <div
                    className="animated-button flex py-1 px-3 md:py-2 md:px-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                    onMouseEnter={() => setHoveredButton('whyBugema')}
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
                    className="animated-button py-1 px-3 md:py-2 md:px-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                    onMouseEnter={() => setHoveredButton('studentLife')}
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
                    className="animated-button py-1 px-3 md:py-2 md:px-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                    onMouseEnter={() => setHoveredButton('studentLife')}
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
            height="150"
          />
          {/* <Image className="img1" src={img1} alt="Bugema University" width="600" height="150"/> */}
          </div>
        </div>

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
