import React from "react";

const Date = ({ currentDate }) => {
  return <span>{currentDate.toLocaleDateString()}</span>;
};

export default Date;
