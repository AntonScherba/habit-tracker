import React, { useContext } from "react";
import Month from "../Month/Month";
import Year from "../Year/Year";
import NavBarCalendar from "../NavBarCalendar/NavBarCalendar";
// import { initCalendar } from "../../functions";
import { Context } from "../../context";
import "./Calendar.css";

const Calendar = ({ currentDate, calendar, isYear }) => {
  // const { year, month, day } = currentDate;
  const dispatch = useContext(Context);

  console.log(calendar);

  // const setMonth = (i) => {
  //   const cal = calendar;

  //   console.log(i);
  // };

  const renderMonths = (months) => {
    const month = months.map((month, i) => (
      <Month
        key={i}
        title={month.titleMonth}
        isSelected={month.isSelected}
        // onClick={() => setMonth(i)}
        // onClick={() => dispatch({ type: "SET_MONTH", payload: i })}
      />
    ));
    return <div className="elements-container">{month}</div>;
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
    return <div className="elements-container">{years}</div>;
  };

  if (isYear) {
    return (
      <div className="calendar-conteiner">
        <NavBarCalendar year={calendar.year} number={10} />
        {renderYears(calendar.year)}
      </div>
    );
  }
  return (
    <div className="calendar-conteiner">
      <NavBarCalendar year={calendar.year} number={1} />
      {renderMonths(calendar.months)}
    </div>
  );
};

export default Calendar;
