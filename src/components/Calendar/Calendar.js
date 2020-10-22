import React from "react";
import Month from "../Month/Month";

import "./Calendar.css";

const Calendar = ({ dateToday }) => {
  const { year, month, day } = dateToday;

  const date = (year) => {
    const numberOfMonth = 12;
    let arr = [];
    for (let i = 1; i <= numberOfMonth; i++) {
      const date = new Date(year, i, 0);
      const month = date.toLocaleString("en", {
        month: "short",
      });
      const daysOfMonth = date.getDate();
      arr.push({ month: month, days: daysOfMonth });
    }
    return arr;
  };

  const renderDay = (d) => {
    for (let i = 0; i < d; i++) {
      const day = i;
      return <p className="day">{day}</p>;
      console.log(day);
    }
  };

  return (
    <div>
      <div className="container">
        <label>{`Year: ${year}`}</label>
        <h3 className="title">Month</h3>
        <div className="calendar">
          {date(year).map((item, i) => (
            <Month key={i} month={item.month} days={item.days} />
          ))}
        </div>
      </div>
      <div>
        {renderDay(day)}
        <p className="day">{day}</p>
      </div>
    </div>
  );
};

export default Calendar;
