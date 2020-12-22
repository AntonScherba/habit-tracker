import React from "react";
import "./Habit.css";

const Habit = ({ title, removeHabit, isDone, setDone }) => {
  return (
    <li className={isDone}>
      <span onClick={setDone}>{title}</span>
      <button onClick={removeHabit}>&times;</button>
    </li>
  );
};

export default Habit;
