"use client";

import React, { useState, useEffect } from "react";
import SportsBelow from "@/components/Sports/SportBelow";
import Hero from "@/components/Sports/Sport";
import Stats from "@/components/Sports/Sport/Stats";
import FeaturedSports from "@/components/Sports/Sport/FeaturedSports";


export default function Sports() {
  const [showText, setShowText] = useState(false);

  const handleCycleComplete = () => {
    setShowText(true); // Set showText to true once cycle completes
  };

  return (
    
    <>
    <Hero />
    <Stats />
    <FeaturedSports />
    <SportsBelow />
    </>
    
  );
}
