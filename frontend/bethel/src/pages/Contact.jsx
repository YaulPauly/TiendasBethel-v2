import React from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Slyder from "../Components/Slyder";
import Iframe from 'react-iframe'

const Contact = () => {
    document.cookie = "myCookie=value; SameSite=strict"; 
    return (
        <div>
        <Header />
        <Slyder image="./portada_contactanos.jpg" />
        <div>
            <div>
            <h2>Formulario de Contacto</h2>
            <span>Escribenos y en breve nos podremos en contacto contigo</span>
            </div>
            <div>
            <div>
                <form action="">
                    
                </form>
            </div>
            <div>
                <Iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d30759.93107169163!2d-70.1312691679544!3d-15.484895628641004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2spe!4v1669871325688!5m2!1ses-419!2spe"
                width="600"
                height="450"
                style="border:0;"
                allowfullscreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                />
            </div>
            </div>
        </div>
        <Footer />
        </div>
  );
};

export default Contact;
