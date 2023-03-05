import React from "react";
import styles from "./about.module.css";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Slyder from "../Components/Slyder";

const About = () => {
  return (
    <div className={styles.contenedor_about}>
      <Header />
      <Slyder image="./nosotros_portada.jpg" />
      <div className={styles.contenedor_nosotros}>
        <div className={styles.contenedor_nosotros_left}>
          <img
            className={styles.contenedor_nosotros_img}
            src="./nosotros_img.png"
            alt=""
          />
        </div>
        <div className={styles.contenedor_nosotros_right}>
          <div className={styles.contenedor_nosotros_title}>
            <h2>Nosotros</h2>
          </div>
          <div className={styles.contenedor_nosotros_description}>
            <p className={styles.nosotros_description}>
              Somos una empresa Peruana especializada en Fabricación de Muebles
              de melamina, conformada en Juliaca - Puno, desde el 01 de
              diciembre del 2009.
            </p>
            <p className={styles.nosotros_description}>
              Desde entonces somos lideres en el mercado local. Contamos con un
              equipo altamente calificado para la fabricación de muebles de
              Melamina por serie, para distribución interprovincial mayorista en
              todo el Perú.
            </p>
            <p className={styles.nosotros_description}>
              Pero tambien contamos con un segmento de muebles exclusivos e
              imnovadores dirigido para ventas al público.
            </p>
            <p className={styles.nosotros_description}>
              En la actualidad trabajamos con clientes mayoristas en las
              localidades de Puno, Cusco, Arequipa, Moquegua. Fabricamos y
              vendemos muebles para Cocinas, Baños, Dormitorios, Salones entre
              otros, como también disponemos de una gran variedad de calidades,
              formatos, modelos, diseños y colores para satisfacer todos los
              deseos y presupuestos para todo tipo de público.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.contenedor_bethel}>
        <div className={styles.contenedor_bethel_title}>
          <h1>TIENDAS BETHEL</h1>
        </div>
        <div className={styles.contenedor_mision_vision}>
          <div className={styles.mision_vision}>
            <h2 className={styles.mision_vision_title}>MISIÓN</h2>
            <p className={styles.mision_vision_description}>
              Somos una empresa Peruana especializada en Fabricación de Muebles
              de melamina, conformada en Juliaca - Puno, desde el 01 de
              diciembre del 2009. Desde entonces somos lideres en el mercado
              local. Contamos con un equipo altamente calificado para la
              fabricación de muebles de Melamina por serie, para distribución
              interprovincial mayorista en todo el Perú. Pero tambien contamos
              con un segmento de muebles exclusivos e imnovadores dirigido para
              ventas al público. En la actualidad trabajamos con clientes
              mayoristas en las localidades de Puno, Cusco, Arequipa, Moquegua.
              Fabricamos y vendemos muebles para Cocinas, Baños, Dormitorios,
              Salones entre otros, como también disponemos de una gran variedad
              de calidades, formatos, modelos, diseños y colores para satisfacer
              todos los deseos y presupuestos para todo tipo de público.
            </p>
          </div>
          <div className={styles.mision_vision}>
            <h2 className={styles.mision_vision_title}>VISIÓN</h2>
            <p className={styles.mision_vision_description}>
              Somos una empresa Peruana especializada en Fabricación de Muebles
              de melamina, conformada en Juliaca - Puno, desde el 01 de
              diciembre del 2009. Desde entonces somos lideres en el mercado
              local. Contamos con un equipo altamente calificado para la
              fabricación de muebles de Melamina por serie, para distribución
              interprovincial mayorista en todo el Perú. Pero tambien contamos
              con un segmento de muebles exclusivos e imnovadores dirigido para
              ventas al público. En la actualidad trabajamos con clientes
              mayoristas en las localidades de Puno, Cusco, Arequipa, Moquegua.
              Fabricamos y vendemos muebles para Cocinas, Baños, Dormitorios,
              Salones entre otros, como también disponemos de una gran variedad
              de calidades, formatos, modelos, diseños y colores para satisfacer
              todos los deseos y presupuestos para todo tipo de público.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
