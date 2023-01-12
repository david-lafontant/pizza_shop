import React from 'react'
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../../features/home/homeSlice';

const Pizza = (props) => {
  const dispatch = useDispatch()

  const cardStyle = {border: 'thin solid black', display: 'flex', flexDirection: 'column', gap: '1rem', padding:'1rem', width: 'max-content', boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'}
  

  return (
    <article style={cardStyle}>

    <img src={props.pizza.image} alt={props.pizza.name} style={{width: '100px', height: '100px'}} />
    <p>{props.pizza.name}</p>
    <p>{props.pizza.price}</p>
    {!props.pizza.isInCart?  <button type="button" onClick={()=>dispatch(addToCart(props.pizza.id))}>Add to cart</button> :  <button type="button" onClick={()=>dispatch(removeFromCart(props.pizza.id))}>Remove From Cart</button>}
   
   
    </article>
  )
}

Pizza.propTypes = {
  pizza: PropTypes.shape({
    id: PropTypes.number,
    price: PropTypes.number,
    image: PropTypes.string,
    name: PropTypes.string,
    isInCart: PropTypes.bool,
  })
}

export default Pizza;