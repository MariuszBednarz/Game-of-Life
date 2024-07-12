import React from "react";

import { useGameContext } from "../context/GameContext";

import { SpeedButton, SwitchButton, FigureButton } from "./";
import { gun, pulsar } from "../../setups";

const Form = () => {
  const { handleSpeed, speed, handleSwitch, pause, clearBoard, createFigure } =
    useGameContext();

  return (
    <div>
      <div>
        <SpeedButton
          handleSpeed={handleSpeed}
          speed={speed}
          text={"Superszybko 0.01s"}
          speedValue={10}
        />
        <SpeedButton
          handleSpeed={handleSpeed}
          speed={speed}
          text={"Szybko 0.1s"}
          speedValue={100}
        />
        <SpeedButton
          handleSpeed={handleSpeed}
          speed={speed}
          text={"Średnio 0.5s"}
          speedValue={500}
        />
        <SpeedButton
          handleSpeed={handleSpeed}
          speed={speed}
          text={"Wolno 1s"}
          speedValue={1000}
        />
      </div>
      <div>
        <SwitchButton handleSwitch={handleSwitch} pause={pause} />
        <FigureButton handler={clearBoard} text="Wyczyść tablicę" />
        <FigureButton
          handler={() => createFigure(gun)}
          text="stwórz Glider gun"
        />
        <FigureButton
          handler={() => createFigure(pulsar)}
          text="stwórz Oscylator"
        />
      </div>
    </div>
  );
};

export default Form;
