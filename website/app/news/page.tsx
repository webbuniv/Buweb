"use client";
import React, { useEffect, useState } from "react";
import SingleNews from "@/components/News/SingleNews";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import { getNews } from "@/lib/actions/news.actions";

export default function Blog() {
  const [news, setNews] = useState([]);
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

        const reversedData = response.slice(0)
        setNews(reversedData);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchPosts();
  }, []);

  return (
    <>
      <div className="container mt-[100px] md:mt-[120px]">
        <Breadcrumb
          pageName="Bugema University Blogs"
          description="Welcome to the Bugema University Blog page! Here, you'll find a wealth of 
        knowledge and insights on various topics related to academia, student life, research, and more. 
        "
        />

        <section className="pt-[50px] pb-[10px] md:pb-[80px]">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {news.map((post) => (
                <SingleNews key={post._id} post={post} />
              ))}
            </div>
            <div></div>
            <div
              className="wow fadeInUp -mx-4 flex flex-wrap"
              data-wow-delay=".15s"
            >
              <div className="w-full px-4">
                <ul className="flex items-center justify-center pt-8">
                  <li className="mx-1">
                    <a
                      href="#0"
                      className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                    >
                      Prev
                    </a>
                  </li>
                  <li className="mx-1">
                    <a
                      href="#0"
                      className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                    >
                      1
                    </a>
                  </li>
                  <li className="mx-1">
                    <a
                      href="#0"
                      className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                    >
                      2
                    </a>
                  </li>
                  <li className="mx-1">
                    <a
                      href="#0"
                      className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                    >
                      3
                    </a>
                  </li>
                  <li className="mx-1">
                    <a className="flex h-9 min-w-[36px] cursor-not-allowed items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color">
                      ...
                    </a>
                  </li>
                  <li className="mx-1">
                    <a
                      href="#0"
                      className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                    >
                      12
                    </a>
                  </li>
                  <li className="mx-1">
                    <a
                      href="#0"
                      className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                    >
                      Next
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <Contact />
      </div>
    </>
  );
}
