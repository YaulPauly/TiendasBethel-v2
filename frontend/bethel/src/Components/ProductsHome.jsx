import React from 'react'
import styles from "./productshome.module.css"

const ProductsHome = () => {
  return (
    <div className={styles.contenedor_products}>
        <div className={styles.contenedor_products_title}>
            <h2>CONOCE NUESTROS PRODUCTOS</h2>
        </div>
        <div className={styles.contenedor_products_description}>
            <span>La marca Bethel está especializada en muebles  para tu y se hace destacas por su gigantesca calidad, sus diseños esteticos y sus cómodos precios.</span>
        </div>
        <div className={styles.contenedor_products_elements}>
            <div className={styles.contenedor_product_element}>
                <h3 className={styles.product_title}>ESTANTE 1.00</h3>
                <img className={styles.product_img} src="./ROPERO 4 CUERPOS 1.20.png" alt="" />
                <button className={styles.product_button}>COMPRAR</button>
            </div>
            <div className={styles.contenedor_product_element}>
                <h3 className={styles.product_title}>ESCRITORIO</h3>
                <img className={styles.product_img} src="./ESCRITORIO 1.00 MELAMINA.png" alt="" />
                <button className={styles.product_button}>COMPRAR</button>
            </div>
            <div className={styles.contenedor_product_element}>
                <h3 className={styles.product_title}>ESCRITORIO</h3>
                <img className={styles.product_img} src="./ESCRITORIO 1.00 MELAMINA.png" alt="" />
                <button className={styles.product_button}>COMPRAR</button>
            </div>
            <div className={styles.contenedor_product_element}>
                <h3 className={styles.product_title}>ROPERO</h3>
                <img className={styles.product_img} src="./ROPERO 4 CUERPOS 1.20.png" alt="" />
                <button className={styles.product_button}>COMPRAR</button>
            </div>
        </div>
        <div className={styles.contenedor_product_button}>
            <button className={styles.other_products_button}>VER PRODUCTOS</button>
        </div>
    </div>
  )
}

export default ProductsHome;