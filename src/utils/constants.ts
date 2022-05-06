interface Theme {
  value: string
}
export const DEFAULT_THEME: Theme = { value: "light" }
export const DARK_THEME: Theme = { value: "dark" }
export const THEMES_LIST: Theme[] = [DEFAULT_THEME, DARK_THEME]

interface Locales {
  value: string
  name: string
}
export const DEFAULT_LOCALE: Locales = { value: "en-US", name: "EN" }
export const BG_LOCALE: Locales = { value: "BG", name: "BG" }
export const CN_LOCALE: Locales = { value: "CN", name: "CN" }
export const LOCALES_LIST: Locales[] = [DEFAULT_LOCALE, BG_LOCALE, CN_LOCALE]
