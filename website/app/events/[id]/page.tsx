import { Events } from "@/types/types";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from 'react';
import { format } from 'date-fns/format';

type Props = {
  params: {
    id: string;
  };
};

export default async function EventPage({ params }: Props) {
  const { id } = params;

  let event: Events | null = null;

  try {
    const response = await fetch(`https://buweb.onrender.com/events/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    event = await response.json();
  } catch (error) {
    console.error("Error fetching event:", error);
  }

  if (!event) {
    return notFound();
  }

  return (
    <div className="pt-[120px] pb-[120px]">
      <div className="container md:p-20">
        <div className="flex items-center justify-center ">
          <Image src={event.coverPhotoUrl} alt={event.title} width={1200} height={100} className="custom-image" />
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
          dangerouslySetInnerHTML={{ __html: event.description }}
        />
      </div>
    </div>
  );
}
