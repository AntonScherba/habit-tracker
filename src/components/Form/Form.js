import React, { useContext } from "react";
import { Context } from "../../context";
import "./Form.css";

const Form = ({ habitTitle }) => {
  const dispatch = useContext(Context);

  const handleChange = (e) => {
    dispatch({ type: "SET_HABIT_TITLE", payload: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newHabit = {
      id: Date.now(),
      title: habitTitle,
      createdDate: Date.now(),
    };

    dispatch({ type: "ADD_HABIT", payload: newHabit });
    dispatch({ type: "SET_HABIT_TITLE", payload: "" });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        className="input-field"
        type="text"
        value={habitTitle}
        placeholder="Habit title"
        onChange={handleChange}
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
