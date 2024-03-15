// charts.tsx/jsx

"use client"; // if you use app dir, don't forget this line

import dynamic from "next/dynamic";
import Chart from "react-apexcharts";
import LineChart from "../LineChart/LineChart";
import { useState } from "react";
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

export function BarChart() {

  const [activeBtn, setActiveBtn] = useState<string>("day");
  console.log(activeBtn)

  let SaleData = activeBtn === 'day' ? [14, 15, 10, 15, 17, 19, 25, 27, 10, 19, 20, 25, 14, 15, 10, 15, 17, 19, 25, 27, 10, 19, 20, 25] : activeBtn === 'week' ? [15, 10, 15, 17, 19, 25, 27] : [14, 15, 10, 15, 17, 19, 25, 27, 10, 19, 20, 25];
  let Categories = activeBtn === 'day' ? [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24] : activeBtn === 'week' ? ["M", "T", "W", "T", "F", "S", "S"] : ["Sep", "Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug",];
  let RevenueData = activeBtn === 'day' ? [34, 25, 30, 25, 37, 29, 35, 47, 40, 32, 29, 35, 34, 25, 30, 25, 37, 29, 35, 47, 40, 32, 29, 35] : activeBtn === 'week' ? [34, 25, 30, 25, 37, 29, 35] : [34, 25, 30, 25, 37, 29, 35, 47, 40, 32, 29, 35];


  const series2 = [
    {
      name: "Sales",
      data: SaleData,
    },
    {
      name: "Revenue",
      data: RevenueData,
    },
  ];

  const options2: ApexCharts.ApexOptions = {
    chart: {
      type: "bar",
      height: "auto",
      stacked: true,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    colors: ["#0C359E", "#59B4C3"],
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      bar: {
        columnWidth: "40%",
        horizontal: false,
        borderRadius: 0,
        dataLabels: {
          total: {
            enabled: false,
            style: {
              fontSize: "13px",
              fontWeight: 900,
            },
          },
        },
      },
    },
    xaxis: {
      categories: Categories,
    },
    yaxis: {
      min: 0,
      max: 100,
      tickAmount: 5,
    },
    legend: {
      show: true,
      position: "top",
      horizontalAlign: "left",
      offsetY: 5,
      customLegendItems: ["Sales", "Revenue"],
      markers: {
        radius: 50, // Adjust the marker size if needed
      },
    },
    fill: {
      opacity: 1,
    },
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setActiveBtn(e.target.value);
  }

  return (
    <>
      <div className="py-10 px-5 shadow-md shadow-slate-400 ">
        <section className=" flex justify-between ">
          <h1 className=" text-2xl font-semibold ">Profit this week</h1>
          <select
            name=""
            id=""
            className=" focus:outline-none bg-slate-100 p-2 rounded-lg"
            value={activeBtn}
            onChange={handleSelectChange}
          >
            <option value="day" className=" ">
              This Day
            </option>
            <option value="week" >This Week</option>
            <option value="month" >This Month</option>
          </select>
        </section>
        <section className=" mt-10 ">
          <Chart options={options2} series={series2} type="bar" height={300} />
        </section>
      </div>
    </>
  );
}
