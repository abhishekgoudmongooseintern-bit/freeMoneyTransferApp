import { createSlice } from "@reduxjs/toolkit";

type CountryState = {
  selectedCountry: {
    code: string;
    flag: string;
  };
  phoneNumber: string;
};

const initialState: CountryState = {
  selectedCountry: {
    code: "+91",
    flag: "🇮🇳",
  },
  phoneNumber: "",
};  

export const selectCountrySlice = createSlice({
  name: "selectCountryCode",
  initialState,
  reducers: {
    setSelectedCountry: (state, action) => {
      state.selectedCountry = action.payload;
    },
    setPhoneNumber: (state, action) => {
      state.phoneNumber = action.payload;
    },
  },
});

export const { setSelectedCountry, setPhoneNumber } =
  selectCountrySlice.actions; //For component

export default selectCountrySlice.reducer; //For store
