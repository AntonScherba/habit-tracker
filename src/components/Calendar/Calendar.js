import React, { useContext } from "react";
import Month from "../Month/Month";
import Year from "../Year/Year";
import InputNumber from "../InputNumber/InputNumber";
import { Context } from "../../context";
import "./Calendar.css";

const Calendar = ({ dateToday, calendar, isYear }) => {
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

  const renderYears = (year) => {
    const years = [];
    for (let i = 0; i < 12; i++) {
      const y = year + i;
      years.push(
        <Year
          key={i}
          year={y}
          onClick={(e) =>
            dispatch({
              type: "UPDATE_CALENDAR",
              payload: Number(e.target.value),
            })
          }
        />
      );
    }
    return <div className="month-conteiner">{years}</div>;
  };

  if (isYear) {
    return (
      <div className="calendar">
        <InputNumber
          onClick={() => dispatch({ type: "SET_YEAR" })}
          year={calendar.year}
          number={10}
        />
        {renderYears(calendar.year)}
      </div>
    );
  } else {
    return (
      <div className="calendar">
        <InputNumber
          onClick={() => dispatch({ type: "SET_YEAR" })}
          year={calendar.year}
          number={1}
        />
        {renderMonths(calendar.months)}
      </div>
    );
  }
};

export default Calendar;
