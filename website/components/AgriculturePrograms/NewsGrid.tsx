import React from "react"

const newsData = [
  {
    category: "Research",
    title: "Bugema University Pioneers New Drought-Resistant Crop Varieties",
    link: "#",
    imageSrc: "/images/agric/aa.jpeg",
    altText: "Researcher examining crops in a field",
  },
  {
    category: "Student Life",
    title: "Agriculture Students Lead Community Garden Initiative",
    link: "#",
    imageSrc: "/images/agric/a.jpeg",
    altText: "Students working in a community garden",
  },
  {
    category: "Innovation",
    title: "New Smart Farming Technology Developed by Bugema Researchers",
    link: "#",
    imageSrc: "/images/agric/aaa.jpeg",
    altText: "Farmer using a tablet in a field",
  },
  {
    category: "Events",
    title: "Annual Agricultural Symposium Draws Global Experts",
    link: "#",
    imageSrc: "/images/agric/ag.jpeg",
    altText: "Speakers at an agricultural symposium",
  },
]

const NewsGrid: React.FC = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-600">Latest News and Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {newsData.map((news, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300">
              <div className="relative h-48">
                <img
                  src={news.imageSrc || ""}
                  alt={news.altText}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-0 left-0 bg-blue-500 text-white py-1 px-3 rounded-br-lg">
                  {news.category}
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">
                  <a href={news.link} className="hover:text-blue-500 transition duration-300">
                    {news.title}
                  </a>
                </h3>
                <a href={news.link} className="text-blue-500 hover:underline">Read more</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default NewsGrid

