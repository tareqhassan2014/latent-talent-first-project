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
      data: [10, 20, 25, 10, 20, 25, 10],
    },
    {
      name: "Revenue",
      data: [10, 20, 25, 10, 20, 25, 10],
    },
  ];

  const options2: ApexCharts.ApexOptions = {
    chart: {
      type: "bar",
      height: 350,
      stacked: true,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    colors: ["#0C359E", "#59B4C3"],
    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            position: "bottom",
            offsetX: -10,
            offsetY: 0,
          },
        },
      },
    ],
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      bar: {
        columnWidth: "35%",
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
    <div>
      <div className=" flex justify-between">
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
      </div>
      <div className=" mt-10 ">
        <Chart options={options2} series={series2} type="bar" height={350} />
      </div>
    </div>
  );
}
