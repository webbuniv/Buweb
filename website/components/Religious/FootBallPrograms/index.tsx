import React from "react";
import Image from "next/image";
import SectionTitle from "../../Common/SectionTitle";
import Link from "next/link";
const newsData = [
  {
    category: "",
    title:
      "Bugema University sports play a vital role in student life",
    link: "#",
    imageSrc: "/images/life/football/footd.jpg",
    altText: "Image related to depression biotypes",
  },
  {
    category: "",
    title: "Bugema University sports play a vital role in student life",
    link: "#",
    imageSrc: "/images/life/football/foota.jpg",
    altText: "Image related to advertising study",
  },
  {
    category: "",
    title: "Bugema University sports play a vital role in student life",
    link: "#",
    imageSrc: "/images/life/football/footb.jpg",
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

const secondData = [
  {
    category: "",
    title:
      "Bugema University sports play a vital role in student life",
    link: "#",
    imageSrc: "/images/life/football/foote.jpg",
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

const FootBallPrograms: React.FC = () => {
  return (
    <section className="px-8">
      <div className="">
        <div className="hidden md:block lg:mt-10">
          <SectionTitle
            title="FootBall At Bugema University"
            paragraph="Bugema University offers a range of opportunities for students passionate about football. The university not only focuses on nurturing talent through its well-established football teams but also encourages joint research collaborations related to sports science, performance analytics, and athlete development. These collaborations provide students and faculty members the chance to explore innovative approaches to football training, injury prevention, and team dynamics, contributing to the broader understanding of the sport and enhancing player performance both on and off the field."
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
              Agriculture
            </h2>
            <p className="text-base !leading-relaxed text-body-color md:text-lg">
              At Bugema University, Agriculture goes beyond the classroom.
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
        <div className="grid lg:mt-10 lg:mb-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {thirdData.map((news, index) => (
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

export default FootBallPrograms;
