import React, { FC, useRef, useState, useEffect } from "react"
import { useContext } from "react"
import { AppContext } from "../../utils/app-context"
import { CompanyData } from "../../utils/company-data"

import "./VirtualScroll.scss"

interface VirtualScrollProps {
  rowHeight: number
  totalElements: number
  items: CompanyData[]
  visibleItemsLength: number
  rows: any
}

const VirtualScroll: FC<VirtualScrollProps> = (props) => {
  const appContext = useContext(AppContext)
  const [scrollTop, setScrollTop] = useState<number>(0)
  const scrollEle = useRef<HTMLDivElement | any>(null)

  const totalHeight = props.rowHeight * props.totalElements
  const startNodeEl = Math.max(0, Math.floor(scrollTop / props.rowHeight))

  const getVisibleItems = () =>
    props
      .rows(props.items, appContext.locale, appContext.theme, props.rowHeight)
      .slice(startNodeEl, startNodeEl + (props.visibleItemsLength + 6))

  let visibleItems = getVisibleItems()
  const scroll = () => {
    setScrollTop(scrollEle.current.scrollTop)
  }

  useEffect(() => {
    scrollEle.current.addEventListener("scroll", scroll)
    visibleItems = getVisibleItems()
  }, [props.items])

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
        </div>
      </div>
    </div>
  )
}

export default React.memo(VirtualScroll)
