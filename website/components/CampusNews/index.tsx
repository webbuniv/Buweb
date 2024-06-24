import React from 'react';
import Image from 'next/image';

const newsData = [
  {
    category: "Health & Medicine",
    title: "Six depression ‘biotypes’ identified in Stanford Medicine study",
    link: "https://news.stanford.edu/stories/2024/06/depression-biotypes.html",
    imageSrc: "/images/features/bu.jpg",
    altText: "Image related to depression biotypes",
  },
  {
    category: "Business",
    title: "Why advertisers pay more to reach viewers who watch less",
    link: "https://news.stanford.edu/stories/2024/06/why-advertisers-pay-more-reach-viewers-who-watch-less",
    imageSrc: "/images/features/bu.jpg",
    altText: "Image related to advertising study",
  },
  {
    category: "Health & Medicine",
    title: "Study finds high blood pressure drug may prevent epilepsy",
    link: "https://news.stanford.edu/stories/2024/06/epilepsy-blood-pressure-drugs.html",
    imageSrc: "/images/features/bu.jpg",
    altText: "Image related to epilepsy study",
  },
  {
    category: "Commencement 2024",
    title: "‘You’re not a wave. You’re water,’ Melinda French Gates tells Stanford ’24 graduates",
    link: "https://news.stanford.edu/stories/2024/06/you-re-not-a-wave-you-re-water-melinda-french-gates-tells-stanford-24-graduates",
    imageSrc: "/images/features/bu.jpg",
    altText: "Melinda French Gates delivers Commencement address",
  },
  {
    category: "Commencement 2024",
    title: "Congratulations, graduates!",
    link: "https://news.stanford.edu/stories/2024/06/commencement-2024-highlights",
    imageSrc: "/images/features/bu.jpg",
    altText: "Commencement 2024 highlights",
  },
  {
    category: "Science & Engineering",
    title: "Center harnesses AI to advance autonomous space exploration",
    link: "https://news.stanford.edu/stories/2024/06/new-center-harnesses-ai-advance-autonomous-exploration-outer-space",
    imageSrc: "/images/features/bu.jpg",
    altText: "AI and space exploration",
  },
];

const CampusNews: React.FC = () => {
  return (
    <section className="p-8">
        <div className="container">
            <h2 className="text-center text-2xl font-bold mb-4">Campus News</h2>
            <p className="text-center mb-8">Stories about people, research, and innovation across the Farm</p>
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
                    <h3 className="text-lg font-semibold"><a href={news.link}>{news.title}</a></h3>
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
