import React from 'react';
import { useSelector } from 'react-redux';
import Pizza from '../../components/pizza/Pizza';

const Cart = () => {
  const cartPizzas = useSelector((store) => store.home.pizzaItems);
  const list = [];

  if(cartPizzas.length > 0){
    cartPizzas.forEach(item => {
      if(item.isIncart === true){
        list.push(item);
      }
    })
  }

  const myStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3 ,200px)',
    gridTemplateRows: 'auto',
    gap: '2rem'
  };

  return (
    <section>
      <div style={myStyle}>
        {list.map((pizza) => <Pizza key={pizza.id} pizza={pizza} />)}
      </div>
    </section>);
}

export default Cart;