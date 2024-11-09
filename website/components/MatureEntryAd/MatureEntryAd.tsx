import { useEffect, useState } from "react";
import Link from "next/link";

export default function MatureEntryAd() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-8 left-8 z-[99]">
      {isVisible && (
        <Link href="/docs/final-graduation.pdf">
          <div
            aria-label="go to calendar"
            className="flex px-1 h-10 w-[240px] cursor-pointer items-center justify-center rounded-md bg-primary text-black shadow-md transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp"
          >
            <span className="text-white">Graduation List 2024!!!</span>
          </div>
        </Link>
      )}
    </div>
  );
}
