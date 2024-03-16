"use client";

import Chart from "react-apexcharts";

type PointChartProps = {
  options: ApexCharts.ApexOptions;
  series: { name: string; data: number[] }[];
};

const LineChartComponent = ({ options, series }: PointChartProps) => {
  return (
    <Chart
      dir="ltr"
      type="area"
      options={options}
      series={series}
      height={350}
    />
  );
};

export default LineChartComponent;
