import { configureStore } from "@reduxjs/toolkit"
import CompanyDataSlice from "./slices/CompanyDataSlice"

export const store = configureStore({
  reducer: {
    companyData: CompanyDataSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
