'use client';

import { useState } from "react";
import Image from "next/image";
import AboutSectionSix from "@/components/About/AboutSectionSix";
import AboutSectionSeven from "@/components/About/AboutSectionSeven";
import AboutSectionWbu from "@/components/About/AboutSectionWbu";

import Breadcrumb from "@/components/Common/Breadcrumb";
import WhyHero from "@/components/WhyHero";
import AboutSectionBu from "@/components/BelowBugema";
import backgroundImage from "@/public/images/footer/aerial1.png";

const WhyBugemaPage = () => {
  return (
    <>
      <div className="container mt-[100px] md:mt-0">
        {/* <WhyHero /> */}
        <div className="relative w-full mt-[30px] h-[300px] md:h-[500px]">
          <Image 
            src={backgroundImage}
            alt="Background"
            layout="fill"
            objectFit="cover"
            className="z-0"
          />
          <div className="absolute inset-0 flex flex-col mt-[50px] lg:mt-[150px] z-10 bg-black bg-opacity-10">
            <Breadcrumb
              pageName="Why Bugema"
              description="
              Bugema University is a place for everyone, somewhere you can be yourself. Whether you're an out-of-the-box thinker, boundary-breaker or change-maker, this is where you'll get ahead and find your place as part of a global community.
              "
            />
          </div>
        </div>
        <AboutSectionBu />
        <AboutSectionWbu />
        <AboutSectionSeven />
      </div>
    </>
  );
};

export default WhyBugemaPage;
