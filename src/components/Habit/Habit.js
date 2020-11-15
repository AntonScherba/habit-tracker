import React from "react";
import "./Habit.css";

const Habit = ({
  title,
  isDone,
  onHabitDone,
  onHabitNotDone,
  onHabitRemove,
}) => {
  return (
    <li className="list-container">
      <div className={`habit-container ${isDone}`}>
        <button onClick={onHabitDone} className="done-button" title="I did it!">
          <i className="fas fa-check" />
        </button>
        <span className="habit-title">{title}</span>
        <button
          onClick={onHabitNotDone}
          className="not-done-button"
          title="I didn't it."
        >
          <i className="fas fa-times" />
        </button>
      </div>
      <button
        onClick={onHabitRemove}
        className="remove-button"
        title="Remove Habit."
      >
        <i className="fas fa-trash" />
      </button>
    </li>
  );
};

export default Habit;
