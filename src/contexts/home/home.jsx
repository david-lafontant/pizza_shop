import React from 'react';
import Pizza from '../../components/pizza/Pizza';
import { useSelector } from 'react-redux';

const Home = () => {
  const pizzas = useSelector((store) => store.home.pizzaItems);
  const myStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3 ,200px)',
    gridTemplateRows: 'auto',
    gap: '2rem'
  }

  return (
    <section>
      <div style={myStyle}>
        {pizzas.length > 0 ? pizzas.map((pizza) => <Pizza key={pizza.id} pizza={pizza} />) : <h2>No Pizza for today</h2>}
      </div>
    </section>

  )
}

export default Home;