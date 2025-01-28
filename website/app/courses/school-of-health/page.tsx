import SectionTitle from "@/components/Common/SectionTitle";
import Course from "@/components/course/Course";
import React from "react";

export default function SchoolOfHealth() {
  return (
    <div>
      <section className="my-20 mt-36 mx-10">
        <Course
          tittle="Courses in the School of Health"
          subtittle="We  Strive to be a leading center of excellence, providing quality and holistic health care education and services in Uganda and beyond."
          topImg={"/images/schools/nurses1.jpg"}
        />
      </section>

      <div className="flex flex-col items-start mx-auto md:pl-28 -mt-20">
        {/* <div className="md:pl-2">
          <SectionTitle title="Courses in the school of health" paragraph="" />
        </div> */}

        <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl" style={{ color: 'blue' }}>
          Department Of Nursing And Mid-Wifery
        </h3>
        <div className='md:pl-2 mx-auto md:mx-0'>
          <ul className='flex flex-col space-y-5 text-body-color'>
            <li>Bachelor of Nursing Science</li>
          </ul>
        </div>

        <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl" style={{ color: 'blue' }}>
          Department of public health and allied science
        </h3>
        <div className='md:pl-2 mx-auto md:mx-0'>
          <ul className='flex flex-col space-y-5 text-body-color'>
            <li>Bachelor of Public Health</li>
            <li>Bachelor of Biomedical Engineering</li>
          </ul>
        </div>

        <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl" style={{ color: 'blue' }}>
          College Of Nursing And Mid-Wifery
        </h3>
        <div className='md:pl-2 mx-auto md:mx-0'>
          <ul className='flex flex-col space-y-5 text-body-color'>
            <li>Diploma in Nursing </li>
            <li>Diploma in Midwifery</li>
            <li>Certificate in Nursing </li>
            <li>Certificate in Midwifery </li>
          </ul>
        </div>

        <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl" style={{ color: 'blue' }}>
        Department Of Public Health And Allied Sciences
      </h3>
        <div className='md:pl-2 mx-auto md:mx-0'>
          <ul className='flex flex-col space-y-5 text-body-color'>
            <li>Bachelor of Public Health</li>
            <li>Bachelor of Biomedical Engineering</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
