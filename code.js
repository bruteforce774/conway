function countNeighbors(grid, row, col) {
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