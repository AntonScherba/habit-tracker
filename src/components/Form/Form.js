import React, { useContext } from "react";
import { Context } from "../../context";

const Form = ({ habit }) => {
  const dispatch = useContext(Context);

  const onHabitSubmit = (event) => {
    event.preventDefault();
    console.log(habit);
    dispatch({ type: "ADD_HABIT", payload: habit });
  };

  return (
    <form onSubmit={onHabitSubmit}>
      <h1>Make a Habit</h1>
      <input
        onChange={(e) =>
          dispatch({ type: "ENTER_HABIT", payload: e.target.value })
        }
        type="text"
        name="habit"
        placeholder="entert some habit"
      />
      <button type="submit">Submit</button>
      <p>{habit}</p>
    </form>
  );
};

export default Form;
