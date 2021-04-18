import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css'
import Header from './components/header/Header';
import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shop/Shop.jsx';

function App() {
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
