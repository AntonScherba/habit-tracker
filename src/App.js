import React, { useReducer } from "react";
import Form from "./components/Form/Form";
import HabitList from "./components/HabitList/HabitList";
import Calendar from "./components/Calendar/Calendar";
import reducer, { initialState } from "./reducer";
import Day from "./components/Day/Day";
import { Context } from "./context";
import "./App.css";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { habitTitle, habits, currentDate, calendar, isYear } = state;
  const days = calendar.months[currentDate.month].days;

  return (
    <Context.Provider value={dispatch}>
      <div className="container">
        <Form habitTitle={habitTitle} />
        <Calendar
          calendar={calendar}
          currentDate={currentDate}
          isYear={isYear}
        />
      </div>
      <table>
        <thead>
          <tr>
            <th>Day</th>
            {days.map((day, i) => (
              <Day day={day} key={i} />
            ))}
          </tr>
          <tr>
            <th>Habit</th>
          </tr>
        </thead>
        <tbody>
          <HabitList habits={habits} days={days.length} />
        </tbody>
      </table>
    </Context.Provider>
  );
}

export default App;
