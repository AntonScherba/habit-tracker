import React from "react";
import Month from "../Month/Month";
// import Day from "../Day/Day";
import "./Calendar.css";

const Calendar = ({ dateToday, calendar }) => {
  const { year, month, day } = dateToday;
  console.log(year, month, day);

  return (
    <div>
      <div className="container">
        <p>{`Year: ${year}`}</p>
        <p className="title">Month</p>
        <div className="calendar" onChange={(e) => console.log(e.target.value)}>
          {calendar.map((month, i) => (
            <Month
              key={i}
              title={month.titleOfMonth}
              days={month.days.length}
              isChecked={month.days.isChecked}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
