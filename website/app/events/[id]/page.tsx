import { Event } from "@/types/types";
import Image from "next/image";
import { notFound } from "next/navigation";

type Props = {
  params: {
    id: string;
  };
};

export default async function EventPage({ params }: Props) {
  const { id } = params;

  let event: Event | null = null;

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
      <div className="container p-20">
        <div className="flex items-center justify-center ">
          <Image src={event.coverPhotoUrl} alt={event.title} width={1200} height={100} className="custom-image" />
        </div> 
        <h1 className="text-4xl lg:text-6xl text-center leading-relaxed font-bold mt-5">
          {event.title}
        </h1>
        <p className="my-5 text-center text-xl text-gray-400">{event.date}</p>
        <div className="my-5 flex items-center justify-center text-lg">
          {/* {event.author.profilePicture && (
            <Image
              src={event.author.profilePicture}
              alt={event.author.name}
              width={40}
              height={40}
              className="rounded-full"
            />
          )} */}
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
