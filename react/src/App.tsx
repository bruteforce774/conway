import { useState } from "react";
import Grid from "./components/Grid";
import type { Grid as GridType } from "./types";

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

    return <Grid grid={grid} onCellClick={handleCellClick} />;
}

export default App;