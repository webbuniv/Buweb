'use client';
import React, { useEffect, useState } from "react";
import { Events } from "@/types/types";
import Image from "next/image";
import { format } from 'date-fns/format';
import { getEventsById } from "@/lib/actions/events.actions";
import DOMPurify from 'dompurify';

type Props = {
  params: {
    id: string;
  };
};

const EventPage = ({ params }: Props) => {
  const { id } = params;
  const [event, setEvent] = useState<Events | null>(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await getEventsById(id);
        setEvent(response);
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

  if (!event) {
    return <div>Loading...</div>; 
  }
  
  return (
    <div className="pt-[120px] pb-[120px]">
      <div className="container md:p-20">
        <div className="flex items-center justify-center ">
          <Image src={`${process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT}/storage/buckets/${process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID}/files/${event.file}/view?project=${process.env.NEXT_PUBLIC_APPWRITE_PROJECT}`} alt={event.title} width={1200} height={100} className="custom-image" />
        </div> 
        <h1 className="text-3xl lg:text-6xl md:text-center md:leading-relaxed font-bold mt-5">
          {event.title}
        </h1>
        <p className="my-5 text-center text-xl text-gray-400">{format(new Date(event.date), 'dd-MM-yyyy')}</p>
        <div className="my-5 flex items-center justify-center text-lg">
          <span>{event.title}</span>
        </div>
        <div
          className="blog-content text-xl leading-loose flex flex-col gap-5 mt-5"
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(event.description) }}
        />
      </div>
    </div>
  );
}

export default EventPage;
