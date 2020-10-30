import React, { useState } from "react";
import "../index.css";
import Board from "../board";
import calculateWinner from "../Winner";

function Game() {
  const [moves, setMoves] = useState({
    history: [{ squares: Array(9).fill(null) }],
    xIsNext: true,
    stepNumber: 0,
  });

  function handleClick(i) {
    const history = moves.history.slice(0, moves.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = moves.xIsNext ? "X" : "O";

    console.log(squares);
    setMoves({
      history: history.concat([{ squares: squares }]),
      stepNumber: history.length,
      xIsNext: !moves.xIsNext,
    });
  }

  function jumpTo(step) {
    setMoves({
      stepNumber: step,
      xIsNext: step % 2 === 0,
    });
  }

  const history = moves.history;
  const current = history[moves.stepNumber];
  const winner = calculateWinner(current.squares);

  const moveHistory = history.map((step, move) => {
    const desc = move ? `go to move # ${move}` : `go to game start`;
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}> {desc} </button>
      </li>
    );
  });

  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = `Next player: ${moves.xIsNext ? "X" : "O"}`;
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={current.squares} onClick={(i) => handleClick(i)} />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ol>{moveHistory}</ol>
      </div>
    </div>
  );
}
export default Game;
