import React, { useReducer } from "react";
import Form from "./components/Form/Form";
import HabitList from "./components/HabitList/HabitList";
import Calendar from "./components/Calendar/Calendar";
import reducer, { initialState } from "./reducer";
import { Context } from "./context";
import "./App.css";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { habitTitle, habits } = state;

  return (
    <Context.Provider value={dispatch}>
      <Form habitTitle={habitTitle} />
      <Calendar />
      <HabitList habits={habits} />
    </Context.Provider>
  );
}

export default App;
