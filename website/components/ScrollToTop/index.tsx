'use client'
import { useEffect, useState } from "react";
import { ArrowUp } from 'lucide-react';
export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Top: 0 takes us all the way back to the top of the page
  // Behavior: smooth keeps it smooth!
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-20 right-6 z-[99]">
      {isVisible && (
        <div
          onClick={scrollToTop}
          aria-label="scroll to top"
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-md  text-white   hover:bg-opacity-80 "
        >
                <ArrowUp size={32} className="text-primary hover:text-red-600 hover:scale-150 animate-pulse transition duration-1000 ease-in-out    "  />
        </div>
      )}
    </div>
  );
}
