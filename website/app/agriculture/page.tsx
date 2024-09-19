"use client";
import SectionTitle from "@/components/Common/SectionTitle";
import School from "@/components/school/School";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Agriculture from "@/components/Agriculture";
import AgricultureBelow from "@/components/AgricultureBelow";
import AgricBelowHero from "@/components/AgricBelowHero";


export default function Hospital() {
  const [showText, setShowText] = useState(false);

  const handleCycleComplete = () => {
    setShowText(true); // Set showText to true once cycle completes
  };

  return (
    
    <>
    <Agriculture />
    <AgricBelowHero/>
    <AgricultureBelow />
    </>
    
  );
}
