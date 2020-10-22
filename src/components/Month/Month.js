import React from "react";

const Month = ({ month }) => {
  return (
    <button onClick={(e) => console.log(e.target.value)} className="month">
      {month}
    </button>
  );
};

export default Month;
