import React from 'react'

const Header = () => {
  const myStyle = {
    width: '100%',
    height: '10vh',
    backgroundColor: '#b22222',
    color: '#fff',
    padding: '1.1rem',
  }
  return (
    <header style={myStyle}>
      <h2 style={{ textAlign: 'center', fontSize: '2rem'}}>Welcome to my Pizza Shop</h2>
    </header>
  )
}

export default Header;