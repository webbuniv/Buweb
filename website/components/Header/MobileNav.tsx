"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import menuData from "./menuData";
interface MobileNavProps {
  navbarOpen: boolean;
  onClose: () => void;
}
const MobileNav = ({ navbarOpen, onClose }: MobileNavProps) => {
        const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };
    return (
        <div className="fixed z-20 inset-0 bg-gray-600 h-[70%] overflow-y-scroll bg-opacity-50 backdrop-blur-sm "
        
        onClick={onClose}>
                 <nav
                 onClick={(e) => e.stopPropagation()}
                  id="navbarCollapse"
                  className={`navbar absolute right-0 top-[12%] z-50  w-full rounded border-[.5px] border-body-color/50 bg-gray-600 py-4 px-6 duration-300 dark:border-body-color/20 dark:bg-dark lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${
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
                          
                          onClick={onClose}>
                            {menuItem.title}
                          </Link>
                        ) : (
                          <div className="">
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
                              className={`submenu relative top-full left-5 p-2 rounded-md bg-gray-700 transition-[top] duration-300 group-hover:opacity-100 dark:bg-dark lg:invisible lg:absolute lg:top-[110%] lg:block lg:w-[250px] lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ${
                                openIndex === index ? "block" : "hidden"
                              }`}
                            >
                              {menuItem.submenu.map((submenuItem) => (
                                <Link
                                  href={submenuItem.path}
                                  key={submenuItem.id}
                                  className="block rounded py-2.5  text-base border-b border-body-color border-opacity-40 text-white hover:opacity-70 dark:text-white "
                                onClick={onClose}
                                >
                                  {submenuItem.title}
                                </Link>
                              ))}
                            </div>
                          </div>
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
    )
}

export default MobileNav;