import { useState } from "react"
import { AppContext } from "../../utils/app-context"
import {
  setLocalTheme,
  getLocalTheme,
  getLocalLocale,
  setLocalLocale,
} from "../../utils/app-locals"
import {
  DEFAULT_LOCALE,
  LOCALES_LIST,
  DEFAULT_THEME,
  THEMES_LIST,
} from "../../utils/constants"
import CompanyTable from "../company-table/CompanyTable"
import Select from "../select/Select"

import "./App.scss"

function App() {
  const currentTheme = getLocalTheme() || DEFAULT_THEME
  const currentLocale = getLocalLocale() || DEFAULT_LOCALE

  const [theme, setTheme] = useState(currentTheme)
  const [locale, setLocale] = useState(currentLocale)

  const handleThemeChange = (value: string) => {
    setLocalTheme(value)
    setTheme(value)
  }

  const handleLocaleChange = (value: string) => {
    setLocalLocale(value)
    setLocale(value)
  }

  return (
    <AppContext.Provider value={{ theme, locale }}>
      <div className={`App App--${theme}`}>
        <header className="App__header">Ivaylo interview task</header>
        <div className="App__table-navigation">
          <Select
            label="Theme:"
            options={THEMES_LIST}
            selected={theme}
            changeHandler={handleThemeChange}
          />
          <br />
          <Select
            label="Locale:"
            options={LOCALES_LIST}
            selected={locale}
            changeHandler={handleLocaleChange}
          />
        </div>
        <CompanyTable />
      </div>
    </AppContext.Provider>
  )
}

export default App
