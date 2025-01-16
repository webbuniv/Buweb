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

        <Link href="/docs/mature-entry-r.pdf">
<!--         <Link href="https://cloud.appwrite.io/v1/storage/buckets/676995bd003a7bc1e278/files/67766a4000002ce65dcb/view?project=674dcf7b003d57db960a&project=674dcf7b003d57db960a&mode=admin"> -->

          <div
            aria-label="go to calendar"
            className="flex px-1 h-10 w-[240px] cursor-pointer items-center justify-center rounded-md bg-primary text-black shadow-md transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp"
          >

            <span className="text-white">Mature Entry results</span>

<!--             <span className="text-white">Fees Structure</span> -->

          </div>
        </Link>
        
      )}
    </div>
  );
}
