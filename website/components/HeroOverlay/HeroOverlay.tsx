import Link from "next/link";
import React from "react";
import { FaArrowDown } from "react-icons/fa6";

const HeroOverlay = ({
  title,
  title2,
  title3,
  subtitle,
  subtitle2,
  subtitle3,
  buttonText,
  buttonLink,
}) => {
  return (
    <div className="overlayGeneral " >
      <div className="hidden  lg:flex flex-col space-y-4   justify-center  mx-auto items-center mt-4">
        <h1 className="text-6xl mb-5">{title}</h1>

        <p className="text-2xl mt-5">{subtitle}</p>

        {/* <Link
          href={buttonLink}
          className="button w-fit border-white animate-bounce bg-dark border-2 px-4 py-1 border-r-2 rounded hover:scale-105 transition-all duration-500"
        >
          <span className="flex flex-row gap-2 justify-center items-center">
            {buttonText}
            <FaArrowDown />
          </span>
        </Link> */}
      </div>

      <div className="hero-overlay2 flex flex-col  h-[30%] w-[100%] hidden lg:flex lg:flex-col   ">
        <div className="flex-1 overlay h-[70%]  ">
        
          <h1 className=" mt-5 text-start sm:text-3xl  text-xl md:font-bold mb-0 slider slide--fast text-wrap">
            {title3}
          </h1>
          <br />
          <Link href={`${subtitle2}`}>
          <h1 className="flex  text-start text-3xl md:font-bold mb-0">
          {subtitle3}
          </h1>
          </Link>
        </div>
        <div className="flex ">
          
        </div>

        <div className="flex-1 hidden sm:block">
          {" "}
          {/* Hide on small screens, show on medium and above */}
         
          <h2 className="text-start text-2xl mb-[5%]   slider-right slide--slow ">

          </h2>
         
        </div>
      </div>
    </div>
  );
};

export default HeroOverlay;
