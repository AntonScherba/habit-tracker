import React from "react";
import Habit from "../Habit/Habit";

const HabitList = ({ habits }) => {
  return habits.map((habit) => <Habit key={habit.id} title={habit.title} />);
};

export default HabitList;
