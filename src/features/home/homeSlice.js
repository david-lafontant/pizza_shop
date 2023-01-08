import { createSlice } from "@reduxjs/toolkit";
import pizzas from "../../assets/data/pizzas";

const initialState = {
  pizzaItems: pizzas,
  amount: 0,
  isLoading: true,
}


const homeSlice = createSlice({
  name: 'home',
  initialState
})

// console.log(homeSlice.reducer);
export default homeSlice.reducer;