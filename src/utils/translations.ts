interface Locale {
  company: string
  id: string
  name: string
  date: string
  finance: string
  revenue: string
  change: string
  done: string
}

interface Translations {
  [key: string]: Locale
}

const TRANSLATIONS: Translations = {
  "en-US": {
    company: "Company",
    id: "id",
    name: "Name",
    date: "Date",
    finance: "Finance",
    revenue: "Revenue",
    change: "YoY change",
    done: "Done",
  },
  BG: {
    company: "Компания",
    id: "номер",
    name: "Име",
    date: "Дата",
    finance: "Финанси",
    revenue: "Приходи",
    change: "Годишна промяна",
    done: "Завършен",
  },
  CN: {
    company: "公司",
    id: "数字",
    name: "姓名",
    date: "日期",
    finance: "金融",
    revenue: "收入",
    change: "年度变化",
    done: "完毕",
  },
}

export const translate = (locale: string): Locale => TRANSLATIONS[locale]
