import React, { useReducer } from "react";
import Form from "./components/Form/Form";
import reducer, { initialState } from "./reducer";
import { Context } from "./context";
import "./App.css";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { habitTitle } = state;
  console.log(state);

  return (
    <Context.Provider value={dispatch}>
      <Form habitTitle={habitTitle} />
      {/* <Calendar /> */}
      {/* <HabitList /> */}
    </Context.Provider>
  );
}

export default App;
