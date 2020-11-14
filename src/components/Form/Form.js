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

    if (habitTitle.length === 0) {
      return;
    }

    const newHabit = {
      id: Date.now(),
      title: habitTitle,
      isDone: undefined,
    };

    dispatch({ type: "ADD_HABIT", payload: newHabit });
    dispatch({ type: "SET_HABIT_TITLE", payload: "" });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        autoFocus
        className="input-field"
        type="text"
        value={habitTitle}
        placeholder="Habit title"
        onChange={handleChange}
      />
      <button
        className="submit-button"
        type="submit"
        value="submit"
        title="Add habit"
      >
        <i className="fas fa-plus"></i>
      </button>
    </form>
  );
};

export default Form;
