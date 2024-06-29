"use client";

import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import Modal from "../Helper/Modal";
export const img = "/images/nav/palm-girls1.jpg"


const Video = () => {
  const [showModal, setShowModal] = useState(false);
  const showModalHandler = () => setShowModal(true);
  const closeModalHandler = () => setShowModal(false);

  return (
      <>
      <section className="flex relative z-10 py-6 md:py-6 lg:py-6">

{/* Modal */}
{showModal && <Modal hideModal={closeModalHandler} />}

{/* <div className="container flex">

      <div>
            
            {/* Section Title on big screens */}

            <div className="hidden md:block">
            {/* <SectionTitle
                  title="Explore Bugema University"
                  paragraph="At Bugema University, we understand the importance of quality assurance. We have developed comprehensive self-regulating and self-maintaining procedures to ensure the highest standards of excellence in academic delivery and performance.

                  Join us at Bugema University, where education is embraced as a catalyst for empowerment and change. Experience an inclusive and enriching learning environment where equal opportunities, academic excellence, and a commitment to students' success define our core values. Together, we can shape a brighter future through education."
                  center
                  mb="50px"
            /> */}
            </div>

            {/* Section Title on small screens 
            <div className="md:hidden block">
            <SectionTitle 
                  title="Explore Bugema University"
                  paragraph="Join us at Bugema University, where education is embraced as a catalyst for empowerment and change. Experience an inclusive and enriching learning environment where equal opportunities, academic excellence, and a commitment to students' success define our core values. Together, we can shape a brighter future through education."
                  center
                  mb="50px"
            />
            </div>
      </div>

  <div className="flex">
  
    <div className="w-full px-4">
      <div
        className="wow fadeInUp overflow-hidden rounded-md"
        data-wow-delay=".15s">
        <div className="relative aspect-[77/40] items-center justify-center">
          <Image src="/images/features/banner.png" alt="video image" fill />
          <div className="absolute top-0 right-0 flex h-full w-full items-center justify-center">
            <button
              onClick={showModalHandler}
              className="flex h-[70px] w-[70px] items-center justify-center rounded-full bg-white bg-opacity-75 text-primary transition hover:bg-opacity-100"
            >
              <svg
                width="16"
                height="18"
                viewBox="0 0 16 18"
                className="fill-current"
              >
                <path d="M15.5 8.13397C16.1667 8.51888 16.1667 9.48112 15.5 9.86602L2 17.6603C1.33333 18.0452 0.499999 17.564 0.499999 16.7942L0.5 1.20577C0.5 0.43597 1.33333 -0.0451549 2 0.339745L15.5 8.13397Z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div> */}


      </section>

<section id="features" className="bg-primary/[.03] pt-8 -mt-5">
<div className="container">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-20 ">

      <div
        className="wow fadeInUp overflow-hidden rounded-md h-[400px]  "
        data-wow-delay=".15s">
           
            <iframe width="500" height="300" title="YouTube video player"  allow="accelerometer; loop=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen
                src="https://www.youtube.com/embed/MNurEKZ0T20?si=7pRV-TCvIL1v9dPz &autoplay=1"
                className='w-full h-full'>
            </iframe>

        
      </div>

    <div className="flex flex-col ">
      {/* Section title on big screens */}
      <div className="mb-8 hidden md:flex md:flex-col">
        <div className="wow fadeInUp w-full" data-wow-delay=".1s">
          
          <h1 className="mb-4 text-3xl font-bold !leading-tight text-black/80 dark:text-white sm:text-4xl md:text-[45px]">
          Discover Your Path at Bugema University! 
          </h1>
          <p className="text-base !leading-relaxed text-body-color md:text-lg">
          
At Bugema, it’s not just about academics; it’s about nurturing your mind, heart, and hands. Bugema fosters holistic excellence – where character development meets intellectual growth.
With Flexible Intakes, whether you’re a fresh high school graduate or a working professional seeking advancement, Bugema offers multiple intakes throughout the year. No need to wait – start your journey now!
Bugema University, where dreams take root, friendships flourish, and purpose unfolds. Join us today – your adventure awaits! 

          </p>
        </div>
      </div>

      {/* Section title on small screens */}
      <div className="mb-8 block md:hidden text-sm">
        <div className="wow fadeInUp w-full" data-wow-delay=".1s">
          <h1 className="mb-4 text-3xl font-bold !leading-tight text-black/80 dark:text-white sm:text-4xl">
            You Are Welcome
          </h1>
          <div className="">
            <Image
              className="img1 mb-2 rounded"
              src={img}
              alt="Bugema University"
              width="600"
              height="250"
            />
          </div>
          <p className="text-base !leading-relaxed text-body-color md:text-lg">
            Join us at Bugema University, where education is embraced as
            a catalyst for empowerment and change. Experience an
            inclusive and enriching learning environment where equal
            opportunities, academic excellence, and a commitment to the
            success of the students define our core values. Together, we
            can shape a brighter future through education.
          </p>
        </div>

      </div>
    </div>

    
  </div>
</div>

</section>

      </>
    
  );
};

export default Video;
