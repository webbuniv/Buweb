"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Model from "@/components/model/Model";
import Model1 from "@/components/model/Model1";
import Model2 from "@/components/model/Model2";
import Model3 from "@/components/model/Model3";
import Model4 from "@/components/model/Model4";

import image from "../../public/images/logo/bu_logo_nav.png";

import "../../styles/nav.css";
import "../../styles/index.css";
import { FaChevronDown } from "react-icons/fa";
import MobileNav from "../MobileNav/MobileNav";
import menuDataTwo from "./menuDataTwo";

const AboveHeader = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [showModel4, setShowModel4] = useState(false);
  const [showModel3, setShowModel3] = useState(false);
  const [showModel, setShowModel] = useState(false);
  const [showModel1, setShowModel1] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [openIndex, setOpenIndex] = useState(-1);
  const [showModel2, setShowModel2] = useState(false);
  const [hideMobileNav, setHideMobileNav] = useState(false);
  const [showModel0, setShowModel0] = useState(false);

  const [currentStatement, setCurrentStatement] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [letterIndex, setLetterIndex] = useState(0);

  useEffect(() => {
    const statements = [
      "Greetings from Bugema University",
      "Step Into Excellence at Bugema University!",
      "Unleash the Power of Knowledge",
      "Stay Tuned for Exciting Upcoming Events!",
      "Celebrate Success!",
      "Graduation from 8th to 19th Nov 2024"
    ];

    if (letterIndex < statements[currentStatement].length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + statements[currentStatement][letterIndex]);
        setLetterIndex(letterIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setLetterIndex(0);
        setDisplayedText("");
        setCurrentStatement((prev) => (prev + 1) % statements.length);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [letterIndex, currentStatement]);

  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };
  

  const handleStickyNavbar = () => {
    if (window.scrollY >= 700) {
      setSticky(true);
    } else {
      setSticky(false);
    }
    if (window.scrollY > 50) {
      setHideMobileNav(true);
    } else {
      setHideMobileNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
    return () => {
      window.removeEventListener("scroll", handleStickyNavbar);
    };
  }, []);

  const handleSubmenu = (index) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  useEffect(() => {
    document.body.style.overflow = showModel ? "hidden" : "auto";
  }, [showModel]);

  const first_modal = () => {
    setShowModel(true);
    setShowModel1(false);
    setShowModel2(false);
    setShowModel3(false);
    setShowModel4(false);
  };

  useEffect(() => {
    document.body.style.overflow = showModel1 ? "hidden" : "auto";
  }, [showModel1]);

  const second_modal = () => {
    setShowModel1(true);
    document.body.style.overflow = showModel1 ? "hidden" : "auto";
    setShowModel(false);
    setShowModel2(false);
    setShowModel3(false);
    setShowModel4(false);
  };

  useEffect(() => {
    document.body.style.overflow = showModel2 ? "hidden" : "auto";
  }, [showModel2]);

  const third_modal = () => {
    setShowModel2(true);
    setShowModel(false);
    setShowModel1(false);
    setShowModel3(false);
    setShowModel4(false);
  };

  useEffect(() => {
    document.body.style.overflow = showModel3 ? "hidden" : "auto";
  }, [showModel3]);

  const forth_modal = () => {
    setShowModel3(true);
    setShowModel(false);
    setShowModel1(false);
    setShowModel2(false);
    setShowModel4(false);
  };

  useEffect(() => {
    document.body.style.overflow = showModel4 ? "hidden" : "auto";
  }, [showModel4]);

  const fifth_modal = () => {
    setShowModel4(true);
    setShowModel3(false);
    setShowModel(false);
    setShowModel1(false);
    setShowModel2(false);
  };

  const close = () => {
    setShowModel4(false);
    setShowModel3(false);
    setShowModel(false);
    setShowModel1(false);
    setShowModel2(false);
  };
  const toggleDropdown = () => {
    setShowModel0(!showModel0);
  };
  

  return (
    <>
    {/* Header on big screens */}
      <header
        className={`hidden md:flex header top-0 left-0 z-20 w-full items-center bg-white  mt-[-20px] ] ${
          sticky
            ? "hidden bg-white ! bg-opacity-100 shadow-sticky backdrop-blur-sm fade-in !transition dark:! dark:!bg-opacity-100"
            : "absolute fixed"
        }`}
      >
        <div className="container ">
          <div className="flex items-center justify-between bg-white mt-[20px]">
          <div className="w-160 relative z-10">
            <p className="text-blue-600 text-2xl">{displayedText}</p> {/* Text color and size */}
          </div>
            <div className="flex space-x-20 justify-between transform bg-white mt-[-10px] mb-[-10px]">
              <div>
                <button
                  onClick={() => setNavbarOpen(!navbarOpen)}
                  id="navbarToggler"
                  aria-label="Mobile Menu"
                  className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
                >
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? " top-[7px] rotate-45" : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? "opacity-0 " : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? " top-[-8px] -rotate-45" : " "
                    }`}
                  />
                </button>

                <nav
                  id="navbarCollapse"
                  className={`navbar hidden lg:block absolute right-0 z-30 w-[250px] rounded border-[.5px] border-body-color/50 bg-primary py-4 px-6 duration-300 ease-out transition-transform transform dark:border-body-color/20 dark:bg-white lg:visible lg:static lg:w-auto lg:border-none lg:bg-dark lg:p-0 lg:opacity-100`}
                >
                  <ul className="block lg:flex bg-white lg:space-x-8 top-0 left-0 h-full  text-black" >

                  <li className="group relative">
                      <Link
                        href="/calendar"
                        className={`nav hover ml-3 flex py-2 text-black text-sm  font-bold group-hover:opacity-70 lg:mr-5 lg:inline-flex lg:py-6 lg:px-0`}

                        >

                        <span className={""}>
                          Calendar
                        </span>
                        
                      </Link>
                    </li>

                    <li className="group relative">
                      <Link
                        href=""
                        className={`nav hover ml-3 flex py-2 text-black text-sm  font-bold group-hover:opacity-70 lg:mr-5 lg:inline-flex lg:py-6 lg:px-0`}

                        onClick={() =>
                          window.open("https://elearning.bugemauniv.ac.ug/", "_blank")
                        }
                        >

                        <span className={showModel ? "active" : ""}>
                          eLearning
                        </span>
                        {/* <span className="my-1 ml-2 dark:text-dark  text-bold">
                          <FaChevronDown className={showModel ? "drop" : ""} />
                        </span> */}
                      </Link>
                    </li>

                    <li>
                      <Link
                        href=""
                        className={`nav hover flex py-2  text-black text-sm font-bold group-hover:opacity-70 lg:mr-5 lg:inline-flex lg:py-6 lg:px-0`}

                        onClick={() =>
                          window.open("https://erms.bugemauniv.ac.ug/buerms/default.aspx/", "_blank")
                        }

                      >
                        <span className={showModel3 ? "active" : ""}>
                          Staff Portal
                        </span>
                        {/* <span className="my-1 ml-2 dark:text-dark ">
                          <FaChevronDown className={showModel3 ? "drop" : ""} />
                        </span> */}
                      </Link>
                    </li>
                    

                    <li className="relative group">
                        {/* The "Students Portal" link */}
                        <Link
                          href="#"
                          className={`nav flex py-2 text-black text-sm font-bold lg:mr-5 lg:inline-flex lg:py-6 lg:px-0`}
                        >
                          <span>Students Portal</span>
                          <span className="my-1 ml-2 dark:text-dark">
                            <FaChevronDown className="transition-transform duration-300 group-hover:rotate-180" />
                          </span>
                        </Link>

                        {/* Dropdown Menu */}
                        <div
                          className="absolute top-full right-0 bg-white shadow-lg rounded-lg py-2 w-48 opacity-0 invisible group-hover:visible group-hover:opacity-100 hover:visible hover:opacity-100 transition-opacity duration-300"
                        >
                          <button
                            className="block w-full text-left px-4 py-2 hover:bg-gray-200 text-black font-semibold"
                            onClick={() =>
                              window.open("https://erms.bugemauniv.ac.ug/student/login/", "_blank")
                            }
                          >
                            Login
                          </button>
                          <button
                            className="block w-full text-left px-4 py-2 hover:bg-gray-200 text-black font-semibold"
                            onClick={() =>
                              window.open("https://erms.bugemauniv.ac.ug/student/registration/", "_blank")
                            }
                          >
                            Register
                          </button>
                          {/* <button
                            className="block w-full text-left px-4 py-2 hover:bg-gray-200 text-black font-semibold"
                            onClick={() => alert("Button 3 clicked!")}
                          >
                            Button 3
                          </button> */}
                        </div>
                      </li>
                    
                    {/* <li>
                      <Link
                        href=""
                        className={`nav hover flex py-2  text-black  font-bold group-hover:opacity-70 lg:mr-5 lg:inline-flex lg:py-6 lg:px-0`}

                        onClick={forth_modal}


                      >
                        <span className={showModel3 ? "active" : ""}>
                          Registration Portal
                        </span>
                      </Link>
                    </li> */}

                    <li>
                    <Link
                      href=""
                      className={`nav flex py-3 px-8 text-white text-sm font-bold bg-blue-700 rounded-lg group-hover:opacity-80 lg:mr-5 lg:inline-flex lg:py-6 lg:px-0`} 
                      onClick={() =>
                        window.open("https://erms.bugemauniv.ac.ug/application/", "_blank")
                      }

                    >
                      <span >
                        Apply Online
                      </span>
                    </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Header on small screens */}
      <header
        className={`flex md:hidden header top-0 left-0 z-40 w-full items-center bg-blue-700 ${
          sticky
            ? "!fixed !z-[9999] !bg-blue-700 !bg-opacity-80 shadow-sticky backdrop-blur-sm !transition dark:!bg-primary dark:!bg-opacity-20"
            : "absolute"
        }`}
      >
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">

            <div className="w-full max-w-full px-4 xl:mr-12">
              <Link
                href="/"
                className={`header-logo block w-full ${
                  sticky ? "py-5 lg:py-2" : "py-8"
                } `}
              >
                <Image
                  src={image}
                  alt="logo"
                  width={300}
                  height={30}
                  className="w-full dark:hidden"
                  />
                <Image
                  src={image}
                  alt="logo"
                  width={300}
                  height={30}
                  className="hidden w-full dark:block"
                />
              </Link>
            </div>

            <div className="flex w-full items-center justify-between px-4">
              <div>
                <button
                  onClick={navbarToggleHandler}
                  id="navbarToggler"
                  aria-label="Mobile Menu"
                  className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-white ring-opacity-60 focus:ring-2 lg:hidden"
                >
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-white bg-opacity-60 transition-all duration-300 dark:bg-white ${
                      navbarOpen ? " top-[7px] rotate-45" : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-white bg-opacity-60 transition-all duration-300 dark:bg-white ${
                      navbarOpen ? "opacity-0 " : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-white bg-opacity-60 transition-all duration-300 dark:bg-white ${
                      navbarOpen ? " top-[-8px] -rotate-45" : " "
                    }`}
                  />
                </button>
                {/* <nav
                  id="navbarCollapse"
                  className={`navbar absolute right-0 z-30 w-[250px] rounded border-[.5px] border-body-color/50 bg-blue-700 py-4 px-6 duration-300 dark:border-body-color/20 dark:bg-dark lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${
                    navbarOpen
                      ? "visibility top-full opacity-100"
                      : "invisible top-[120%] opacity-0"
                  }`}
                >
                  <ul className="block lg:flex lg:space-x-12">
                    {menuDataTwo.map((menuItem, index) => (
                      <li key={menuItem.id} className="group relative">
                        {menuItem.path ? (
                          <Link
                            href={menuItem.path}
                            className={`flex py-2 text-lg text-white group-hover:opacity-70 dark:text-white border-b border-body-color border-opacity-40 lg:mr-0 lg:inline-flex lg:py-6 lg:px-0`}
                          >
                            {menuItem.title}
                          </Link>
                        ) : (
                          <>
                            <a
                              onClick={() => handleSubmenu(index)}
                              className="flex cursor-pointer items-center justify-between py-2 text-lg border-b border-body-color border-opacity-40 text-white group-hover:opacity-70 dark:text-white lg:mr-0 lg:inline-flex lg:py-6 lg:px-0"
                            >
                              {menuItem.title}
                              <span className="pl-3">
                                <svg width="15" height="14" viewBox="0 0 15 14">
                                  <path
                                    d="M7.81602 9.97495C7.68477 9.97495 7.57539 9.9312 7.46602 9.8437L2.43477 4.89995C2.23789 4.70308 2.23789 4.39683 2.43477 4.19995C2.63164 4.00308 2.93789 4.00308 3.13477 4.19995L7.81602 8.77183L12.4973 4.1562C12.6941 3.95933 13.0004 3.95933 13.1973 4.1562C13.3941 4.35308 13.3941 4.65933 13.1973 4.8562L8.16601 9.79995C8.05664 9.90933 7.94727 9.97495 7.81602 9.97495Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                            </a>
                            <div
                              className={`submenu relative top-full left-5 rounded-md bg-blue-700 transition-[top] duration-300 group-hover:opacity-100 dark:bg-dark lg:invisible lg:absolute lg:top-[110%] lg:block lg:w-[250px] lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ${
                                openIndex === index ? "block" : "hidden"
                              }`}
                            >
                              {menuItem.submenu.map((submenuItem) => (
                                <Link
                                  href={submenuItem.path}
                                  key={submenuItem.id}
                                  className="block rounded py-2.5 text-base text-white hover:opacity-70 dark:text-white lg:px-3"
                                >
                                  {submenuItem.title}
                                </Link>
                              ))}
                            </div>
                          </>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav> */}
              </div>
              
            </div>
          </div>
        </div>
      </header>
      
    </>
  );
};

export default AboveHeader;
