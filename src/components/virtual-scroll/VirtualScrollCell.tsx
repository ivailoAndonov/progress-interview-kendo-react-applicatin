import { FC } from "react"

import "./VirtualScroll.scss"

interface CellProps {
  children?: React.ReactNode
  align?: "left" | "right"
  positive?: string
}

const VirtualScrollCell: FC<CellProps> = ({ children, align, positive }) => (
  <div
    className={`Cell 
      ${align ? "Cell--" + align : ""} 
      ${positive && (positive === "-" ? "Cell--danger" : "Cell--success")}`}
  >
    <span>{children}</span>
  </div>
)

export default VirtualScrollCell
