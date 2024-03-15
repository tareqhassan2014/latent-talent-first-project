import { BarChart } from "../BarChart/BarChart";
import LineChart from "../LineChart/LineChart";

export function PointChart() {
  return (
    <div className=" max-w-[1280px] mx-auto mt-10 grid grid-cols-12 gap-10">
      {/* line chart */}
      <section className=" col-span-7 ">
        <LineChart />
      </section>

      {/* Column Bar chart */}
      <section className=" col-span-5 ">
        <BarChart />
      </section>
    </div>
  );
}
