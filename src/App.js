import React, { useReducer } from "react";
import Form from "./components/Form/Form";
import HabitList from "./components/HabitList/HabitList";
import Date from "./components/Date/Date";
import reducer, { initialState } from "./reducer";
import { Context } from "./context";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { habits, tracker, currentDate } = state;

  return (
    <Context.Provider value={dispatch}>
      <div className="app">
        <h1>{"Habit Tracker"}</h1>
        <Date currentDate={currentDate} />
        <Form />
        <HabitList
          habits={habits}
          tracker={tracker}
          currentDate={currentDate}
        />
      </div>
    </Context.Provider>
  );
}

export default App;
