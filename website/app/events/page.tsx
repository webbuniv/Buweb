"use client";
import React, { useEffect, useState, useMemo } from "react";
import SingleEvent from "@/components/Events/SingleEvent";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { getEvents } from "@/lib/actions/events.actions";
import Contact from "@/components/Contact";
import { GraduationCap, Search, X } from "lucide-react";

export default function EventsPage() {
  const [events, setEvents] = useState([]);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await getEvents(
          {
            searchText: "",
            sort: "$createdAt-desc",
            limit: 100,
          }
        );

        const reversedData = response.slice(0)
        setEvents(reversedData);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchPosts();
  }, []);

  // Filter events based on search query
  const filteredEvents = useMemo(() => {
    if (!searchQuery.trim()) return events;
    const query = searchQuery.toLowerCase();
    return events.filter((event: any) =>
      event.title?.toLowerCase().includes(query) ||
      event.description?.toLowerCase().includes(query) ||
      event.location?.toLowerCase().includes(query)
    );
  }, [events, searchQuery]);

  return (
      <div className="min-h-screen bg-background  mt-[100px] md:mt-30 ">
        <section className="relative bg-primary py-20 lg:py-28" 
        style={
                {
                        backgroundImage: "url('/images/footer/bugema ariel view.jpg')",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                }
        }
        >
        <div className="absolute inset-0  bg-black opacity-10" />
        <div className=" text-gray-300 relative mx-auto px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground text-center mb-6 text-balance">
            University Events
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 text-center max-w-3xl mx-auto leading-relaxed text-pretty">
            Welcome to the Bugema University Events page! Here, you'll find a wealth of 
        all the upcoming events happening in Bugema. You will also have access to the past events. 
          </p>

          {/* Interactive Search Bar */}
          <div className="max-w-xl mx-auto mt-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search events by title, description, or location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-12 py-3 rounded-full bg-white/95 backdrop-blur-sm text-gray-800 placeholder-gray-500 shadow-lg border-0 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              )}
            </div>
            {searchQuery && (
              <p className="text-center text-primary-foreground/70 mt-3 text-sm">
                Found {filteredEvents.length} event{filteredEvents.length !== 1 ? 's' : ''} matching "{searchQuery}"
              </p>
            )}
          </div>
        </div>
      </section>

        <section className="pt-[50px] pb-[10px] md:pb-[80px]">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEvents.length > 0 ? (
                filteredEvents.map((post) => (
                  <SingleEvent key={post._id} post={post} />
                ))
              ) : (
                <div className="col-span-full text-center py-12">
                  <p className="text-gray-500 text-lg">
                    {searchQuery ? "No events found matching your search." : "No events available."}
                  </p>
                </div>
              )}
            </div>
            <div></div>
            <div
              className="wow fadeInUp -mx-4 flex flex-wrap"
              data-wow-delay=".15s"
            >
              <div className="w-full px-4">
                <ul className="flex items-center justify-center pt-8">
                  <li className="mx-1">
                    <a
                      href="#0"
                      className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                    >
                      Prev
                    </a>
                  </li>
                  <li className="mx-1">
                    <a
                      href="#0"
                      className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                    >
                      1
                    </a>
                  </li>
                  <li className="mx-1">
                    <a
                      href="#0"
                      className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                    >
                      2
                    </a>
                  </li>
                  <li className="mx-1">
                    <a
                      href="#0"
                      className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                    >
                      3
                    </a>
                  </li>
                  <li className="mx-1">
                    <a className="flex h-9 min-w-[36px] cursor-not-allowed items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color">
                      ...
                    </a>
                  </li>
                  <li className="mx-1">
                    <a
                      href="#0"
                      className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                    >
                      12
                    </a>
                  </li>
                  <li className="mx-1">
                    <a
                      href="#0"
                      className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                    >
                      Next
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <Contact />
      </div>
  );
}
