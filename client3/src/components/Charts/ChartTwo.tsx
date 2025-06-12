"use client";

import { ApexOptions } from "apexcharts";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { getNews } from "@/lib/actions/news.actions";
import { getEvents } from "@/lib/actions/events.actions";
import { get } from "http";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const options: ApexOptions = {
  colors: ["#3C50E0", "#80CAEE"],
  chart: {
    fontFamily: "Satoshi, sans-serif",
    type: "bar",
    height: 335,
    stacked: true,
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
  },

  responsive: [
    {
      breakpoint: 1536,
      options: {
        plotOptions: {
          bar: {
            borderRadius: 0,
            columnWidth: "25%",
          },
        },
      },
    },
  ],
  plotOptions: {
    bar: {
      horizontal: false,
      borderRadius: 0,
      columnWidth: "25%",
      borderRadiusApplication: "end",
      borderRadiusWhenStacked: "last",
    },
  },
  dataLabels: {
    enabled: false,
  },

  xaxis: {
    categories: [],
  },
  legend: {
    position: "top",
    horizontalAlign: "left",
    fontFamily: "Satoshi",
    fontWeight: 500,
    fontSize: "14px",

    markers: {
      size: 10,
    },
  },
  fill: {
    opacity: 1,
  },
};

interface ChartTwoState {
  series: {
    name: string;
    data: number[];
  }[];
}

const ChartTwo = () => {
  const [series, setSeries] = useState<ChartTwoState["series"]>([
    { name: "News", data: [] },
    { name: "Events", data: [] },
  ]);

  const [categories, setCategories] = useState<string[]>([]);
  const [filter, setFilter] = useState<"daily" | "hourly" | "thisWeek" | "lastWeek">("daily");

  const newsData = async () => {
    const news: News[] = await getNews({});
    return news;
  }

  const eventsData = async () => {
    const events: Events[] = await getEvents({});
    return events;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const getAllNews = await newsData() || [];
        const getAllEvents = await eventsData() || [];

        const processedData = processData(getAllNews, getAllEvents);
        setCategories(processedData.categories);
        setSeries(processedData.series);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [newsData, eventsData, filter]);

  const processData = (getAllNews: any[], getAllEvents: any[]) => {
    const weeklyData = processDataByInterval(getAllEvents, filter);
    const newsByInterval = processDataByInterval(getAllNews, filter);
    const eventsByInterval = processDataByInterval(getAllEvents, filter);

    const categories = Object.keys(weeklyData);

    const series = [
      { name: "Events", data: categories.map(week => weeklyData[week] || 0) },
      { name: "News", data: categories.map(week => newsByInterval[week] || 0) },
      { name: "Events", data: categories.map(week => eventsByInterval[week] || 0) },
    ];

    return { categories, series };
  };

  const processDataByInterval = (data: any[], filterType: "daily" | "hourly" | "thisWeek" | "lastWeek") => {
    const intervalData: Record<string, number> = {};
    const now = new Date();

    data.forEach((item) => {
      const date = new Date(item._creationTime);
      let key = '';

      if (filterType === "daily") {
        key = date.toISOString().split('T')[0]; // YYYY-MM-DD format
      } else if (filterType === "hourly") {
        key = date.toISOString().split('T')[0] + ' ' + date.getHours(); // YYYY-MM-DD HH format
      } else if (filterType === "thisWeek") {
        const week = getWeekNumber(date);
        key = `Week ${week} - ${date.getFullYear()}`;
      } else if (filterType === "lastWeek") {
        const week = getWeekNumber(date);
        key = `Week ${week} - ${date.getFullYear()}`;
      }

      // Update interval data
      if (filterType === "thisWeek" && key === `Week ${getWeekNumber(now)} - ${now.getFullYear()}`) {
        intervalData[key] = (intervalData[key] || 0) + 1;
      } else if (filterType === "lastWeek" && key === `Week ${getWeekNumber(new Date(now.getFullYear(), now.getMonth(), now.getDate() - 7))} - ${now.getFullYear()}`) {
        intervalData[key] = (intervalData[key] || 0) + 1;
      } else if (filterType !== "thisWeek" && filterType !== "lastWeek") {
        intervalData[key] = (intervalData[key] || 0) + 1;
      }
    });

    return intervalData;
  };

  const getWeekNumber = (date: Date) => {
    const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
    const pastDaysOfYear = (date.getTime() - firstDayOfYear.getTime()) / 86400000;
    return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
  };

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4">
      <div className="mb-4 justify-between gap-4 sm:flex">
        <div>
          <h4 className="text-xl font-semibold text-black dark:text-white">
            Profit this week
          </h4>
        </div>
        <div>
          <div className="relative z-20 inline-block">
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value as "daily" | "hourly" | "thisWeek" | "lastWeek")}
              className="relative z-20 inline-flex appearance-none bg-transparent py-1 pl-3 pr-8 text-sm font-medium outline-none"
            >
              <option value="hourly" className="dark:bg-boxdark">Hourly</option>
              <option value="daily" className="dark:bg-boxdark">Daily</option>
              <option value="thisWeek" className="dark:bg-boxdark">This Week</option>
              <option value="lastWeek" className="dark:bg-boxdark">Last Week</option>
            </select>
            <span className="absolute right-3 top-1/2 z-10 -translate-y-1/2">
              <svg
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.47072 1.08816C0.47072 1.02932 0.500141 0.955772 0.54427 0.911642C0.647241 0.808672 0.809051 0.808672 0.912022 0.896932L4.85431 4.60386C4.92785 4.67741 5.06025 4.67741 5.14851 4.60386L9.09079 0.896932C9.19376 0.793962 9.35557 0.808672 9.45854 0.911642C9.56151 1.01461 9.5468 1.17642 9.44383 1.27939L5.50155 4.98632C5.22206 5.23639 4.78076 5.23639 4.51598 4.98632L0.558981 1.27939C0.50014 1.22055 0.47072 1.16171 0.47072 1.08816Z"
                  fill="#637381"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1.22659 0.546578L5.00141 4.09604L8.76422 0.557869C9.08459 0.244537 9.54201 0.329403 9.79139 0.578788C10.112 0.899434 10.0277 1.36122 9.77668 1.61224L9.76644 1.62248L5.81552 5.33722C5.36257 5.74249 4.6445 5.7544 4.19352 5.32924C4.19327 5.32901 4.19377 5.32948 4.19352 5.32924L0.225953 1.61241C0.102762 1.48922 -4.20186e-08 1.31674 -3.20269e-08 1.08816C-2.40601e-08 0.905899 0.0780105 0.712197 0.211421 0.578787C0.494701 0.295506 0.935574 0.297138 1.21836 0.539529L1.22659 0.546578ZM4.51598 4.98632C4.78076 5.23639 5.22206 5.23639 5.50155 4.98632L9.44383 1.27939C9.5468 1.17642 9.56151 1.01461 9.45854 0.911642C9.35557 0.808672 9.19376 0.793962 9.09079 0.896932L5.14851 4.60386C5.06025 4.67741 4.92785 4.67741 4.85431 4.60386L0.912022 0.896932C0.809051 0.808672 0.647241 0.808672 0.54427 0.911642C0.500141 0.955772 0.47072 1.02932 0.47072 1.08816C0.47072 1.16171 0.50014 1.22055 0.558981 1.27939L4.51598 4.98632Z"
                  fill="#637381"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>

      <div>
        <div id="chartTwo" className="-mb-9 -ml-5">
        <ReactApexChart
            options={{ ...options, xaxis: { categories } }} 
            series={series}
            type="bar"
            height={350}
            width={"100%"}
          />
        </div>
      </div>
    </div>
  );
};

export default ChartTwo;
