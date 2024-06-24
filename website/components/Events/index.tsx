import React, { useEffect, useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import SingleEvent from "./SingleEvent";

const Event = () => {
  const [events, setEvents] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("https://buweb.onrender.com/events", {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setEvents(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchPosts();
  }, [events]);

  return (
    <section id="blog" className="bg-primary/5 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Our Latest Blogs"
          paragraph="You'll find a wealth of 
        knowledge and insights on various topics related to academia, student life, research, and more."
          center
        />

        {error && <p>Error: {error}</p>}

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {events.map((post) => (
            <div key={post.id} className="w-full">
              <SingleEvent post={post} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Event;
