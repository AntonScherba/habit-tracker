import React, { useContext } from "react";
import Month from "../Month/Month";
import { initCalendar } from "../../functions";
import { Context } from "../../context";
import "./Calendar.css";

const Calendar = ({ dateToday, calendar }) => {
  // const { year, month, day } = dateToday;
  const dispatch = useContext(Context);

  return (
    <div>
      <div className="calendar">
        <input
          className="year"
          onChange={(e) => {
            dispatch({
              type: "UPDATE_CALENDAR",
              payload: initCalendar(Number(e.target.value)),
            });
          }}
          type="number"
          value={calendar.year}
        />
        <div className="month-conteiner">
          {calendar.months.map((month, i) => (
            <Month
              key={i}
              title={month.titleMonth}
              month={month}
              onClick={() => dispatch({ type: "SET_MONTH", payload: i })}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
