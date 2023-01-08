import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pizzaItems: [],
  amount: 0,
  isLoading: true,
}


const homeSlice = createSlice({
  name: 'home',
  initialState
})

// console.log(homeSlice.reducer);
export default homeSlice.reducer;