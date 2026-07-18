import { configureStore } from "@reduxjs/toolkit";
import selectCountryReducer from "../Slices/selectCountry/selectCountrySlice";

export const store = configureStore({
  reducer: {
    country: selectCountryReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;