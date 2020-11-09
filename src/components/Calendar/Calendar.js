import React, { useContext } from "react";
import Month from "../Month/Month";
import InputNumber from "../InputNumber/InputNumber";
import { Context } from "../../context";
import "./Calendar.css";

const Calendar = ({ dateToday, calendar }) => {
  // const { year, month, day } = dateToday;
  const dispatch = useContext(Context);

  const renderMonths = (months) => {
    const month = months.map((month, i) => (
      <Month
        key={i}
        title={month.titleMonth}
        month={month}
        onClick={() => dispatch({ type: "SET_MONTH", payload: i })}
      />
    ));
    return <div className="month-conteiner">{month}</div>;
  };

  const renderYear = (year) => {
    return;
  };

  return (
    <div className="calendar">
      <InputNumber year={calendar.year} />
      {renderMonths(calendar.months)}
    </div>
  );
};

export default Calendar;
