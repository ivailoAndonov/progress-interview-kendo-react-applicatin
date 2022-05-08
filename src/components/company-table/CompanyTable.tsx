import { FC } from "react"

import VirtualScroll from "../virtual-scroll/VirtualScroll"
import CompanyTableHeader from "./CompanyTableHeader"
import companyData from "../../utils/company-data"

import "./CompanyTable.scss"

const CompanyTable: FC = () => {
  const companiesCount = 100
  const companyList = companyData.getCompanyList(companiesCount)

  return (
    <main role="main">
      <CompanyTableHeader />
      <VirtualScroll
        rowHeight={60}
        totalElements={companiesCount}
        visibleItemsLength={5}
        items={companyList}
      />
      {/* <Scroll
          itemCount={10000}
          height={300}
          childHeight={30}
          item={Item}
        /> */}
    </main>
  )
}

export default CompanyTable
