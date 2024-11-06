"use client";

import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { useState,useEffect } from "react";
import SectionTitle from "../Common/SectionTitle";
import Modal from "../Helper/Modal";
export const img = "/images/nav/palm-girls1.jpg";


const ExploreGraduation = () => {
  const [showModal, setShowModal] = useState(false);
  const showModalHandler = () => setShowModal(true);
  const closeModalHandler = () => setShowModal(false);
  const [animate, setAnimate] = useState(false);


  const animated = () => {
      if (window.scrollY >= 1000) {
            setAnimate(true);
      } else {
            setAnimate(false);
      }
    };
    useEffect(() => {
      window.addEventListener("scroll", animated);
      return () => {
        window.removeEventListener("scroll", animated);
      };
    }, []);

  

  return (
    <>
      {/* <section className="flex relative z-10 py-6 md:py-6 lg:py-6">
        {showModal && <Modal hideModal={closeModalHandler} />}

      </section> */}


<section id="features" className="bg-primary/[.03] pt-8 -mt-[100px]">
<div className="container">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-20 ">

      <div
        className={`wow fadeInUp overflow-hidden rounded-md h-[400px]  ${animate ?"slider slide--slower":"" }`} 
        data-wow-delay=".15s">
          <iframe
            width="500"
            height="300"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            src="https://www.youtube.com/embed/6HUQdC6WwbA?si=NFVTl_-aO3p2MsPI"
            className="w-full h-full">
          </iframe>
        
      </div>

    <div className="flex flex-col ">
      {/* Section title on big screens */}
      
      <div className={`  mb-8 hidden md:flex md:flex-col  ${animate ?"slider-right slide--slower":"" }`}>
        <div className="wow fadeInUp w-full" data-wow-delay=".1s">
          
          <h1 className="mb-4 text-3xl font-bold !leading-tight text-black/80 dark:text-white sm:text-4xl md:text-[45px]">
          Discover Your Path at Bugema University! 
          </h1>
          <p className="text-base !leading-relaxed text-body-color md:text-lg">
          
                  At Bugema, it is not just about academics; it is about nurturing your mind, heart, and hands. Bugema fosters holistic excellence – where character development meets intellectual growth.
                  With Flexible Intakes, whether you are a fresh high school graduate or a working professional seeking advancement, Bugema offers multiple intakes throughout the year. No need to wait – start your journey now.
                  Bugema University, where dreams take root, friendships flourish, and purpose unfolds. Join us today – your adventure awaits! 

          </p>
        </div>
      </div>


            <div className="flex flex-col ">
              {/* Section title on big screens */}

              {/* Section title on small screens */}
              <div className="mb-8 block md:hidden text-sm">
                <div className="wow fadeInUp w-full" data-wow-delay=".1s">
                  <h1 className="mb-4 text-3xl font-bold !leading-tight text-black/80 dark:text-white sm:text-4xl">
                  Discover Your Path!
                  </h1>
                  <p className="text-base !leading-relaxed text-body-color md:text-lg">
                  At Bugema, it is not just about academics; it is about
                    nurturing your mind, heart, and hands. Bugema fosters
                    holistic excellence, where character development meets
                    intellectual growth. With Flexible Intakes, whether you are a
                    fresh high school graduate or a working professional seeking
                    advancement, Bugema offers multiple intakes throughout the
                    year. No need to wait, start your journey now. Bugema
                    University, where dreams take root, friendships flourish,
                    and purpose unfolds. Join us today, your adventure awaits!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>
    </>
  );
};

export default ExploreGraduation;
