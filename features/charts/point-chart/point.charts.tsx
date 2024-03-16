"use client";

import Chart from "react-apexcharts";

type PointChartProps = {
  options: ApexCharts.ApexOptions;
  series: { name: string; data: number[] }[];
};

const PointChartComponent = ({ options, series }: PointChartProps) => {
  return <Chart options={options} series={series} type="bar" height={350} />;
};

export default PointChartComponent;
