import React, { FC, useRef, useState, useEffect, ReactElement } from "react"

type switchProps = {
  value: boolean
  id: number
}

export const Switch: FC<switchProps> = (props) => {
  const handleChange = (event: any) => console.log(event.target.value)
  return (
    <label>
      <input
        type="checkbox"
        value={props.id}
        onChange={handleChange}
        checked={props.value}
      />
      <span>kur</span>
    </label>
  )
}

const grids = (items: any[]) =>
  items.map((data: any, index: number) => {
    return (
      <div
        style={{
          height: "70px",
          display: "table",
          tableLayout: "fixed",
          width: "100%",
        }}
        key={index}
      >
        <div style={{ border: "1px solid red" }}>
          <span>{index}</span>
        </div>
        <div style={{ border: "1px solid red" }}>
          <span>{data.name}</span>
        </div>
        <div>
          <span>
            <Switch value={true} id={index} />
          </span>
        </div>
      </div>
    )
  })

interface VirtualScrollProps {
  rowHeight: number
  totalElements: number
  items: any[]
  visibleItemsLength: number
}

const VirtualScroll: FC<VirtualScrollProps> = (props) => {
  const [scrollTop, setScrollTop] = useState(0)
  const scrollEle = useRef<HTMLDivElement | any>(null)

  const totalHeight = props.rowHeight * props.totalElements
  const startNodeEl = Math.max(0, Math.floor(scrollTop / props.rowHeight))
  const visibleItems = grids(props.items).slice(
    startNodeEl,
    startNodeEl + props.visibleItemsLength
  )
  const scroll = () => {
    setScrollTop(scrollEle.current.scrollTop)
  }

  useEffect(() => {
    scrollEle.current.addEventListener("scroll", scroll)
    return () => {}
  })

  return (
    <div
      ref={scrollEle}
      style={{
        height: props.rowHeight * (props.visibleItemsLength - 2) + "px",
        overflowY: "scroll",
      }}
    >
      <div
        className="CompanyTable--light"
        style={{ height: totalHeight + "px", width: "100%" }}
      >
        <div
          style={{
            transform: `translateY(${startNodeEl * props.rowHeight}px)`,
          }}
        >
          {visibleItems}
        </div>
      </div>
    </div>
  )
}

export default React.memo(VirtualScroll)
