import React, { useEffect } from "react";
import Cell from "./Cell";
import { useGameContext } from "../context/GameContext";

const Board = () => {
  const { board, pause, speed, toggleCell, updateBoard } = useGameContext();

  useEffect(() => {
    const interval = setInterval(() => {
      if (!pause) {
        updateBoard();
      }
    }, speed);
    return () => clearInterval(interval);
  }, [board, pause, speed]);

  return (
    <div>
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className="flex">
          {row.map((cell, colIndex) => (
            <Cell
              key={`${rowIndex}-${colIndex}`}
              isAlive={cell}
              toggleCell={() => toggleCell(rowIndex, colIndex)}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
