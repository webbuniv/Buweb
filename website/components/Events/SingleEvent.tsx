import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Events } from "@/types/types";


type Props = {
    post: Events;
}

const SingleEvent = ({ post }: Props) => {
  return (
    <div className="wow fadeInUp relative overflow-hidden shadow-one dark:bg-dark w-[220] mb-8">

      <div className="py-2 sm:p-4 md:py-2 md:px-2 lg:p-6 xl:py-2 xl:px-1 2xl:p-6">

        <h3>
          <Link href={`/events/${post.$id}`} passHref className="mb-1 block text-sm md:text-lg font-bold text-black/80 hover:text-primary dark:text-white dark:hover:text-primary sm:text-md">
              {post.title.toUpperCase()}
          </Link>
        </h3>
        <div className="flex items-center">
          <div className="mr-5 flex items-center border-r border-body-color border-opacity-10 pr-5 dark:border-white dark:border-opacity-10 xl:mr-3 xl:pr-3 2xl:mr-5 2xl:pr-5">
            <div className="mr-4">
              <div className="relative h-10 w-10 overflow-hidden rounded-full">
                <Image src={`${process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT}/storage/buckets/${process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID}/files/${post.file}/view?project=${process.env.NEXT_PUBLIC_APPWRITE_PROJECT}`} alt="author" layout="fill" />
              </div>
            </div>
            <div className="w-full">

              <h4 className="mb-1 text-xs md:text-md font-medium text-dark dark:text-white">
                By {post.organizer}
              </h4>
              <p className="text-xs md:text-sm text-body-color">{post.title}</p>

            </div>
          </div>
          <div className="inline-block">
            <h4 className="mb-1 text-xs md:text-md font-medium text-dark dark:text-white">
              Date
            </h4>
            <p className="text-xs md:text-sm text-red-500">{ new Date(post.date).toLocaleDateString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleEvent;
