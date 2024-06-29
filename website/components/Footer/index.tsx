"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaChevronDown } from 'react-icons/fa'
import image from "@/public/images/logo/bugema.png";

const Footer = () => {

  const [isOpen, setIsOpen] = useState({ 
    usefulLinks: false,
    downloads: false,
    policies: false,
  });

  const toggleDropdown = (section) => { 
    setIsOpen({
      ...isOpen,
      [section]: !isOpen[section], 
    });
  };

  return (
    <>
      <footer
        className="wow fadeInUp relative z-10 bg-primary bg-opacity-5 pt-16 md:pt-20 lg:pt-24"
        data-wow-delay=".1s"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-5/12">
              <div className="mb-12 max-w-[360px] lg:mb-16 flex flex-col justify-center text-center">
                <Link href="/" className="mb-8 flex justify-center">
                  <Image
                    src={image}
                    alt="logo"
                    className="flex dark:hidden rounded-full"
                    width={300}
                    height={30}
                  />
                  <Image
                    src={image}
                    alt="logo"
                    className="hidden dark:block rounded-full"
                    width={300}
                    height={30}
                  />
                </Link>
                <h1 className="mb-9 text-base font-medium leading-relaxed text-body-color">
                Bugema University, P.O. Box 6529 Kampala, Uganda
                </h1>
                <div className="flex items-center justify-center">
                  <Link
                    href="/https://www.facebook.com"
                    aria-label="social-link"
                    className="mr-6 text-[#CED3F6] hover:text-primary"
                    // text-[#4d5fe6]
                  >
                    <svg className=" hover:scale-110 hover:transition-all rounded dark:bg-none bg-black hover:duration-300" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50">
                    <path d="M 11.300781 2 C 6.1645496 2 2 6.1645496 2 11.300781 L 2 38.800781 C 2 43.937013 6.1645496 48.099609 11.300781 48.099609 L 38.800781 48.099609 C 43.937013 48.099609 48.099609 43.937013 48.099609 38.800781 L 48.099609 11.289062 L 48.099609 11.277344 C 47.988214 6.1531405 43.848929 2 38.800781 2 L 11.300781 2 z M 11.300781 4 L 38.800781 4 C 42.752633 4 46.011005 7.2464683 46.099609 11.322266 L 46.099609 38.800781 C 46.099609 42.864549 42.864549 46.099609 38.800781 46.099609 L 33 46.099609 L 33 29 L 37.847656 29 L 39.179688 21 L 33 21 L 33 19 C 33 18.45 33.05476 18.405705 33.251953 18.279297 C 33.44915 18.152889 34.029365 18 35 18 L 39 18 L 39 11.271484 L 38.306641 11.048828 C 38.306641 11.048828 35.129885 10 32 10 C 29.096296 10 26.957792 10.953443 25.679688 12.632812 C 24.401582 14.312183 24 16.536525 24 19 L 24 21 L 21 21 L 21 29 L 24 29 L 24 46.099609 L 11.300781 46.099609 C 7.2370133 46.099609 4 42.864549 4 38.800781 L 4 11.300781 C 4 7.2370133 7.2370133 4 11.300781 4 z M 32 12 C 34.168683 12 36.174546 12.537635 37 12.773438 L 37 16 L 35 16 C 33.870635 16 32.949678 16.09711 32.171875 16.595703 C 31.394072 17.094295 31 18.05 31 19 L 31 23 L 36.820312 23 L 36.152344 27 L 31 27 L 31 46.099609 L 26 46.099609 L 26 27 L 23 27 L 23 23 L 26 23 L 26 19 C 26 16.763475 26.399589 14.98938 27.271484 13.84375 C 28.14338 12.69812 29.503704 12 32 12 z"
                      fill="white"></path>
                    </svg>
                  </Link>
                  <Link
                    href="/https://www.x.com"
                    aria-label="social-link"
                    className="mr-6 text-[#CED3F6] hover:text-primary"
                  >
                    <svg className=" hover:scale-110 hover:transition-all rounded dark:bg-none bg-black hover:duration-300" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50">
                    <path d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z" 
                      fill="white"></path>
                    </svg>
                  </Link>
                  <Link
                    href="/"
                    aria-label="social-link"
                    className="mr-6 text-[#CED3F6] hover:text-primary"
                  >
                    <svg className=" hover:scale-110 hover:transition-all rounded dark:bg-none bg-black hover:duration-300" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50">
                    <path d="M 24.402344 9 C 17.800781 9 11.601563 9.5 8.300781 10.199219 C 6.101563 10.699219 4.199219 12.199219 3.800781 14.5 C 3.402344 16.898438 3 20.5 3 25 C 3 29.5 3.398438 33 3.898438 35.5 C 4.300781 37.699219 6.199219 39.300781 8.398438 39.800781 C 11.902344 40.5 17.898438 41 24.5 41 C 31.101563 41 37.097656 40.5 40.597656 39.800781 C 42.800781 39.300781 44.699219 37.800781 45.097656 35.5 C 45.5 33 46 29.402344 46.097656 24.902344 C 46.097656 20.402344 45.597656 16.800781 45.097656 14.300781 C 44.699219 12.101563 42.800781 10.5 40.597656 10 C 37.097656 9.5 31 9 24.402344 9 Z M 24.402344 11 C 31.601563 11 37.398438 11.597656 40.199219 12.097656 C 41.699219 12.5 42.898438 13.5 43.097656 14.800781 C 43.699219 18 44.097656 21.402344 44.097656 24.902344 C 44 29.199219 43.5 32.699219 43.097656 35.199219 C 42.800781 37.097656 40.800781 37.699219 40.199219 37.902344 C 36.597656 38.601563 30.597656 39.097656 24.597656 39.097656 C 18.597656 39.097656 12.5 38.699219 9 37.902344 C 7.5 37.5 6.300781 36.5 6.101563 35.199219 C 5.300781 32.398438 5 28.699219 5 25 C 5 20.398438 5.402344 17 5.800781 14.902344 C 6.101563 13 8.199219 12.398438 8.699219 12.199219 C 12 11.5 18.101563 11 24.402344 11 Z M 19 17 L 19 33 L 33 25 Z M 21 20.402344 L 29 25 L 21 29.597656 Z" 
                      fill="white"></path>
                    </svg>
                  </Link>
                  <Link
                    href="/https://www.youtube.com"
                    aria-label="social-link"
                    className="mr-6 text-[#CED3F6] hover:text-primary"
                  >
                    <svg className=" hover:scale-110 hover:transition-all rounded dark:bg-none bg-black hover:duration-300" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50">
                    <path d="M 9 4 C 6.2504839 4 4 6.2504839 4 9 L 4 41 C 4 43.749516 6.2504839 46 9 46 L 41 46 C 43.749516 46 46 43.749516 46 41 L 46 9 C 46 6.2504839 43.749516 4 41 4 L 9 4 z M 9 6 L 41 6 C 42.668484 6 44 7.3315161 44 9 L 44 41 C 44 42.668484 42.668484 44 41 44 L 9 44 C 7.3315161 44 6 42.668484 6 41 L 6 9 C 6 7.3315161 7.3315161 6 9 6 z M 14 11.011719 C 12.904779 11.011719 11.919219 11.339079 11.189453 11.953125 C 10.459687 12.567171 10.011719 13.484511 10.011719 14.466797 C 10.011719 16.333977 11.631285 17.789609 13.691406 17.933594 A 0.98809878 0.98809878 0 0 0 13.695312 17.935547 A 0.98809878 0.98809878 0 0 0 14 17.988281 C 16.27301 17.988281 17.988281 16.396083 17.988281 14.466797 A 0.98809878 0.98809878 0 0 0 17.986328 14.414062 C 17.884577 12.513831 16.190443 11.011719 14 11.011719 z M 14 12.988281 C 15.392231 12.988281 15.94197 13.610038 16.001953 14.492188 C 15.989803 15.348434 15.460091 16.011719 14 16.011719 C 12.614594 16.011719 11.988281 15.302225 11.988281 14.466797 C 11.988281 14.049083 12.140703 13.734298 12.460938 13.464844 C 12.78117 13.19539 13.295221 12.988281 14 12.988281 z M 11 19 A 1.0001 1.0001 0 0 0 10 20 L 10 39 A 1.0001 1.0001 0 0 0 11 40 L 17 40 A 1.0001 1.0001 0 0 0 18 39 L 18 33.134766 L 18 20 A 1.0001 1.0001 0 0 0 17 19 L 11 19 z M 20 19 A 1.0001 1.0001 0 0 0 19 20 L 19 39 A 1.0001 1.0001 0 0 0 20 40 L 26 40 A 1.0001 1.0001 0 0 0 27 39 L 27 29 C 27 28.170333 27.226394 27.345035 27.625 26.804688 C 28.023606 26.264339 28.526466 25.940057 29.482422 25.957031 C 30.468166 25.973981 30.989999 26.311669 31.384766 26.841797 C 31.779532 27.371924 32 28.166667 32 29 L 32 39 A 1.0001 1.0001 0 0 0 33 40 L 39 40 A 1.0001 1.0001 0 0 0 40 39 L 40 28.261719 C 40 25.300181 39.122788 22.95433 37.619141 21.367188 C 36.115493 19.780044 34.024172 19 31.8125 19 C 29.710483 19 28.110853 19.704889 27 20.423828 L 27 20 A 1.0001 1.0001 0 0 0 26 19 L 20 19 z M 12 21 L 16 21 L 16 33.134766 L 16 38 L 12 38 L 12 21 z M 21 21 L 25 21 L 25 22.560547 A 1.0001 1.0001 0 0 0 26.798828 23.162109 C 26.798828 23.162109 28.369194 21 31.8125 21 C 33.565828 21 35.069366 21.582581 36.167969 22.742188 C 37.266572 23.901794 38 25.688257 38 28.261719 L 38 38 L 34 38 L 34 29 C 34 27.833333 33.720468 26.627107 32.990234 25.646484 C 32.260001 24.665862 31.031834 23.983076 29.517578 23.957031 C 27.995534 23.930001 26.747519 24.626988 26.015625 25.619141 C 25.283731 26.611293 25 27.829667 25 29 L 25 38 L 21 38 L 21 21 z" 
                      fill="white"></path>
                    </svg>
                  </Link>
                  <Link
                    href="/https://www.linkedin.com"
                    aria-label="social-link"
                    className="mr-6 text-[#CED3F6] hover:text-primary"
                  >
                    <svg className=" hover:scale-110 hover:transition-all rounded dark:bg-none bg-black hover:duration-300" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50">
                    <path d="M 9 4 C 6.2495759 4 4 6.2495759 4 9 L 4 41 C 4 43.750424 6.2495759 46 9 46 L 41 46 C 43.750424 46 46 43.750424 46 41 L 46 9 C 46 6.2495759 43.750424 4 41 4 L 9 4 z M 9 6 L 41 6 C 42.671576 6 44 7.3284241 44 9 L 44 41 C 44 42.671576 42.671576 44 41 44 L 9 44 C 7.3284241 44 6 42.671576 6 41 L 6 9 C 6 7.3284241 7.3284241 6 9 6 z M 26.042969 10 A 1.0001 1.0001 0 0 0 25.042969 10.998047 C 25.042969 10.998047 25.031984 15.873262 25.021484 20.759766 C 25.016184 23.203017 25.009799 25.64879 25.005859 27.490234 C 25.001922 29.331679 25 30.496833 25 30.59375 C 25 32.409009 23.351421 33.892578 21.472656 33.892578 C 19.608867 33.892578 18.121094 32.402853 18.121094 30.539062 C 18.121094 28.675273 19.608867 27.1875 21.472656 27.1875 C 21.535796 27.1875 21.663054 27.208245 21.880859 27.234375 A 1.0001 1.0001 0 0 0 23 26.240234 L 23 22.039062 A 1.0001 1.0001 0 0 0 22.0625 21.041016 C 21.906673 21.031216 21.710581 21.011719 21.472656 21.011719 C 16.223131 21.011719 11.945313 25.289537 11.945312 30.539062 C 11.945312 35.788589 16.223131 40.066406 21.472656 40.066406 C 26.72204 40.066409 31 35.788588 31 30.539062 L 31 21.490234 C 32.454611 22.653646 34.267517 23.390625 36.269531 23.390625 C 36.542588 23.390625 36.802305 23.374442 37.050781 23.351562 A 1.0001 1.0001 0 0 0 37.958984 22.355469 L 37.958984 17.685547 A 1.0001 1.0001 0 0 0 37.03125 16.6875 C 33.886609 16.461891 31.379838 14.012216 31.052734 10.896484 A 1.0001 1.0001 0 0 0 30.058594 10 L 26.042969 10 z M 27.041016 12 L 29.322266 12 C 30.049047 15.2987 32.626734 17.814404 35.958984 18.445312 L 35.958984 21.310547 C 33.820114 21.201935 31.941489 20.134948 30.835938 18.453125 A 1.0001 1.0001 0 0 0 29 19.003906 L 29 30.539062 C 29 34.707538 25.641273 38.066406 21.472656 38.066406 C 17.304181 38.066406 13.945312 34.707538 13.945312 30.539062 C 13.945312 26.538539 17.066083 23.363182 21 23.107422 L 21 25.283203 C 18.286416 25.535721 16.121094 27.762246 16.121094 30.539062 C 16.121094 33.483274 18.528445 35.892578 21.472656 35.892578 C 24.401892 35.892578 27 33.586491 27 30.59375 C 27 30.64267 27.001859 29.335571 27.005859 27.494141 C 27.009759 25.65271 27.016224 23.20692 27.021484 20.763672 C 27.030884 16.376775 27.039186 12.849206 27.041016 12 z" 
                      fill="white"></path>
                    </svg>
                  </Link>
                  <Link
                    href="/https://www.instagram.com"
                    aria-label="social-link"
                    className="mr-6 text-[#CED3F6] hover:text-primary"
                  >
                    <svg className=" hover:scale-110 hover:transition-all rounded dark:bg-none bg-black hover:duration-300" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50">
                    <path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z" 
                      fill="white"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>


            <div className="hidden md:block w-full md:pr-6 px-4 md:px-0 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                  Useful Links
                </h2>
                <ul>
                  <li>
                    <Link
                      href="/"
                      className="mb-4 inline-block text-base font-medium text-body-color hover:text-primary"
                    >
                      {" "}
                      Apply Today{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="mb-4 inline-block text-base font-medium text-body-color hover:text-primary"
                    >
                      {" "}
                      Graduate Verification{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="mb-4 inline-block text-base font-medium text-body-color hover:text-primary"
                    >
                      {" "}
                      ERMS Staff Login{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="mb-4 inline-block text-base font-medium text-body-color hover:text-primary"
                    >
                      {" "}
                      Student Portal{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="mb-4 inline-block text-base font-medium text-body-color hover:text-primary"
                    >
                      {" "}
                      E-Learning{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="mb-4 inline-block text-base font-medium text-body-color hover:text-primary"
                    >
                      {" "}
                      Library{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="mb-4 inline-block text-base font-medium text-body-color hover:text-primary"
                    >
                      {" "}
                      E-Library{" "}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:hidden w-full md:pr-6 px-4 md:px-0 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
              <div className="mb-12 lg:mb-16">
                <div className="flex justify-between">
                  <h2 className=" text-xl font-bold text-black dark:text-white">
                    {isOpen.usefulLinks ? (
                      <button
                        className="text-left focus:outline-none mb-4 block"
                        onClick={() => toggleDropdown("usefulLinks")}
                      >
                        Useful Links
                      </button>
                    ) : (
                      <button
                        className="text-left focus:outline-none mb-4 block"
                        onClick={() => toggleDropdown("usefulLinks")}
                      >
                        Useful Links
                      </button>
                    )}
                  </h2>
                  <FaChevronDown />
                </div>
                {isOpen.usefulLinks && (
                  <ul className="list-none">
                    <li>
                      <Link
                      href="/"
                      className="mb-4 inline-block text-base font-medium text-body-color hover:text-primary"
                    >
                      {" "}
                      Apply Today{" "}
                    </Link>
                    </li>
                    <li>
                      <Link
                      href="/"
                      className="mb-4 inline-block text-base font-medium text-body-color hover:text-primary"
                    >
                      {" "}
                      Graduate Verification{" "}
                    </Link>
                    </li>
                    <li>
                      <Link
                      href="/"
                      className="mb-4 inline-block text-base font-medium text-body-color hover:text-primary"
                    >
                      {" "}
                      ERMS Staff Login{" "}
                    </Link>
                    </li>
                    <li>
                      <Link
                      href="/"
                      className="mb-4 inline-block text-base font-medium text-body-color hover:text-primary"
                    >
                      {" "}
                      Student Portal{" "}
                    </Link>
                    </li>
                    <li>
                      <Link
                      href="/"
                      className="mb-4 inline-block text-base font-medium text-body-color hover:text-primary"
                    >
                      {" "}
                      E-Learning{" "}
                    </Link>
                    </li>
                    <li>
                      <Link
                      href="/"
                      className="mb-4 inline-block text-base font-medium text-body-color hover:text-primary"
                    >
                      {" "}
                      Library{" "}
                    </Link>
                    </li>
                    <li>
                      <Link
                      href="/"
                      className="inline-block text-base font-medium text-body-color hover:text-primary"
                    >
                      {" "}
                      E-Library{" "}
                    </Link>
                    </li>
                  </ul>
                )}
              </div>
            </div>


            <div className="hidden md:block w-full md:pl-6 px-4 md:px-0 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                  Resources
                </h2>
                <ul>
                  <li>
                    <Link
                      href="/"
                      className="mb-4 inline-block text-base font-medium text-body-color hover:text-primary"
                    >
                      {" "}
                      Strategic Plan{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="mb-4 inline-block text-base font-medium text-body-color hover:text-primary"
                    >
                      {" "}
                      Synopsis Concept{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="mb-4 inline-block text-base font-medium text-body-color hover:text-primary"
                    >
                      {" "}
                      Annual Report{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="mb-4 inline-block text-base font-medium text-body-color hover:text-primary"
                    >
                      {" "}
                      State Of The University Address{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="mb-4 inline-block text-base font-medium text-body-color hover:text-primary"
                    >
                      {" "}
                      Gender Equality Plan{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="mb-4 inline-block text-base font-medium text-body-color hover:text-primary"
                    >
                      {" "}
                      Graduating Class Requirements{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="mb-4 inline-block text-base font-medium text-body-color hover:text-primary"
                    >
                      {" "}
                      Grading System Transcript{" "}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="md:hidden w-full md:pr-6 px-4 md:px-0 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
              <div className="mb-12 lg:mb-16">
                <div className="flex justify-between">
                  <h2 className=" text-xl font-bold text-black dark:text-white">
                    {isOpen.downloads ? (
                      <button
                        className="text-left focus:outline-none mb-4 block"
                        onClick={() => toggleDropdown("downloads")}
                      >
                        Resources
                      </button>
                    ) : (
                      <button
                        className="text-left focus:outline-none mb-4 block"
                        onClick={() => toggleDropdown("downloads")}
                      >
                        Resources
                      </button>
                    )}
                  </h2>
                  <FaChevronDown />
                </div>
                {isOpen.downloads && (
                  <ul className="list-none">
                    <li>
                      <Link
                      href="/"
                      className="mb-4 inline-block text-base font-medium text-body-color hover:text-primary"
                    >
                      {" "}
                      Strategic Plan{" "}
                    </Link>
                    </li>
                    <li>
                      <Link
                      href="/"
                      className="mb-4 inline-block text-base font-medium text-body-color hover:text-primary"
                    >
                      {" "}
                      Synopsis Concept{" "}
                    </Link>
                    </li>
                    <li>
                      <Link
                      href="/"
                      className="mb-4 inline-block text-base font-medium text-body-color hover:text-primary"
                    >
                      {" "}
                      Annual Report{" "}
                    </Link>
                    </li>
                    <li>
                      <Link
                      href="/"
                      className="mb-4 inline-block text-base font-medium text-body-color hover:text-primary"
                    >
                      {" "}
                      State Of The University Address{" "}
                    </Link>
                    </li>
                    <li>
                      <Link
                      href="/"
                      className="mb-4 inline-block text-base font-medium text-body-color hover:text-primary"
                    >
                      {" "}
                      Gender Equality Plan{" "}
                    </Link>
                    </li>
                    <li>
                      <Link
                      href="/"
                      className="mb-4 inline-block text-base font-medium text-body-color hover:text-primary"
                    >
                      {" "}
                      Graduating Class Requirements{" "}
                    </Link>
                    </li>
                    <li>
                      <Link
                      href="/"
                      className=" inline-block text-base font-medium text-body-color hover:text-primary"
                    >
                      {" "}
                      Grading System Transcript{" "}
                    </Link>
                    </li>
                  </ul>
                )}
              </div>
            </div>

            <div className="hidden md:block w-full md:pl-6 px-4 md:px-0 md:w-1/2 lg:w-4/12 xl:w-3/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                  Policies
                </h2>
                <ul>
                  <li>
                    <Link
                      href="/"
                      className="mb-4 inline-block text-base font-medium text-body-color hover:text-primary"
                    >
                      {" "}
                      Examination Policy{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="mb-4 inline-block text-base font-medium text-body-color hover:text-primary"
                    >
                      {" "}
                      ICT Policy{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="mb-4 inline-block text-base font-medium text-body-color hover:text-primary"
                    >
                      {" "}
                      Annual Report{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="mb-4 inline-block text-base font-medium text-body-color hover:text-primary"
                    >
                      {" "}
                      Blended Learning Policy{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="mb-4 inline-block text-base font-medium text-body-color hover:text-primary"
                    >
                      {" "}
                      BU Research Policy{" "}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="md:hidden w-full md:pr-6 px-4 md:px-0 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
              <div className="mb-12 lg:mb-16">
                <div className="flex justify-between">
                  <h2 className=" text-xl font-bold text-black dark:text-white">
                    {isOpen.policies ? (
                      <button
                        className="text-left focus:outline-none mb-4 block"
                        onClick={() => toggleDropdown("policies")}
                      >
                        Policies
                      </button>
                    ) : (
                      <button
                        className="text-left focus:outline-none mb-4 block"
                        onClick={() => toggleDropdown("policies")}
                      >
                        Policies
                      </button>
                    )}
                  </h2>
                  <FaChevronDown />
                </div>
                {isOpen.policies && (
                  <ul className="list-none">
                    <li>
                      <Link
                      href="/"
                      className="mb-4 inline-block text-base font-medium text-body-color hover:text-primary"
                    >
                      {" "}
                      Examination Policy{" "}
                    </Link>
                    </li>
                    <li>
                      <Link
                      href="/"
                      className="mb-4 inline-block text-base font-medium text-body-color hover:text-primary"
                    >
                      {" "}
                      ICT Policy{" "}
                    </Link>
                    </li>
                    <li>
                      <Link
                      href="/"
                      className="mb-4 inline-block text-base font-medium text-body-color hover:text-primary"
                    >
                      {" "}
                      Annual Report{" "}
                    </Link>
                    </li>
                    <li>
                      <Link
                      href="/"
                      className="mb-4 inline-block text-base font-medium text-body-color hover:text-primary"
                    >
                      {" "}
                      Blended Learning Policy{" "}
                    </Link>
                    </li>
                    <li>
                      <Link
                      href="/"
                      className=" inline-block text-base font-medium text-body-color hover:text-primary"
                    >
                      {" "}
                      BU Research Policy{" "}
                    </Link>
                    </li>
                  </ul>
                )}
              </div>
            </div>

          </div>
        </div>
        <div className="bg-primary/10 py-8">
          <div className="container md:flex md:justify-center text-center md:space-x-12">
            <Link href="/" className="text-center hover:scale-105 hover:transition-all hover:duration-300 text-base text-body-color dark:text-white">
              &#169;  Bugema University
            </Link>
            <h1 className="text-center text-base text-body-color hover:scale-105 hover:transition-all hover:duration-300 dark:text-white">
              <a href="tel:+256-312-351-400">Phone: +256-312-351-400</a>
            </h1>
            <Link href='https://www.bugemauniv.ac.ug' className="text-center hover:scale-105 hover:transition-all hover:duration-300 text-base text-body-color dark:text-white">
              Website: www.bugemauniv.ac.ug
            </Link>
            <h1 className="text-center text-base hover:scale-105  hover:transition-all hover:duration-300 text-body-color dark:text-white">
              <a href="mailto:info@bugemauniv.ac.ug">Email: info@bugemauniv.ac.ug</a>
            </h1>
          </div>
        </div>
        <div className="absolute right-0 top-14 z-[-1]">
          <svg
            width="55"
            height="99"
            viewBox="0 0 55 99"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle opacity="0.8" cx="49.5" cy="49.5" r="49.5" fill="#959CB1" />
            <mask
              id="mask0_94:899"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="99"
              height="99"
            >
              <circle
                opacity="0.8"
                cx="49.5"
                cy="49.5"
                r="49.5"
                fill="#4A6CF7"
              />
            </mask>
            <g mask="url(#mask0_94:899)">
              <circle
                opacity="0.8"
                cx="49.5"
                cy="49.5"
                r="49.5"
                fill="url(#paint0_radial_94:899)"
              />
              <g opacity="0.8" filter="url(#filter0_f_94:899)">
                <circle cx="53.8676" cy="26.2061" r="20.3824" fill="white" />
              </g>
            </g>
            <defs>
              <filter
                id="filter0_f_94:899"
                x="12.4852"
                y="-15.1763"
                width="82.7646"
                height="82.7646"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="10.5"
                  result="effect1_foregroundBlur_94:899"
                />
              </filter>
              <radialGradient
                id="paint0_radial_94:899"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(49.5 49.5) rotate(90) scale(53.1397)"
              >
                <stop stopOpacity="0.47" />
                <stop offset="1" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute left-0 bottom-24 z-[-1]">
          <svg
            width="79"
            height="94"
            viewBox="0 0 79 94"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              opacity="0.3"
              x="-41"
              y="26.9426"
              width="66.6675"
              height="66.6675"
              transform="rotate(-22.9007 -41 26.9426)"
              fill="url(#paint0_linear_94:889)"
            />
            <rect
              x="-41"
              y="26.9426"
              width="66.6675"
              height="66.6675"
              transform="rotate(-22.9007 -41 26.9426)"
              stroke="url(#paint1_linear_94:889)"
              strokeWidth="0.7"
            />
            <path
              opacity="0.3"
              d="M50.5215 7.42229L20.325 1.14771L46.2077 62.3249L77.1885 68.2073L50.5215 7.42229Z"
              fill="url(#paint2_linear_94:889)"
            />
            <path
              d="M50.5215 7.42229L20.325 1.14771L46.2077 62.3249L76.7963 68.2073L50.5215 7.42229Z"
              stroke="url(#paint3_linear_94:889)"
              strokeWidth="0.7"
            />
            <path
              opacity="0.3"
              d="M17.9721 93.3057L-14.9695 88.2076L46.2077 62.325L77.1885 68.2074L17.9721 93.3057Z"
              fill="url(#paint4_linear_94:889)"
            />
            <path
              d="M17.972 93.3057L-14.1852 88.2076L46.2077 62.325L77.1884 68.2074L17.972 93.3057Z"
              stroke="url(#paint5_linear_94:889)"
              strokeWidth="0.7"
            />
            <defs>
              <linearGradient
                id="paint0_linear_94:889"
                x1="-41"
                y1="21.8445"
                x2="36.9671"
                y2="59.8878"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0.62" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_94:889"
                x1="25.6675"
                y1="95.9631"
                x2="-42.9608"
                y2="20.668"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.51" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_94:889"
                x1="20.325"
                y1="-3.98039"
                x2="90.6248"
                y2="25.1062"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0.62" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_94:889"
                x1="18.3642"
                y1="-1.59742"
                x2="113.9"
                y2="80.6826"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.51" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_94:889"
                x1="61.1098"
                y1="62.3249"
                x2="-8.82468"
                y2="58.2156"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0.62" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint5_linear_94:889"
                x1="65.4236"
                y1="65.0701"
                x2="24.0178"
                y2="41.6598"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.51" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </footer>
    </>
  );
};

export default Footer;