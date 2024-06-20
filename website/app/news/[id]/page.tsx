import { News } from "@/types/types";
import Image from "next/image";
import { notFound } from "next/navigation";

type Props = {
  params: {
    id: string;
  };
};

export default async function NewsPage({ params }: Props) {
  const { id } = params;

  let news: News | null = null;

  try {
    const response = await fetch(`https://buweb.onrender.com/news/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    news = await response.json();
  } catch (error) {
    console.error("Error fetching news:", error);
  }

  if (!news) {
    return notFound();
  }

  return (
    <div className="pt-[120px] pb-[120px]">
      <div className="container p-20">
        <div className="flex items-center justify-center ">
          <Image src={news.photo} alt={news.title} width={1200} height={100} className="custom-image" />
        </div> 
        <h1 className="text-4xl lg:text-6xl text-center leading-relaxed font-bold mt-5">
          {news.title}
        </h1>
        <p className="my-5 text-center text-xl text-gray-400">{news.date}</p>
        <div className="my-5 flex items-center justify-center text-lg">
          <span>{news.title}</span>
        </div>
        <div
          className="blog-content text-xl leading-loose flex flex-col gap-5 mt-5"
          dangerouslySetInnerHTML={{ __html: news.content }}
        />
      </div>
    </div>
  );
}
