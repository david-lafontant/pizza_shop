import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/header/Header";
import Home from "./contexts/home/home";
import Cart from './contexts/cart/cart';

function App() {

  return (
    <Router>
      <main className="App">
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/cart' element={<Cart />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
