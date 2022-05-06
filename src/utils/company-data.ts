import { faker } from "@faker-js/faker"

let companyList: any[] = []

const generateList = (length: number) => {
  companyList = [...Array(length).keys()].map((key: number) => {
    return {
      id: key + 1,
      name: faker.company.companyName(),
      date: faker.date.between(
        "2020-01-01T00:00:00.000Z",
        "2030-01-01T00:00:00.000Z"
      ),
      revenue: faker.finance.amount(1, 10, 2),
      change:
        faker.helpers.arrayElements(["+", "-"], 1) +
        " " +
        faker.finance.amount(1, 10, 2) +
        "%",
      done: faker.datatype.boolean(),
    }
  })
  return companyList
}

const updateStatus = (id: number, status: boolean) =>
  (companyList[id].done = status)

const getList = (length: number) =>
  companyList.length <= 0 ? generateList(length) : companyList

export default {
  updateCompanyStatus: updateStatus,
  getCompanyList: getList,
}
