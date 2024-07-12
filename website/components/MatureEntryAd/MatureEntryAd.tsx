import { useEffect, useState } from "react";
import Link from "next/link";
import MaturePopup from "../MaturePopup/MaturePopup";

export default function MatureEntryAd() {
  const [isVisible, setIsVisible] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isTimedPopupVisible, setTimedPopupVisible] = useState(false);

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

  useEffect(() => {
    setTimeout(() => {
      setTimedPopupVisible(true);
    }, 3000);
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-[99]">
      {isVisible && (
        <div
          onClick={() => setIsPopupVisible(true)}
          aria-label="scroll to top"
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-md bg-primary text-white shadow-md transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp"
        >
          <span className="mt-[6px] text-white">Jobs Available</span>

          <MaturePopup trigger={isPopupVisible} setTrigger={setIsPopupVisible}>
            <div className="text-white">
              <h2 className="mb-2">Mature Entry Results Out!!</h2>
              <p>
                The wait is over! We{"'"}re pleased to announce that the results
                for our mature entry program exams are now available. You can
                check them{" "}
                <span>
                  <Link href="/mature_entry.pdf" target="_blank" rel="noopener noreferrer">here</Link>
                </span>
                , or if you have any questions, please do not hesitate to
                contact our admissions office.
              </p>
            </div>
          </MaturePopup>

          <MaturePopup
            trigger={isTimedPopupVisible}
            setTrigger={setTimedPopupVisible}
          >
            <div className="text-white">
              <h2 className="mb-2">Looking for a job at Bugema?</h2>
              <p>
                The wait is over! We{"'"}re pleased to announce that the results
                for our mature entry program exams are now available. You can
                check them{" "}
                <span>
                  <Link href="/mature_entry.pdf" target="_blank" rel="noopener noreferrer">here</Link>
                </span>
                , or if you have any questions, please do not hesitate to
                contact our admissions office.
              </p>
            </div>
          </MaturePopup>
        </div>
      )}
    </div>
  );
}
