import { createSlice } from "@reduxjs/toolkit";
import pizzas from "../../assets/data/pizzas";

const initialState = {
  pizzaItems: pizzas,
  number: 0,
  grandTotal: 0,
  isLoading: true,
}

const calcGranTotal = (state) => {
  state.grandTotal = 0;
  state.pizzaItems.forEach((item)=>{   
  state.grandTotal += item.total
  })
}




const homeSlice = createSlice({
  name: 'home',
  initialState,

  reducers: {
    addToCart: (state, { payload }) => {
      const pizzaItem = state.pizzaItems.find((item) => item.id === payload);
      pizzaItem.isInCart = true;
      pizzaItem.quantity = 1;
      pizzaItem.total = pizzaItem.price;
      state.number += 1;
      calcGranTotal(state)

    },
    removeFromCart: (state, {payload}) =>{
      const pizzaItem = state.pizzaItems.find((item) => item.id === payload);
      pizzaItem.isInCart = false;
      pizzaItem.quantity = 0;
      pizzaItem.total = 0;
      state.number -= 1;
      calcGranTotal(state)
    },
    incrementQuantity: (state, { payload }) => {
      const pizzaItem = state.pizzaItems.find((item) => item.id === payload);
      pizzaItem.quantity += 1;
      pizzaItem.total = pizzaItem.quantity*pizzaItem.price
      state.number += 1;
      calcGranTotal(state)
    },
    decrementQuantity: (state, { payload }) => {
      const pizzaItem = state.pizzaItems.find((item) => item.id === payload);
      if(pizzaItem.quantity>0 ){

      pizzaItem.quantity -= 1;
      pizzaItem.total = pizzaItem.quantity*pizzaItem.price
      state.number -= 1;
      calcGranTotal(state)}
    },
    removeAllFromCart: (state) => {
      state.pizzaItems.forEach((item)=> {
        item.isInCart = false;
        item.quantity = 0;
        pizzaItem.quantity = 0;
      })
      state.number = 0;
      calcGranTotal(state)
    
    },
    

  }

})

// console.log(homeSlice.reducer);
export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity, removeAllFromCart } = homeSlice.actions;
export default homeSlice.reducer;