import React from "react";
import styles from "./slyder.module.css"

const Slyder = ({image = "./home-1.jpg"}) => {
  return (
    <div className={styles.contenedor_slyder}>
      <img className={styles.img_slyder} src={image} alt="" />
    </div>
  );
};

export default Slyder;
