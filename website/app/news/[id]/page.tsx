'use client';
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { getNewsById } from "@/lib/actions/news.actions";
import { NewsItem } from "@/types/types";
import DOMPurify from 'dompurify';


type Props = {
  params: {
    id: string;
  };
};

const  NewsPage = ({ params }: Props) => {
  const { id } = params;
  const [news, setNews] = useState<NewsItem | null>(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await getNewsById(id);
        setNews(response);
        console.log(response);
      } catch (error) {
        console.error("Error fetching news:", error);
        setErrorMessage("Failed to load news details.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchNews();
  }, [id]);

  if (!news) {
    return <div>Loading...</div>; 
  }
  
  return (
    <div className="pt-[120px] pb-[120px]">
      <div className="container md:p-20">
        <div className="flex items-center justify-center ">
          <Image src={`${process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT}/storage/buckets/${process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID}/files/${news.file}/view?project=${process.env.NEXT_PUBLIC_APPWRITE_PROJECT}`} alt={news.title} width={1200} height={100} className="custom-image" />
        </div> 
        <h1 className="text-3xl lg:text-6xl md:text-center md:leading-relaxed font-bold mt-5">
          {news.title}
        </h1>
        <p className="my-5 text-center text-xl text-gray-400">{news.author}</p>
        <div className="my-5 flex items-center justify-center text-lg">
          <span>{news.title}</span>
        </div>
        <div
          className="blog-content text-xl leading-loose flex flex-col gap-5 mt-5"
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(news.content) }}
        />

      </div>
    </div>
  );
}

export default NewsPage;
