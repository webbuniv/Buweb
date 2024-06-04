"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import ThemeToggler from "./ThemeToggler";
// import menuData from "./menuData";
import Model from "@/components/model/Model";
import image from "../../public/images/logo/bugema.png";
import "../../styles/nav.css";
import "../../styles/index.css";

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
      return () => {
        window.removeEventListener("scroll", handleStickyNavbar);
      };
    }, []);

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
  useEffect(() => {
      document.body.style.overflow = showModel ? 'hidden' : 'auto';
    }, [showModel]);
    const handleClick = () => {
      
      setShowModel(!showModel); // Toggle modal visibility
      if (!showModel){
            const navlinks = document.querySelectorAll('.nav');
            const handleNavClick = (event) => {
            document.querySelector('.active')?.classList.remove('active');
            event.currentTarget.classList.add('active');
            };
      
            navlinks.forEach(navlink => {
            navlink.addEventListener('click', handleNavClick);
            });
            return () => {
                  navlinks.forEach(navlink => {
                    navlink.removeEventListener('click', handleNavClick);
                  });
                };
            
      }else if(showModel){
            document.querySelector('.active')?.classList.remove('active');
      }
    };
//     useEffect(() => {
//       const navlinks = document.querySelectorAll('.nav');
//       const handleNavClick = (event) => {
//         document.querySelector('.active')?.classList.remove('active');
//         event.currentTarget.classList.add('active');
//       };
  
//       navlinks.forEach(navlink => {
//         navlink.addEventListener('click', handleNavClick);
//       });
  
//       // Cleanup event listeners on component unmount
//       return () => {
//         navlinks.forEach(navlink => {
//           navlink.removeEventListener('click', handleNavClick);
//         });
//       };
//     }, []);
  return (
      
      <>
      <header className={`header top-0 left-0 z-40 flex w-full items-center bg-transparent mt-[-8px] ${sticky ? "!fixed !z-[9999] ! !bg-opacity-100 shadow-sticky backdrop-blur-sm fade-in !transition dark:! dark:!bg-opacity-100" : "absolute"}`}>
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="w-40 px-4 xl:mr-12">
              <Link href="/" className={`header-logo block w-full ${sticky ? "py-5 lg:py-2" : "py-8"}`}>
                <Image src={image} alt="logo" width={140} height={20} className="w-full dark:hidden" />
                <Image src={image} alt="logo" width={100} height={20} className="hidden w-full dark:block" />
              </Link>
            </div>
            <div className="flex space-x-20 justify-between transform">
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
                <nav id="navbarCollapse" className={`navbar absolute right-0 z-30 w-[250px] rounded border-[.5px] border-body-color/50 bg-dark py-4 px-6 duration-300 ease-out transition: transform 0.5s linear dark:border-body-color/20 dark:bg-dark lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${navbarOpen ? "top-full opacity-100 right-0" : "top-[120%] opacity-0 right-[-250px]"}`}>
                  <ul className="block lg:flex lg:space-x-12 top-0 left-0 h-full bg-gray-900 transform -skew-x-12 text-white">
                    <li className="group relative">
                      <Link href="." className={` nav ml-3 flex py-2 text-base text-white font-bold group-hover:opacity-70 lg:mr-5 lg:inline-flex lg:py-6 lg:px-0`} onClick={handleClick}>
                        Programs
                      </Link>
                    </li>
                    <li>
                      <Link href="" className={`nav flex py-2 text-base text-white font-bold group-hover:opacity-70 lg:mr-5 lg:inline-flex lg:py-6 lg:px-0`} onClick={handleClick}>
                        Research
                      </Link>
                    </li>
                    <li>
                      <Link href="" className={`nav flex py-2 text-base text-white font-bold group-hover:opacity-70 lg:mr-5 lg:inline-flex lg:py-6 lg:px-0`} onClick={() => setShowModel(true)}>
                        News
                      </Link>
                    </li>
                    <li>
                      <Link href="" className={`nav flex py-2 text-base text-white font-bold group-hover:opacity-70 lg:mr-5 lg:inline-flex lg:py-6 lg:px-0`} onClick={() => setShowModel(true)}>
                        Campus
                      </Link>
                    </li>
                    <li>
                      <Link href="" className={`nav flex py-2 text-base text-white font-bold group-hover:opacity-70 lg:mr-5 lg:inline-flex lg:py-6 lg:px-0`} onClick={() => setShowModel(true)}>
                        Partner With Us
                      </Link>
                    </li>
                    <div className=" bg- flex items-center justify-end pr-16 lg:pr-0">
                      <div>
                        <ThemeToggler />
                      </div>
                    </div>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          <Model isvisible={showModel} onClose={() => setShowModel(false)}>
            <>
              <div id="programs" className="container-fluid bg black">

                  <div className="col-5 bg-primary text-white">
                        hello pro
                  </div>


              </div>
              <div id="research"></div>
              <div id= "News"></div>
              <div id ="campus"></div>
              <div id="partner"></div>
            </>
          </Model>
        </div>
      </header>
    </>
  );
};

export default Header;
