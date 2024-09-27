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
          <span className="text-black">Jobs Available! Checkout!</span>

          <MaturePopup trigger={isPopupVisible} setTrigger={setIsPopupVisible}>
            <div className="text-black">
              <h2 className="mb-2 text-blue-600">We are hiring !!</h2>
              <p>
                Looking for a job at Bugema University? Checkout out latest job listings{" "}
                <span>
                  <Link href="/Detailed_Advert_BU_2024.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">here</Link>
                </span>
                , and apply accordingly or if you have any questions, please do not hesitate to
                contact us for more clarification.
              </p>
            </div>
          </MaturePopup>

        </div>
      )}
    </div>
  );
}
