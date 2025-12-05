import type { Grid } from "./types";

export function countNeighbors(grid: Grid, row: number, col: number) {
  let count = 0;
  const height = grid.length;
  const width = grid[0].length;
  
  for (let rowOffset = -1; rowOffset <= 1; rowOffset++) {
    for (let colOffset = -1; colOffset <= 1; colOffset++) {
      // Skip the center cell
      if (rowOffset === 0 && colOffset === 0) continue;
      
      let newRow = row + rowOffset;
      let newCol = col + colOffset;
      
      // Check if in bounds
      if (newRow >= 0 && newRow < height && newCol >= 0 && newCol < width) {
        // Check if alive
        if (grid[newRow][newCol] === 1) {
          count++;
        }
      }
    }
  }
  return count;
}

export function getNextCellState(currentState: number, neighborCount: number) {
  if (currentState === 1) {
    // Alive: survives with 2 or 3 neighbors
    return (neighborCount === 2 || neighborCount === 3) ? 1 : 0;
  } else {
    // Dead: becomes alive with exactly 3 neighbors
    return (neighborCount === 3) ? 1 : 0;
  }
}

export function nextGeneration(grid: Grid): Grid {
  const height = grid.length;
  const width = grid[0].length;
  const newGrid: Grid = [];

  for(let i = 0; i < height; i++) {
    newGrid[i] = [];
    for(let j = 0; j < width; j++) {
      const neighborCount = countNeighbors(grid, i, j);
      newGrid[i][j] = getNextCellState(grid[i][j], neighborCount);
    }
  }
  return newGrid;
}