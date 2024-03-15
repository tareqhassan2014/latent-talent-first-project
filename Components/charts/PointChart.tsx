// charts.tsx/jsx

"use client"; // if you use app dir, don't forget this line

import dynamic from "next/dynamic";
import Chart from "react-apexcharts";
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

export function PointChart() {
  // const series = [
  //   {
  //     name: "High - 2013",
  //     data: [28, 29, 33, 36, 32, 32, 33],
  //   },
  //   {
  //     name: "Low - 2013",
  //     data: [12, 11, 14, 18, 17, 13, 13],
  //   },
  // ];

  // const options: ApexCharts.ApexOptions = {
  //   chart: {
  //     height: 350,
  //     type: "line",
  //     dropShadow: {
  //       enabled: true,
  //       color: "#000",
  //       top: 18,
  //       left: 7,
  //       blur: 10,
  //       opacity: 0.2,
  //     },
  //     toolbar: {
  //       show: false,
  //     },
  //   },
  //   colors: ["#77B6EA", "#545454"],
  //   dataLabels: {
  //     enabled: true,
  //   },
  //   stroke: {
  //     curve: "smooth",
  //   },
  //   title: {
  //     text: "Average High & Low Temperature",
  //     align: "left",
  //   },
  //   grid: {
  //     borderColor: "#e7e7e7",
  //     row: {
  //       colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
  //       opacity: 0.5,
  //     },
  //   },
  //   markers: {
  //     size: 1,
  //   },
  //   xaxis: {
  //     categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  //     title: {
  //       text: "Month",
  //     },
  //   },
  //   yaxis: {
  //     title: {
  //       text: "Temperature",
  //     },
  //     min: 5,
  //     max: 40,
  //   },
  //   legend: {
  //     position: "top",
  //     horizontalAlign: "right",
  //     floating: true,
  //     offsetY: -25,
  //     offsetX: -5,

  //   },
  // };

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
    <div className="m-12 grid grid-cols-3 gap-10">
      {/* line point chart */}
      <section className="col-span-2"></section>

      <section className="col-span-1">
        <div className="border-2 border-gray-100 shadow-lg p-4">
          <div className="flex items-center justify-between p-4">
            <h1 className="text-2xl font-semibold ">Profit this week</h1>
            <select
              name=""
              id=""
              className=" focus:outline-none bg-slate-100 p-2 rounded-lg"
            >
              <option value="">This Week</option>
              <option value="">This Month</option>
              <option value="">This Year</option>
            </select>
          </div>
          <Chart options={options2} series={series2} type="bar" height={350} />
        </div>
      </section>
    </div>
  );
}
