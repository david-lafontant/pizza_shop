import React from 'react';
import { useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
const Header = () => {
  const amount = useSelector((store) => store.home.amount)
  const myStyle = {
    width: '100%',
    height: '10vh',
    backgroundColor: '#b22222',
    color: '#fff',
    padding: '1.1rem',
  }
  
  const navStyle = {
    display: 'flex',
    gap: '1.5rem',
    listStyleType: 'none',
  }

  return (
    <header style={myStyle}>
      <h2 style={{ textAlign: 'center', fontSize: '2rem'}}>Welcome to my Pizza Shop</h2>
      <p style={{ textAlign: 'center', fontSize: '1.5rem'}}>Your cart contains <span>{amount}</span> Pizzas</p>
    <nav>
      <ul style={navStyle}>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/cart'>Cart</Link>
        </li>
      </ul>
    </nav>
    
    </header>
  )
}

export default Header;