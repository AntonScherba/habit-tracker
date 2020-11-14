import React, { useReducer } from "react";
import Form from "./components/Form/Form";
import HabitList from "./components/HabitList/HabitList";
import reducer, { initialState } from "./reducer";
import { Context } from "./context";
import "./App.css";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { habitTitle, habits } = state;

  return (
    <Context.Provider value={dispatch}>
      <div className="App">
        <h1>{"Habit Tracker"}</h1>
        <Form habitTitle={habitTitle} />
        <HabitList habits={habits} />
      </div>
    </Context.Provider>
  );
}

export default App;
