"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaCalendarAlt, FaGraduationCap, FaUserCircle } from "react-icons/fa";
import { RiComputerLine } from "react-icons/ri";

const LinearText = ({ text }) => {
  return (
    <div className="hidden lg:block  overflow-hidden">
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: "-100%" }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 10,
          ease: "linear"
        }}
        className="whitespace-nowrap text-2xl font-bold text-blue-600"
      >
        {text}
      </motion.div>
    </div>
  );
};

const EnhancedNavbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [currentStatement, setCurrentStatement] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [letterIndex, setLetterIndex] = useState(0);

  const statements = [
    "Greetings from Bugema University",
    "Get Your Admission Now",
    "January Intake is Ongoing",
    "Step Into Excellence",
  ];

  useEffect(() => {
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

  return (
    <header className="bg-white lg:-mt-4">
  <div className=" mx-auto ">
    <div className="flex items-center justify-between h-20">
      <div className="flex items-end ">
        <LinearText text={displayedText}  />
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center space-x-20 ">
        <AnimatedNavLink href="/calendar" icon={<FaCalendarAlt />}>
          Calendar
        </AnimatedNavLink>
        <AnimatedNavLink href="https://elearning.bugemauniv.ac.ug/" icon={<RiComputerLine />}>
          eLearning
        </AnimatedNavLink>
        <AnimatedNavLink href="https://erms.bugemauniv.ac.ug/buerms/default.aspx/" icon={<FaUserCircle />}>
          StaffPortal
        </AnimatedNavLink>
        <DropdownNavLink
          items={[
            { label: "Login", href: "https://erms.bugemauniv.ac.ug/student/login/" },
            { label: "Register", href: "https://erms.bugemauniv.ac.ug/student/registration/" },
          ]}
        >
          StudentsPortal
        </DropdownNavLink>
        <motion.a
          href="https://erms.bugemauniv.ac.ug/application/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white px-12 py-2 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors duration-300 "
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          ApplyNow
        </motion.a>
      </nav>

      {/* Mobile Navigation */}
      <div className="flex lg:hidden items-center space-x-4 text-sm">
        <Link href="/calendar" className="text-gray-600 hover:text-blue-600">
          <FaCalendarAlt size={20} />
        </Link>
        <Link href="https://elearning.bugemauniv.ac.ug/" className="text-gray-600 hover:text-blue-600">
          <RiComputerLine size={20} />
        </Link>
        <Link href="https://erms.bugemauniv.ac.ug/buerms/default.aspx/" className="text-gray-600 hover:text-blue-600">
          <FaUserCircle size={20} />
        </Link>
        <button
          onClick={() => setNavbarOpen(!navbarOpen)}
          className="text-gray-600 hover:text-blue-600 focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={navbarOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>
    </div>

    {/* Mobile Menu */}
    <AnimatePresence>
      {navbarOpen && <MobileMenu closeMenu={() => setNavbarOpen(false)} />}
    </AnimatePresence>
  </div>
</header>

  );
};

const AnimatedNavLink = ({ href, icon, children }) => (
  <motion.a
    href={href}
    className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors duration-300 text-lg font-medium"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    {icon}
    <span>{children}</span>
  </motion.a>
);

const DropdownNavLink = ({ children, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative group">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors duration-300 text-lg font-medium"
      >
        <FaGraduationCap />
        <span>{children}</span>
        <FaChevronDown className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10"
          >
            {items.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="block px-4 py-2 text-gray-700 hover:bg-blue-500 hover:text-white text-sm transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};


const MobileMenu = ({ closeMenu }) => (
  <motion.div
    initial={{ opacity: 0, height: 0 }}
    animate={{ opacity: 1, height: "auto" }}
    exit={{ opacity: 0, height: 0 }}
    className="lg:hidden bg-white"
  >
    <nav className="flex flex-col space-y-4 py-4 px-4">
      <a href="https://erms.bugemauniv.ac.ug/buerms/default.aspx/" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 text-sm">
        <FaUserCircle />
        <span>Staff Portal</span>
      </a>
      <div>
        <button className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 text-sm">
          <FaGraduationCap />
          <span>Students Portal</span>
        </button>
        <div className="mt-2 pl-6">
          <a href="https://erms.bugemauniv.ac.ug/student/login/" className="block text-gray-600 hover:text-blue-600 text-sm">Login</a>
          <a href="https://erms.bugemauniv.ac.ug/student/registration/" className="block text-gray-600 hover:text-blue-600 text-sm">Register</a>
        </div>
      </div>
      <a href="https://erms.bugemauniv.ac.ug/application/" className="bg-blue-600 text-white text-sm px-4 py-2 rounded-full text-center font-semibold hover:bg-blue-700 transition-colors duration-300">
        Apply Online
      </a>
    </nav>
  </motion.div>
);


export default EnhancedNavbar;

