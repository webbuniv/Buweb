'use client'

import { useState } from "react";
import Image from "next/image";
import AboutSectionLife from "@/components/About/AboutSectionLife";
import AboutSectionLife2 from "@/components/About/AboutSectionLife2";
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
      <AboutSectionLife2 />
    </>
  );
};

export default AboutPage;
