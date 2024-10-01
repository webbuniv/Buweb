"use client";
import SectionTitle from "@/components/Common/SectionTitle";
import School from "@/components/school/School";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import AgricultureBelow from "@/components/AgricultureBelow";
import AgricBelowHero from "@/components/AgricBelowHero";
import Religious from "@/components/Religious/Religious";
import SportsBelowHero from "@/components/Sports/SportBelowHero";
import SportsBelow from "@/components/Sports/SportBelow";


export default function Religion() {
  const [showText, setShowText] = useState(false);

  const handleCycleComplete = () => {
    setShowText(true); // Set showText to true once cycle completes
  };

  return (
    
    <>
    <Religious />
    <div className="w-full border-t border-black lg:mt-20 mb-5" />
    <SportsBelowHero />
    <SportsBelow />
    </>
    
  );
}
