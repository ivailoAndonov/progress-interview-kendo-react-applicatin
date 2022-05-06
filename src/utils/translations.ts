const TRANSLATIONS: any = {
  "en-US": {
    company: "Company",
    id: "id",
    name: "Name",
    date: "Date",
    finance: "Finance",
    revenue: "Revenue",
    change: "YoY change",
  },
  BG: {
    company: "Компания",
    id: "номер",
    name: "Име",
    date: "Дата",
    finance: "Финанси",
    revenue: "Приходи",
    change: "Годишна промяна",
  },
  CN: {
    company: "公司",
    id: "数字",
    name: "姓名",
    date: "日期",
    finance: "金融",
    revenue: "收入",
    change: "年度变化",
  },
}

export const translate = (locale: string) => TRANSLATIONS[locale]
