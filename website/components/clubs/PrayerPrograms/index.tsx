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
    imageSrc: "/images/church/cch.jpeg",
    altText: "",
  },
  {
    category: "",
    title: "",
    link: "#",
    imageSrc: "/images/church/chchch.jpeg",
    altText: "",
  },
  {
    category: "",
    title: "",
    link: "#",
    imageSrc: "/images/church/chchchch.jpeg",
    altText: "",
  },
  {
    category: "",
    title: "",
    link: "#",
    imageSrc: "/images/church/chh.jpeg",
    altText: "",
  },
];

const secondData = [
  {
    category: "",
    title:
      "",
    link: "#",
    imageSrc: "/images/church/chhc.jpeg",
    altText: "",
  },
  {
    category: "",
    title: "",
    link: "#",
    imageSrc: "/images/church/chor.jpeg",
    altText: "",
  },
  {
    category: "",
    title: "",
    link: "#",
    imageSrc: "/images/church/chr.jpeg",
    altText: "",
  },
  {
    category: "",
    title: "",
    link: "#",
    imageSrc: "/images/church/men.jpeg",
    altText: "",
  },
];
const thirdData = [
  {
    category: ".....",
    title:
      "Bugema University sports play a vital role in student life ............",
    link: "#",
    imageSrc: "/images/life/netball/nete.jpeg",
    altText: "Image related to depression biotypes",
  },
  {
    category: "......",
    title: "Why advertisers pay more to reach viewers who watch less",
    link: "#",
    imageSrc: "/images/life/netball/neta.jpeg",
    altText: "Image related to advertising study",
  },
  {
    category: "...............",
    title: "Study finds high blood pressure drug may prevent epilepsy",
    link: "#",
    imageSrc: "/images/life/netball/neta.jpeg",
    altText: "Image related to epilepsy study",
  },
  {
    category: "................",
    title: "Congratulations, graduates!",
    link: "#",
    imageSrc: "/images/life/netball/neta.jpeg",
    altText: "Commencement 2024 highlights",
  },
];

const PrayerPrograms: React.FC = () => {
  return (
    <section className="px-8">
      <div className="">
        <div className="hidden md:block lg:mt-10">
          <SectionTitle
            title="Prayers"
            paragraph="Bugema University places a strong emphasis on the power of prayer as a cornerstone of spiritual life. The university organizes regular prayer sessions, including morning devotionals, weekly prayer meetings, and special prayer retreats, providing a space for students and faculty to seek guidance, reflect on their faith, and strengthen their relationship with God. These moments of collective and personal prayer foster a sense of community and spiritual growth, supporting students throughout their academic and personal journeys."
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
              Prayers
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
        {/* <div className="grid lg:mt-10 lg:mb-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
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
        </div> */}
        {/* <div className="text-center mt-8">
          <Link href="/studentlife" className="text-blue-500 font-bold">
            More About Students Life
          </Link>
        </div> */}
      </div>
    </section>
  );
};

export default PrayerPrograms;
