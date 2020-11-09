import React from "react";

const Year = ({ year, onClick }) => {
  return (
    <button onClick={onClick} className="month" value={year}>
      {year}
    </button>
  );
};

export default Year;
