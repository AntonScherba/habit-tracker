import React, { useContext, useState } from "react";
import Habit from "../Habit/Habit";
import { deepCopy } from "../../functions";
import { Context } from "../../context";

const HabitList = ({ habits, tracker }) => {
  const dispatch = useContext(Context);
  const [date, setDate] = useState(new Date());

  const isDone = (id) => {
    const isDone = tracker
      .filter(
        (track) => new Date(track.date).toDateString() === date.toDateString()
      )
      .filter((item) => item.habitId === id);
    return isDone;
  };

  const setClass = (id) => {
    const done = isDone(id)[0];

    if (done && done.isDone) {
      return "done";
    } else if (done && !done.isDone) {
      return "not-done";
    }
    return "";
  };

  const setDone = (id) => {
    const trackerCopy = deepCopy(tracker);

    if (isDone(id).length > 0) {
      for (let i = 0; i < trackerCopy.length; i++) {
        const element = trackerCopy[i];
        if (
          new Date(element.date).toDateString() === date.toDateString() &&
          element.habitId === id
        ) {
          element.isDone = !element.isDone;
        }
      }
    } else {
      const newTrack = {
        habitId: id,
        id: Date.now(),
        date: date,
        isDone: true,
      };
      trackerCopy.push(newTrack);
    }
    dispatch({ type: "UPDATE_TRACKER", payload: trackerCopy });
  };

  const removeHabit = (id) => {
    const confirm = window.confirm(`Are you sure?`);
    if (confirm) {
      const habitsCopy = deepCopy(habits);
      const filteredHabits = habitsCopy.filter((habit) => habit.id !== id);
      dispatch({ type: "UPDATE_HABITS", payload: filteredHabits });
    }
  };

  return (
    <ul>
      <input type="date" onChange={(e) => setDate(new Date(e.target.value))} />
      {habits.map((habit) => (
        <Habit
          key={habit.id}
          title={habit.title}
          isDone={setClass(habit.id)}
          setDone={() => setDone(habit.id)}
          removeHabit={() => removeHabit(habit.id)}
        />
      ))}
    </ul>
  );
};

export default HabitList;
