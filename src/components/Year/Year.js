import React from "react";

const Year = ({ year, onClick }) => {
  return (
    <button
      onClick={onClick}
      // className="calendar-element"
      className={`calendar-element`}
      value={year}
    >
      {year}
    </button>
  );
};

export default Year;
