import React from "react";
import SectionTitle from "../Common/SectionTitle";
import Events from "../Events";
import News from "../News";
import Link from "next/link";

const EventsAndNews: React.FC = () => {
  return (
    <section id="eventsnadnews" className="mt-10 mb-5">
      {/* On smaller screens */}
      <div
        className="first-line:wow mx-3 w-[80%] px-1 text-start fadeInUp md:hidden block"
        data-wow-delay=".1s"
      >
        <h2 className="mb-2 text-3xl font-bold !leading-tight text-black/80 dark:text-white sm:text-4xl md:text-[45px]">
          Upcoming Events And News
        </h2>
        <p className="text-base !leading-relaxed text-body-color md:text-lg">
          Explore a diverse array of activities you do not want to miss. Stories
          about latest developments, timely insights, campus happenings,
          academic strides, and much more at Bugema where every moment counts.
        </p>
      </div>

      {/* On big screens */}
      <div
        className="hidden md:block first-line:wow mx-10 w-[80%] px-1 text-center fadeInUp"
        data-wow-delay=".1s"
      >
        <h2 className="mb-4 text-3xl font-bold !leading-tight text-black/80 dark:text-white sm:text-4xl md:text-[45px]">
          Upcoming Events And News
        </h2>
        <p className="text-base !leading-relaxed text-body-color md:text-lg">
          Explore a diverse array of activities whether workshops and seminars,
          cultural and social engagements, sports activities you do not want to
          miss. Stories about latest developments, timely insights, campus
          happenings, academic strides, and much more at Bugema where every
          moment counts.
        </p>
      </div>

      <div className="container mt-2 pt-4 bg-primary/5 flex flex-col gap-4 md:flex-row md:h-[550px]">
        {/* News Column (visible on all screens) */}
        <div className="w-full md:w-[70%]">
          <h2 className="text-xl font-semibold text-black/80 mb-1 dark:text-white">
            News & Updates
          </h2>
          <Link href="/news" className="text-yellow-600">
            Read All News
          </Link>
          <div className="mt-2">
            <News />
          </div>
        </div>

        {/* Events Column */}
        <div className="w-full md:w-[30%] h-auto md:h-[350px]">
          <h2 className="text-xl font-semibold text-black/80 mb-2 dark:text-white flex">
            Upcoming Events
          </h2>
          <Link href="/events" className="mb-2 text-yellow-600 lg:hidden block">
            Read All News
          </Link>
          <div className="h-[350px] md:h-auto overflow-y-auto">
            <Events />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsAndNews;
