import React from 'react';
import './App.scss';
import Logo from './shopify-logo.svg';
import Search from './Components/Search';

const App = () => {
  return (
    <div className="app">
      <img className="logo" src={Logo} alt="Shopify logo"></img> 
      <h1>The 2021 Shoppies</h1>
      <Search />
      <p className="thanks">Made by Ken Taylor for the Shopify Dev Team</p>
    </div>
  );
}

export default App;
