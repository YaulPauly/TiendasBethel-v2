import React, { Component } from 'react';
import './App.css';
import Calidad from './Components/Calidad';
import Footer from './Components/Footer';
import Galeria from './Components/Galeria';
import Header from './Components/Header';
import ProductsHome from './Components/ProductsHome';


class App extends Component {
  render() {
    return (
      <div className="App">
          <Header/>
          <Calidad/>
          <ProductsHome/>
          <Galeria/>
          <Footer/>
      </div>
    );
  }
}

export default App;
