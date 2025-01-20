'use client';

import { useState } from "react";
import Image from "next/image";
import AboutSectionSix from "@/components/About/AboutSectionSix";
import AboutSectionSeven from "@/components/About/AboutSectionSeven";
import AboutSectionWbu from "@/components/About/AboutSectionWbu";

import Breadcrumb from "@/components/Common/Breadcrumb";
import WhyHero from "@/components/WhyHero";
import AboutSectionBu from "@/components/BelowBugema";
import { Hero } from "@/components/About/hero";
import HeroSectionWhy from "@/components/About/hero-section";

const WhyBugemaPage = () => {
  return (
    <>
      <div className=" md:mt-0 lg:mt-[130px]">
         <Hero />
        <AboutSectionBu />
        <AboutSectionWbu />
        <AboutSectionSeven />
      </div>
    </>
  );
};

export default WhyBugemaPage;
