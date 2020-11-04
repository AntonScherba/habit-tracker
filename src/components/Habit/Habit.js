import React from "react";
import Day from "../Day/Day";
import "./Habit.css";

const Habit = ({ title, days }) => {
  return (
    <tr>
      <td className="habit">
        {title} <button>del</button>
      </td>
      {days.map((day, i) => (
        <Day key={i} />
      ))}
    </tr>
  );
};

export default Habit;
