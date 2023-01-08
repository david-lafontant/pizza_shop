import React from 'react';
import Pizza from '../../components/pizza/PIzza';
import { useSelector } from 'react-redux';

const Home = () => {
  const pizzas = useSelector((store) => store.home.pizzaItems);

  return (
    <div>Home
    {pizzas.length > 0? pizzas.map((pizza)=> <Pizza key={pizza.id} pizza={pizza} />): <h2>No Pizza for today</h2>}
  </div>
  )
}

export default Home;