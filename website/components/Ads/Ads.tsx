import { useEffect, useState } from "react";
import Popup from "../Popup/Popup";
import Link from "next/link";

export default function Ads() {
  const [isVisible, setIsVisible] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isTimedPopupVisible, setTimedPopupVisible] = useState(false);

  useEffect(() => {
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

  useEffect(() => {
    setTimeout(() => {
      setTimedPopupVisible(true);
    }, 3000);
  }, []);

  return (
    <div className="fixed bottom-8 left-8 z-[99]">
      {isVisible && (
        <div
          onClick={() => setIsPopupVisible(true)}
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-md bg-primary text-white shadow-md transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp"
        >
          <span className="mt-[6px] text-white">Jobs Available</span>

          <Popup trigger={isPopupVisible} setTrigger={setIsPopupVisible}>
            <div className=" text-dark/90">
              <h2 className="mb-2">Looking for a job at Bugema?</h2>
              <p>
                We{"'"}re always hiring! Check out our latest job listings,
                apply directly through our website at{" "}
                <span>
                  <Link href="/employment-opportunities">
                    www.bugemauniv.ac.ug/employment-opportunities
                  </Link>
                </span>
                , or contact us for more information.
              </p>
            </div>
          </Popup>

          <Popup
            trigger={isTimedPopupVisible}
            setTrigger={setTimedPopupVisible}
          >
            <div className="text-white">
              <h2 className="mb-2">Looking for a job at Bugema?</h2>
              <p>
                We{"'"}re always hiring! Check out our latest job listings,
                apply directly through our website at{" "}
                <span>
                  <Link href="/employment-opportunities">
                    www.bugemauniv.ac.ug/employment-opportunities
                  </Link>
                </span>
                , or contact us for more information.
              </p>
            </div>
          </Popup>
        </div>
      )}
    </div>
  );
}
