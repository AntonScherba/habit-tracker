import React from "react";

const Month = ({ title, onClick, isCurrent }) => {
  return (
    <button
      onClick={onClick}
      className={isCurrent ? `calendar-element current` : `calendar-element`}
      value={title}
    >
      {title}
    </button>
  );
};

export default Month;
