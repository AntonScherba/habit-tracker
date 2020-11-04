import React from "react";
import Habit from "../Habit/Habit";

const HabitList = ({ habits, days }) => {
  return habits.map((habit) => (
    <Habit key={habit.id} title={habit.title} days={days} />
  ));
};

export default HabitList;
