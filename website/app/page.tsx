'use client'
import React from "react";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import BelowHero from "@/components/BelowHero";
import ScrollToTop from "@/components/ScrollToTop";
import ExploreBugema from "@/components/ExploreBugema";
import EventsAndNews from "@/components/EventsandNews/EventsAndNews";
import CampusNews from "@/components/CampusNews";
import Welcome from "@/components/Welcome/Welcome";
import MatureEntryAd from "@/components/MatureEntryAd/MatureEntryAd";
import PublicationSection from "@/components/PublicationFeed/publication-section"
import { BugemaChatWidget } from "@/components/bugema-chat-widget"


export default function Home() {
  return (
    <div className="w-full" >
      <ScrollUp />
      <Hero />
      <BelowHero />
      <Welcome />
      <ExploreBugema />
      <EventsAndNews />
      <CampusNews />
      <PublicationSection />
      <Blog />
      <Brands />
      <Contact />
      <ScrollToTop />
      <MatureEntryAd />
      <BugemaChatWidget
        title="Bugema University Assistant"
        initialMessage="Hello! Welcome to Bugema University. How can I help you with information about our programs, admissions, campus life, or other inquiries?"
      />
    </div>
  );
}
