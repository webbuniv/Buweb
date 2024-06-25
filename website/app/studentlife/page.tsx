'use client'

import { useState } from "react";
import Image from "next/image";
import AboutSectionLife from "@/components/About/AboutSectionLife";
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
      <AboutSectionLife />
      <AboutSectionSeven />
    </>
  );
};

export default AboutPage;
