export const setLocalTheme = (theme: string) => {
  return window.localStorage.setItem("theme", theme)
}

export const getLocalTheme = () => {
  return window.localStorage.getItem("theme")
}

export const setLocalLocale = (locale: string) => {
  return window.localStorage.setItem("locale", locale)
}

export const getLocalLocale = () => {
  return window.localStorage.getItem("locale")
}
