import { faker } from "@faker-js/faker"

const setCompanyList = (length: number) =>
  [...Array(length).keys()].map((key: number) => {
    return {
      id: key,
      name: faker.name.findName(),
      date: faker.date.between(
        "2020-01-01T00:00:00.000Z",
        "2030-01-01T00:00:00.000Z"
      ),
      revenue: faker.finance.amount(1, 10, 2),
      change:
        Number(faker.datatype.boolean()) +
        " " +
        faker.finance.amount(1, 10, 2) +
        "%",
      done: faker.datatype.boolean(),
    }
  })

export const getCompanyList = (length: number) => setCompanyList(length)
