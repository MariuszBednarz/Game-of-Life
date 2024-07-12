import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

type Board = boolean[][];

interface GameContextType {
  rows: number;
  cols: number;
  speed: number;
  pause: boolean;
  board: Board;
  setRows: Dispatch<SetStateAction<number>>;
  setCols: Dispatch<SetStateAction<number>>;
  setSpeed: Dispatch<SetStateAction<number>>;
  setPause: Dispatch<SetStateAction<boolean>>;
  setBoard: Dispatch<SetStateAction<Board>>;
  handleSpeed: (val: number) => void;
  handleSwitch: (val: boolean) => void;
  createEmptyBoard: () => Board;
  toggleCell: (row: number, col: number) => void;
  clearBoard: () => void;
  updateBoard: () => void;
  createFigure: (setup: number[][]) => void;
}

export const GameContext = createContext<GameContextType | null>(null);

interface GameProviderProps {
  children: ReactNode;
}

export const GameProvider: React.FC<GameProviderProps> = ({ children }) => {
  const [rows, setRows] = useState(30);
  const [cols, setCols] = useState(50);
  const [speed, setSpeed] = useState(500);
  const [pause, setPause] = useState(true);

  const createEmptyBoard = (): Board => {
    return Array(rows)
      .fill(null)
      .map(() => Array(cols).fill(false));
  };

  const [board, setBoard] = useState<Board>(createEmptyBoard());

  const handleSpeed = (val: number) => setSpeed(val);

  const handleSwitch = (val: boolean) => setPause(!val);

  const toggleCell = (row, col) => {
    let newBoard = JSON.parse(JSON.stringify(board));
    newBoard[row][col] = !newBoard[row][col];
    setBoard(newBoard);
  };

  const clearBoard = () => {
    setBoard(createEmptyBoard());
    setPause(true);
  };

  const getNeighbors = (board, x, y) => {
    const directions = [
      [0, 1],
      [1, 0],
      [1, 1],
      [-1, -1],
      [-1, 0],
      [0, -1],
      [1, -1],
      [-1, 1],
    ];

    return directions.reduce((count, [dx, dy]) => {
      const newX = x + dx;
      const newY = y + dy;
      if (
        newX >= 0 &&
        newX < rows &&
        newY >= 0 &&
        newY < cols &&
        board[newX][newY]
      ) {
        count++;
      }
      return count;
    }, 0);
  };

  const updateBoard = () => {
    setBoard((prevBoard) =>
      prevBoard.map((row, x) =>
        row.map((cell, y) => {
          const neighbors = getNeighbors(prevBoard, x, y);
          if (cell) {
            return neighbors === 2 || neighbors === 3;
          }
          return neighbors === 3;
        })
      )
    );
  };

  const createFigure = (setup) => {
    const figureBoard = Array(30)
      .fill(null)
      .map(() => Array(50).fill(false));
    setup.forEach(([x, y]) => {
      if (x < 30 && y < 50) {
        figureBoard[x][y] = true;
      }
    });
    setBoard(figureBoard);
  };

  const value: GameContextType = {
    rows,
    setRows,
    cols,
    setCols,
    speed,
    setSpeed,
    pause,
    setPause,
    board,
    setBoard,
    handleSpeed,
    handleSwitch,
    createEmptyBoard,
    toggleCell,
    clearBoard,
    updateBoard,
    createFigure,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};

export const useGameContext = (): GameContextType => {
  const context = useContext(GameContext);

  if (!context) {
    throw new Error("Kontekst musi być stosowany wewnątrz Providera");
  }
  return context;
};
