import SectionTitle from "@/components/Common/SectionTitle";
import Course from "@/components/course/Course";
import React from "react";

export default function SchoolOfGraduate() {
  return (
    <div>
      <section className="my-20 mt-36 mx-10">
        <Course
        tittle="Courses in the School of Graduate Studies"
        subtittle="The School of Graduate Studies (SGS) is the administrative body of the graduate programs"
        topImg={"/images/schools/lab1.jpg"}
          
        />
      </section>

      <div className="flex flex-col items-start mx-auto md:pl-28">
        {/* <div className="md:pl-2">
          <SectionTitle title="Courses in the school of graduate" paragraph="" />
        </div> */}

        <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl" style={{ color: 'blue' }}>
        PHD PROGRAMS
      </h3>
        <div className='md:pl-2 mx-auto md:mx-0'>
          <ul className='flex flex-col space-y-5 text-body-color'>
            <li>PhD in Education Management</li>
            <li>PhD in Rural Development</li>
            <li>PhD in Envirnmental Management</li>
          </ul>
        </div>

        <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl" style={{ color: 'blue' }}>
        MASTERS PROGRAMS
      </h3>
        <div className='md:pl-2 mx-auto md:mx-0'>
          <ul className='flex flex-col space-y-5 text-body-color'>
            <li>Master of Arts in Development Studies</li>
            <li>Master of science in Counselling Psychology</li>
            <li>Master in Social Works</li>
            <li>Master in Public Administration And Management</li>
            <li>Master of Public Health</li>
            <li>Master of Arts in Education</li>
            <li>Master of Procurement and Logistics</li>
            <li>Master of Project Planning and Management</li>
            <li>Master of Business Administration</li>
            <li>Master of Science in Information Technology</li>
          </ul>
        </div>

        <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl" style={{ color: 'blue' }}>
        POSTGRADUATE DIPLOMA (PGD) PROGRAM
      </h3>
        <div className='md:pl-2 mx-auto md:mx-0'>
          <ul className='flex flex-col space-y-5 text-body-color'>
            <li>Postgraduate Diploma in Business Management</li>
            <li>Postgraduate Diplama in education (PGDE)</li>
            <li>Postgraduate in Information Technology</li>
            <li>Postgraduate Diploma in Public Administration and Management</li>
            <li>Postgraduate Diploma in Public Health</li>
            <li>Postgraduate Diploma in Counselling and Psychology</li>
          </ul>
        </div>

        {/* <div className='md:pl-2 mx-auto md:mx-0'>
          <ul className='flex flex-col space-y-5 text-body-color'>
            <li>Currently One Department In The faculty</li>
          </ul>
        </div> */}
      </div>
    </div>
  );
}
