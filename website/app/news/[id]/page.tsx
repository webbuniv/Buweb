import Image from "next/image";
import { getNewsById } from "@/lib/actions/news.actions";
import { NewsItem } from "@/types/types";
import { Loader2 } from "lucide-react";
import { Metadata } from 'next';
import IndividualNews from "./news";
import { PostProvider } from "./newsContext";

interface Props {
  params: Promise<{ id: string }>
}
 export async function generateMetadata({ params }: Props): Promise<Metadata> {
const { id } = await(params);
  const news = await getNewsById(id);
                        return {
                                title: news?.title,
                                description: news?.content || "",
                                openGraph: {
                                title: news?.title,
                                description: news?.content || "",
                                images: `${process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT}/storage/buckets/${process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID}/files/${news.file}/view?project=${process.env.NEXT_PUBLIC_APPWRITE_PROJECT}`,
                                url: `http://localhost:3000/news/${news?.id}`,
                                type: "website"
                                }
                                }
                        };

const  NewsPage =async  ({ params }: Props) => {
  const { id } = await params;

const news = await getNewsById(id);

  if (!news) {
    return <div className="flex flex-col justify-center items-center h-screen">
        <Loader2 className="w-20 h-20 animate-spin text-blue-600" />
        <p className="mt-4 text-lg text-gray-600">Loading news details...</p>
    </div>;
  }
  
  return (
      <PostProvider post={news}>
      <IndividualNews />
    </PostProvider>
  );
}

export default NewsPage;
