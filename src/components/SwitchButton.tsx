import React from "react";
import clsx from "clsx";

const SpeedButton = ({ pause, handleSwitch }) => {
  return (
    <button
      className={clsx("w-48 h-10 m-4 text-white", {
        "bg-sky-800": pause,
        "bg-sky-400": !pause,
      })}
      onClick={() => handleSwitch(pause)}
    >
      {pause ? "Start" : "Stop"}
    </button>
  );
};

export default SpeedButton;
