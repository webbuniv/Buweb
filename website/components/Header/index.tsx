"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import ThemeToggler from "./ThemeToggler";
// import menuData from "./menuData";
import Model from "@/components/model/Model";
import image from "../../public/images/logo/bugema.png";
import "../../styles/nav.css";

const Header = () => {
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 700) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  // submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };
  
const [isOpen, setIsOpen] = useState(false);

  const [showModel, setShowModel] = useState(false);
  showModel?document.body.style.overflow = 'hidden' :document.body.style.overflow = 'auto';
  const navlinks = document.querySelectorAll('.nav');
  const activebar = () =>{
      navlinks.forEach(navlink =>{
            navlink.addEventListener('click',()=>{
                  document.querySelector('.active')?.classList.remove('active');
                  navlink.classList.add('active');
                  
            });
            });
  }
  const handleModel = () => {
      setShowModel(!showModel);
     

  };
  return (
      
    <>
    
      <header
        className={`header top-0 left-0 z-40 flex w-full items-center bg-transparent mt-[-8px] ${
          sticky
            ? "!fixed !z-[9999] ! !bg-opacity-100 shadow-sticky backdrop-blur-sm fade-in !transition dark:! dark:!bg-opacity-100"
            : "absolute" 
        }`} >
        
            <div className="container ">
                  <div className="relative -mx-4 flex items-center justify-between">
                        <div className="w-40 px-4 xl:mr-12">
                              <Link
                              href="/"
                              className={`header-logo block w-full ${
                                    sticky ? "py-5 lg:py-2" : "py-8"
                              } `}
                              >
                              <Image
                                    src={image}
                                    alt="logo"
                                    width={140}
                                    height={20}
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

                        <div className="flex space-x-20 justify-between transform " >
                        <div>
                              <button
                                    onClick={navbarToggleHandler}
                                    id="navbarToggler"
                                    aria-label="Mobile Menu"
                                    className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden">
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
                              // className="absolute top-0 left-0 w-1/3 h-full bg-gray-800 transform -skew-x-12"
                              >
                                          
                              </nav>
                              <nav
                                    id="navbarCollapse"
                                    className={`navbar absolute right-0 z-30 w-[250px] rounded border-[.5px] border-body-color/50 bg-dark py-4 px-6 duration-300 ease-out transition: transform 0.5s linear dark:border-body-color/20 dark:bg-dark lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${
                                          navbarOpen
                                          ? "top-full opacity-100 right-0"
                                          : "top-[120%] opacity-0 right-[-250px]"
                                    }`}>
                                          
                                    <ul className="block lg:flex lg:space-x-12 top-0 left-0 h-full bg-gray-900 transform -skew-x-12 text-white">
                                          <li className="group relative " onClick={activebar}>
                                                <Link
                                                      href="."
                                                      className={`nav flex py-2 text-base text-white font-bold group-hover:opacity-70 lg:mr-5 lg:inline-flex lg:py-6 lg:px-0`}  onClick ={handleModel}  >
                                                      Programs
                                                </Link>

                                                <>
                                                      {/* <a className="flex cursor-pointer items-center justify-between py-2 text-base text-dark group-hover:opacity-70 lg:mr-0 lg:inline-flex lg:py-6 lg:px-0">
                                                      About
                                                      <span className="pl-3">
                                                      <svg width="15" height="14" viewBox="0 0 15 14">
                                                            <path
                                                            d="M7.81602 9.97495C7.68477 9.97495 7.57539 9.9312 7.46602 9.8437L2.43477 4.89995C2.23789 4.70308 2.23789 4.39683 2.43477 4.19995C2.63164 4.00308 2.93789 4.00308 3.13477 4.19995L7.81602 8.77183L12.4973 4.1562C12.6941 3.95933 13.0004 3.95933 13.1973 4.1562C13.3941 4.35308 13.3941 4.65933 13.1973 4.8562L8.16601 9.79995C8.05664 9.90933 7.94727 9.97495 7.81602 9.97495Z"
                                                            fill="currentColor"
                                                            />
                                                      </svg>
                                                      </span>
                                                      </a> */}

                                                      {/* <div
                                                      className={`modal relative top-full left-0 rounded-md bg-white transition-[top] duration-300 group-hover:opacity-100 dark:bg-dark lg:invisible lg:absolute lg:top-[110%] lg:block lg:w-[50px] lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full`}
                                                      style={{height: '100vh',width:'-90vw', overflow: 'hidden'}}>
                                                            <Link
                                                                  href=""
                                                                  className="block rounded py-2.5 text-sm text-dark hover:opacity-70 lg:px-3"
                                                                  >
                                                            Contact
                                                            </Link>
                                                      </div> */}
                                                </>
                                          </li>

                                          <li>
                                                <Link
                                                      href=""
                                                      className={`nav flex py-2 text-base text-white font-bold group-hover:opacity-70 lg:mr-5 lg:inline-flex lg:py-6 lg:px-0`}  onClick={handleModel }>
                                                      Research
                                                </Link>
                                                
                                                
                                          </li>

                                          <li>
                                                <Link
                                                      href=""
                                                      className={` nav flex py-2 text-base text-white font-bold group-hover:opacity-70 lg:mr-5 lg:inline-flex lg:py-6 lg:px-0`} onClick={handleModel }>
                                                      News
                                                </Link>
                                          </li>

                                          <li>
                                                <Link
                                                      href=""
                                                      className={` nav flex py-2 text-base text-white font-bold group-hover:opacity-70 lg:mr-5 lg:inline-flex lg:py-6 lg:px-0`}  onClick={handleModel }>
                                                      Campus
                                                </Link>
                                          </li>
                                          
                                          <li>
                                                <Link
                                                      href=""
                                                      className={` nav flex py-2 text-base text-white font-bold group-hover:opacity-70 lg:mr-5 lg:inline-flex lg:py-6 lg:px-0`}  onClick={handleModel }>
                                                      Patner With Us
                                                </Link>
                                          </li>

                                          <div className="flex items-center justify-end pr-16 lg:pr-0">
                        {/* <Link
                              href="/signin"
                              className="hidden py-3 px-7 text-base font-bold text-dark hover:opacity-70 md:block"
                        >
                              Sign In
                        </Link>
                        <Link
                              href="/signup"
                              className="ease-in-up hidden rounded-md bg-primary py-3 px-8 text-base font-bold text-white transition duration-300 hover:bg-opacity-90 hover:shadow-signUp md:block md:px-9 lg:px-6 xl:px-9"
                        >
                              Sign Up
                        </Link> */}
                        <div>
                              <ThemeToggler />
                        </div>
                        </div>
                                    </ul>
                                    
                                    
                              </nav>
                        
                        
                        
                        </div>
                        
                        
                        {/* <div className="flex items-center justify-end pr-16 lg:pr-0"> */}
                        {/* <Link
                              href="/signin"
                              className="hidden py-3 px-7 text-base font-bold text-dark hover:opacity-70 md:block"
                        >
                              Sign In
                        </Link>
                        <Link
                              href="/signup"
                              className="ease-in-up hidden rounded-md bg-primary py-3 px-8 text-base font-bold text-white transition duration-300 hover:bg-opacity-90 hover:shadow-signUp md:block md:px-9 lg:px-6 xl:px-9"
                        >
                              Sign Up
                        </Link> */}
                        {/* <div>
                              <ThemeToggler />
                        </div> */}
                        {/* </div> */}
                        
                        </div>
                        
                  </div>
                  <Model isvisible ={showModel} onClose={()=>setShowModel(false)}>
                       <>
                       
                       </> 
                  </Model>
            </div>
        
        
        
      </header>
      
      


    </>
  );
};

export default Header;
