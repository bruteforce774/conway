 import type { GridProps } from '../types';
  import Cell from './Cell';

  function Grid({ grid, onCellClick }: GridProps) {
    const height = grid.length;
    const width = grid[0].length;

    return (
      <div 
        className="grid"
        style={{ gridTemplateColumns: `repeat(${width}, 20px)` }}
      >
        {grid.map((row, rowIndex) =>
          row.map((cellValue, colIndex) => (
            <Cell
              key={`${rowIndex}-${colIndex}`}
              isAlive={cellValue === 1}
              onClick={() => onCellClick(rowIndex, colIndex)}
            />
          ))
        )}
      </div>
    )
  }

  export default Grid;
