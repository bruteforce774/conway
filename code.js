function countNeighbors(grid, row, col) {
  let count = 0;
  
  for (let rowOffset = -1; rowOffset <= 1; rowOffset++) {
    for (let colOffset = -1; colOffset <= 1; colOffset++) {
      // Skip the center cell (0, 0)
      if (rowOffset === 0 && colOffset === 0) continue;
      
      let newRow = row + rowOffset;
      let newCol = col + colOffset;
      
      // Check bounds and if alive
      // ...
    }
  }
  
  return count;
}