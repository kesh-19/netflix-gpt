import { createSlice } from "@reduxjs/toolkit";

const myStocksSlice = createSlice({
  name: "myStocksSlice",
  initialState: {},
  reducers: {
    buyStocks: (state, action) => {
      if (action.payload.company in state) {
        state[action.payload.company].quantity += action.payload.quantity;
      } else {
        state[action.payload.company] = action.payload;
      }
    },
    sellStocks: (state, action) => {
      const newQuantity =
        state[action.payload.company].quantity - action.payload.quantity;
      if (newQuantity > 0) {
        state[action.payload.company].quantity = newQuantity;
      } else {
        delete state[action.payload.company];
      }
    },
  },
});
export const { buyStocks, sellStocks } = myStocksSlice.actions;
export default myStocksSlice.reducer;
