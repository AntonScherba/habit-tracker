import React from "react";
import "./Habit.css";

const Habit = ({ title, days }) => {
  const renderDaysRow = (days) => {
    const d = [];
    for (let i = 0; i < days; i++) {
      d.push(<td key={i} onClick={() => console.log(days)} />);
    }
    return d;
  };

  return (
    <tr>
      <td className="habit">{title}</td>
      {renderDaysRow(days)}
    </tr>
  );
};

export default Habit;
