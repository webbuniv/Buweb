import React from 'react';
import Image from 'next/image';
import SectionTitle from '../Common/SectionTitle';
const newsData = [
  {
    category: "Sports",
    title: "Bugema University sports play a vital role in student life ............",
    link: "/studentlife",
    imageSrc: "/images/life/sport.jpg",
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
    title: "‘You’re not a wave. You’re water,’ Melinda French tells Bugema University ’29th graduates",
    link: "/",
    imageSrc: "/images/features/bu.jpg",
    altText: "Melinda French Gates delivers Commencement address",
  },
  {
    category: "Commencement 2024",
    title: "Congratulations, graduates!",
    link: "/",
    imageSrc: "/images/features/grad.jpg",
    altText: "Commencement 2024 highlights",
  },
  {
    category: "Science & Engineering",
    title: "Center harnesses AI to advance autonomous space exploration",
    link: "/",
    imageSrc: "/images/features/ai.webp",
    altText: "AI and space exploration",
  },
];

const CampusNews: React.FC = () => {
  return (
    <section className="p-8">
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
          <SectionTitle 
            title="Explore Bugema University"
            paragraph="Join us at Bugema University, where education is embraced as a catalyst for empowerment and change. Experience an inclusive and enriching learning environment where equal opportunities, academic excellence, and a commitment to students' success define our core values. Together, we can shape a brighter future through education."
            center
            mb="50px"
          />
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
                    <h3 className="text-lg text-black font-semibold"><a href={news.link}>{news.title}</a></h3>
                    </div>
                </article>
                ))}
            </div>
            <div className="text-center mt-8">
                <a href="https://news.stanford.edu/report/" className="text-blue-500 font-bold" data-ga-category="Call to action" data-ga-action="More campus news">More campus news</a>
            </div>
      </div>
    </section>
  );
};

export default CampusNews;
