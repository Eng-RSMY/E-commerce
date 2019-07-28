import React from 'react';
import './App.css';
import NavBar from './navBar/navBar';
import Products from './components/Products';
import { BrowserRouter, Route, Switch }from 'react-router-dom'
import Cart from './components/Cart'
import ProductDetail from './components/ProductDetail';

function App() {
  // console.log(Productss)
  return (
    <div className="App">
    <BrowserRouter>
    <NavBar />
    <Switch>
      <Route exact path='/' component={Products} />
      <Route path='/cart' component={Cart} />
      <Route path='/details' component={ProductDetail} />
    </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
