'use client'

import { useState } from "react";
import Image from "next/image";
import HomePage from "@/components/About/AboutSectionLife";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Exhibition from "@/components/About/Exhibition";
import ExhHero from "@/components/ExhHero";

const StudentLifePage = () => {
  return (
    <>
      <ExhHero />
      <Breadcrumb
        pageName="Entreprenuership Class Exhibition 2024 - 2025"
        description="Welcome to the Bugema University Entreprenuership Exhibition"
      />
      <HomePage />
      <Exhibition />
    </>
  );
};

export default StudentLifePage;
