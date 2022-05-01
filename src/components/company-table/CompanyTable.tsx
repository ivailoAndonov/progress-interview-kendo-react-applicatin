import { useContext } from "react"
import { AppContext } from "../../utils/app-context"
import VirtualScroll, { Switch } from "./VirtualScroll"

import "./CompanyTable.css"

function CompanyTable() {
  const appContext = useContext(AppContext)
  // const companyList = getCompanyList()

  const companyList = [
    { name: "company 1" },
    { name: "company 2" },
    { name: "company 3" },
    { name: "company 4" },
    { name: "company 5" },
    { name: "company 6" },
    { name: "company 7" },
    { name: "company 8" },
    { name: "company 9" },
    { name: "company 10" },
    { name: "company 11" },
    { name: "company 12" },
    { name: "company 13" },
    { name: "company 14" },
    { name: "company 15" },
    { name: "company 16" },
    { name: "company 17" },
    { name: "company 18" },
    { name: "company 19" },
    { name: "company 20" },
  ]

  return (
    <>
      {/* <table className={`CompanyTable--${appContext.theme}`}> */}
      <div
        className={`CompanyTable__header CompanyTable__header--${appContext.theme}`}
      >
        <div className="CompanyTable__row">
          <div>
            <div>Company</div>
            <div className="CompanyTable__row">
              <div>id</div>
              <div>Name</div>
            </div>
          </div>
          <div>Date</div>
          <div>
            <div>Finance</div>
            <div className="CompanyTable__row">
              <div>Revenue</div>
              <div>YoY change</div>
            </div>
          </div>
          <div>
            <div>Done</div>
            <div>
              {/* <Switch /> */}
              switch
            </div>
          </div>
        </div>
      </div>
      {/* </table> */}
      <VirtualScroll
        totalElements={20}
        rowHeight={70}
        items={companyList}
        visibleItemsLength={5}
      ></VirtualScroll>
    </>
  )
}

export default CompanyTable
