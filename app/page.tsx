import LineChart from "@/Components/charts/LineChart";
import { PointChart } from "@/Components/charts/PointChart";
import DashboardStates from "@/features/dashboard-states/dashboard.states";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="md:p-12 p-4">
        <DashboardStates />
        <div className="md:my-12 my-4 grid grid-cols-3 md:gap-10 gap-5">
          <section className="md:col-span-2 col-span-3 bg-white">
            <LineChart />
          </section>
          <section className="md:col-span-1 col-span-3 bg-white">
            <PointChart />
          </section>
        </div>
      </div>
    </main>
  );
}
