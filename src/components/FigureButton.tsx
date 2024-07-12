import React from "react";

const FigureButton = ({ handler, text }) => {
  return (
    <button
      onClick={handler}
      className="w-48 h-10 m-4 text-white bg-sky-800 active:bg-sky-400"
    >
      {text}
    </button>
  );
};

export default FigureButton;
