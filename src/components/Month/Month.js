import React from "react";

const Month = ({ title, onClick, days }) => {
  return (
    // <label>
    //   {title}
    //   <input type="radio" name="month" value={days} />
    // </label>

    <button onClick={onClick} className="month" value={title}>
      {title}
    </button>
  );
};

export default Month;
