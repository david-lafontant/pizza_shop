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
      pizzaItem.isInCart = true;
    },
    removeFromCart: (state, {payload}) =>{
      const pizzaItem = state.pizzaItems.find((item) => item.id === payload);
      pizzaItem.isInCart = false;
    }
  }

})

// console.log(homeSlice.reducer);
export const { addToCart, removeFromCart } = homeSlice.actions;
export default homeSlice.reducer;