import React from 'react'
import styles from "./header.module.css"
import "@fontsource/montserrat";

const Header = () => {
  return (
    <header className={styles.header}>
        <div className={styles.contenedor_logo}>
            <img  className={styles.logo} src="/bethel_logo.png" alt="" />
        </div>
        <div className={styles.contenedor_menu}>
            <ul className={styles.contenedor_menu__elementos}>
                <li className={styles.menu__elemento}>HOME</li>
                <li className={styles.menu__elemento}>NOSOTROS</li>
                <li className={styles.menu__elemento}>PRODUCTOS</li>
                <li className={styles.menu__elemento}>SERVICIOS</li>
                <li className={styles.menu__elemento}>PORTAFOLIO</li>
                <li className={styles.menu__elemento}>CONTÁCTANOS</li>
            </ul>
        </div>
    </header>
  )
}

export default Header;
