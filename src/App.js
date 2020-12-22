import React, { useReducer } from "react";
import Form from "./components/Form/Form";
import HabitList from "./components/HabitList/HabitList";
import Date from "./components/Date/Date";
import reducer, { initialState } from "./reducer";
import { Context } from "./context";
import "./App.css";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { habitTitle, habits, tracker, currentDate } = state;

  return (
    <Context.Provider value={dispatch}>
      <div className="app">
        <h1>{"Habit Tracker"}</h1>
        <Date currentDate={currentDate} />
        <Form habitTitle={habitTitle} />
        <HabitList habits={habits} tracker={tracker} />
      </div>
    </Context.Provider>
  );
}

export default App;
