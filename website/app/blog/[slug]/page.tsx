import { getPostBySlug } from "@/lib/requests";
import { Post } from "@/lib/types";
import Image from "next/image";
import { notFound } from "next/navigation";

type Props = {
  params: {
    slug: string;
  };
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = params;

  let post: Post | null = null;

  try {
    post = await getPostBySlug(slug);
  } catch (error) {
    console.error("Error fetching post:", error);
  }

  if (!post) {
    return notFound();
  }

  return (
    <>
    <div className="pt-[120px] pb-[120px]">
      <div className="container p-20">
        <div className="flex items-center justify-center ">
          <Image src={post.coverImage.url} alt={post.title} width={1200} height={100} className="custom-image" />
        </div> 
        <h1 className="text-4xl lg:text-6xl text-center leading-relaxed font-bold mt-5">
          {post.title}
        </h1>
        <p className="my-5 text-center text-xl text-gray-400">{post.subtitle}</p>
        <div className="my-5 flex items-center justify-center text-lg">
          {post.author.profilePicture && (
            <Image
              src={post.author.profilePicture}
              alt={post.author.name}
              width={40}
              height={40}
              className="rounded-full"
            />
          )}
          <span>{post.author.name}</span>
        </div>
        <div
          className="blog-content text-xl leading-loose flex flex-col gap-5 mt-5"
          dangerouslySetInnerHTML={{ __html: post.content.html }}
        />
      </div>
    </div>
    </>
  );
}
