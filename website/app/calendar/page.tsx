"use client";

import React, { useState } from "react";
import Breadcrumb from "@/components/Common/Breadcrumb";
import {
  CalendarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/solid";
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  getDay,
  isEqual,
  isSameDay,
  isSameMonth,
  isToday,
  parse,
  parseISO,
  startOfMonth,
  startOfToday,
  startOfWeek,
} from "date-fns";
import { activities } from "@/lib/constants";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function EventsPage() {
  let today = startOfToday();
  let [selectedDay, setSelectedDay] = useState(today);
  let [currentMonth, setCurrentMonth] = useState(format(today, "MMM-yyyy"));
  let firstDayCurrentMonth = parse(currentMonth, "MMM-yyyy", new Date());

  let days = eachDayOfInterval({
    start: startOfWeek(firstDayCurrentMonth),
    end: endOfWeek(endOfMonth(firstDayCurrentMonth)),
  });

  function previousMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  }

  function nextMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  }

  let selectedDayMeetings = activities.filter((activity) =>
    isSameDay(parseISO(activity.startDatetime), selectedDay)
  );

  return (
    <>
      <div className="container mt-[100px] md:mt-[120px]">
        <Breadcrumb
          pageName="Bugema University Calendar"
          description="The Bugema University Academic Calendar stipulates all the university programs and activities for every academic year. 
          "
        />
        <div className="pt-16">
          <div className="max-w-md px-4 mx-auto sm:px-7 md:max-w-4xl md:px-6">
            <div className="md:grid md:grid-cols-2 md:divide-x md:divide-gray-200">
              <div className="md:pr-14">
                <div className="flex items-center">
                  <h2 className="flex-auto font-semibold text-gray-900">
                    {format(firstDayCurrentMonth, "MMMM yyyy")}
                  </h2>
                  <button
                    type="button"
                    onClick={previousMonth}
                    className="-my-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
                  >
                    <span className="sr-only">Previuos Month</span>
                    <ChevronLeftIcon className="w-5 h-5" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    onClick={nextMonth}
                    className="-my-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
                  >
                    <span className="sr-only">Next Month</span>
                    <ChevronRightIcon className="w-5 h-5" aria-hidden="true" />
                  </button>
                </div>
                <div className="grid grid-cols-7 mt-10 text-base leading-6 text-center text-gray-500">
                  <div>Sun</div>
                  <div>Mon</div>
                  <div>Tue</div>
                  <div>Wed</div>
                  <div>Thur</div>
                  <div>Fri</div>
                  <div>Sat</div>
                </div>
                <div className="grid grid-cols-7 mt-2 text-base">
                  {days.map((day, dayIdx) => (
                    <div
                      key={day.toString()}
                      className={classNames(
                        dayIdx === 0 && colStartClasses[getDay(day)],
                        "py-1.5"
                      )}
                    >
                      <button
                        type="button"
                        onClick={() => setSelectedDay(day)}
                        className={classNames(
                          isEqual(day, selectedDay) && "text-white",
                          !isEqual(day, selectedDay) &&
                            isToday(day) &&
                            "text-blue-600",
                          !isEqual(day, selectedDay) &&
                            !isToday(day) &&
                            isSameMonth(day, firstDayCurrentMonth) &&
                            "text-gray-900",
                          !isEqual(day, selectedDay) &&
                            !isToday(day) &&
                            !isSameMonth(day, firstDayCurrentMonth) &&
                            "text-gray-400",
                          isEqual(day, selectedDay) &&
                            isToday(day) &&
                            "bg-blue-600",
                          isEqual(day, selectedDay) &&
                            !isToday(day) &&
                            "bg-gray-900",
                          !isEqual(day, selectedDay) && "hover:bg-gray-200",
                          (isEqual(day, selectedDay) || isToday(day)) &&
                            "font-semibold",
                          "mx-auto flex h-8 w-8 items-center justify-center rounded-full"
                        )}
                      >
                        <time dateTime={format(day, "yyyy-MM-dd")}>
                          {format(day, "d")}
                        </time>
                      </button>
                      <div className="w-1 h-1 mx-auto mt-1">
                        {activities.some((activity) =>
                          isSameDay(parseISO(activity.startDatetime), day)
                        ) && (
                          <div className="w-1 h-1 bg-blue-500 rounded-full" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <section className="mt-12 md:mt-0 md:pl-14">
                <h2 className="font-semibold text-gray-900">
                  Schedule for{" "}
                  <time dateTime={format(selectedDay, "yyyy-MM-dd")}>
                    {format(selectedDay, "MMM dd, yyyy")}
                  </time>
                </h2>
                <ol className="mt-4 space-y-1 text-base leading-6 text-gray-500">
                  {selectedDayMeetings.length > 0 ? (
                    selectedDayMeetings.map((activity) => (
                      <Activity activity={activity} key={activity.id} />
                    ))
                  ) : (
                    <p>No activities scheduled for this day.</p>
                  )}
                </ol>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Activity({ activity }) {
  let startDateTime = parseISO(activity.startDatetime);
  let endDateTime = parseISO(activity.endDatetime);
  return (
    <li className="flex items-start px-4 py-2 space-x-4 group rounded-xl focus-within:bg-gray-100 hover:bg-gray-100 ">
      <div>
        <CalendarIcon className="w-10 h-10" />
      </div>
      <div className="flex-auto">
        <p className="text-gray-900">{activity.title}</p>
        <p className="mt-0 5">
          <time dateTime={activity.startDatetime}>
            {format(startDateTime, "MMM dd")}
          </time>{" "}
          -{" "}
          <time dateTime={activity.endDatetime}>
            {format(endDateTime, "MMM dd, yyyy")}
          </time>
        </p>
      </div>
    </li>
  );
}

let colStartClasses = [
  "",
  "col-start-2",
  "col-start-3",
  "col-start-4",
  "col-start-5",
  "col-start-6",
  "col-start-7",
];
