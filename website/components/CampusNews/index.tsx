import React from "react";
import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import Link from "next/link";
const newsData = [
  {
    category: "Sports",
    title:
      "Bugema University sports play a vital role in student life ............",
    link: "/studentlife",
    imageSrc: "https://res.cloudinary.com/dfqmkufnq/image/upload/v1721710563/basketball_timqtm.webp",
    altText: "Image related to depression biotypes",
  },
  {
    category: "Business",
    title: "Why advertisers pay more to reach viewers who watch less",
    link: "/",
    imageSrc: "/images/features/business.jpeg",
    altText: "Image related to advertising study",
  },
  {
    category: "Health & Medicine",
    title: "Study finds high blood pressure drug may prevent epilepsy",
    link: "/",
    imageSrc: "/images/features/bbb.jpg",
    altText: "Image related to epilepsy study",
  },
  {
    category: "Commencement 2024",
    title: "Congratulations, graduates!",
    link: "/",
    imageSrc: "/images/features/grad.jpg",
    altText: "Commencement 2024 highlights",
  },
];

const CampusNews: React.FC = () => {
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

        {/* Section Title on small screens */}
        <div className="md:hidden block">
          <div
            className="wow fadeInUp w-full mx-auto text-start"
            data-wow-delay=".1s"
          >
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
            <article
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <div className="h-48 overflow-hidden">
                <a href={news.link} aria-hidden="true" tabIndex={-1}>
                  <Image
                    src={news.imageSrc}
                    alt={news.altText}
                    height={350}
                    width={350}
                  />
                </a>
              </div>
              <div className="p-4">
                <div className="text-sm text-gray-500 mb-2">
                  {news.category}
                </div>
                <h3 className="text-lg text-black font-semibold">
                  <a href={news.link}>{news.title}</a>
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
