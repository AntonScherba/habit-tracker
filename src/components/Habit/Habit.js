import React from "react";
import "./Habit.css";

const Habit = ({ title }) => {
  return (
    <li className="li-container">
      <button className="done-button" title="I did it!">
        <i className="fas fa-check" />
      </button>
      <span className="habit-title">{title}</span>
      <button className="not-done-button" title="I didn't it.">
        <i className="fas fa-times"></i>
      </button>
      <button className="delete-button" title="Move to trash.">
        <i className="fas fa-trash"></i>
      </button>
    </li>
  );
};

export default Habit;
