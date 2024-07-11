import React from "react";
import clsx from "clsx";

const SpeedButton = ({ speed, handleSpeed, speedValue, text }) => {
  return (
    <button
      className={clsx("w-48 h-10 m-4 text-white", {
        "bg-slate-950": speed === speedValue,
        "bg-slate-600": speed !== speedValue,
      })}
      onClick={() => handleSpeed(speedValue)}
    >
      {text}
    </button>
  );
};

export default SpeedButton;
