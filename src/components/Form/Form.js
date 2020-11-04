import React, { useContext } from "react";
import { Context } from "../../context";

const Form = ({ habitTitle }) => {
  const dispatch = useContext(Context);

  const onHabitSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_HABIT", payload: habitTitle });
    dispatch({ type: "SET_HABIT_TITLE", payload: "" });
  };

  return (
    <form onSubmit={onHabitSubmit}>
      <h1>Make a Habit</h1>
      <input
        onChange={(e) =>
          dispatch({ type: "SET_HABIT_TITLE", payload: e.target.value })
        }
        type="text"
        placeholder="entert some habit"
        value={habitTitle}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
