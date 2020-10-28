import React, { useReducer, useEffect } from "react";
import Form from "./components/Form/Form";
import HabitList from "./components/HabitList/HabitList";
import Calendar from "./components/Calendar/Calendar";
// import Day from "./components/Day/Day";
import reducer, { initialState } from "./reducer";
import { initCalendar } from "./functions";
import { Context } from "./context";
import "./App.css";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { habitTitle, habits, dateToday, calendar } = state;

  useEffect(() => {
    dispatch({
      type: "INIT_CALENDAR",
      payload: initCalendar(dateToday.year),
    });
  }, [dateToday.year]);

  return (
    <Context.Provider value={dispatch}>
      <Form habitTitle={habitTitle} />
      <Calendar dateToday={dateToday} calendar={calendar} />
      <table>
        <thead>
          <tr>
            <th>Habit</th>
          </tr>
        </thead>
        <tbody>
          <HabitList habits={habits} />
        </tbody>
      </table>
    </Context.Provider>
  );
}

export default App;
