"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import Chart from "react-apexcharts";
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function LineChart() {
  const [activeBtn, setActiveBtn] = useState<string>("day");

  let SaleData = activeBtn === 'day' ? [14, 15, 10, 15, 17, 19, 25, 27, 10, 19, 20, 25, 14, 15, 10, 15, 17, 19, 25, 27, 10, 19, 20, 25] : activeBtn === 'week' ? [15, 10, 15, 17, 19, 25, 27] : [14, 15, 10, 15, 17, 19, 25, 27, 10, 19, 20, 25];
  let Categories = activeBtn === 'day' ? [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24] : activeBtn === 'week' ? ["M", "T", "W", "T", "F", "S", "S"] : ["Sep", "Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug",];
  let RevenueData = activeBtn === 'day' ? [34, 25, 30, 25, 37, 29, 35, 47, 40, 32, 29, 35, 34, 25, 30, 25, 37, 29, 35, 47, 40, 32, 29, 35] : activeBtn === 'week' ? [34, 25, 30, 25, 37, 29, 35] : [34, 25, 30, 25, 37, 29, 35, 47, 40, 32, 29, 35];

  const options: ApexCharts.ApexOptions = {
    chart: {
      height: "auto",
      type: "line",
      toolbar: {
        show: false,
      },
    },
    markers: {
      size: 4, // Marker size
      colors: ["#fff"], // Marker color
      strokeColors: ["#0C359E", "#59B4C3"], // Marker stroke color
      strokeWidth: 2, // Marker stroke width
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: [2],
      curve: "straight",
    },
    xaxis: {
      categories: Categories,
    },
    yaxis: {
      min: 0,
      max: 100,
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
    colors: ["#0C359E", "#59B4C3"],
    legend: {
      show: false,
    },
  };

  const series = [
    {
      name: "Sales",
      data: SaleData,
    },
    {
      name: "Revenue",
      data: RevenueData,
    },
  ];

  return (
    <>
      <div className="py-10 px-5 shadow-md shadow-slate-400 ">
        {/* top head section  */}
        <section className=" flex justify-between items-center">
          <div className=" flex justify-between items-center gap-10">
            {/* Total Sale */}
            <section className=" flex gap-2 justify-start items-start">
              <div>
                <p className=" border-2 border-[#0C359E] p-[2px] rounded-full">
                  <p className=" bg-[#0C359E] rounded-full h-3 w-3"></p>
                </p>
              </div>
              <div>
                <p>Total Sale</p>
                <p>
                  <span>12.04.2022</span> - <span>12.04.2022</span>
                </p>
              </div>
            </section>

            {/* Total Revenue */}
            <section className=" flex gap-2 justify-start items-start">
              <div>
                <p className=" border-2 border-[#88E5F6] p-[2px] rounded-full">
                  <p className=" bg-[#88E5F6] rounded-full h-3 w-3"></p>
                </p>
              </div>
              <div>
                <p>Total Revenue</p>
                <p>
                  <span>12.04.2022</span> - <span>12.04.2022</span>
                </p>
              </div>
            </section>
          </div>

          {/* button section */}
          <div className=" flex justify-between gap-5 bg-slate-100 p-2 rounded-lg">
            <button
              className={`px-3 py-1 transition-all duration-300 ease-in ${
                activeBtn === "day" ? "bg-white rounded-lg" : ""
              }`}
              onClick={() => setActiveBtn("day")}
            >
              Day
            </button>
            <button
              className={`px-3 py-1 transition-all duration-300 ease-in ${
                activeBtn === "week" ? "bg-white rounded-lg" : ""
              }`}
              onClick={() => setActiveBtn("week")}
            >
              Week
            </button>
            <button
              className={`px-3 py-1 transition-all duration-300 ease-in ${
                activeBtn === "month" ? "bg-white rounded-lg" : ""
              }`}
              onClick={() => setActiveBtn("month")}
            >
              Month
            </button>
          </div>
        </section>

        {/* bottom chart section */}
        <section className="  mt-10 ">
          <Chart
            dir="ltr"
            type="area"
            series={series}
            options={options}
            width="100%"
            height={290}
          />
        </section>
      </div>
    </>
  );
}
