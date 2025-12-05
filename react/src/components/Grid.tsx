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
        {/* nested map here */}
      </div>
    )
  }

  export default Grid;
