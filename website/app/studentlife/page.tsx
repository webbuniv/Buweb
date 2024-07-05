'use client'

import { useState } from "react";
import Image from "next/image";
import HomePage from "@/components/About/AboutSectionLife";
import AboutSectionLife2 from "@/components/About/AboutSectionLife2";
import Breadcrumb from "@/components/Common/Breadcrumb";
import LifeHero from "@/components/LifeHero";

const AboutPage = () => {
  return (
    <>
      <LifeHero />
      <Breadcrumb
        pageName="Bugema University Student Life"
        description="Welcome to the Bugema University Student Life page! Here, you'll find student life
         on various topics related to academia, student life, research, and more."
      />
      <HomePage />
      <AboutSectionLife2 />
      {/* <AboutSectionLife /> */}
    </>
  );
};

export default AboutPage;
