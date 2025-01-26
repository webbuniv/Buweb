// components/ResearchSection.tsx

import React from 'react';
import SectionTitle from "../Common/SectionTitle";


const ResearchSection: React.FC = () => {
  return (
<section className=" mt-6 mb-6  p-8" id="research">
        <div className="container">

      <div className="hidden md:block">
          <SectionTitle
            title="Research"
            paragraph="Driving discoveries vital to our world, our health, and our intellectual life."
            center
            mb="50px"
          />
        </div>

        {/* Section Title on small screens */}
        <div className="md:hidden block">
          <SectionTitle 
            title="Explore Bugema University"
            paragraph="Join us at Bugema University, where education is embraced as a catalyst for empowerment and change. Experience an inclusive and enriching learning environment where equal opportunities, academic excellence, and a commitment to students' success define our core values. Together, we can shape a brighter future through education."
            center
            mb="50px"
          />
        </div>
      

      <section className="mb-8">
        <hr className="my-4" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <figure className="text-center">
            <strong className="block text-xl">5 Campuses</strong> 
            <span>cross disciplinary boundaries</span>
          </figure>
          <figure className="text-center">
            <strong className="block text-xl">12 Libraries</strong> 
            <span>hold over 1.2 million items</span>
          </figure>
          <figure className="text-center">
            <strong className="block text-xl">100 Millions</strong> 
            <span>sponsored research budget</span>
          </figure>
        </div>
        <hr className="my-4" />
      </section>

      <section className="text-center">
        <a href="/research" className=" text-blue-500 font-bold" data-ga-category="Call to action" data-ga-action="More about research">
          More about research
        </a>
      </section>
      </div>
    </section>
  );
};

export default ResearchSection;
