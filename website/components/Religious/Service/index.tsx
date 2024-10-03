import React from "react";
import Image from "next/image";
import SectionTitle from "../../Common/SectionTitle";
import Link from "next/link";
const newsData = [
  {
    category: "",
    title:
      "",
    link: "#",
    imageSrc: "/images/church/pre.jpeg",
    altText: "",
  },
  {
    category: "",
    title: "",
    link: "#",
    imageSrc: "/images/church/preee.jpeg",
    altText: "",
  },
  {
    category: "",
    title: "",
    link: "#",
    imageSrc: "/images/church/prere.jpeg",
    altText: "",
  },
  {
    category: "",
    title: "",
    link: "#",
    imageSrc: "/images/church/prree.jpeg",
    altText: "",
  },
];

const secondData = [
  {
    category: "",
    title:
      "",
    link: "#",
    imageSrc: "/images/church/sig.jpeg",
    altText: "",
  },
  {
    category: "",
    title: "",
    link: "#",
    imageSrc: "/images/church/siggn.jpeg",
    altText: "",
  },
  {
    category: "",
    title: "",
    link: "#",
    imageSrc: "/images/church/prrer.jpeg",
    altText: "",
  },
  {
    category: "",
    title: "",
    link: "#",
    imageSrc: "/images/church/preee.jpeg",
    altText: "",
  },
];
const thirdData = [
  {
    category: "",
    title:
      "Bugema University sports play a vital role in student life",
    link: "#",
    imageSrc: "/images/life/football/footc.jpg",
    altText: "Image related to depression biotypes",
  },
  {
    category: "",
    title: "Bugema University sports play a vital role in student life",
    link: "#",
    imageSrc: "/images/life/football/footc.jpg",
    altText: "Image related to advertising study",
  },
  {
    category: "",
    title: "Bugema University sports play a vital role in student life",
    link: "#",
    imageSrc: "/images/life/football/footc.jpg",
    altText: "Image related to epilepsy study",
  },
  {
    category: "",
    title: "Bugema University sports play a vital role in student life",
    link: "#",
    imageSrc: "/images/life/football/footc.jpg",
    altText: "Commencement 2024 highlights",
  },
];

const ServicePrograms: React.FC = () => {
  return (
    <section className="px-8">
      <div className="">
        <div className="hidden md:block lg:mt-10">
          <SectionTitle
            title="Bugema University service program"
            paragraph="Bugema University is deeply committed to fostering spiritual growth and community involvement through its church service programs. These services offer students and faculty members the opportunity to participate in meaningful worship experiences, Bible study groups, and outreach activities. The program emphasizes faith-based education, spiritual reflection, and service to others, creating a nurturing environment where individuals can grow spiritually and develop leadership skills for church ministry. By engaging in these services, participants not only strengthen their faith but also contribute positively to the surrounding community."
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
            <h2 className="mb-4 text-3xl font-bold !leading-tight text-black/80 dark:text-white sm:text-4xl md:text-[45px] mt-10">
              
            </h2>
            <p className="text-base !leading-relaxed text-body-color md:text-lg">
              
            </p>
          </div>
        </div>
        <div className="grid lg:mt-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
          {newsData.map((news, index) => (
            <article
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:bg-blue-50 hover:text-blue-900 hover:shadow-lg transition duration-500 cursor-pointer"
            >
              <div className="h-48 overflow-hidden ">
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
        <div className="grid lg:mt-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {secondData.map((news, index) => (
            <article
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:bg-blue-50 hover:text-blue-900 hover:shadow-lg transition duration-500 cursor-pointer"
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
        {/* <div className="text-center mt-8">
          <Link href="/studentlife" className="text-blue-500 font-bold">
            More About Students Life
          </Link>
        </div> */}
      </div>
    </section>
  );
};

export default ServicePrograms;
