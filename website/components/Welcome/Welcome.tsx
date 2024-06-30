import SectionTitle from "../Common/SectionTitle";
import Image from "next/image";
import img1 from "../../public/images/vc/vc.jpg";

import React, { useState } from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
export const img = "/images/vc/vc.jpg";
const Welcome = () => {
  return (
    <>
      <section id="features" className="bg-primary/[.03] pt-8 -mt-5">
        <div className="container mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-60">
            <div className="flex flex-col mt-10 ">
              {/* Section title on big screens */}
              <div className=" mb-8 hidden md:flex md:flex-col">
                <div className="ml-12 wow fadeInUp w-full" data-wow-delay=".1s">
                  <h2 className="mb-2 font-bold !leading-tight text-black/80 dark:text-white md:text-xl">
                    You Are Welcome To
                  </h2>
                  <h1 className="mb-4 text-3xl font-bold !leading-tight text-black/80 dark:text-white sm:text-4xl md:text-[45px]">
                    Bugema University
                  </h1>
                  <p className="text-base !leading-relaxed text-body-color md:text-lg">
                    At Bugema University, we understand the importance of
                    quality assurance. We have developed comprehensive
                    self-regulating and self-maintaining procedures to ensure
                    the highest standards of excellence in academic delivery and
                    performance. <br />
                    <br /> Join us at Bugema University, where education is
                    embraced as a catalyst for empowerment and change.
                    Experience an inclusive and enriching learning environment
                    where equal opportunities, academic excellence, and a
                    commitment to the success of the students define our core
                    values. Together, we can shape a brighter future through
                    education.
                  </p>
                </div>

                <div className="bg-primary hover:bg-primary/90 duration-300 rounded-md py-1 px-3 md:py-2 md:px-4 ml-12 mt-4 w-[170px] transition-all hover:scale-105">
                  <Link
                    href="/whybugema"
                    className="text-base font-semibold text-white"
                  >
                    <span className="flex items-center gap-2 justify-center">
                      Explore More
                      <FaArrowRight />
                    </span>
                  </Link>
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

                <div className="bg-primary rounded-md py-1 px-3 mt-4 w-[170px]">
                  <Link
                    href="/whybugema"
                    className="text-base font-semibold text-white "
                  >
                    <span className="flex items-center gap-2 justify-center">
                      Explore More
                      <FaArrowRight />
                    </span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="">
              <Image
                className="img1 hidden md:block mt-28 rounded"
                src={img}
                alt="Bugema University"
                width={500}
                height={245}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Welcome;
