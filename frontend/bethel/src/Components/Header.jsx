import React, { useState } from "react";
import styles from "./header.module.css";
import { FaBars } from "react-icons/fa";

const Header = ({logo = "/bethel_logo.png", color_menu="white"}) => {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };


  return (
    <>
      <header className={styles.header}>
        <div className={styles.contenedor_logo}>
          <img className={styles.logo} src={logo} alt="Tiendas Bethel" />
        </div>
        <button className={styles.icon_phone} onClick={toggleMenu}>
          <FaBars />
        </button>
        <nav
          className={styles.contenedor_menu}
        >
          <ul className={styles.contenedor_menu__elementos}>
            <li className={styles.menu__elemento} style={{color: color_menu}}>HOME</li>
            <li className={styles.menu__elemento} style={{color: color_menu}}>NOSOTROS</li>
            <li className={styles.menu__elemento} style={{color: color_menu}}>PRODUCTOS</li>
            <li className={styles.menu__elemento} style={{color: color_menu}}>SERVICIOS</li>
            <li className={styles.menu__elemento} style={{color: color_menu}}>PORTAFOLIO</li>
            <li className={styles.menu__elemento} style={{color: color_menu}}>CONTÁCTANOS</li>
          </ul>
        </nav>
      </header>
      <div className={styles.contenedor_menu_desplegagle}>
        <nav
          className={styles.contenedor_menu + `${menu ? styles.isActive : ""}`}
        >
          <ul className={styles.contenedor_menu__elementos}>
            <li className={styles.menu__elemento}>HOME</li>
            <li className={styles.menu__elemento}>NOSOTROS</li>
            <li className={styles.menu__elemento}>PRODUCTOS</li>
            <li className={styles.menu__elemento}>SERVICIOS</li>
            <li className={styles.menu__elemento}>PORTAFOLIO</li>
            <li className={styles.menu__elemento}>CONTÁCTANOS</li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
