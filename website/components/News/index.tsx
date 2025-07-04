import React, { useEffect, useState } from "react";
import SingleNews from "./SingleNews";
import Link from "next/link";
import Image from "next/image";
import { getNews } from "../../lib/actions/news.actions";

const News = () => {
  const [news, setNews] = useState([]);
  const [latestNews, setLatestNews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await getNews(
          {
            searchText: "",
            sort: "$createdAt-desc",
            limit: 2,
          }
        );

        if (!response) {
          throw new Error("Network response was not ok");
        }
        const reversedData = response.slice(0, 2);
        const latestNews = reversedData.slice(0, 1);
        setNews(reversedData);
        setLatestNews(latestNews);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchPosts();
  }, []);

  return (

    <section id="blog" className="py-2">
      <div className="container flex flex-col lg:flex-row lg:gap-4">

        {error && <p>Error: {error}</p>}

        <div className="w-full">
          {latestNews.map((post) => (
            <div key={post.id} className="w-full">
              <div className="wow fadeInUp relative overflow-hidden rounded-md h-fit bg-white shadow-one dark:bg-dark w-[220] mt-5">
                <Link
                  href={`/news/${post.$id}`}
                  passHref
                  className="relative lg:block hidden h-[220px] w-full"
                >
                  <span className="absolute top-6 right-6 z-20 inline-flex items-center justify-center rounded-full bg-primary py-2 px-4 text-sm font-semibold capitalize text-white">
                    {post.category}
                  </span>
                  <Image
                    src={`${process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT}/storage/buckets/${process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID}/files/${post.file}/view?project=${process.env.NEXT_PUBLIC_APPWRITE_PROJECT}`}
                    alt="blog"
                    layout="fill"
                    className="hover:scale-105 transition-all duration-500"
                  />
                </Link>
                <div className="p-6 sm:p-4 md:py-4 md:px-4 lg:p-4 xl:py-4 xl:px-4">
                  <h3>
                    <Link
                      href={`/news/${post.$id}`}
                      passHref
                      className="mb-1 block text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary"
                    >
                      {post.title.length > 20
                        ? `${post.title.slice(0, 23)}...`
                        : post.title}
                    </Link>
                  </h3>
                  <div className=" pb-2 text-base font-medium text-body-color dark:border-white dark:border-opacity-10"
                    dangerouslySetInnerHTML={{
                      __html:
                        post.content.length > 20
                          ? `${post.content.slice(0, 150)}...`
                          : post.content,
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="lg:flex lg:flex-col -space-y-4 hidden w-full">
          {news.map((post) => (
            <div key={post.id} className="w-full">
              <SingleNews post={post} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
