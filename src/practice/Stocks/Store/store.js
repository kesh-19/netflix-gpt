import { configureStore } from "@reduxjs/toolkit";
import myFundsReducer from "./myFundsSlice";
import myStocksReducer from "./myStocksSlice";

export default configureStore({
  reducer: {
    myFunds: myFundsReducer,
    myStocks: myStocksReducer,
  },
});
