import SectionTitle from "@/components/Common/SectionTitle";
import School from "@/components/school/School";
import React from "react";

export default function SchoolOfHealth() {
  return (
    <div>
      <section className="my-20 mt-36 mx-10">
        <School
          dean="DR MICHEAL KAYEMBA"
          deanImage={"/images/blog/author-03.png"}
          message="I take this opportunity to welcome you to the school of health and allied sciences Bugema University. We are more than committed to producing world class medical experts. We shall take you from the class to the hospital for practical classes as we mold the best out of you. Feel welcome and be ready for the impact soon coming."
          preamble="The school health and allied sciences strives to be recognized as a Centre of Health Education for improvement of peopleâ€™s Wellbeing and providing high quality educational opportunities to students and health care professionals, and advancement of knowledge through scholarship, research and patient care and services."
          goal="To be a leading center of excellence, providing quality and holistic health care education and services in Uganda and beyond."
        />
      </section>

      <div className="flex flex-col items-start mx-auto md:pl-28">
        <div className="md:pl-2">
          <SectionTitle title="Departments In The Faculty" paragraph="" />
        </div>

        <div className='md:pl-2 mx-auto md:mx-0'>
          <ul className='flex flex-col space-y-5 text-body-color'>
            <li>Department Of Nursing And Mid-Wifery</li>
            <li>Department Of Public Health And Allied Sciences</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
