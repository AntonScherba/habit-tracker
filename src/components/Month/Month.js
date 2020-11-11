import React from "react";

const Month = ({ title, onClick, isSelected }) => {
  return (
    <button
      onClick={onClick}
      className={isSelected ? `calendar-element current` : `calendar-element`}
      value={title}
    >
      {title}
    </button>
  );
};

export default Month;
