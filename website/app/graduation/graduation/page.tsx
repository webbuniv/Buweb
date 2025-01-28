"use client";
import SectionTitle from "@/components/Common/SectionTitle";
import School from "@/components/school/School";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Graduation from "@/components/graduation/Graduation";
import ExploreGraduation from "@/components/ExploreGraduation";
import GradBelow from "@/components/graduation/GradBelow";


export default function Religion() {
  const [showText, setShowText] = useState(false);

  const handleCycleComplete = () => {
    setShowText(true); // Set showText to true once cycle completes
  };

  return (
    
    <>
    <Graduation />
    <div className="w-full border-t border-black lg:mt-2 mb-20" />
    <ExploreGraduation />
    <div className="w-full border-t border-black lg:mt-20 mb-5" />
    {/* <GradBelow /> */}
    </>
    
  );
}
