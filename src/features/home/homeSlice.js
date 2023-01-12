import { createSlice } from "@reduxjs/toolkit";
import pizzas from "../../assets/data/pizzas";

const initialState = {
  pizzaItems: pizzas,
  number: 0,
  grandTotal: 0,
  isLoading: true,
}

const homeSlice = createSlice({
  name: 'home',
  initialState,

  reducers: {
    addToCart: (state, { payload }) => {
      const pizzaItem = state.pizzaItems.find((item) => item.id === payload);
      pizzaItem.isInCart = true;
      pizzaItem.quantity = 1
      state.number += 1;
    },
    removeFromCart: (state, {payload}) =>{
      const pizzaItem = state.pizzaItems.find((item) => item.id === payload);
      pizzaItem.isInCart = false;
      pizzaItem.quantity = 0
      state.number -= 1;
    },
    incrementQuantity: (state, { payload }) => {
      const pizzaItem = state.pizzaItems.find((item) => item.id === payload);
      pizzaItem.quantity += 1;
      state.number += 1;
    },
    decrementQuantity: (state, { payload }) => {
      const pizzaItem = state.pizzaItems.find((item) => item.id === payload);
      if(pizzaItem.quantity>0 )pizzaItem.quantity -= 1;
      state.number -= 1;
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