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
  const allCells = document.querySelectorAll('.cell');
  
  for (let row = 0; row < height; row++) {
    for (let col = 0; col < width; col++) {
      const index = row * width + col;
      const cell = allCells[index];
      const isAlive = grid[row][col] === 1;
      
      if (isAlive) {
        cell.classList.remove('dead');
        cell.classList.add('alive');
      } else {
        cell.classList.remove('alive');
        cell.classList.add('dead');
      }
    }
  }
}

function createRandomGrid(width, height) {
  const grid = [];
  
  for (let row = 0; row < height; row++) {
    grid[row] = [];
    for (let col = 0; col < width; col++) {
      grid[row][col] = (Math.random() < 0.3) ? 1 : 0;
    }
  }
  
  return grid;
}

function createEmptyGrid(width, height) {
  const grid = [];
  
  for (let row = 0; row < height; row++) {
    grid[row] = [];
    for (let col = 0; col < width; col++) {
      grid[row][col] = 0; // All dead
    }
  }
  
  return grid;
}

function setupCellClickHandlers(width) {
  const allCells = document.querySelectorAll('.cell');
  
  allCells.forEach((cell, index) => {
    cell.addEventListener('click', () => {
      // Convert 1D index to 2D coordinates
      const row = Math.floor(index / width);
      const col = index % width;
      
      // Toggle the cell state in currentGrid (from outer scope)
      currentGrid[row][col] = 1 - currentGrid[row][col];
      
      // Toggle the visual display
      if (currentGrid[row][col] === 1) {
        cell.classList.remove('dead');
        cell.classList.add('alive');
      } else {
        cell.classList.remove('alive');
        cell.classList.add('dead');
      }
    });
  });
}