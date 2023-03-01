import React from "react";
import styles from "./galeria.module.css"

const Galeria = () => {
  return (
    <div className={styles.contenedor_galeria}>
      <img className={styles.galeria_img} src="./galeria-1.jpg" alt="" />
      <img className={styles.galeria_img} src="./galeria-2.jpg" alt="" />
      <img className={styles.galeria_img} src="./galeria-3.jpg" alt="" />
      <img className={styles.galeria_img} src="./galeria-4.jpg" alt="" />
      <img className={styles.galeria_img} src="./galeria-5.jpg" alt="" />
      <img className={styles.galeria_img} src="./galeria-6.jpg" alt="" />
    </div>
  );
};

export default Galeria;
