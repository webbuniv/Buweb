"use client";
import SectionTitle from "@/components/Common/SectionTitle";
import School from "@/components/school/School";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Clubs from "@/components/clubs/Clubs";
import ClubBelow from "@/components/clubs/ClubBelow";


export default function Religion() {
  const [showText, setShowText] = useState(false);

  const handleCycleComplete = () => {
    setShowText(true); // Set showText to true once cycle completes
  };

  return (
    
    <>
    <Clubs />
    <div className="w-full border-t border-black lg:mt-20 mb-5" />
    {/* <ReligiousBelowHero /> */}
    <ClubBelow />
    </>
    
  );
}
