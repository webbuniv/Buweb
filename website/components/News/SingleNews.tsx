import React from "react";
import Image from "next/image";
import Link from "next/link";
import { News } from "@/types/types";

type Props = {
    post: News;
}

const SingleNews = ({ post }: Props) => {
  return (
    <div className="wow fadeInUp relative overflow-hidden rounded-md bg-white shadow-one h-[450px] dark:bg-dark w-[220] mt-5">
      <Link href={`/newss/${post._id}`} passHref className="relative block h-[220px] w-full">
          <span className="absolute top-6 right-6 z-20 inline-flex items-center justify-center rounded-full bg-primary py-2 px-4 text-sm font-semibold capitalize text-white">
            {post.category}
          </span>
          <Image src={post.photo} alt="blog" layout="fill" />
      </Link>
      <div className="p-6 sm:p-8 md:py-8 md:px-4 lg:p-8 xl:py-8 xl:px-4">
        <h3>
          <Link href={`/news/${post._id}`} passHref className="mb-2 block text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl">
              {post.title}
          </Link>
        </h3>
        <p className="mb-4 border-b border-body-color border-opacity-10 pb-6 text-base font-medium text-body-color dark:border-white dark:border-opacity-10">
          {post.content}
        </p>
        <div className="flex items-center">
          <div className="mr-5 flex items-center border-r border-body-color border-opacity-10 pr-5 dark:border-white dark:border-opacity-10 xl:mr-3 xl:pr-3 2xl:mr-5 2xl:pr-5">
            <div className="mr-4">
              <div className="relative h-10 w-10 overflow-hidden rounded-full">
                <Image src={post.photo} alt="author" layout="fill" />
              </div>
            </div>
            <div className="w-full">
              <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
                By {post.title}
              </h4>
              <p className="text-xs text-body-color">{post.title}</p>
            </div>
          </div>
          <div className="inline-block">
            <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
              Date
            </h4>
            <p className="text-xs text-body-color">{post.date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleNews;
