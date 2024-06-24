'use client'

import { useState } from "react";
import Image from "next/image";
import AboutSectionSix from "@/components/About/AboutSectionSix";
import AboutSectionSeven from "@/components/About/AboutSectionSeven";
import Breadcrumb from "@/components/Common/Breadcrumb";
import LifeHero from "@/components/LifeHero";

const AboutPage = () => {
  return (
    <>
      <LifeHero />
      <Breadcrumb
        pageName="Student Life"
        description=""
      />
      <AboutSectionSix />
      <AboutSectionSeven />
    </>
  );
};

export default AboutPage;
