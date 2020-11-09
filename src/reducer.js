import { initCalendar } from "./functions";

export const initialState = {
  habitTitle: "",
  habits: [
    { id: Date.now(), title: "Drink water" },
    { id: Date.now() + 1, title: "Sleep 8 hours" },
  ],
  dateToday: {
    year: new Date().getFullYear(),
    month: new Date().getMonth(),
    day: new Date().getDate(),
  },
  calendar: initCalendar(new Date().getFullYear()),
  isYear: false,
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
    case "UPDATE_CALENDAR":
      return {
        ...state,
        calendar: initCalendar(action.payload),
        isYear: false,
        // calendar: { ...state.calendar, year: action.payload },
      };
    case "INCREASE_YEAR":
      return {
        ...state,
        calendar: initCalendar(state.calendar.year + action.payload),
        // calendar: { ...state.calendar, year: state.calendar.year + 1 },
      };
    case "DECREASE_YEAR":
      return {
        ...state,
        calendar: initCalendar(state.calendar.year - action.payload),
        // calendar: { ...state.calendar, year: state.calendar.year - 1 },
      };
    case "SET_MONTH":
      return {
        ...state,
        dateToday: {
          ...state.dateToday,
          month: action.payload,
        },
      };
    case "SET_YEAR":
      return {
        ...state,
        isYear: !state.isYear,
      };
    default:
      return state;
  }
}
