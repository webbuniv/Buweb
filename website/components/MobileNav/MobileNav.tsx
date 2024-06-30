"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import { FaCopyright } from "react-icons/fa6";

const MobileNav = ({ setNavbarOpen, navbarOpen }) => {

    const [programsOpen, setProgramsOpen] = useState(false);
    const [studentLifeOpen, setStudentLifeOpen] = useState(false);
    const [researchOpen, setResearchOpen] = useState(false);
    const [campusesOpen, setCampusesOpen] = useState(false);

    return (
        <div className="lg:hidden bg-dark top-[85px] fixed w-full">
          <div className="px-2 pt-3 pb-3 space-y-3 md:space-y-4 sm:px-3 text-center flex flex-col justify-start">
            <div
              className={`flex flex-col justify-start items-start mx-20
              `}
            >
              <Link
                href="/"
                onClick={() => {
                  setProgramsOpen(!programsOpen);
                  setStudentLifeOpen(false);
                  setResearchOpen(false);
                  setCampusesOpen(false);
                }}
                className="flex justify-center items-center gap-2 text-white text-lg md:text-xl font-semibold"
              >
                Programs
                {!programsOpen ? <FaChevronRight /> : <FaChevronDown />}
              </Link>
              {programsOpen && (
                <ul className={`flex flex-col gap-2 text-white text-base md:text-lg pl-4 ${
                  programsOpen ? "items-center ml-10" : "items-center"
                }`}>
                  <li>
                    <Link
                      href="/"
                      onClick={() => {
                        setNavbarOpen(!navbarOpen);
                        setProgramsOpen(false);
                      }}
                    >
                      School Of Science And Technology
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      onClick={() => {
                        setNavbarOpen(!navbarOpen);
                        setProgramsOpen(false);
                      }}
                    >
                      School Of Health And Alied Science
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      onClick={() => {
                        setNavbarOpen(!navbarOpen);
                        setProgramsOpen(false);
                      }}
                    >
                      Program 3
                    </Link>
                  </li>
                </ul>
              )}
            </div>
            <div className="w-[90%] flex justify-center mx-auto text-center border-b border-solid border-white/40" />

            <div
              className={`flex flex-col justify-start items-start mx-20`}
            >
              <Link
                href="/"
                onClick={() => {
                  setStudentLifeOpen(!studentLifeOpen);
                  setProgramsOpen(false);
                  setResearchOpen(false);
                  setCampusesOpen(false);
                }}
                className="flex justify-center items-center gap-2 text-white text-lg md:text-xl font-semibold"
              >
                Student Life
                {!studentLifeOpen ? <FaChevronRight /> : <FaChevronDown />}
              </Link>
              {studentLifeOpen && (
                <ul className={`flex flex-col gap-2 text-white text-base md:text-lg pl-4 ${
                  studentLifeOpen ? "items-center ml-10" : "items-center"
                }`}>
                  <li>
                    <Link
                      href="/"
                      onClick={() => {
                        setNavbarOpen(!navbarOpen);
                        setStudentLifeOpen(false);
                      }}
                    >
                      Student Life 1
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      onClick={() => {
                        setNavbarOpen(!navbarOpen);
                        setStudentLifeOpen(false);
                      }}
                    >
                      Student Life 2
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      onClick={() => {
                        setNavbarOpen(!navbarOpen);
                        setStudentLifeOpen(false);
                      }}
                    >
                      Student Life 3
                    </Link>
                  </li>
                </ul>
              )}
            </div>
            <div className="w-[90%] flex justify-center mx-auto text-center border-b border-solid border-white/40" />

            <div
              className={`flex flex-col justify-start items-start mx-20`}
            >
              <Link
                href="/"
                onClick={() => {
                  setResearchOpen(!researchOpen);
                  setStudentLifeOpen(false);
                  setProgramsOpen(false);
                  setCampusesOpen(false);
                }}
                className="flex justify-center items-center gap-2 text-white text-lg md:text-xl font-semibold"
              >
                Research
                {!researchOpen ? <FaChevronRight /> : <FaChevronDown />}
              </Link>
              {researchOpen && (
                <ul className={`flex flex-col gap-2 text-white text-base md:text-lg pl-4 ${
                  researchOpen ? "items-center ml-10" : "items-center"
                }`}>
                  <li>
                    <Link
                      href="/"
                      onClick={() => {
                        setNavbarOpen(!navbarOpen);
                        setResearchOpen(false);
                      }}
                    >
                      Research 1
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      onClick={() => {
                        setNavbarOpen(!navbarOpen);
                        setResearchOpen(false);
                      }}
                    >
                      Research 2
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      onClick={() => {
                        setNavbarOpen(!navbarOpen);
                        setResearchOpen(false);
                      }}
                    >
                      Research 3
                    </Link>
                  </li>
                </ul>
              )}
            </div>
            <div className="w-[90%] flex justify-center mx-auto text-center border-b border-solid border-white/40" />

            <div
              className={`flex flex-col justify-start items-start mx-20`}
            >
              <Link
                href="/"
                onClick={() => {
                  setCampusesOpen(!campusesOpen);
                  setResearchOpen(false);
                  setStudentLifeOpen(false);
                  setProgramsOpen(false);
                }}
                className="flex justify-center items-center gap-2 text-white text-lg md:text-xl font-semibold"
              >
                Campuses
                {!campusesOpen ? <FaChevronRight /> : <FaChevronDown />}
              </Link>
              {campusesOpen && (
                <ul className={`flex flex-col gap-2 text-white text-base md:text-lg pl-4 ${
                  campusesOpen ? "items-center ml-10" : "items-center"
                }`}>
                  <li>
                    <Link
                      href="/"
                      onClick={() => {
                        setNavbarOpen(!navbarOpen);
                        setCampusesOpen(false);
                      }}
                    >
                      Campus 1
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      onClick={() => {
                        setNavbarOpen(!navbarOpen);
                        setCampusesOpen(false);
                      }}
                    >
                      Campus 2
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      onClick={() => {
                        setNavbarOpen(!navbarOpen);
                        setCampusesOpen(false);
                      }}
                    >
                      Campus 3
                    </Link>
                  </li>
                </ul>
              )}
            </div>
            <div className="w-[90%] flex justify-center mx-auto text-center border-b border-solid border-white/40" />

            <div
              className={`flex flex-col justify-start items-start mx-20`}
            >
              <Link
                href="/"
                onClick={() => {
                  setNavbarOpen(!navbarOpen)
                }}
                className="flex justify-center items-center gap-2 text-white text-lg md:text-xl font-semibold"
              >
                Contact Us
              </Link>
            </div>
            <div className="w-[90%] flex justify-center mx-auto text-center border-b border-solid border-white/40" />
            
            <div className="flex mx-auto justify-center items-center gap-2 text-white text-lg font-semibold">
              <FaCopyright />
              Bugema University
            </div>
          </div>
        </div>
    )
}

export default MobileNav;