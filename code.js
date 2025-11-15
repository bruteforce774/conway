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

function getNextCellState(currentState, neighborCount) {
  if (currentState === 1) {
    // Alive: survives with 2 or 3 neighbors
    return (neighborCount === 2 || neighborCount === 3) ? 1 : 0;
  } else {
    // Dead: becomes alive with exactly 3 neighbors
    return (neighborCount === 3) ? 1 : 0;
  }
}

// Main function to compute the next generation of the grid
function nextGeneration(grid) {
  const height = grid.length;
  const width = grid[0].length;
  const newGrid = [];

  for(let i = 0; i < height; i++) {
    newGrid[i] = [];
    for(let j = 0; j < width; j++) {
      const neighborCount = countNeighbors(grid, i, j);
      newGrid[i][j] = getNextCellState(grid[i][j], neighborCount);
    }
  }
  return newGrid;
}

function createGridHTML(width, height) {
  const gridContainer = document.getElementById('grid');
  gridContainer.innerHTML = ''; // Clear existing
  
  // Set up CSS Grid columns
  gridContainer.style.gridTemplateColumns = `repeat(${width}, 20px)`;
  
  for (let row = 0; row < height; row++) {
    for (let col = 0; col < width; col++) {
      const cell = document.createElement('div');
      cell.className = 'cell dead'; // Start as dead
      cell.dataset.row = row;
      cell.dataset.col = col;
      gridContainer.appendChild(cell);
    }
  }
}

function updateGridDisplay(grid) {
  const height = grid.length;
  const width = grid[0].length;
  
  for (let row = 0; row < height; row++) {
    for (let col = 0; col < width; col++) {
      const cellState = grid[row][col];
      
      // How do we find the DOM element for this row/col?
      // How do we update its class?
    }
  }
}