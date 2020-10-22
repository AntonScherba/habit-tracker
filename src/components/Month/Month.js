import React from "react";
import Day from "../Day/Day";

const Month = ({ month, days }) => {
  return (
    <div>
      <button className="month">{month}</button>
    </div>
  );
};

export default Month;
