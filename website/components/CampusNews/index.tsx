import React, { useState, useEffect } from "react";
import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import Link from "next/link";

const newsData = [
  {
    category: "Sports",
    title: "Bugema University sports play a vital role in student life.",
    link: "/sports/sports",
    imageSrc: "/images/life/football/footb.jpg",
    altText: "Image related to football",
  },
  {
    category: "Cultural Gala 2024 - 2025",
    title: "Cultural Gala Countdown", // Placeholder for countdown
    link: "/",
    imageSrc: "/images/gala/ga.jpg",
    altText: "Image related to cultural gala",
  },
  {
    category: "Health & Medicine",
    title: "Study finds high blood pressure drug may prevent epilepsy",
    link: "/",
    imageSrc: "/images/features/hos.jpg",
    altText: "Image related to epilepsy study",
  },
  {
    category: "Graduation 2024 - 2025",
    title: "Commencement Countdown", // Placeholder for commencement countdown
    link: "/",
    imageSrc: "/images/graduation/graduation.jpeg",
    altText: "Graduation 2024 - 2025 highlights",
  },
];

const CampusNews: React.FC = () => {
  const [galaTimeLeft, setGalaTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [commencementTimeLeft, setCommencementTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Cultural Gala Countdown
    const targetGalaDate = new Date("2024-10-17T00:00:00");

    const updateGalaTime = () => {
      const now = new Date();
      const difference = targetGalaDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setGalaTimeLeft({ days, hours, minutes, seconds });
      }
    };

    // Commencement Countdown
    const targetCommencementDate = new Date("2024-11-10T00:00:00");

    const updateCommencementTime = () => {
      const now = new Date();
      const difference = targetCommencementDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setCommencementTimeLeft({ days, hours, minutes, seconds });
      }
    };

    const galaTimerId = setInterval(updateGalaTime, 1000);
    const commencementTimerId = setInterval(updateCommencementTime, 1000);

    return () => {
      clearInterval(galaTimerId);
      clearInterval(commencementTimerId);
    };
  }, []);

  return (
    <section className="px-8">
      <div className="container">
        <div className="hidden md:block">
          <SectionTitle
            title="Students Life"
            paragraph="At Bugema University, student life goes beyond the classroom. 
            Our vibrant campus community offers a diverse range of activities, organizations, 
            and resources designed to support your personal growth, leadership development, and overall well-being."
            center
            mb="50px"
          />
        </div>

        {/* Section Title for small screens */}
        <div className="md:hidden block">
          <div className="wow fadeInUp w-full mx-auto text-start" data-wow-delay=".1s">
            <h2 className="mb-4 text-3xl font-bold !leading-tight text-black/80 dark:text-white sm:text-4xl md:text-[45px]">
              Students Life
            </h2>
            <p className="text-base !leading-relaxed text-body-color md:text-lg">
              At Bugema University, student life goes beyond the classroom.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {newsData.map((news, index) => (
            <article key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="h-48 overflow-hidden">
                <a href={news.link} aria-hidden="true" tabIndex={-1}>
                  <Image src={news.imageSrc} alt={news.altText} height={350} width={350} />
                </a>
              </div>
              <div className="p-4">
                <div className="text-sm text-gray-500 mb-2">{news.category}</div>
                <h3 className="text-lg text-black font-semibold">
                  <a href={news.link}>
                    {news.category === "Cultural Gala 2024 - 2025" ? (
                      <span className="text-blue-500">
                        {galaTimeLeft.days} days : {galaTimeLeft.hours} hours : {galaTimeLeft.minutes} minutes :{" "}
                        {galaTimeLeft.seconds} seconds
                      </span>
                    ) : news.category === "Graduation 2024 - 2025" ? (
                      <span className="text-blue-500">
                        {commencementTimeLeft.days} days : {commencementTimeLeft.hours} hours : {commencementTimeLeft.minutes} minutes :{" "}
                        {commencementTimeLeft.seconds} seconds
                      </span>
                    ) : (
                      news.title
                    )}
                  </a>
                </h3>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link href="/studentlife" className="text-blue-500 font-bold">
            More About Students Life
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CampusNews;
