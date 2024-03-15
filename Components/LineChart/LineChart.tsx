"use client";

import dynamic from "next/dynamic";
import Chart from "react-apexcharts";
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function LineChart() {
  const options: ApexCharts.ApexOptions = {
    chart: {
      height: 350,
      type: "line",
      dropShadow: {
        enabled: true,
        color: "#000",
        top: 18,
        left: 7,
        blur: 10,
        opacity: 0.2,
      },
      toolbar: {
        show: false,
      },
    },
    markers: {
      size: 6, // Marker size
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
      categories: [
        "Sep",
        "Oct",
        "Nov",
        "Dec",
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
      ],
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
      show: true,
      position: "top",
      horizontalAlign: "left",
      customLegendItems: ["Sales", "Revenue"],
      offsetY: 5,
      markers: {
        radius: 50, // Adjust the marker size if needed
      },
    },
  };

  const series = [
    {
      name: "Sales",
      data: [14, 15, 10, 15, 17, 19, 25, 27, 10, 19, 20, 25],
    },
    {
      name: "Revenue",
      data: [34, 25, 30, 25, 37, 29, 35, 47, 40, 32, 29, 35],
    },
  ];

  return (
    <div className="bg-white">
      {/* line point chart */}
      <section className=" col-span-7 ">
        <div className=" flex justify-between mb-5">
          <div></div>
          <div className=" flex justify-between gap-5 bg-slate-100 p-2 rounded-lg">
            <button className=" bg-white px-3 py-1 rounded-lg">Day</button>
            <button className=" bg-white px-3 py-1 rounded-lg">Week</button>
            <button className=" bg-white px-3 py-1 rounded-lg">Month</button>
          </div>
        </div>
        <div>
          <Chart
            dir="ltr"
            type="area"
            series={series}
            options={options}
            width="100%"
            height="auto"
          />
        </div>
      </section>
    </div>
  );
}
