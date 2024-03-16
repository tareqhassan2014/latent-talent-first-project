"use client";

const LineChartLegend = () => {
  return (
    <div className="flex justify-between items-center gap-10">
      <div className="flex gap-2 justify-start items-start">
        <div>
          <div className="border-2 border-[#0C359E] p-[2px] rounded-full">
            <div className=" bg-[#0C359E] rounded-full h-3 w-3" />
          </div>
        </div>
        <div>
          <p style={{ color: "#0C359E" }}>Total Revenue</p>
          <span>12.04.2022</span> - <span>12.04.2022</span>
        </div>
      </div>

      <div className="flex gap-2 justify-start items-start">
        <div>
          <div className="border-2 border-[#88E5F6] p-[2px] rounded-full">
            <div className="bg-[#88E5F6] rounded-full h-3 w-3" />
          </div>
        </div>
        <div>
          <p style={{ color: "#88E5F6" }}>Total Sales</p>
          <span>12.04.2022</span> - <span>12.04.2022</span>
        </div>
      </div>
    </div>
  );
};

export default LineChartLegend;
