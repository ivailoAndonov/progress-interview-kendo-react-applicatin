import VirtualScroll from "../virtual-scroll/VirtualScroll"
import Switch from "../switch/Switch"

import { useContext } from "react"
import { AppContext } from "../../utils/app-context"
import companyData from "../../utils/company-data"

import "./CompanyTable.scss"

function CompanyTable() {
  const appContext = useContext(AppContext)
  const companyList = companyData.getCompanyList(20)

  return (
    <>
      <div
        className={`TableHeader TableHeader__row--border CompanyTable--${appContext.theme}`}
      >
        <div className="TableHeader__row">
          <div className="col-2 border--r">
            <div className="TableHeader__cell border--b">Company</div>
            <div className="TableHeader__row">
              <div className="TableHeader__cell col-2 border--r">id</div>
              <div className="TableHeader__cell col-2">Name</div>
            </div>
          </div>
          <div className="TableHeader__cell col-1">Date</div>
          <div className="col-2 border--l">
            <div className="TableHeader__cell border--b">Finance</div>
            <div className="TableHeader__row">
              <div className="TableHeader__cell col-2 border--r">Revenue</div>
              <div className="TableHeader__cell col-2">YoY change</div>
            </div>
          </div>
          <div className="col-1 border--l">
            <div className="TableHeader__cell border--b">Done</div>
            <div className="TableHeader__cell">
              <Switch id={0} value={true} />
            </div>
          </div>
        </div>
      </div>
      <VirtualScroll
        totalElements={20}
        items={companyList}
        visibleItemsLength={5}
      ></VirtualScroll>
    </>
  )
}

export default CompanyTable
