"use client";

import Image from "next/image";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import Modal from "../Helper/Modal";

const Video = () => {
  const [showModal, setShowModal] = useState(false);
  const showModalHandler = () => setShowModal(true);
  const closeModalHandler = () => setShowModal(false);

  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28">

      {/* Modal */}
      {showModal && <Modal hideModal={closeModalHandler} />}

      <div className="container">

        {/* Section Title on big screens */}
        <div className="hidden md:block">
          <SectionTitle
            title="Explore Bugema University"
            paragraph="At Bugema University, we understand the importance of quality assurance. We have developed comprehensive self-regulating and self-maintaining procedures to ensure the highest standards of excellence in academic delivery and performance.

            Join us at Bugema University, where education is embraced as a catalyst for empowerment and change. Experience an inclusive and enriching learning environment where equal opportunities, academic excellence, and a commitment to students' success define our core values. Together, we can shape a brighter future through education."
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

        <div className="-mx-4 flex flex-wrap">
        
          <div className="w-full px-4">
            <div
              className="wow fadeInUp mx-auto max-w-[770px] overflow-hidden rounded-md"
              data-wow-delay=".15s"
            >
              <div className="relative aspect-[77/40] items-center justify-center">
                <Image src="/images/carousel/bugate.jpg" alt="video image" fill />
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
      </div>

      
    </section>
  );
};

export default Video;
