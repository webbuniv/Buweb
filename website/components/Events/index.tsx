import React, { useEffect, useState } from "react";
import SingleEvent from "./SingleEvent";
import { getEvents } from "@/lib/actions/events.actions";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await getEvents(
          {
            searchText: "",
            sort: "$createdAt-desc",
            limit: 2,
          }
        );

        if (!response) {
          throw new Error('Network response was not ok');
        }
        const reversedData = response.slice(0)
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
          {events.map((event) => (
            <div key={event.id} className="w-full">
              <SingleEvent post={event} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Events;
