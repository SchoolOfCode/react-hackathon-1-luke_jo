import React from "react";
import "../index.css";

function Square({ value, onClick }) {
  return (
    <button
      className="square"
      onClick={() => {
        onClick();
      }}
    >
      {value}
    </button>
  );
}

export default Square;
