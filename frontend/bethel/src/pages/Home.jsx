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
        <Header />
        <Slyder />
        <Calidad />
        <ProductsHome />
        <Galeria />
        <Footer />
    </div>
  );
};

export default Home;
