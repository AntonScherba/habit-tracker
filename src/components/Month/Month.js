import React from "react";

const Month = ({ month, onClick }) => {
  return (
    <button onClick={onClick} className="month" value={month}>
      {month}
    </button>
  );
};

export default Month;
