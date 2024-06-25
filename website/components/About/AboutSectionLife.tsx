'use client';
import { useState } from "react";
import Image from "next/image";
import im3 from "../../public/images/features/reg.jpg";
import Modal from "../Helper/Modal";


const AboutSectionLife = () => {
  const [showModal, setShowModal] = useState(false);
  const showModalHandler = () => setShowModal(true);
  const closeModalHandler = () => setShowModal(false);

  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">

      {/* Modal */}
      {showModal && <Modal hideModal={closeModalHandler} />}

      <h1 className="text-body-color dark:text-white text-center font-semibold mb-5 text-lg md:text-xl lg:text-2xl xl:text-3xl">
      Whats happening at Bugema University?
    </h1>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-14 ">
              {/* image one */}
           <div className="w-full px-4">
            <div
              className="wow fadeInUp mx-auto max-w-[1000px] overflow-hidden rounded-md"
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
              {/* image two */}
          <div className="w-full px-4">
            <div
              className="wow fadeInUp mx-auto max-w-[1000px] overflow-hidden rounded-md"
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
           {/* image three */}
          <div className="w-full px-4">
            <div
              className="wow fadeInUp mx-auto max-w-[1000px] overflow-hidden rounded-md"
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
           {/* image four */}
          <div className="w-full px-4">
            <div
              className="wow fadeInUp mx-auto max-w-[1000px] overflow-hidden rounded-md"
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
           {/* image five */}
          <div className="w-full px-4">
            <div
              className="wow fadeInUp mx-auto max-w-[1000px] overflow-hidden rounded-md"
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
             {/* image six */}
          <div className="w-full px-4">
            <div
              className="wow fadeInUp mx-auto max-w-[1000px] overflow-hidden rounded-md"
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
    
    <div className="container">
      <h1 className="text-body-color dark:text-white font-semibold text-center text-2xl md:text-3xl mt-8 md:mt-6 mb-4 md:mb-6">
        Find your community
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-14 mt-30">

      <div className="mb-8 p-4 border border-gray-300 hover:bg-gray-500 transition-colors duration-300 ease-in-out rounded-md relative group">
        <h1 className="text-body-color dark:text-white text-xl font-semibold underline text-center">Environment</h1>
        <p className="">
            Beautiful, unique,peaceful, green campus. Built on 300 acres of parkland, with views over the historic city.
        </p>
        <button className="bg-gray-300 text-white py-2 px-4 rounded-md shadow-lg hover:bg-primary-600 transition-colors duration-300 ease-in-out">
          Explore more
        </button>
        <Image src={im3} alt="Image 1" className="absolute inset-0 w-full h-full object-cover opacity-100 group-hover:opacity-0 transition-opacity duration-300 ease-in-out"/>
      </div>
      
      <div className="mb-8 p-4 border border-gray-300 hover:bg-gray-500 transition-colors duration-300 ease-in-out rounded-md relative group">
        <h1 className="text-body-color dark:text-white text-xl font-semibold underline text-center">Facilities</h1>
        <p className="">
          Diverse, friendly, engaging. We are surrounded by hostoric buildings, renovated for 21st century study. With restaurants, cafes and our student Hub.
        </p>
        <button className="bg-gray-300 text-white py-2 px-4 rounded-md shadow-lg hover:bg-primary-600 transition-colors duration-300 ease-in-out">
          Explore more
        </button>
        <Image src={im3} alt="Image 1" className="absolute inset-0 w-full h-full object-cover opacity-100 group-hover:opacity-0 transition-opacity duration-300 ease-in-out"/>
      </div>

      <div className="mb-8 p-4 border border-gray-300 hover:bg-gray-500 transition-colors duration-300 ease-in-out rounded-md relative group">
        <h1 className="text-body-color dark:text-white text-xl font-semibold underline text-center">Program</h1>
        <p className="">
          A specialist postgraduate centre in one of the most culturally rich cities in the world. We offer advanced, flexible Masters programmes across the arts.
        </p>
        <button className="bg-gray-300 text-white py-2 px-4 rounded-md shadow-lg hover:bg-primary-600 transition-colors duration-300 ease-in-out">
          Explore more
        </button>
        <Image src={im3} alt="Image 1" className="absolute inset-0 w-full h-full object-cover opacity-100 group-hover:opacity-0 transition-opacity duration-300 ease-in-out"/>

      </div>
  </div>
    </div>
    </section>
  )
};

export default AboutSectionLife;
