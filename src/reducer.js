export const initialState = {
  habit: "",
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
        habits: {
          id: Date.now(),
          title: action.payload,
        },
      };
    case "ENTER_HABIT":
      return {
        ...state,
        habit: action.payload,
      };

    default:
      return state;
  }
}
