import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { PlusIcon, MinusIcon, TrashIcon } from '../icons/Icons';
import { removeFromCart, incrementQuantity, decrementQuantity } from '../../features/home/homeSlice'
import { formatMoney } from '../../modules/format'
// import { PlusIcon, MinusIcon, TrashIcon } from '../icons/Icons'



const CartData = ({ pizza }) => {
  const dispatch = useDispatch();

  const myButton = {
    width: '25px',
    height: '25px',
    border: '1px solid #999999',
    borderRadius: '50%'
  }

  return (
    
     <div className="card">
    <div className="card-header">
      <img src={pizza.image} alt="pizza.name" />
    </div>
    <div className="card-body">
      <span className="tag tag-purple">{pizza.price}</span>
      <h4>
        {pizza.name}
      </h4>
      <h4>Total {formatMoney(pizza.total)}</h4>
      <button className="cart-btn" type="button" 
        onClick={()=>dispatch(removeFromCart(pizza.id)) 
      }>
        <TrashIcon />
      </button>
      <div className="pizza-number">
        <div className="user-data">
        <button className="cart-btn" type="button" onClick={()=> dispatch(incrementQuantity(pizza.id))}>
          <PlusIcon />
        </button>
          <h5>{pizza.quantity}</h5>
          <button className="cart-btn" type="button" onClick={()=> dispatch(decrementQuantity(pizza.id))}>
          <MinusIcon />
        </button>
        </div>
      </div>
    </div>
  </div>


  );
}

CartData.propTypes = {
  pizza: PropTypes.shape({
    id: PropTypes.number,
    price: PropTypes.number,
    image: PropTypes.string,
    name: PropTypes.string,
    isInCart: PropTypes.bool,
  })
}

export default CartData