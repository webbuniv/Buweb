import Link from "next/link"
import Image from "next/image"

const AlumniNews = () => {
  const news = [
    {
      id: 1,
      title: "Bugema University Alumni Excel in Global Tech Industry",
      excerpt:
        "Recent graduates from the School of Science and Technology are making significant impacts in leading technology companies worldwide.",
      date: "2024-05-15",
      author: "Alumni Relations Office",
      image: "/placeholder.svg?height=200&width=300",
      category: "Success Stories",
    },
    {
      id: 2,
      title: "Class of 2019 Establishes Scholarship Fund",
      excerpt:
        "The graduating class of 2019 has collectively raised $50,000 to establish a scholarship fund for underprivileged students.",
      date: "2024-05-10",
      author: "Development Office",
      image: "/placeholder.svg?height=200&width=300",
      category: "Giving Back",
    },
    {
      id: 3,
      title: "Alumni Entrepreneur Wins National Business Award",
      excerpt: "Sarah Nakamya (Class of 2018) receives recognition for her innovative agricultural technology startup.",
      date: "2024-05-05",
      author: "Communications Team",
      image: "/placeholder.svg?height=200&width=300",
      category: "Awards",
    },
  ]

  return (
    <section className="py-16 md:py-20 lg:py-28 bg-gray-light dark:bg-bg-color-dark">
      <div className="container">
        <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-16">
          <h2 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
            Alumni News & Updates
          </h2>
          <p className="text-base !leading-relaxed text-body-color md:text-lg">
            Stay informed about the latest achievements and news from our alumni community
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {news.map((article) => (
            <div key={article.id} className="rounded-md bg-white p-6 shadow-one dark:bg-[#1D2144]">
              <div className="relative mb-4 h-48 w-full overflow-hidden rounded-md">
                <Image src={article.image || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
                <div className="absolute top-4 left-4">
                  <span className="rounded bg-primary px-3 py-1 text-xs font-medium text-white">
                    {article.category}
                  </span>
                </div>
              </div>

              <div className="mb-4">
                <h3 className="mb-2 text-xl font-semibold text-black dark:text-white line-clamp-2">{article.title}</h3>
                <p className="text-sm text-body-color mb-3 line-clamp-3">{article.excerpt}</p>

                <div className="flex items-center justify-between text-xs text-body-color">
                  <span>By {article.author}</span>
                  <span>{new Date(article.date).toLocaleDateString()}</span>
                </div>
              </div>

              <Link
                href={`/alumni/news/${article.id}`}
                className="inline-block rounded bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-opacity-90"
              >
                Read More
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/alumni/news"
            className="rounded-md bg-primary py-4 px-8 text-base font-medium text-white duration-300 ease-in-out hover:bg-opacity-80"
          >
            View All News
          </Link>
        </div>
      </div>
    </section>
  )
}

export default AlumniNews
