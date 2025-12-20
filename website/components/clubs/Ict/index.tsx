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
    imageSrc: "/images/club/a.jpg",
    altText: "",
  },
  {
    category: "",
    title: "",
    link: "#",
    imageSrc: "/images/club/b.jpg",
    altText: "",
  },
  {
    category: "",
    title: "",
    link: "#",
    imageSrc: "/images/club/h.jpg",
    altText: "",
  },
  {
    category: "",
    title: "",
    link: "#",
    imageSrc: "/images/club/i.jpg",
    altText: "",
  },
];

const secondData = [
  {
    category: "",
    title:
      "",
    link: "#",
    imageSrc: "/images/club/e.jpg",
    altText: "",
  },
  {
    category: "",
    title: "",
    link: "#",
    imageSrc: "/images/club/f.jpg",
    altText: "",
  },
  {
    category: "",
    title: "",
    link: "#",
    imageSrc: "/images/club/g.jpg",
    altText: "",
  },
  {
    category: "",
    title: "",
    link: "#",
    imageSrc: "/images/club/j.jpg",
    altText: "",
  },
];
const thirdData = [
  {
    category: "",
    title:
      "",
    link: "#",
    imageSrc: "/images/club/k.jpg",
    altText: "Image related to depression biotypes",
  },
  {
    category: "",
    title: "",
    link: "#",
    imageSrc: "/images/club/l.jpg",
    altText: "Image related to advertising study",
  },
  {
    category: "",
    title: "",
    link: "#",
    imageSrc: "/images/club/nine.jpg",
    altText: "Image related to epilepsy study",
  },
  {
    category: "",
    title: "",
    link: "#",
    imageSrc: "/images/club/n.jpg",
    altText: "Commencement 2024 highlights",
  },
];

const IctPrograms: React.FC = () => {
  return (
    <section className="px-8">
      <div className="">
        <div className="hidden md:block lg:mt-10">
          <SectionTitle
            title="School of science and Technology clubs"
            paragraph="Clubs fosters innovation and hands-on learning through a variety of student-led clubs. These clubs are designed to encourage collaboration, creativity, and exploration in fields such as robotics, coding, environmental science, and engineering. By participating, students can deepen their understanding of cutting-edge technologies, engage in research projects, and develop skills that will prepare them for successful careers in the tech-driven world."
            center
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
        <div className="grid lg:mt-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
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

export default IctPrograms;
