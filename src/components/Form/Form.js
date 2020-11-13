import React, { useContext } from "react";
import { Context } from "../../context";

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
    };

    dispatch({ type: "ADD_HABIT", payload: newHabit });
    dispatch({ type: "SET_HABIT_TITLE", payload: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={habitTitle}
        placeholder="entert some habit"
        onChange={handleChange}
      />
      <button type="submit" value="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
