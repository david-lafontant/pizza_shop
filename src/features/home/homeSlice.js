import { createSlice } from "@reduxjs/toolkit";
import pizzas from "../../assets/data/pizzas";

const initialState = {
  pizzaItems: pizzas,
  number: 0,
  total: 0,
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
    },
    incrementQuantity: (state, { payload }) => {
      const pizzaItem = state.pizzaItems.find((item) => item.id === payload);
      pizzaItem.quantity += 1;
    },
    decrementQuantity: (state, { payload }) => {
      const pizzaItem = state.pizzaItems.find((item) => item.id === payload);
      pizzaItem.quantity -= 1;
    },
    removeAllFromCart: (state) => {
      state.pizzaItems.forEach((item)=> {
        item.isInCart = false;
        item.quantity = 0;
      })
      state.number = 0;
    }

  }

})

// console.log(homeSlice.reducer);
export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity, removeAllFromCart } = homeSlice.actions;
export default homeSlice.reducer;