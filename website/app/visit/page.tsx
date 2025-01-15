'use client'

import { CampusMapSection } from "@/components/visit/campus-map-section";
import { GuidedTourSection } from "@/components/visit/guided-tour-section";
import { LocationSection } from "@/components/visit/location-section";
import { WelcomeSection } from "@/components/visit/welcome-section";
import HomePage from "@/components/About/AboutSectionLife";
import Breadcrumb from "@/components/Common/Breadcrumb";

const VisitPage = () => {
  return (
    <>
      {/* <LifeHero /> */}
      <Breadcrumb
        pageName="Bugema University Student Life"
        description="Welcome to the Bugema University Student Life page! Here, you'll find student life
         on various topics related to academia, student life, research, and more."
      />
      <main className="min-h-screen">
        <WelcomeSection />
        <LocationSection />
        <CampusMapSection />
        <GuidedTourSection />
      </main>
    </>
  );
};

export default VisitPage;

