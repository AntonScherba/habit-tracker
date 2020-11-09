import React, { useContext } from "react";
import { Context } from "../../context";

const InputNumber = ({ year, onClick, number }) => {
  const dispatch = useContext(Context);

  return (
    <div>
      <button
        onClick={() => dispatch({ type: "DECREASE_YEAR", payload: number })}
      >
        {"<"}
      </button>
      <button onClick={onClick}>{year}</button>
      <button
        onClick={() => dispatch({ type: "INCREASE_YEAR", payload: number })}
      >
        {">"}
      </button>
    </div>
  );
};

export default InputNumber;
