import React, { useState } from "react";
import "./Habit.css";

const Habit = ({ id, title, removeHabit, isDone, toggleDone, editTitle }) => {
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
      <span onClick={toggleDone}>{title}</span>
      <div>
        <button name="edit" onClick={() => setEditing(true)}>
          <i className="far fa-edit" />
        </button>
        <button name="remove" onClick={removeHabit}>
          <i className="fas fa-trash-alt" />
        </button>
      </div>
    </div>
  );

  const editingTemplate = (
    <form onSubmit={handleSubmit} className="habit-template">
      <label>
        <input
          type="text"
          value={newTitle}
          onChange={handleTextChange}
          autoFocus
          required
        />
      </label>
      <div>
        <button type="submit" name="save">
          <i className="fas fa-save" />
        </button>
        <button type="button" name="close" onClick={() => setEditing(false)}>
          <i className="fas fa-window-close" />
        </button>
      </div>
    </form>
  );

  return (
    <li className={isDone}>{isEditing ? editingTemplate : viewTemplate}</li>
  );
};

export default Habit;
