import React from 'react'
import styles from "./calidad.module.css"
import "@fontsource/montserrat";

const Calidad = () => {
  return (
    <div className={styles.contenedor_calidad}>
        <div className={styles.contenedor_calidad__title}>
            <h2>NUESTRO COMPROMISO</h2>
        </div>
        <div className={styles.contenedor_elementos_calidad}>
            <div className={styles.elemento_calidad}>
                <img src="/calidad-1.png" alt="" />
                <span className={styles.elemento_calidad_description}>Garantía en todos nuestros productos</span>
            </div>
            <div className={styles.elemento_calidad}>
                <img src="/calidad-2.png" alt="" />
                <span className={styles.elemento_calidad_description}>Mejores precios del mercado</span>
            </div>
            <div className={styles.elemento_calidad}>
                <img src="/calidad-3.png" alt="" />
                <span className={styles.elemento_calidad_description}>Servicio de nuestros expertos asesores</span>
            </div>
        </div>
    </div>
  )
}

export default Calidad;