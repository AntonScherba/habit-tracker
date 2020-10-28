export const initialState = {
  habitTitle: "",
  habits: [],
  dateToday: {
    year: new Date().getFullYear(),
    month: new Date().getMonth(),
    day: new Date().getDate(),
  },
  calendar: [],
};

export default function (state, action) {
  switch (action.type) {
    case "RESET":
      return initialState;
    case "ADD_HABIT":
      return {
        ...state,
        habits: [
          ...state.habits,
          {
            id: Date.now(),
            title: action.payload,
          },
        ],
      };
    case "SET_HABIT_TITLE":
      return {
        ...state,
        habitTitle: action.payload,
      };
    case "INIT_CALENDAR":
      return {
        ...state,
        calendar: action.payload,
      };
    default:
      return state;
  }
}
