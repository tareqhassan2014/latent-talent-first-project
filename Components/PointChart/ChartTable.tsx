import { BarChart } from "../BarChart/BarChart";
import LineChart from "../LineChart/LineChart";

export function ChartTable() {
  return (
    <div className=" max-w-[1280px] mx-auto mt-10 grid lg:grid-cols-12 grid-cols-2 gap-10">
      {/* line chart */}
      <section className=" lg:col-span-8 col-span-1">
        <LineChart />
      </section>

      {/* Column Bar chart */}
      <section className=" lg:col-span-4 col-span-1 ">
        <BarChart />
      </section>
    </div>
  );
}
