export type CellProps = {
    isAlive: boolean;
    onClick : () => void;
}

export type Grid = number[][];

export type GridProps = {
    grid: Grid;
    onCellClick: (row: number, col: number) => void;
}