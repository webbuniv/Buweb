"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import ThemeToggler from "./ThemeToggler";
import Model from "@/components/model/Model";
import Model1 from "@/components/model/Model1";
import Model2 from "@/components/model/Model2";
import Model3 from "@/components/model/Model3";
import Model4 from "@/components/model/Model4";
import image from "../../public/images/logo/logo1.png";
import "../../styles/nav.css";
import "../../styles/index.css";
import { FaChevronDown } from "react-icons/fa";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [showModel4, setShowModel4] = useState(false);
  const [showModel3, setShowModel3] = useState(false);
  const [showModel, setShowModel] = useState(false);
  const [showModel1, setShowModel1] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [openIndex, setOpenIndex] = useState(-1);
  const [showModel2, setShowModel2] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  const handleStickyNavbar = () => {
    if (window.scrollY >= 700) {
      setSticky(true);
    } else {
      setSticky(false);
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
    document.body.style.overflow = showModel ? 'hidden' : 'auto';    
  }, [showModel]);
  const first_modal = () =>{
    setShowModel(true);
    setShowModel1(false);
    setShowModel2(false);
    setShowModel3(false);
    setShowModel4(false);  
  };
  

  useEffect(() => {
    document.body.style.overflow = showModel1 ? 'hidden' : 'auto';
          
  }, [showModel1]);
  const second_modal =() =>{
    setShowModel1(true), document.body.style.overflow = showModel1 ? 'hidden' : 'auto';
    setShowModel(false);
    setShowModel2(false);
    setShowModel3(false);
    setShowModel4(false);  
     
    
  };

  useEffect(() => {
    document.body.style.overflow = showModel2 ? 'hidden' : 'auto';           
  }, [showModel2]);

  const third_modal =() =>{
    setShowModel2(true);
    setShowModel(false);
    setShowModel1(false);
    setShowModel3(false);
    setShowModel4(false);  
    
  };  

  useEffect(() => {
    document.body.style.overflow = showModel3 ? 'hidden' : 'auto';         
  }, [showModel3]); 

  const forth_modal =() =>{
    setShowModel3(true);
    setShowModel(false); 
    setShowModel1(false);
    setShowModel2(false);
    setShowModel4(false);  
                
  }
  useEffect(() => {
    document.body.style.overflow = showModel4 ? 'hidden' : 'auto';        
  }, [showModel4]); 
  const fifth_modal =() =>{
    setShowModel4(true);
    setShowModel3(false);
    setShowModel(false); 
    setShowModel1(false);
    setShowModel2(false);
    
    
    
  };

   const close =()=>{
      setShowModel4(false);
      setShowModel3(false);
      setShowModel(false); 
      setShowModel1(false);
      setShowModel2(false);
   } 
        
  return (
    <>
      <header className={`header top-0 left-0 z-40 flex w-full items-center  mt-[-8px] ${sticky ? " bg-dark !fixed !z-[9999] ! bg-opacity-100 shadow-sticky backdrop-blur-sm fade-in !transition dark:! dark:!bg-opacity-100" : "absolute"}`}>
        <div className="container">
          <div className="relative flex items-center justify-between">
            <div className="w-60 relative z-10" >
                  <Link href="/"  className={`header-logo block w-full ${sticky ? "py-2 lg:py-2" : "py-3"}`}>
                        <Image src={image} alt="logo" width={140} height={40} className="w-full dark:hidden" />
                        <Image src={image} alt="logo" width={100} height={20} className="hidden w-full dark:block" />
                         
                  </Link>
                 
            </div>
            <div className="flex space-x-20 justify-between transform bg-white">
              <div>

              <button
                  onClick={navbarToggleHandler}
                  id="navbarToggler"
                  aria-label="Mobile Menu"
                  className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden">
                  <span className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${navbarOpen ? " top-[7px] rotate-45" : " "}`} />
                  <span className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${navbarOpen ? "opacity-0 " : " "}`} />
                  <span className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${navbarOpen ? " top-[-8px] -rotate-45" : " "}`} />
                </button>
                
                <nav
                  id="navbarCollapse"
                  className={`navbar absolute right-0 z-30 w-[250px] rounded border-[.5px] border-body-color/50 bg-primary py-4 px-6 duration-300 ease-out transition-transform transform dark:border-body-color/20 dark:bg-white lg:visible lg:static lg:w-auto lg:border-none lg:bg-dark lg:p-0 lg:opacity-100 ${
                    navbarOpen ? "top-full opacity-100 right-0" : "top-[120%] opacity-0 right-[-250px]"
                  }`}
                >
                  <ul className="block lg:flex bg-white lg:space-x-8 top-0 left-0 h-full  text-black">
                    <li className="group relative">
                      <Link
                        href="."
                        className={`nav hover ml-3 flex py-2 text-black text-md  font-bold group-hover:opacity-70 lg:mr-5 lg:inline-flex lg:py-6 lg:px-0`}
                        onMouseEnter={first_modal}

                      >
                        <span className={showModel ? "active" : ""}>Programs</span>
                        <span className="my-1 ml-2 dark:text-dark  text-bold">
                          <FaChevronDown className={showModel ? "drop" : ""} />
                        </span>
                      </Link>
                    </li>

                    <li>
                      <Link
                        href=""
                        className={`nav hover flex py-2  text-black  font-bold group-hover:opacity-70 lg:mr-5 lg:inline-flex lg:py-6 lg:px-0`}
                        onMouseEnter={second_modal}
                      >
                        <span className={showModel1 ? "active" : ""}>Student life</span>
                        <span className="my-1 ml-2 dark:text-dark ">
                          <FaChevronDown className={showModel1 ? "drop" : ""} />
                        </span>
                      </Link>
                    </li>



                    <li>
                      <Link
                        href=""
                        className={`nav hover flex py-2  text-black  font-bold group-hover:opacity-70 lg:mr-5 lg:inline-flex lg:py-6 lg:px-0`}
                        onMouseEnter={third_modal}
                      >
                        <span className={showModel2 ? "active" : ""}>Research</span>
                        <span className={"my-1 ml-2 dark:text-dark "}>
                          <FaChevronDown className={showModel2 ? "drop" : ""} />
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href=""
                        className={`nav hover flex py-2  text-black  font-bold group-hover:opacity-70 lg:mr-5 lg:inline-flex lg:py-6 lg:px-0`}
                        onMouseEnter={forth_modal}
                      >
                        <span className={showModel3 ? "active" : ""}>Campuses</span>
                        <span className="my-1 ml-2 dark:text-dark ">
                          <FaChevronDown className={showModel3 ? "drop" : ""} />
                        </span>
                      </Link>
                    </li>

                    

                    <li>
                      <Link
                        href=""
                        className={`nav hover flex py-2  text-black  font-bold group-hover:opacity-70 lg:mr-5 lg:inline-flex lg:py-6 lg:px-0`}
                        onMouseEnter={fifth_modal}
                      >
                        <span className={showModel4 ? "active" : ""}>Contact Us</span>
                        <span className="my-1 ml-2 text-dark ">
                          <FaChevronDown className={showModel4 ? "drop" : ""} />
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
      
      <Model isvisible={showModel} onClose={() => setShowModel(false)}>
            <>
            </>
          </Model>

          <Model1 issvisible={showModel1} onClose={() => setShowModel1(false)}>
            <>
            </>
          </Model1>
          <Model2 isssvisible={showModel2} onClose={() => setShowModel2(false)}>
            <>
            </>
          </Model2>
          <Model3 is3visible={showModel3} onClose={() => setShowModel3(false)}>
            <>
            </>
          </Model3>
          <Model4 is4visible={showModel4} onClose={() => setShowModel4(false)}>
            <>
            </>
          </Model4>
    </>
  );
};

export default Header;