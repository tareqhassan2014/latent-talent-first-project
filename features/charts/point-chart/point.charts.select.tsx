"use client";

import { ChangeEvent } from "react";

type PointChartsSelectProps = {
  value: string;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
};

const OPTIONS = ["This Week", "This Month", "This Year"];

const PointChartsSelect = ({ value, onChange }: PointChartsSelectProps) => {
  return (
    <select
      className="focus:outline-none p-2"
      value={value}
      onChange={onChange}
    >
      {OPTIONS.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default PointChartsSelect;
