// charts.tsx/jsx

"use client"; // if you use app dir, don't forget this line

import dynamic from "next/dynamic";
import Chart from "react-apexcharts";
import LineChart from "../LineChart/LineChart";
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

export function BarChart() {
  const series2 = [
    {
      name: "Sales",
      data: [30, 40, 55, 70, 50, 65, 79],
    },
    {
      name: "Revenue",
      data: [10, 20, 25, 10, 20, 25, 10],
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
      categories: ["M", "T", "W", "T", "F", "S", "S"],
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

  return (
    <>
      <div className="py-10 px-5 shadow-md shadow-slate-400 ">
        <section className=" flex justify-between ">
          <h1 className=" text-2xl font-semibold ">Profit this week</h1>
          <select
            name=""
            id=""
            className=" focus:outline-none bg-slate-100 p-2 rounded-lg"
          >
            <option value="" className=" ">
              This Week
            </option>
            <option value="">This Month</option>
            <option value="">This Year</option>
          </select>
        </section>
        <section className=" mt-10 ">
          <Chart options={options2} series={series2} type="bar" height={390} />
        </section>
      </div>
    </>
  );
}
