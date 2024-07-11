import Board from "./components/Board";
import Form from "./components/Form";
import { useGameContext } from "./context/GameContext";

const App = () => {
  const { handleSpeed, speed, handleSwitch, pause, rows, cols } =
    useGameContext();
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">Game of Life</h1>

      <h2>Options</h2>
      <Form
        handleSpeed={handleSpeed}
        speed={speed}
        handleSwitch={handleSwitch}
        pause={pause}
      />
      <Board rows={rows} cols={cols} speed={speed} pause={pause} />
    </div>
  );
};

export default App;
