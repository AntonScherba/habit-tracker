export const initialState = {
  habitTitle: "",

  habits: [
    {
      id: 1,
      title: "10000 steps",
      createdDate: new Date(),
    },
    {
      id: 2,
      title: "don't drink alcohol",
      createdDate: new Date(),
    },
  ],
  tracker: [
    {
      habitId: 1,
      id: 1,
      date: new Date(),
      isDone: true,
    },
    {
      habitId: 2,
      id: 5,
      date: new Date(),
      isDone: false,
    },
    {
      habitId: 2,
      id: 2,
      date: new Date("2020-12-21"),
      isDone: false,
    },
  ],
  currentDate: new Date(),
};

export default function (state, action) {
  switch (action.type) {
    case "ADD_HABIT":
      return {
        ...state,
        habits: state.habits.concat(action.payload),
      };
    case "UPDATE_HABITS":
      return {
        ...state,
        habits: action.payload,
      };
    case "SET_HABIT_TITLE":
      return {
        ...state,
        habitTitle: action.payload,
      };
    case "ADD_TRACK":
      return {
        ...state,
        tracker: state.tracker.concat(action.payload),
      };
    case "UPDATE_TRACKER":
      return {
        ...state,
        tracker: action.payload,
      };
    default:
      return state;
  }
}
