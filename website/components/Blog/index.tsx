import React, { useEffect, useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";
import { getPosts } from "@/lib/requests";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const posts = await getPosts(9); 
        setPosts(posts);
      } catch (err) {
        setError(err);
      }
    };

    fetchPosts();
  }, []);
  return (
    <section id="blog" className="bg-primary/5 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Our Latest Blogs"
          paragraph="You'll find a wealth of 
        knowledge and insights on various topics related to academia, student life, research, and more."
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {posts.map((post) => (
            <div key={post.node.id} className="w-full">
              <SingleBlog key={post.node.id} post={post.node} />
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
