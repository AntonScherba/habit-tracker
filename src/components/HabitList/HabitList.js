import React, { useContext, useState } from "react";
import Habit from "../Habit/Habit";
import { Context } from "../../context";

const HabitList = ({ habits, tracker, currentDate }) => {
  const dispatch = useContext(Context);
  const [date, setDate] = useState(new Date());

  const isDone = (id) => {
    const isDone = tracker
      .filter((track) => compareDate(track.date))
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

  const compareDate = (userDate) => {
    return userDate.toDateString() === date.toDateString();
  };

  const toggleDone = (id) => {
    if (isDone(id).length > 0) {
      const updateTracker = tracker.map((track) => {
        if (compareDate(track.date) && track.habitId === id) {
          return { ...track, isDone: !track.isDone };
        }
        return track;
      });
      dispatch({ type: "UPDATE_TRACKER", payload: updateTracker });
    } else {
      const newTrack = {
        habitId: id,
        id: Date.now(),
        date: date,
        isDone: true,
      };
      dispatch({ type: "ADD_TRACK", payload: newTrack });
    }
  };

  const editTitle = (id, newTitle) => {
    const updateHadits = habits.map((habit) => {
      if (id === habit.id) {
        return { ...habit, title: newTitle };
      }
      return habit;
    });

    dispatch({ type: "UPDATE_HABITS", payload: updateHadits });
  };

  const removeHabit = (id) => {
    const confirm = window.confirm(`Are you sure?`);
    if (confirm) {
      const updateHabits = habits.filter((habit) => habit.id !== id);
      dispatch({ type: "UPDATE_HABITS", payload: updateHabits });
    }
  };

  return (
    <ul>
      <input
        type="date"
        max={currentDate.toISOString().split("T")[0]}
        onChange={(e) => setDate(new Date(e.target.value))}
      />
      {habits.map((habit) => (
        <Habit
          key={habit.id}
          id={habit.id}
          title={habit.title}
          isDone={setClass(habit.id)}
          toggleDone={() => toggleDone(habit.id)}
          removeHabit={() => removeHabit(habit.id)}
          editTitle={editTitle}
        />
      ))}
    </ul>
  );
};

export default HabitList;
