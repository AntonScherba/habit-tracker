import React, { useContext } from "react";
import Habit from "../Habit/Habit";
import { deepCopy } from "../../functions";
import { Context } from "../../context";

const HabitList = ({ habits }) => {
  const dispatch = useContext(Context);

  const onHabitDone = (i) => {
    const habitsCopy = deepCopy(habits);

    habitsCopy[i].isDone = "done";
    dispatch({ type: "UPDATE_HABITS", payload: habitsCopy });
  };

  const onHabitNotDone = (i) => {
    const habitsCopy = deepCopy(habits);

    habitsCopy[i].isDone = "not-done";
    dispatch({ type: "UPDATE_HABITS", payload: habitsCopy });
  };

  const onHabitRemove = (id) => {
    const habitsCopy = deepCopy(habits);
    const filteredHabits = habitsCopy.filter((habit) => habit.id !== id);

    dispatch({ type: "UPDATE_HABITS", payload: filteredHabits });
  };

  return (
    <ul>
      {habits.map((habit, i) => (
        <Habit
          key={habit.id}
          title={habit.title}
          isDone={habit.isDone}
          onHabitDone={() => onHabitDone(i)}
          onHabitNotDone={() => onHabitNotDone(i)}
          onHabitRemove={() => onHabitRemove(habit.id)}
        />
      ))}
    </ul>
  );
};

export default HabitList;
