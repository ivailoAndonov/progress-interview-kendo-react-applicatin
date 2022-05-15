import { faker } from "@faker-js/faker"

export interface CompanyData {
  id: number
  name: string
  date: Date
  revenue: number
  change: string
  done: boolean
}

let CompanyData: CompanyData[] = []

const generateList = (length: number) => {
  CompanyData = [...Array(length).keys()].map((key: number) => {
    return {
      id: key + 1,
      name: faker.company.companyName(),
      date: faker.date.between("2022-01-01T00:00:00.000Z", Date.now()),
      revenue: Number(faker.finance.amount(1, 10, 2)),
      change: `${faker.helpers.arrayElements(["+", "-"], 1)} 
               ${faker.finance.amount(1, 10, 2)}%`,
      done: faker.datatype.boolean(),
    }
  })
  return CompanyData
}

const updateStatus = (id: number, status: boolean) =>
  (CompanyData[id].done = status)

const getList = (length: number) =>
  CompanyData.length <= 0 ? generateList(length) : CompanyData

export default {
  updateCompanyStatus: updateStatus,
  getCompanyList: getList,
}
