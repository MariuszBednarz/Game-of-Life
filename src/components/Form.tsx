import React from "react";
import clsx from "clsx";

import SpeedButton from "./SpeedButton";
import SwitchButton from "./SwitchButton";
import { useGameContext } from "../context/GameContext";
import { gun, pulsar } from "../../../setups";

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
        <button
          onClick={clearBoard}
          className={clsx(
            "w-48 h-10 m-4 text-white bg-sky-800 active:bg-sky-400"
          )}
        >
          Wyczyść tablicę
        </button>
        <button
          onClick={() => createFigure(gun)}
          className={clsx(
            "w-48 h-10 m-4 text-white bg-sky-800 active:bg-sky-400"
          )}
        >
          utwórz Gosper Glider
        </button>
        <button
          onClick={() => createFigure(pulsar)}
          className={clsx(
            "w-48 h-10 m-4 text-white bg-sky-800 active:bg-sky-400"
          )}
        >
          utwórz Oscylator Pulsar
        </button>
      </div>
    </div>
  );
};

export default Form;
