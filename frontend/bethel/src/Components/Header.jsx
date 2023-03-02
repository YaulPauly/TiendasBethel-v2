import React, { useState } from 'react'
import styles from "./header.module.css"
import "@fontsource/montserrat";
import {FaBars} from "react-icons/fa";

const Header = () => {

  const [menu, setMenu] = useState(false)
  const toggleMenu = () => {
    setMenu(!menu)
  }

  return (
    <header className={styles.header}>
        <div className={styles.contenedor_logo}>
            <img  className={styles.logo} src="/bethel_logo.png" alt="" />
        </div>
        <div>
          <button className={ styles.icon_phone}  onClick={toggleMenu} >
                  <FaBars/>
          </button>
          <nav className={styles.contenedor_menu  + `${menu ? styles.isActive : ""}`}>
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
    </header>
  )
}

export default Header;
