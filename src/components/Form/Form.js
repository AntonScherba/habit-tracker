import React, { useState, useContext } from "react";
import { Context } from "../../context";
import "./Form.css";

const Form = () => {
  const dispatch = useContext(Context);
  const [habitTitle, sethabitTitle] = useState("");

  const handleTextChange = (e) => {
    sethabitTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newHabit = {
      id: Date.now(),
      title: habitTitle,
      createdDate: Date.now(),
    };

    dispatch({ type: "ADD_HABIT", payload: newHabit });
    sethabitTitle("");
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
