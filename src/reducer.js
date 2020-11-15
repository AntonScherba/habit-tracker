export const initialState = {
  habitTitle: "",
  habits: [
    {
      id: Date.now(),
      title: "10000 steps",
      isDone: "",
    },
    {
      id: Date.now() + 1,
      title: "Гулять",
      isDone: "done",
    },
    {
      id: Date.now() + 2,
      title: "Спать",
      isDone: "not-done",
    },
  ],
};

export default function (state, action) {
  switch (action.type) {
    case "ADD_HABIT":
      return {
        ...state,
        habits: state.habits.concat(action.payload),
      };
    case "REMOVE_HABIT":
      return {
        ...state,
      };
    case "SET_HABIT_TITLE":
      return {
        ...state,
        habitTitle: action.payload,
      };
    default:
      return state;
  }
}
