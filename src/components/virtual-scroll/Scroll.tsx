import { memo, useMemo, useRef, useState, useEffect, FC } from "react"

const Item: FC<any> = memo(({ index }) => (
  <div
    style={{
      height: 30,
      lineHeight: "30px",
      display: "flex",
      justifyContent: "space-between",
      padding: "0 10px",
    }}
    className="row"
    key={index}
  >
    <img
      alt={index}
      src={`https://picsum.photos/id/${(index % 10) + 1}/200/300`}
    />
    row index {index}
  </div>
))

// Generic hook for detecting scroll:
const useScrollAware: any = () => {
  const [scrollTop, setScrollTop] = useState(0)
  const ref = useRef<HTMLDivElement | any>(null)

  const onScroll = (e: any) =>
    requestAnimationFrame(() => {
      setScrollTop(e.target.scrollTop)
    })

  useEffect(() => {
    const scrollContainer = ref.current

    setScrollTop(scrollContainer.scrollTop)
    scrollContainer.addEventListener("scroll", onScroll)
    return () => scrollContainer.removeEventListener("scroll", onScroll)
  }, [])

  return [scrollTop, ref]
}

interface VirtualScroll {
  itemCount: number
  height: number
  childHeight: number
  renderAhead: number
}
// VirtualScroll component
const VirtualScroll: FC<VirtualScroll> = ({
  itemCount,
  childHeight,
  renderAhead,
  height,
}) => {
  const [scrollTop, ref] = useScrollAware()
  const totalHeight = itemCount * childHeight

  let startNode = Math.floor(scrollTop / childHeight) - renderAhead
  startNode = Math.max(0, startNode)

  let visibleNodeCount = Math.ceil(height / childHeight) + 2 * renderAhead
  visibleNodeCount = Math.min(itemCount - startNode, visibleNodeCount)

  const offsetY = startNode * childHeight

  const visibleChildren = useMemo(
    () =>
      new Array(visibleNodeCount)
        .fill(null)
        .map((_, index) => (
          <Item key={index + startNode} index={index + startNode} />
        )),
    [startNode, visibleNodeCount, Item]
  )

  return (
    <div style={{ height, overflow: "auto" }} ref={ref}>
      <div
        className="viewport"
        style={{
          overflow: "hidden",
          willChange: "transform",
          height: totalHeight,
          position: "relative",
        }}
      >
        <div
          style={{
            willChange: "transform",
            transform: `translateY(${offsetY}px)`,
          }}
        >
          {visibleChildren}
        </div>
      </div>
    </div>
  )
}

export default memo(VirtualScroll)
