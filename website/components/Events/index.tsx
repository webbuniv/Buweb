import React, { useEffect, useState } from "react";
import SingleEvent from "./SingleEvent";

const Events = () => {
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
        const reversedData = data.slice(0).reverse();
        const fewEvents = reversedData.slice(0, 2);
        setEvents(fewEvents);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchPosts();
  }, []);

  return (

    <section id="blog" className="bg-white mt-4">

      <div className="container">

        {error && <p>Error: {error}</p>}

        <div className="grid grid-cols-1 gap-y-2">
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

export default Events;
