import React from "react";
import "./Habit.css";

const Habit = ({ title, removeHabit, setClass, setDone }) => {
  return (
    <li className={setClass}>
      <span onClick={setDone}>{title}</span>

      <div>
        <button>
          <i className="far fa-edit"></i>
        </button>
        <button onClick={removeHabit}>
          <i className="fas fa-trash-alt"></i>
        </button>
      </div>
    </li>
  );
};

export default Habit;
