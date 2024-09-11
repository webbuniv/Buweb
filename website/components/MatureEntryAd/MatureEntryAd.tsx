import { useEffect, useState } from "react";
import Link from "next/link";
import MaturePopup from "../MaturePopup/MaturePopup";

export default function MatureEntryAd() {
  const [isVisible, setIsVisible] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

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
        <div
          onClick={() => setIsPopupVisible(!isPopupVisible)}
          aria-label="scroll to top"
          className="flex px-1 h-10 w-[240px] cursor-pointer items-center justify-center rounded-md bg-primary text-black shadow-md transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp"
        >
          <span className="text-white">Jobs Available! Checkout!</span>

          <MaturePopup trigger={isPopupVisible} setTrigger={setIsPopupVisible}>
            <div className="text-dark">
              <h2 className="mb-2 text-blue-600">We{"'"}re always hiring!!!</h2>
              <p>
                Bugema University is seeking talented individuals to join our dynamic team. We offer a rewarding work environment and opportunities for professional growth. Whether you{"'"}re an experienced professional or a recent graduate, we encourage you to explore our current job openings. Click <span>
                  <Link href="/Detailed_Advert_BU_2024.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">here</Link>
                </span>, or contact our Human Resources department for more information.
      
              </p>
              <p className="text-black mt-3" onClick={() => setIsPopupVisible(!isPopupVisible)}>Close</p>
            </div>
          </MaturePopup>

        </div>
      )}
    </div>
  );
}
