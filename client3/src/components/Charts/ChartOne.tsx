"use client";

import { ApexOptions } from "apexcharts";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { getNews } from "@/lib/actions/news.actions";
import { getEvents } from "@/lib/actions/events.actions";

const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });


interface ProcessedData {
  [key: string]: number;
}

const options: ApexOptions = {
  legend: { show: false, position: "top", horizontalAlign: "left" },
  colors: ["#3C50E0", "#80CAEE"],
  chart: {
    fontFamily: "Satoshi, sans-serif",
    height: 335,
    type: "area",
    dropShadow: { enabled: true, color: "#623CEA14", top: 10, blur: 4, left: 0, opacity: 0.1 },
    toolbar: { show: false },
  },
  responsive: [
    { breakpoint: 1024, options: { chart: { height: 300 } } },
    { breakpoint: 1366, options: { chart: { height: 350 } } },
  ],
  stroke: { width: [2, 2], curve: "smooth" },
  grid: {
    xaxis: { lines: { show: true } },
    yaxis: { lines: { show: true } },
  },
  dataLabels: { enabled: false },
  markers: {
    size: 4,
    colors: "#fff",
    strokeColors: ["#3056D3", "#80CAEE"],
    strokeWidth: 3,
    strokeOpacity: 0.9,
    fillOpacity: 1,
    hover: { size: undefined, sizeOffset: 5 },
  },
  xaxis: { type: "category", axisBorder: { show: false }, axisTicks: { show: false } },
  yaxis: { title: { style: { fontSize: "0px" } }, min: 0 },
  tooltip: {
    shared: true,
    intersect: false,
    y: {
      title: {
        formatter: (seriesName) => seriesName,
      },
      formatter: (val) => `${val}: Entries`, 
    },
  },
};



interface ChartOneState {
  series: {
    name: string;
    data: number[];
  }[];
}

const ChartOne = () => {

  const [series, setSeries] = useState<{name: string; data: number[] }[]>([
    {name: "News", data: []},
    {name: "Events", data: []},
  ]);

  const [categories, setCategories] = useState<string[]>([]);

  const [filter, setFilter] = useState<"hourly" | "daily" | "weekly" | "monthly">("daily");

  const getWeekNumber = (date: Date) => {
    const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
    const pastDaysOfYear = (date.getTime() - firstDayOfYear.getTime()) / 86400000;
    return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
  };

  const formatDate = (timestamp: number, filterType: "hourly" | "daily" | "weekly" | "monthly"): string => {
    const date = new Date(timestamp);
    switch (filterType) {
      case "hourly":
        return date.toLocaleString("en-US", { hour: '2-digit', hour12: false });
      case "daily":
        return date.toLocaleString("en-US", { year: 'numeric', month: '2-digit', day: '2-digit' });
      case "weekly":
        return `Week ${getWeekNumber(date)} - ${date.getFullYear()}`;
      case "monthly":
        return date.toLocaleString("en-US", { month: "short", year: "numeric" });
    }
  };

  const processData = (data: News[], filterType: "hourly" | "daily" | "weekly" | "monthly"): ProcessedData => {
    const result: ProcessedData = {};
    data.forEach((item) => {
      const dateKey = formatDate(item.$createdAt, filterType);
      result[dateKey] = (result[dateKey] || 0) + 1; 
    });
    return result;
  };

  const processDataEvents = (data: Events[], filterType: "hourly" | "daily" | "weekly" | "monthly"): ProcessedData => {
    const result: ProcessedData = {};
    data.forEach((item) => {
      const dateKey = formatDate(item.$createdAt, filterType);
      result[dateKey] = (result[dateKey] || 0) + 1; 
    });
    return result;
  };


  useEffect(() => {
    const fetchData = async () => {
      const news: News[] = (await getNews({})) || [];
      const events: Events[] = (await getEvents({})) || [];


      let processedCategories: string[] = [];
      let hourlyNews: ProcessedData; 
      let hourlyEvents: ProcessedData; 
      let dailyNews: ProcessedData; 
      let dailyEvents: ProcessedData; 

      switch (filter) {
        case "hourly":
          hourlyNews = processData(news, "hourly");
          hourlyEvents = processDataEvents(events, "hourly");
          processedCategories = Object.keys(hourlyNews);
          break;
        case "daily":
          dailyNews = processData(news, "daily");
          dailyEvents = processDataEvents(events, "daily");

          processedCategories = Object.keys(dailyNews);
          break;
        case "weekly":
          dailyNews = processData(news, "weekly");
          dailyEvents = processDataEvents(events, "weekly");
          processedCategories = Object.keys(dailyNews);
          break;
        case "monthly":
          dailyNews = processData(news, "monthly");
          dailyEvents = processDataEvents(events, "monthly");
          processedCategories = Object.keys(dailyNews);
          break;
      }

      if (filter === "hourly") {
        setCategories(processedCategories);
        setSeries([
          { name: "News", data: processedCategories.map(date => hourlyNews[date] || 0) },
          { name: "Events", data: processedCategories.map(date => hourlyEvents[date] || 0) },
        ]);
      } else {
        setCategories(processedCategories);
        setSeries([
          { name: "News", data: processedCategories.map(date => hourlyNews[date] || 0) },
          { name: "Events", data: processedCategories.map(date => hourlyEvents[date] || 0) },
        ]);
      }
    };

    fetchData();
  }, [getNews, getEvents, filter]);

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pb-5 pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-8">
      <div className="flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
        <div className="flex w-full flex-wrap gap-3 sm:gap-5">
          <div className="flex min-w-47.5">
            <span className="mr-2 mt-1 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-primary">
              <span className="block h-2.5 w-full max-w-2.5 rounded-full bg-primary"></span>
            </span>
            <div className="w-full">
              <p className="font-semibold text-primary">Total News</p>
            </div>
          </div>
          <div className="flex min-w-47.5">
            <span className="mr-2 mt-1 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-secondary">
              <span className="block h-2.5 w-full max-w-2.5 rounded-full bg-secondary"></span>
            </span>
            <div className="w-full">
              <p className="font-semibold text-secondary">Total Events</p>
            </div>
          </div>
        </div>
        <div className="flex w-full max-w-45 justify-end">
          <div className="inline-flex items-center rounded-md bg-whiter p-1.5 dark:bg-meta-4">
            <div className="flex items-center gap-2">
              <button onClick={() => setFilter("hourly")} className={`rounded px-3 py-1 text-xs font-medium ${filter === "hourly" ? "text-black" : "text-gray-500"} hover:bg-primary hover:text-white hover:shadow-card dark:text-white dark:hover:bg-boxdark`}>Hour</button>
              <button onClick={() => setFilter("daily")} className={`rounded px-3 py-1 text-xs font-medium ${filter === "daily" ? "text-black" : "text-gray-500"} hover:bg-primary hover:text-white hover:shadow-card dark:text-white dark:hover:bg-boxdark`}>Day</button>
              <button onClick={() => setFilter("weekly")} className={`rounded px-3 py-1 text-xs font-medium ${filter === "weekly" ? "text-black" : "text-gray-500"} hover:bg-primary hover:text-white  hover:shadow-card  dark:text-white dark:hover:bg-boxdark`}>Week</button>
              <button onClick={() => setFilter("monthly")} className={`rounded px-3 py-1 text-xs font-medium ${filter === "monthly" ? "text-black bg-green-400" : "text-gray-500"} hover:bg-primary  hover:text-white hover:shadow-card dark:text-white dark:hover:bg-boxdark`}>Month</button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div id="chartOne" className="-ml-5">
          <ReactApexChart options={{ ...options, xaxis: { ...options.xaxis, categories } }} series={series} type="area" height={350} />
        </div>
      </div>
    </div>
  );
};

export default ChartOne;
