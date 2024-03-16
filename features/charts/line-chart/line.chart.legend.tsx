"use client";

const LineChartLegend = () => {
  return (
    <div className="flex justify-between items-center md:gap-10 gap-2">
      <div className="flex gap-2 justify-center items-start">
        <div>
          <div className="border border-[#0C359E] p-0.5 rounded-full">
            <div className="bg-[#0C359E] rounded-full h-2 w-2" />
          </div>
        </div>
        <div className="-mt-0.5">
          <p className="text-[#0C359E] text-sm">Total Revenue</p>
          <span className="text-sm opacity-70">12.04.2022 - 12.04.2022</span>
        </div>
      </div>

      <div className="flex gap-2 justify-center items-start">
        <div>
          <div className="border border-[#59B4C3] p-0.5 rounded-full">
            <div className="bg-[#59B4C3] rounded-full h-2 w-2" />
          </div>
        </div>
        <div className="-mt-0.5">
          <p className="text-[#59B4C3] text-sm">Total Sales</p>
          <span className="text-sm opacity-70">12.04.2022 - 12.04.2022</span>
        </div>
      </div>
    </div>
  );
};

export default LineChartLegend;
