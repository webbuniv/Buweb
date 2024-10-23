import React from "react";
import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import Link from "next/link";
const newsData = [
  {
    category: "Crops",
    title:
      "",
    link: "#",
    imageSrc: "/images/agric/cro.jpeg",
    altText: "Image related to depression biotypes",
  },
  {
    category: "Crops",
    title: "",
    link: "#",
    imageSrc: "/images/agric/crop.jpeg",
    altText: "Image related to advertising study",
  },
  {
    category: "crops",
    title: "",
    link: "/",
    imageSrc: "/images/agric/cropp.jpeg",
    altText: "Image related to epilepsy study",
  },
  {
    category: "Crops",
    title: "",
    link: "#",
    imageSrc: "/images/agric/croro.jpeg",
    altText: "Commencement 2024 highlights",
  },
];
const secondData = [
  {
    category: "Crops",
    title:
      "",
    link: "#",
    imageSrc: "/images/agric/crroo.jpeg",
    altText: "Image related to depression biotypes",
  },
  {
    category: "Crops",
    title: "",
    link: "#",
    imageSrc: "/images/agric/ddd.jpeg",
    altText: "Image related to advertising study",
  },
  {
    category: "crops",
    title: "",
    link: "/",
    imageSrc: "/images/agric/agrr.jpeg",
    altText: "Image related to epilepsy study",
  },
  {
    category: "Crops",
    title: "",
    link: "#",
    imageSrc: "/images/agric/agrri.jpeg",
    altText: "Commencement 2024 highlights",
  },
];

const AgricPro: React.FC = () => {
  return (
    <section className="px-8">
      <div className="">
        <div className="hidden md:block lg:mt-10">
          <SectionTitle
            title="Featured research collaborations"
            paragraph="The most effective way to manage plant disease is by prevention. Know exactly where, what and when to spray, even down to the best time of day. Save costs on chemicals and spraying while you maximize protection."
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
          {newsData.map((news, index) => (
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

export default AgricPro;
