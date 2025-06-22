import { createSlice } from "@reduxjs/toolkit";

const myFundsSlice = createSlice({
  name: "myFundsSlice",
  initialState: {
    value: 10000,
  },
  reducers: {
    increaseFunds: (state, action) => {
      state.value += action.payload;
    },
    decreaseFunds: (state, action) => {
      state.value -= action.payload;
    },
  },
});
export const { increaseFunds, decreaseFunds } = myFundsSlice.actions;
export default myFundsSlice.reducer;
