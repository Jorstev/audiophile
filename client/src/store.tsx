import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./features/productDetails/productSlice";

const store = configureStore({
  reducer: {
    // your reducers here
    product: productSlice,
  },
});

export default store;
