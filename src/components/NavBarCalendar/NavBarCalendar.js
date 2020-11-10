import React, { useContext } from "react";
import { Context } from "../../context";
import "./NavBarCalendar.css";

const NavBarCalendar = ({ year, number }) => {
  const dispatch = useContext(Context);

  return (
    <div className="nav-bar-calendar">
      <button
        className="nav-bar-btn"
        onClick={() => dispatch({ type: "DECREASE_YEAR", payload: number })}
      >
        {"<"}
      </button>
      <button
        className="nav-bar-btn"
        onClick={() => dispatch({ type: "SET_YEAR" })}
      >
        {year}
      </button>
      <button
        className="nav-bar-btn"
        onClick={() => dispatch({ type: "INCREASE_YEAR", payload: number })}
      >
        {">"}
      </button>
    </div>
  );
};

export default NavBarCalendar;
