import SectionTitle from "@/components/Common/SectionTitle";
import School from "@/components/school/School";
import React from "react";

export default function SchoolOfAgric() {
  return (
    <div>
      <section className="my-20 mt-36 mx-10">
        
      </section>

      <div className="flex flex-col items-start mx-auto md:pl-28">
        <div className="md:pl-2">
          <SectionTitle title="Courses in the school of agriculture" paragraph="" />
        </div>
        <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
        Department Of Agricultural Sciences
      </h3>
        <div className='md:pl-2 mx-auto md:mx-0'>
          <ul className='flex flex-col space-y-5 text-body-color'>
            <li>Bachelor of science in Agriculture with options</li>
            <li>Bachelor of Science in Agribusiness Innovation and management</li>
            <li>Diploma in crop Science And Management</li>
            <li>Diploma in animal production and management</li>
            <li>Bachelor certificate in agriculture</li>
          </ul>
        </div>

        <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
        Department Of Environmental And Applied Sciences
      </h3>
        <div className='md:pl-2 mx-auto md:mx-0'>
          <ul className='flex flex-col space-y-5 text-body-color'>
            <li>Bachelor of science in Environment science</li>
            <li>Bachelor of science in Food Technology and human Nutrition</li>
            <li>Diploma in food science and processing technology</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
