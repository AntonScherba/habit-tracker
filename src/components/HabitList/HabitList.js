import React from "react";
import Habit from "../Habit/Habit";

const HabitList = ({ habits }) => {
  return (
    <ul>
      {habits.map((habit) => (
        <Habit key={habit.id} title={habit.title} />
      ))}
    </ul>
  );
};

export default HabitList;
