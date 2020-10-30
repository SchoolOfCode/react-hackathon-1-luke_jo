import React, { useState } from "react";
import "../index.css";
import Square from "../square";
import calculateWinner from "../Winner";

function Board() {
  const [moves, setMoves] = useState({
    squares: Array(9).fill(null),
    xIsNext: true,
  });

  console.log(moves);

  function handleClick(i) {
    const squares = moves.squares.slice();
    squares[i] = moves.xIsNext ? "X" : "O";

    console.log(squares);
    setMoves({ squares: squares, xIsNext: !moves.xIsNext });
  }

  function renderSquare(i) {
    return (
      <Square
        value={moves.squares[i]}
        onClick={() => {
          handleClick(i);
        }}
      />
    );
  }

  const status = `Next player: ${moves.xIsNext ? "X" : "O"}`;

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}

export default Board;
