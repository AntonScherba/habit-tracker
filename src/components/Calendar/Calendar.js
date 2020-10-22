import React from "react";
import Month from "../Month/Month";
import "./Calendar.css";

const Calendar = () => {
  const date = (m) => {
    const date = new Date(m);
    const month = date.toLocaleString("default", {
      month: "short",
      day: "2-digit",
    });
    console.log(month);
  };

  return (
    <div className="container">
      <h3>Month</h3>
      <div className="calendar">
        <button
          onClick={() => {
            date(1);
          }}
          className="month"
        >
          Jan
        </button>
        <button className="month">Feb</button>
        <button className="month">Mar</button>
        <button className="month">Apr</button>
        <button className="month">May</button>
        <button className="month">Jun</button>
        <button className="month">Jul</button>
        <button className="month">Aug</button>
        <button className="month">Sep</button>
        <button className="month">Oct</button>
        <button className="month">Nov</button>
        <button className="month">Dec</button>
      </div>
    </div>
  );
};

export default Calendar;
