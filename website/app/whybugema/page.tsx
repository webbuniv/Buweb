'use client'

import { useState } from "react";
import Image from "next/image";
import AboutSectionSix from "@/components/About/AboutSectionSix";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import WhyHero from "@/components/WhyHero";
import backgroundImage from "../../public/images/features/int.jpg";

const AboutPage = () => {
  return (
    <>
      <WhyHero />
      <Breadcrumb
        pageName="Why Bugema"
        description="
          Welcome to AgricHub, your trusted partner in the digital transformation of 
          agriculture. At AgricHub, we are dedicated to reshaping the landscape of 
          agricultural marketing by providing an innovative online platform that connects 
          farmers, producers, and consumers in a seamless and efficient manner.
        "
      />
      <AboutSectionSix />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
