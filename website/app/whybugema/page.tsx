'use client'

import { useState } from "react";
import Image from "next/image";
import AboutSectionSix from "@/components/About/AboutSectionSix";
import AboutSectionSeven from "@/components/About/AboutSectionSeven";
import Breadcrumb from "@/components/Common/Breadcrumb";
import WhyHero from "@/components/WhyHero";
import AboutSectionBu from "@/components/BelowBugema";
import backgroundImage from "../../public/images/features/int.jpg";

const WhyBugemaPage = () => {
  return (
    <>
    <div className="container mt-[100px] md:mt-0">
      {/* <WhyHero /> */}
      <div className="relative w-full h-96">
          <Image 
            src={backgroundImage}
            alt="Background"
            layout="fill"
            objectFit="cover"
            className="z-0"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center z-10 bg-black bg-opacity-50">
            <Breadcrumb
              pageName="Why Bugema"
              description="
              Bugema University is a place for everyone, somewhere you can be yourself. Whether you're an out-of-the-box thinker, boundary-breaker or change-maker, this is where you'll get ahead and find your place as part of a global community.
              "
            />
          </div>
        </div>
      <AboutSectionBu />
      <AboutSectionSeven />
    </div>
    </>
  );
};

export default WhyBugemaPage;
