export const setLocalTheme = (theme: string): void => {
  window.localStorage.setItem("theme", theme)
}

export const getLocalTheme = (): string | null => {
  return window.localStorage.getItem("theme")
}

export const setLocalLocale = (locale: string): void => {
  window.localStorage.setItem("locale", locale)
}

export const getLocalLocale = (): string | null => {
  return window.localStorage.getItem("locale")
}
