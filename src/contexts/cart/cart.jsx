import React from 'react';
import { useSelector } from 'react-redux';
import CartData from '../../components/CartData/CartData';

const Cart = () => {
  const cartPizzas = useSelector((store) => store.home.pizzaItems);
  const list = [];

  if (cartPizzas.length > 0) {
    cartPizzas.forEach(item => {
      if (item.isInCart === true) {
        list.push(item);
      }
    })
  }

  const myStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
    padding: '2rem'
  };

  const cart_card = {
    display: 'flex',
    width: 'max-content',
  }

  return (
    <section>
      <div style={myStyle}>
      {list.map(pizza => <CartData key={pizza.name} pizza={pizza} /> )}
       
      </div>
    </section>);
}

export default Cart;