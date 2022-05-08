import { useContext, FC } from "react"
import { AppContext } from "../../utils/app-context"
import { translate } from "../../utils/translations"

import Switch from "../switch/Switch"

import "./CompanyTable.scss"

const CompanyTableHeader: FC = () => {
  const appContext = useContext(AppContext)
  const translations = translate(appContext.locale)

  return (
    <div className="TableHeader TableHeader__row--border">
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
            <div className="TableHeader__cell col-2">{translations.change}</div>
          </div>
        </div>
        <div className="col-1 border--l">
          <div className="TableHeader__cell border--b">{translations.done}</div>
          <div className="TableHeader__cell">
            <Switch id={0} checked={false} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompanyTableHeader
