import React from "react";
import Habit from "../Habit/Habit";

const HabitList = ({ habits }) => {
  return (
    <ol>
      {habits.map((habit) => (
        <Habit key={habit.id} title={habit.title} />
      ))}
    </ol>
  );
};

export default HabitList;
