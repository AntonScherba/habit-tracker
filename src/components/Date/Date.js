import React from "react";

const Date = ({ currentDate }) => {
  console.log(currentDate);
  return (
    <div>
      <span>{currentDate}</span>
    </div>
  );
};

export default Date;
