'use client'

import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import SchoolsPage from "../components/Schools/Schools";
import ScrollToTop from "@/components/ScrollToTop";
// import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import ExploreBugema from "@/components/ExploreBugema";
import { Inter } from "next/font/google";
import { Component } from "react";
import EventsAndNews from "@/components/EventsandNews/EventsAndNews";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <ExploreBugema />
      <Brands />
      <AboutSectionOne />
      {/* <AboutSectionTwo /> */}
      {/* <Testimonials /> */}
      <EventsAndNews />
      <Blog />
      <Contact />
      <SchoolsPage />
      <ScrollToTop />
    </>
  );
}
