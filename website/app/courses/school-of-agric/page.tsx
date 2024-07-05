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
            <li>Department Of Agricultural Sciences</li>
            <li>Department Of Environmental And Applied Sciences</li>
          </ul>
        </div>

        <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
        Department Of Environmental And Applied Sciences
      </h3>
        <div className='md:pl-2 mx-auto md:mx-0'>
          <ul className='flex flex-col space-y-5 text-body-color'>
            <li>Department Of Agricultural Sciences</li>
            <li>Department Of Environmental And Applied Sciences</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
