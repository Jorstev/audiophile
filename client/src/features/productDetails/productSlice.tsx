import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    increment: (state) => {
      state.counter += 1;
    },
    decrement: (state) => {
      if (state.counter > 0) {
        state.counter -= 1;
      }
    },
    reset: (state) => {
      state.counter = 0;
    },
  },
});

export const { increment, decrement, reset } = productSlice.actions;
export default productSlice.reducer;
