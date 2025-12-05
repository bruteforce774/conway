import type { CellProps } from "../types"

function Cell({ isAlive, onClick }: CellProps) {
  return (
    <div 
    className={`cell ${isAlive ? "alive" : "dead"}`}
    onClick={onClick}>
    </div>
  )
}

export default Cell
