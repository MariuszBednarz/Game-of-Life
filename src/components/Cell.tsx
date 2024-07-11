import React from "react";
import clsx from "clsx";

const Cell = ({ isAlive, toggleCell }) => {
  return (
    <div
      className={clsx("w-5 h-5 border border-gray-500 inline-block", {
        "bg-black": isAlive,
        "bg-white": !isAlive,
      })}
      onClick={toggleCell}
    ></div>
  );
};

export default Cell;
