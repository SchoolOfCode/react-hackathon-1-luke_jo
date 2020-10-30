import React, { useState } from "react";
import "../index.css";

function Square({ value }) {
  return (
    <button
      className="square"
      onClick={() => {
        alert("click");
      }}
    >
      {value}
    </button>
  );
}

export default Square;
