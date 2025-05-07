import { createSlice, PayloadAction } from "@reduxjs/toolkit";
type CounterState = {
  value: number;
};
const myInitialState: CounterState = {
  value: 0,
};
const counterSlice = createSlice({
  name: "counter",
  initialState: myInitialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});
export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
