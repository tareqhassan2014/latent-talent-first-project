import TotalProduct from "@/components/cards/total-product";
import TotalProfit from "@/components/cards/total-profit";
import TotalUsers from "@/components/cards/total-users";
import TotalViews from "@/components/cards/total-views";


export default function Home() {
  return (
    <div className="bg-blue-50 min-h-screen">
      <div className="grid gap-6  justify-center pt-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-4 md:px-6 lg:px-6">
        <TotalViews />
        <TotalProfit />
        <TotalProduct />
        <TotalUsers />
      </div>
    </div>
  );
}
