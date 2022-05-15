import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import companyData, { CompanyData } from "../../utils/company-data"

interface CompanyListState {
  list: CompanyData[] | []
  globalDone: boolean
}

export interface SetCompanyDoneAction {
  id?: number
  value: boolean
}

const initialState: CompanyListState = {
  list: [],
  globalDone: false,
}

export const companyDataSlice = createSlice({
  name: "companyData",
  initialState,
  reducers: {
    getCompanyList: (state, action: PayloadAction<number>) => {
      state.list = companyData.getCompanyList(action.payload)
    },
    setCompanyDone: (state, action: PayloadAction<SetCompanyDoneAction>) => {
      let newList = [...state.list]
      newList[Number(action.payload.id) - 1].done = !action.payload.value
      state.list = [...newList]
    },
    setGlobalDone: (state, action: PayloadAction<boolean>) => {
      state.globalDone = !action.payload
      state.list = state.list.map((item) => ({
        ...item,
        done: !action.payload,
      }))
    },
  },
})

export const { setCompanyDone, setGlobalDone, getCompanyList } =
  companyDataSlice.actions

export default companyDataSlice
