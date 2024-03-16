import LineChart from "@/Components/charts/LineChart";
import { PointChart } from "@/Components/charts/PointChart";

export default function Home() {
  return (
    <main>
      <div className="m-12 grid grid-cols-3 gap-10">
        <section className="col-span-2">
          <LineChart />
        </section>
        <section className="col-span-1">
          <PointChart />
        </section>
      </div>
    </main>
  );
}
