export const initialState = {
  habitTitle: "",
  habits: [],
};

export default function (state, action) {
  switch (action.type) {
    case "Reset":
      return initialState;
    case "ADD_HABIT":
      console.log(action.payload);
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
      console.log(action.payload);
      return {
        ...state,
        habitTitle: action.payload,
      };

    default:
      return state;
  }
}
