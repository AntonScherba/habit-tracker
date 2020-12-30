import React, { useState, useContext } from "react";
import { Context } from "../../context";
import "./Form.css";

const Form = () => {
  const dispatch = useContext(Context);
  const [habitTitle, setHabitTitle] = useState("");

  const handleTextChange = (e) => {
    setHabitTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newHabit = {
      id: Date.now(),
      title: habitTitle,
      createdDate: new Date(),
    };

    dispatch({ type: "ADD_HABIT", payload: newHabit });
    setHabitTitle("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        className="input-field"
        type="text"
        placeholder="Habit title"
        value={habitTitle}
        onChange={handleTextChange}
        autoFocus
        required
      />
      <button className="submit-button" type="submit" title="Add Habit">
        <i className="fas fa-plus" />
      </button>
    </form>
  );
};

export default Form;
