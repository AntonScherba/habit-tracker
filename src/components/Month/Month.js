import React from "react";

const Month = ({ title, isChecked }) => {
  return (
    <label>
      {title}
      <input checked={isChecked} type="radio" name="month" value={title} />
    </label>

    // <button autoFocus="true" className="month" value={title}>
    //   {title}
    // </button>
  );
};

export default Month;
