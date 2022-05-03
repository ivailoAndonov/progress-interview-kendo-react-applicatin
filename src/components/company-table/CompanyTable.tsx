import { useContext } from "react"
import { AppContext } from "../../utils/app-context"
import VirtualScroll, { Switch } from "../virtual-scroll/VirtualScroll"
import { getCompanyList } from "../../utils/company-data"

import "./CompanyTable.scss"

function CompanyTable() {
  const appContext = useContext(AppContext)
  const companyList = getCompanyList(20)

  // const companyList = [
  //   { name: "company 1" },
  //   { name: "company 2" },
  //   { name: "company 3" },
  //   { name: "company 4" },
  //   { name: "company 5" },
  //   { name: "company 6" },
  //   { name: "company 7" },
  //   { name: "company 8" },
  //   { name: "company 9" },
  //   { name: "company 10" },
  //   { name: "company 11" },
  //   { name: "company 12" },
  //   { name: "company 13" },
  //   { name: "company 14" },
  //   { name: "company 15" },
  //   { name: "company 16" },
  //   { name: "company 17" },
  //   { name: "company 18" },
  //   { name: "company 19" },
  //   { name: "company 20" },
  // ]

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
