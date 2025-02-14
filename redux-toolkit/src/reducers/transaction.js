import { createSlice } from "@reduxjs/toolkit";

const transactionSlice = createSlice({
  name: "transaction",
  initialState: {
    balance: 0,
  },
  reducers: {
    deposit: (state) => {
      // Handling an action
      state.balance = state.balance + 10;
    },
    withdraw: (state) => {
      if (!(state.balance < 9)) {
        state.balance = state.balance - 9;
      }
    },
  },
});

export const { deposit, withdraw } = transactionSlice.actions;

export const depositAsync = () => (dispatch) => {
  setTimeout(() => {
    dispatch(deposit());
  }, 2000);
};

export default transactionSlice.reducer;
