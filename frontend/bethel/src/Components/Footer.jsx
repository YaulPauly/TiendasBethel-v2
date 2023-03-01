import React from "react";
import styles from "./footer.module.css";
import { FaFacebookSquare, FaInstagramSquare, FaWhatsappSquare, FaPhoneSquareAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.contenedor_footer}>
        <div className={styles.contenedor_footer_elements}>
            <div className={styles.contenedor_footer_logo}>
                <img className={styles.footer_logo} src="./logo-footer.png" alt="" />
                <span className={styles.footer_contenido}>
                    Producción, distribución y comercialización de muebles de melamina.
                </span>
            </div>
            <div className={styles.contenedor_footer_direccion}>
                <h3 className={styles.footer_title}>DIRECCIÓN</h3>
                <span className={styles.footer_contenido}>Jr. Ramon Castilla 1558 - Juliaca Perú</span>
            </div>
            <div className={styles.contenedor_footer_contacto}>
                <h3 className={styles.footer_title}>CONTÁCTANOS</h3>
                <span className={styles.footer_contenido}>
                    tel. +51 944 426 274 <br/>
                    tel. +51 944 460 025 <br/>
                    ventas@tiendasbethel.com.pe
                </span>
            </div>
            <div className={styles.contenedor_footer_redes}>
                <h3 className={styles.footer_title}>SÍGUENOS</h3>
                <div className={styles.footer_contenido}>
                    <a href=""><FaFacebookSquare className={styles.footer_contenido_social} /></a>
                    <a href=""><FaInstagramSquare className={styles.footer_contenido_social}/></a>
                    <a href=""><FaWhatsappSquare className={styles.footer_contenido_social} /></a>
                    <a href=""><FaPhoneSquareAlt className={styles.footer_contenido_social} /></a>
                </div>
            </div>
        </div>
        <div className={styles.linea}></div>
        <div className={styles.contenedor_footer_tags}>
            <span>
            Tags: Muebles | Muebles De Melamina | Juliaca | Perú | Muebles En
            Juliaca | Mueblería | Web | Muebles Económicos | Venta De
            MueblesTienda de Muebles | Fabrica de Muebles | Producción de Muebles
            | Mueblería en Juliaca | Muebles Juliaca.
            </span>
        </div>
    </footer>
  );
};

export default Footer;
