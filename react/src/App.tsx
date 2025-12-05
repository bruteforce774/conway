import { useState } from "react";
import Grid from "./components/Grid";
import type { Grid as GridType } from "./types";
import { nextGeneration } from "./gameLogic";

function createEmptyGrid(width: number, height: number): GridType {
  // Create 2D array filled with zeros
  return Array.from({ length: height }, () => Array(width).fill(0));
}

function App() {
    const [grid, setGrid] = useState<GridType>(createEmptyGrid(30, 30));

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

    return (
        <div>
            <h1>Conway's Game of Life</h1>

            <div className="info">
                <strong>Instructions:</strong> Click cells to toggle them alive/dead. Then use the buttons to step through or run the simulation.
            </div>

            <div className="controls">
                <button onClick={handleStepForward}>Step Forward</button>
                <button onClick={handleClear}>Clear Grid</button>
            </div>

            <Grid grid={grid} onCellClick={handleCellClick} />
        </div>
    );
}

export default App;