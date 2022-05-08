import React, { FC, useRef, useState, useEffect } from "react"
import { useContext } from "react"
import { AppContext } from "../../utils/app-context"

import Switch from "../switch/Switch"
import Cell from "./VirtualScrollCell"

import "./VirtualScroll.scss"

const rows = (
  items: any[],
  locale: string,
  theme: string,
  rowHeight: number
) => {
  const sign = (value: string): string => value[0]

  return items.map((data: any, index: number) => {
    return (
      <div
        className={`VirtualScroll__row ${
          data.done && "VirtualScroll__row--selected-" + theme
        }`}
        style={{ height: `${rowHeight}px` }}
        key={index}
      >
        <Cell>{data.id}</Cell>
        <Cell align={"left"}>{data.name}</Cell>
        <Cell>{new Intl.DateTimeFormat(locale).format(data.date)}</Cell>
        <Cell align={"right"}>
          {new Intl.NumberFormat(locale, {
            style: "currency",
            currency: "USD",
          }).format(data.revenue)}
        </Cell>
        <Cell align={"right"} positive={sign(data.change)}>
          {data.change}
        </Cell>
        <Cell>
          <Switch id={data.id} checked={data.done} />
        </Cell>
      </div>
    )
  })
}

interface VirtualScrollProps {
  rowHeight: number
  totalElements: number
  items: any[]
  visibleItemsLength: number
}

const VirtualScroll: FC<VirtualScrollProps> = (props) => {
  const appContext = useContext(AppContext)
  const [scrollTop, setScrollTop] = useState<number>(0)
  const scrollEle = useRef<HTMLDivElement | any>(null)

  const totalHeight = props.rowHeight * props.totalElements
  const startNodeEl = Math.max(0, Math.floor(scrollTop / props.rowHeight))
  const visibleItems = rows(
    props.items,
    appContext.locale,
    appContext.theme,
    props.rowHeight
  ).slice(startNodeEl, startNodeEl + (props.visibleItemsLength + 6))
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
      className="VirtualScroll"
      tabIndex={0}
      style={{ height: `${props.rowHeight * props.visibleItemsLength}px` }}
    >
      <div style={{ height: `${totalHeight}px` }}>
        <div
          style={{
            transform: `translateY(${startNodeEl * props.rowHeight}px)`,
          }}
        >
          {visibleItems}
          {/* <div
            style={{
              height: "100%",
              display: "flex",
              alignItems: "center",
            }}
          >
            loading ...{" "}
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default React.memo(VirtualScroll)
