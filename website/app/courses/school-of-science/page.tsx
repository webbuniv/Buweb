'use client';

import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import SectionTitle from "@/components/Common/SectionTitle";
import Course from "@/components/course/Course";
export default function CourseSchoolOfScience() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      y: ["100%", "-100%"],
      transition: { duration: 10, ease: "linear", repeat: Infinity },
    });
  }, [controls]);

  return (
    <div>
      <section className="my-20 mt-36 mx-10 -mb-36">
        <Course
          tittle="Courses in the School of Science and Technology"
          subtittle="Our Aim is to train and encourage our Learners to cope up with the continuously changing and emerging technologies by giving them a hands-on experience to make them problem solvers..."
          topImg={"/images/schools/lab1.jpg"}
        />
      </section>

      <div className="flex flex-col md:flex-row items-start mx-auto md:pl-28 -mt-20">
        {/* Static Content Column */}
        <div className="md:w-1/2">
          <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl" style={{ color: 'blue' }}>
            Department Of Computing And Informatics
          </h3>
          <div className="md:pl-2 mx-auto md:mx-0">
            <ul className="flex flex-col space-y-5 text-body-color">
              <li>Bachelor of Business Computing</li>
              <li>Bachelor of Information Technology</li>
              <li>Bachelor of Library and Information Science</li>
              <li>Bachelor of Science in Software Engineering</li>
              <li>Bachelor of Science in Network Systems Administration</li>
              <li>Diploma in Information Technology</li>
              <li>Diploma in Computer Forensics</li>
              <li>Certificate in Information Technology (UBTEB)</li>
            </ul>
          </div>

          <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl" style={{ color: 'blue' }}>
            Department Of Life And Physical Science
          </h3>
          <div className="md:pl-2 mx-auto md:mx-0">
            <ul className="flex flex-col space-y-5 text-body-color">
              <li>Bachelor of Science in Biochemistry</li>
              <li>Bachelor of Science in Statistics</li>
              <li>Diploma in Science Laboratory Technology</li>
              <li>Diploma in Biomedical Engineering and Technology</li>
            </ul>
          </div>
        </div>

        {/* Scrolling Content Column */}
        <div className="md:w-1/2 bg-gray text-black relative overflow-hidden h-full">
          <motion.div
            className="absolute w-full h-full"
            animate={controls}
          >
            <div className="space-y-10">
              <div>
                <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl" style={{ color: 'blue' }}>
                  Department Of Computing And Informatics
                </h3>
                <div className="md:pl-2 mx-auto md:mx-0">
                  <ul className="flex flex-col space-y-5 text-body-color">
                    <li>Bachelor of Business Computing</li>
                    <li>Bachelor of Information Technology</li>
                    <li>Bachelor of Library and Information Science</li>
                    <li>Bachelor of Science in Software Engineering</li>
                    <li>Bachelor of Science in Network Systems Administration</li>
                    <li>Diploma in Information Technology</li>
                    <li>Diploma in Computer Forensics</li>
                    <li>Certificate in Information Technology (UBTEB)</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl" style={{ color: 'blue' }}>
                  Department Of Life And Physical Science
                </h3>
                <div className="md:pl-2 mx-auto md:mx-0">
                  <ul className="flex flex-col space-y-5 text-body-color">
                    <li>Bachelor of Science in Biochemistry</li>
                    <li>Bachelor of Science in Statistics</li>
                    <li>Diploma in Science Laboratory Technology</li>
                    <li>Diploma in Biomedical Engineering and Technology</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
