"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import Model from "@/components/model/Model";
import Model1 from "@/components/model/Model1";
import Model2 from "@/components/model/Model2";
import Model3 from "@/components/model/Model3";
import Model4 from "@/components/model/Model4";
import Advert from "../model/advertmodel";
import { usePathname } from "next/navigation";
import confetti from "canvas-confetti";

import image from "../../public/images/logo/bu_logo_nav.png";

import "../../styles/nav.css";
import "../../styles/index.css";
import { FaChevronDown } from "react-icons/fa";
import menuData from "./menuData";
import Router from "next/router";
import { ArrowRight } from "lucide-react";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [showModel4, setShowModel4] = useState(false);
  const [showModel3, setShowModel3] = useState(false);
  const [showModel, setShowModel] = useState(false);
  const [showModel1, setShowModel1] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [openIndex, setOpenIndex] = useState(-1);
  const [showModel2, setShowModel2] = useState(false);
  const [advertvisible, setadvertvisible] = useState(true);
  const [hideMobileNav, setHideMobileNav] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState<"bg-dark" | "">("");
        const pathname = usePathname();
        
 const router = Router
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  const handleStickyNavbar = () => {
    if (window.scrollY >= 3) {
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
        setTimeout(()=>{
                setadvertvisible(false)
        },10000)
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

  useEffect(() => {
        showModel4 || showModel3 || showModel2 || showModel1 || showModel ? setBackgroundColor("bg-dark") : setBackgroundColor(""); 
  },[showModel,showModel1,showModel2,showModel3,showModel4]);

  const first_modal = () => {
    setShowModel((prevState)=>!prevState);
    setShowModel1(false);
    setShowModel2(false);
    setShowModel3(false);
    setShowModel4(false);
  };

  useEffect(() => {
    document.body.style.overflow = showModel1 ? "hidden" : "auto";
  }, [showModel1]);

  const second_modal = () => {
    setShowModel1((prevState)=>!prevState);
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
    setShowModel2((prevState)=>!prevState);
    setShowModel(false);
    setShowModel1(false);
    setShowModel3(false);
    setShowModel4(false);
  };

  useEffect(() => {
    document.body.style.overflow = showModel3 ? "hidden" : "auto";
  }, [showModel3]);

  const forth_modal = () => {
    setShowModel3((prevState)=>!prevState);
    setShowModel(false);
    setShowModel1(false);
    setShowModel2(false);
    setShowModel4(false);
  };

  useEffect(() => {
    document.body.style.overflow = showModel4 ? "hidden" : "auto";
  }, [showModel4]);

  const fifth_modal = () => {
    setShowModel4((prevState)=>!prevState);
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
 

  function useCountdown(target: Date) {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);
  const diff = Math.max(0, target.getTime() - now.getTime());
  const s = Math.floor(diff / 1000);
  const d = Math.floor(s / 86400);
  const h = Math.floor((s % 86400) / 3600);
  const m = Math.floor((s % 3600) / 60);
  const sec = s % 60;
  return { d, h, m, s: sec, done: diff === 0 };
}
 const t = new Date();
//    t.setHours(23, 59, 59, 999);
    t.setDate(t.getDate() + 3); // 4 days from now
//     console.log("grad",t);
    
const grad = useMemo(() => {
        const TARGET_ISO = '2025-11-09T09:00:50+03:00';
//     const TARGET_ISO = '2025-11-05T10:07:00+03:00';
const targetTime = Date.parse(TARGET_ISO); // number (ms)
//     t.setHours(23, 59, 59, 999);
//     t.setDate("Sun Nov 09 2025 09:00:50 GMT+0300 (East Africa Time)"); // 4 days from now
    return new Date(targetTime)
  }, []);
 const { d, h, m, s, done } = useCountdown(grad);
    const confettiRef = useRef<HTMLCanvasElement | null>(null);
        
useEffect(() => {
        if (!done) return;
  if (!confettiRef.current) return;

  const myConfetti = confetti.create(confettiRef.current, {
    resize: true,
    useWorker: true,
  });

  const shoot = () => {
    myConfetti({
      particleCount: 14,
      spread: 80,
      startVelocity: 40,
      ticks: 250,
      origin: { x: Math.random(), y: Math.random() * 0.25 }, // top 25%
      scalar: 1,
      disableForReducedMotion: true,
    });
  };

  const interval = setInterval(shoot, 300); // every 300ms

  return () => {
    clearInterval(interval);
    myConfetti.reset();
  };
}, [done]);

 const pathNames = [
        "news",
        'studentlife',
        "work_program",
        "religious",
        "events",
        "sports",
        "administrator",
        "publications",
 ]
  const checkPathname = pathNames.some((path) => pathname?.includes(path));

  return (
    <>
    {/* Header on big screens */}
      <header
        // className={`hidden md:flex header top-0 left-0 z-40 w-full items-center  mt-[-8px] ${
        //   sticky
        //     ? " bg-dark !fixed !z-[9999] ! bg-opacity-100 shadow-sticky backdrop-blur-sm fade-in !transition dark:! dark:!bg-opacity-100"
        //     : "absolute"
        // }`}
        className={`hidden md:flex  header left-0 z-40 w-full items-center h-20 ${backgroundColor}  ${ 
          sticky
            ? "bg-dark  text-white top-0 !fixed !z-[9999] bg-opacity-80 border-b-4 border-b-yellow-200 shadow-sticky backdrop-blur-sm fades-out  transition"
            : "absolute top-10  fades-in text-white"
        }`}
      >
        <div className={`container `}>
          <div className="relative flex items-center justify-between">
            <div className="w-60 relative z-10 ">
              <Link
                href="/"
                className={`header-logo block w-full ${

                  sticky ? "py-2 lg:py-2" : " py-3"
                }`}
              > 
                <Image
                  src={image}
                  alt="logo"
                  width={4572}
                  height={1296}
                  className="w-full dark:hidden"
                />
                <Image
                  src={image}
                  alt="logo"
                  width={100}
                  height={20}
                  className="hidden w-full dark:block"
                /> 
              </Link>
            </div> 
          {/*  <div className={`${sticky? " flex flex-col text-blue-600 bg-white bg-opacity-60 backdrop-blur-lg  px-3 md:px-5 py-2 md:py-3 rounded-md text-center font-bold":"hidden"} `}>
           <div className="text-[10px] md:text-xs uppercase opacity-90">Graduation Count Down</div>
          <div className="flex items-center gap-1 md:gap-2 font-mono">
            {[
              { v: d, label: "D" },
              { v: h, label: "H" },
              { v: m, label: "M" },
              { v: s, label: "S" },
            ].map((t) => (
              <div
                key={t.label}
                className="bg-white/15 backdrop-blur px-1.5 md:px-2 py-0.5 md:py-1 rounded md:rounded-md text-xs md:text-sm font-semibold"
              >
                {String(t.v).padStart(2, "0")}
                <span className="ml-1 text-[9px] md:text-[10px] opacity-80">{t.label}</span>
              </div>
            ))}
          </div> 
        </div>*/}
            <div className="flex space-x-20 justify-between transform bg-transparent">
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
                  className={`navbar hidden ${sticky? "" : "mt-1" }  
                  lg:block absolute right-0 z-30 w-[250px] 
                  rounded border-[.5px] border-body-color/50 
                  bg-primary py-4 px-6 duration-300 ease-out transition-transform 
                  transform dark:border-body-color/20 dark:bg-white lg:visible 
                  lg:static lg:w-auto lg:border-none lg:bg-transparent lg:p-0 lg:opacity-100`}
                >
                  <ul className={`block lg:flex   lg:space-x-8 top-0 left-0 h-full ${ checkPathname ? `${sticky? "" :"text-black"}` :"text-white"} ` }>

                  <li className="group relative ">
                      <Link
                        href="/"
                        className={`nav hover ml-3 flex py-2  text-md  font-bold group-hover:opacity-70 lg:mr-5 lg:inline-flex lg:py-6 lg:px-0`}
                        onClick={close } onMouseEnter={close}
                        >

                        <span className={"hover:navlinks"}>
                          Home
                        </span>
                        
                      </Link>
                    </li>

                    <li className="group relative">
                      <div   className={`nav cursor-pointer hover ml-3 flex py-2  text-md  font-bold group-hover:opacity-70 lg:mr-5 lg:inline-flex lg:py-6 lg:px-0`}  onClick={first_modal }>

                        <span className={showModel ? "active" : ""}>
                          Programs
                        </span>
                        <span className="my-1 ml-2 dark:text-dark  text-bold">
                          <FaChevronDown className={showModel ? "drop" : "revert"} />
                        </span>
                      </div>
                    </li>
                    

                    <li>
                      <div
                        className={`nav cursor-pointer hover flex py-2    font-bold group-hover:opacity-70 lg:mr-5 lg:inline-flex lg:py-6 lg:px-0`}

                        onClick={second_modal}
                      > 
                        <span className={showModel1 ? "active" : ""}>
                          Student life
                        </span>
                        <span className="my-1 ml-2 dark:text-dark ">
                          <FaChevronDown className={showModel1 ? "drop" : "revert"} />
                        </span>
                      </div>
                    </li>

                    <li>
                      <div
                        className={`nav cursor-pointer hover flex py-2  group  font-bold group-hover:opacity-70 lg:mr-5 lg:inline-flex lg:py-6 lg:px-0`}

                        // onMouseEnter={third_modal}
                      >
                        <span className={showModel2 ? "active" : ""}>
                           <Link href="/publications" >
                           Research                      
                          </Link>
                        </span>
                        <span className={"my-1 ml-2 dark:text-dark "}>
                             <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                        </span>
                      </div>
                    </li>
                    <li>
                      <div
                        className={`nav cursor-pointer hover flex py-2    font-bold group-hover:opacity-70 lg:mr-5 lg:inline-flex lg:py-6 lg:px-0`}

                        onClick={forth_modal}


                      >
                        <span className={showModel3 ? "active" : ""}>
                          Campuses
                        </span>
                        <span className="my-1 ml-2 dark:text-dark ">
                          <FaChevronDown className={showModel3 ? "drop" : "revert"} />
                        </span>
                      </div>
                    </li>

                    <li>
                      <div
                        className={`nav cursor-pointer hover flex py-2    font-bold group-hover:opacity-70 lg:mr-5 lg:inline-flex lg:py-6 lg:px-0`}
                        onClick={fifth_modal}
                      >
                        <span className={showModel4 ? "active" : ""}>
                          Contact Us
                        </span>
                        <span className="my-1 ml-2 dark:text-dark ">
                          <FaChevronDown className={showModel4 ? "drop" : "revert"} />
                        </span>
                      </div>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          {/* <div className={`${sticky?" hidden ":" zoom-in"}  flex text-blue-600 flex-col w-[20%] bg-white bg-opacity-70 backdrop-blur-lg  px-3 md:px-5 py-2 md:py-3 rounded-md text-center font-bold`}>
          <div className="text-[10px] md:text-xs uppercase opacity-90">Graduation Count Down</div>
          <div className="flex items-center gap-1 md:gap-2 font-mono">
            {[
              { v: d, label: "D" },     
              { v: h, label: "H" },
              { v: m, label: "M" },
              { v: s, label: "S" },
            ].map((t) => (
              <div
                key={t.label}
                className="bg-white/15 backdrop-blur px-1.5 md:px-2 py-0.5 md:py-1 rounded md:rounded-md text-xs md:text-sm font-semibold"
              >
                {String(t.v).padStart(2, "0")}
                <span className="ml-1 text-[9px] md:text-[10px] opacity-80">{t.label}</span>
              </div>
            ))}
          </div>
        </div> */}
        </div>
       
      </header>
           {/* <canvas ref={confettiRef} className="pointer-events-none flex h-screen min-w-full absolute right-0 inset-0 z-[10000]" /> */}

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
                <nav
                  id="navbarCollapse"
                  className={`navbar absolute right-0 z-30 w-[250px] rounded border-[.5px] border-body-color/50 bg-blue-700 py-4 px-6 duration-300 dark:border-body-color/20 dark:bg-dark lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${
                    navbarOpen
                      ? "visibility top-full opacity-100"
                      : "invisible top-[120%] opacity-0"
                  }`}
                >
                  <ul className="block lg:flex lg:space-x-12">
                    {menuData.map((menuItem, index) => (

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

                    <li className="group relative" >
                         <a href="tel:+256769593407"
                         className="flex py-2 text-sm text-white group-hover:opacity-70
                        dark:text-white border-b border-body-color border-opacity-40 
                        lg:mr-0 lg:inline-flex lg:py-6 lg:px-0"
                         >
                                Contact Us +256769593407
                                </a>
                    </li>
                    
                  </ul>
                </nav>
              </div>
              <div className="flex items-center justify-end pr-16 lg:pr-0">
                <Link
                  href="/signin"
                  className="hidden py-3 px-7 text-base font-bold text-dark hover:opacity-70 dark:text-white md:block"
                >
                  Sign In
                </Link>
                <Link
                  href="/signup"
                  className="ease-in-up hidden rounded-md bg-primary py-3 px-8 text-base font-bold text-white transition duration-300 hover:bg-opacity-90 hover:shadow-signUp md:block md:px-9 lg:px-6 xl:px-9"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
      
      {/* {navbarOpen && !hideMobileNav && (
        <MobileNav setNavbarOpen={setNavbarOpen} navbarOpen={navbarOpen} />
      )} */}

<Model isvisible={showModel} onClose={() => setShowModel(false)}>
        <></>
      </Model>

      <Model1 issvisible={showModel1} onClose={() => setShowModel1(false)}>
        <></>
      </Model1>
      <Model2 isssvisible={showModel2} onClose={() => setShowModel2(false)}>
        <></>
      </Model2>
      <Model3 is3visible={showModel3} onClose={() => setShowModel3(false)}/>
        {/* <></> */}
      {/* </Model3> */}
      <Model4 is4visible={showModel4} onClose={() => {setShowModel4(false)}} palmGirlsImage="/placeholder.svg?height=450&width=350">
        <></>
      </Model4>

      {/* <Advert isadvertvisible={advertvisible} onClose={() => setadvertvisible(false)} >
        <></>
      </Advert> */}
    </>
  );
};

export default Header;
