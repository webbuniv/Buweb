'use client'

import HomePage from "@/components/About/AboutSectionLife";
import Breadcrumb from "@/components/Common/Breadcrumb";
import LifeHero from "@/components/LifeHero";
import StudentLifePrograms from "@/components/About/StudentLife";

const StudentLifePage = () => {
  return (
    <>
      <LifeHero />
      <Breadcrumb
        pageName="Bugema University Student Life"
        description="Welcome to the Bugema University Student Life page! Here, you'll find student life
         on various topics related to academia, student life, research, and more."
      />
      <HomePage />
      <StudentLifePrograms />
    </>
  );
};

export default StudentLifePage;
