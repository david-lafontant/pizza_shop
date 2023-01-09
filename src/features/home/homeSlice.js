import { createSlice } from "@reduxjs/toolkit";
import pizzas from "../../assets/data/pizzas";

const initialState = {
  pizzaItems: pizzas,
  quantity: 0,
  isLoading: true,
}

const homeSlice = createSlice({
  name: 'home',
  initialState,

  reducers: {
    addToCart: (state, { payload }) => {
      const pizzaItem = state.pizzaItems.find((item) => item.id === payload);
      pizzaItem.isIncart = true;
    }
  }

})

// console.log(homeSlice.reducer);
export const { addToCart } = homeSlice.actions;
export default homeSlice.reducer;