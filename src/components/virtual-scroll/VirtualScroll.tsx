import React, { FC, useRef, useState, useEffect } from "react"
import Switch from "../switch/Switch"

const rows = (items: any[], locale: string) =>
  items.map((data: any, index: number) => {
    return (
      <div
        style={{
          height: "60px",
          // display: "table",
          // tableLayout: "fixed",
          display: "flex",
          width: "100%",
        }}
        key={index}
      >
        <div style={{ border: "1px solid gray", flex: 1, padding: "20px 0" }}>
          <span>{data.id}</span>
        </div>
        <div style={{ border: "1px solid gray", flex: 1, padding: "20px 0" }}>
          <span>{data.name}</span>
        </div>
        <div style={{ border: "1px solid gray", flex: 1, padding: "20px 0" }}>
          <span>{new Intl.DateTimeFormat(locale).format(data.date)}</span>
        </div>
        <div style={{ border: "1px solid gray", flex: 1, padding: "20px 0" }}>
          <span>
            {new Intl.NumberFormat(locale, {
              style: "currency",
              currency: "USD",
            }).format(data.revenue)}
          </span>
        </div>
        <div style={{ border: "1px solid gray", flex: 1, padding: "20px 0" }}>
          <span>{data.change}</span>
        </div>
        <div style={{ border: "1px solid gray", flex: 1, padding: "20px 0" }}>
          <span>
            <Switch id={data.id} />
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
  locale: string
}

const VirtualScroll: FC<VirtualScrollProps> = (props) => {
  const [scrollTop, setScrollTop] = useState(0)
  const scrollEle = useRef<HTMLDivElement | any>(null)

  // const rowHeight = 60
  const totalHeight = props.rowHeight * props.totalElements
  const startNodeEl = Math.max(0, Math.floor(scrollTop / props.rowHeight))
  const visibleItems = rows(props.items, props.locale).slice(
    startNodeEl,
    startNodeEl + (props.visibleItemsLength + 2)
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
        height: props.rowHeight * props.visibleItemsLength + "px",
        overflowY: "scroll",
        padding: "0 4px",
        border: "1px solid gray",
        borderTop: "transparent",
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
