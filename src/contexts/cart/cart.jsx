import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartData from '../../components/CartData/CartData';
import { removeAllFromCart } from '../../features/home/homeSlice';
import { formatMoney } from '../../modules/format';

const Cart = () => {
  const dispatch = useDispatch();
  const cartPizzas = useSelector((store) => store.home.pizzaItems);
  const grandTotal = useSelector((store) => store.home.grandTotal)
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
        {list.map(pizza => <CartData key={pizza.name} pizza={pizza} />)}

      </div>
      <div>
        <p>Total price {formatMoney(grandTotal)}</p>
      </div>
      <div>
        <button type="button" onClick={() => dispatch(removeAllFromCart())}>
          Clear Cart
        </button>
      </div>
    </section>);
}

export default Cart;