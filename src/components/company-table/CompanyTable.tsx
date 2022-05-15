import { FC, useEffect } from "react"

import VirtualScroll from "../virtual-scroll/VirtualScroll"
import CompanyTableHeader from "./CompanyTableHeader"
import Switch from "../switch/Switch"
import Cell from "../virtual-scroll/VirtualScrollCell"

import { RootState } from "../../redux/Store"
import { useSelector, useDispatch } from "react-redux"
import { CompanyData } from "../../utils/company-data"
import {
  getCompanyList,
  setCompanyDone,
  setGlobalDone,
} from "../../redux/slices/CompanyDataSlice"

import "./CompanyTable.scss"

const CompanyTable: FC = () => {
  const companiesCount = 1000

  const companyList = useSelector((state: RootState) => state.companyData.list)
  const globalDone = useSelector(
    (state: RootState) => state.companyData.globalDone
  )
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCompanyList(companiesCount))
  }, [])

  const handelGlobalDone = (value: boolean) => {
    dispatch(setGlobalDone(value))
  }

  const handelCompanyDone = (value: boolean, id?: number) => {
    dispatch(setCompanyDone({ value, id }))
  }

  const rows = (
    items: CompanyData[],
    locale: string,
    theme: string,
    rowHeight: number
  ) => {
    const sign = (value: string): string => value[0]

    return items.map((data: CompanyData, index: number) => (
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
          <Switch
            id={data.id}
            checked={data.done}
            changeHandler={handelCompanyDone}
          />
        </Cell>
      </div>
    ))
  }

  return (
    <>
      <main role="main">
        <CompanyTableHeader
          switchHandler={handelGlobalDone}
          globalDone={globalDone}
        />
        <VirtualScroll
          rowHeight={60}
          totalElements={companiesCount}
          visibleItemsLength={5}
          items={companyList}
          rows={rows}
        />
      </main>
    </>
  )
}

export default CompanyTable
