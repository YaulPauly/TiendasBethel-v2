import React   from "react";
import Calidad from "../Components/Calidad";
import Footer from "../Components/Footer";
import Galeria from "../Components/Galeria";
import Header from "../Components/Header";
import ProductsHome from "../Components/ProductsHome";
import Slyder from "../Components/Slyder";

const Home = () => {
  return (
    <div>
        <Header logo="/bethel_logo.png" color_menu="black"/>
        <Slyder image="/home-1.jpg"/>
        <Calidad />
        <ProductsHome />
        <Galeria />
        <Footer />
    </div>
  );
};

export default Home;
