'use client'

import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import BelowHero from "@/components/BelowHero";
import ScrollToTop from "@/components/ScrollToTop";
import ExploreBugema from "@/components/ExploreBugema";
import { Inter } from "next/font/google";
import EventsAndNews from "@/components/EventsandNews/EventsAndNews";
import CampusNews from "@/components/CampusNews";
import Welcome from "@/components/Welcome/Welcome";
import MatureEntryAd from "@/components/MatureEntryAd/MatureEntryAd";



const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <BelowHero />
      <Welcome />
      <ExploreBugema />
      <EventsAndNews />
      <CampusNews />
      <Blog />
      <Brands />
      <Contact />
      <MatureEntryAd />
      <ScrollToTop />
    </>
  );
}
