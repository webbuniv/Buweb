import SectionTitle from "@/components/Common/SectionTitle";
import School from "@/components/school/School";
import React from "react";

export default function SchoolOfBusiness() {
  return (
    <div>
      <section className="my-20 mt-36 mx-10">
        <School
          dean="DR. LUBOWA MARTIN"
          deanImage={"/images/blog/author-03.png"}
          message="As business times evolve, so are the skills needed to run such environments. The school of business Bugema University is always evolving to meet the current business trends. We shall equip you with the necessary skills in the areas of accounting, procurement, and management. Your decision to join us is a perfect one. Looking forward to serving and preparing you for a better future."
          preamble="The School of Business believes in integrity and excellence in business dealings. It is therefore dedicated to the education and development of individuals in the region and beyond. These will become business leaders of both private and public organizations through outstanding business-oriented research, instruction, and service. Therefore, the school endeavors to train and produce human resources that are not only professionals but also morally upright."
          goal="The goal of the School of Business is to train efficient and effective future professionals who integrate integrity and sound business and organizational functions and who are able to combine knowledge with analytical and practical skills in order to accurately define problems, find viable solutions, and implement desirable decisions."
        />
      </section>

      <div className="flex flex-col items-start mx-auto md:pl-28">
        <div className="md:pl-2">
          <SectionTitle title="Departments In The Faculty" paragraph="" />
        </div>

        <div className='md:pl-2 mx-auto md:mx-0'>
          <ul className='flex flex-col space-y-5 text-body-color'>
            <li>Department Of Accounting And Finance</li>
            <li>Department Of Management</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
