import React from "react";
import Month from "../Month/Month";
import Day from "../Day/Day";
import { initCalendar } from "../../functions";
import "./Calendar.css";

const Calendar = ({ dateToday }) => {
  const { year, m } = dateToday;
  const calendar = initCalendar(year);
  return (
    <div>
      <div className="container">
        <p>{`Year: ${year}`}</p>
        <p className="title">Month</p>
        <div className="calendar">
          {calendar.map((month, i) => (
            <Month
              key={i}
              month={month.month.title}
              onClick={() => {
                console.log(calendar[i].days);
              }}
            />
          ))}
          {/* {calendar[month].days.map((day, i) => (
            <Day key={i} day={day.day} />
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
