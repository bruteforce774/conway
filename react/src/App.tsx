import { useState, useEffect } from "react";
import Grid from "./components/Grid";
import type { Grid as GridType } from "./types";
import { nextGeneration } from "./gameLogic";

function createEmptyGrid(width: number, height: number): GridType {
  // Create 2D array filled with zeros
  return Array.from({ length: height }, () => Array(width).fill(0));
}

function App() {
  const [grid, setGrid] = useState<GridType>(createEmptyGrid(30, 30));
  const [isRunning, setIsRunning] = useState(false);

  function handleCellClick(row: number, col: number) {
    const newGrid = grid.map((r) => r.slice());
    newGrid[row][col] = newGrid[row][col] === 1 ? 0 : 1;
    setGrid(newGrid);
  }

  function handleStepForward() {
    setGrid(nextGeneration(grid));
  }

  function handleClear() {
    setGrid(createEmptyGrid(30, 30));
  }

  function handleRandomFill() {
    setGrid(createRandomGrid(30, 30));
  }

  function handlePlayPause() {
    setIsRunning(!isRunning);
  }

  // Auto-step when running
  useEffect(() => {
    if (!isRunning) return;

    const intervalId = setInterval(() => {
      setGrid((currentGrid) => nextGeneration(currentGrid));
    }, 250); // 250ms like the original

    // Cleanup function: clear interval when component unmounts or isRunning changes
    return () => clearInterval(intervalId);
  }, [isRunning]);

  function createRandomGrid(width: number, height: number): GridType {
    const grid: GridType = [];

    for (let row = 0; row < height; row++) {
      grid[row] = [];
      for (let col = 0; col < width; col++) {
        grid[row][col] = Math.random() < 0.3 ? 1 : 0;
      }
    }

    return grid;
  }

  return (
    <div>
      <h1>Conway's Game of Life</h1>

      <div className="info">
        <strong>Instructions:</strong> Click cells to toggle them alive/dead.
        Then use the buttons to step through or run the simulation.
      </div>

      <div className="controls">
        <button onClick={handlePlayPause}>
          {isRunning ? "Stop" : "Start"}
        </button>
        <button onClick={handleStepForward} disabled={isRunning}>
          Step Forward
        </button>
        <button onClick={handleRandomFill}>Random Fill</button>
        <button onClick={handleClear}>Clear Grid</button>
      </div>

      <Grid grid={grid} onCellClick={handleCellClick} />
    </div>
  );
}

export default App;
