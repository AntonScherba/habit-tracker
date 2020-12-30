import React, { useState } from "react";
import "./Habit.css";

const Habit = ({
  id,
  title,
  removeHabit,
  isDone,
  toggleDone,
  editTitle,
  created,
}) => {
  const [isEditing, setEditing] = useState(false);
  const [newTitle, setNewTitle] = useState("");

  const handleTextChange = (e) => {
    setNewTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    editTitle(id, newTitle);
    setNewTitle("");
    setEditing(false);
  };

  const viewTemplate = (
    <div className="habit-template">
      <div>
        <span className="habit-title" onClick={toggleDone}>
          {title}
        </span>
        <p>Created: {created.toLocaleDateString()}</p>
      </div>

      <div>
        <button className="habit-button" name="show">
          <i className="fas fa-eye"></i>
        </button>
        <button
          className="habit-button"
          name="edit"
          onClick={() => setEditing(true)}
        >
          <i className="far fa-edit" />
        </button>
        <button className="habit-button" name="remove" onClick={removeHabit}>
          <i className="fas fa-trash" />
        </button>
      </div>
    </div>
  );

  const editingTemplate = (
    <form onSubmit={handleSubmit} className="habit-template">
      <label>
        <input
          className="habit-input"
          type="text"
          value={newTitle}
          onChange={handleTextChange}
          autoFocus
          required
        />
      </label>

      <button
        className="habit-button"
        type="button"
        name="close"
        onClick={() => setEditing(false)}
      >
        <i className="fas fa-times" />
      </button>
    </form>
  );

  return (
    <li className={isDone}>{isEditing ? editingTemplate : viewTemplate}</li>
  );
};

export default Habit;
