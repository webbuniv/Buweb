import React, { useEffect, useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";
// import { getPosts } from "@/lib/requests";
import { getBlogs } from "@/lib/actions/blogs.actions";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const posts = await getBlogs(); 
        setPosts(posts.data);
      } catch (err) {
        setError(err);
      }
    };

    fetchPosts();
  }, []);
  return (
    <section id="blog" className="bg-primary/5 py-2 mt-2">
      <div className="container">
        <SectionTitle
          title="Our Latest Blogs"
          paragraph="You'll find a wealth of 
        knowledge and insights on various topics related to academia, student life, research, and more."
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3 mt-2">
          {posts.map((post) => (
            <div key={post._id} className="w-full">
              <SingleBlog key={post._id} post={post} />
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
