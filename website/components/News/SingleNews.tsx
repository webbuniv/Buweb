import React from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  post: News;
};

const SingleEvent = ({ post }: Props) => {
  return (

    <div className="wow fadeInUp relative rounded-md bg-white shadow-one dark:bg-dark w-[220] mt-5">
      <Link
        href={`/news/${post.$id}`}
        passHref
        className="relative lg:hidden block w-full"
      >
        <span className="absolute top-6 right-6 z-20 inline-flex items-center justify-center rounded-full bg-primary py-2 px-4 text-sm font-semibold capitalize text-white">
          {post.category}
        </span>
        <Image src={`${process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT}/storage/buckets/${process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID}/files/${post.file}/view?project=${process.env.NEXT_PUBLIC_APPWRITE_PROJECT}`} alt="blog" layout="fill" />
      </Link>
      <div className="p-6 sm:p-8 md:px-4 lg:p-8 xl:py-4 xl:px-4">
        <div className="flex gap-5">
          <Link
            href={`/news/${post.$id}`}
            passHref
            className="relative hidden lg:block"
          >
            <Image
              src={`${process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT}/storage/buckets/${process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID}/files/${post.file}/view?project=${process.env.NEXT_PUBLIC_APPWRITE_PROJECT}`}
              alt="blog"
              width={100}
              height={100}
              className="rounded hover:scale-105 transition-all duration 500"
            />
          </Link>
          <Link
            href={`/news/${post.$id}`}
            passHref
            className="mb-2 block text-base font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-lg"
          >
            {post.title.length > 20
              ? `${post.title.slice(0, 23)}...`
              : post.title}
          </Link>

        </div>
        <div
          className="mb-4 text-base font-medium text-body-color dark:border-white dark:border-opacity-10"
          dangerouslySetInnerHTML={{
            __html:
              post.content.length > 20
                ? `${post.content.slice(0, 100)}...`
                : post.content,
          }}
        />
      </div>
    </div>
  );
};

export default SingleEvent;
