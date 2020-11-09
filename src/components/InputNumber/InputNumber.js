import React, { useContext } from "react";
import { Context } from "../../context";

const InputNumber = ({ year }) => {
  const dispatch = useContext(Context);

  return (
    <div>
      <button onClick={() => dispatch({ type: "DECREASE_YEAR" })}>{"<"}</button>
      {/* <input
        className="year"
        onChange={(e) =>
          dispatch({
            type: "UPDATE_CALENDAR",
            payload: Number(e.target.value),
          })
        }
        type="number"
        value={year}
      /> */}
      <button onClick={() => console.log(year)}>{year}</button>
      <button onClick={() => dispatch({ type: "INCREASE_YEAR" })}>{">"}</button>
    </div>
  );
};

export default InputNumber;
