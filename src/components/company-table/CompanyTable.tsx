import VirtualScroll from "../virtual-scroll/VirtualScroll"
import Switch from "../switch/Switch"

import { useContext } from "react"
import { AppContext } from "../../utils/app-context"
import { translate } from "../../utils/translations"
import companyData from "../../utils/company-data"

import "./CompanyTable.scss"

function CompanyTable() {
  const appContext = useContext(AppContext)
  const translations = translate(appContext.locale)
  const companyList = companyData.getCompanyList(20)

  return (
    <>
      <div
        className={`TableHeader TableHeader__row--border CompanyTable--${appContext.theme}`}
      >
        <div className="TableHeader__row">
          <div className="col-2 border--r">
            <div className="TableHeader__cell border--b">
              {translations.company}
            </div>
            <div className="TableHeader__row">
              <div className="TableHeader__cell col-2 border--r">
                {translations.id}
              </div>
              <div className="TableHeader__cell col-2">{translations.name}</div>
            </div>
          </div>
          <div className="TableHeader__cell col-1">{translations.date}</div>
          <div className="col-2 border--l">
            <div className="TableHeader__cell border--b">
              {translations.finance}
            </div>
            <div className="TableHeader__row">
              <div className="TableHeader__cell col-2 border--r">
                {translations.revenue}
              </div>
              <div className="TableHeader__cell col-2">
                {translations.change}
              </div>
            </div>
          </div>
          <div className="col-1 border--l">
            <div className="TableHeader__cell border--b">Done</div>
            <div className="TableHeader__cell">
              <Switch id={0} value={false} />
            </div>
          </div>
        </div>
      </div>
      <VirtualScroll
        rowHeight={60}
        totalElements={20}
        visibleItemsLength={5}
        items={companyList}
        locale={appContext.locale}
      ></VirtualScroll>
    </>
  )
}

export default CompanyTable
