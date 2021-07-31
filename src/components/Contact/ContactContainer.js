import React from 'react';
import { makeStyles } from '@material-ui/core';
import { ContactStyle } from './ContactStyle.js';
import imgMap from './../../assets/img/contact/ImgMap.png'
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import PhoneIcon from '@material-ui/icons/Phone';
import ScheduleIcon from '@material-ui/icons/Schedule';

const useStyles = makeStyles((theme) => ContactStyle(theme));

export const ContactContainer= () => {

    const classes = useStyles();

    return <section>
        <div className={classes.contactContainer}>
            <div className={classes.map}>
                <img src={imgMap} alt="Imagen ubicación"></img>
            </div>
            <div className={classes.follow}>
                <h2>¡Encontranos por aca!</h2>
                <div className={classes.icons}>
                    <InstagramIcon fontSize='large'/>
                    <FacebookIcon fontSize='large'/>
                </div>   
                <div className={classes.info}>
                    <div>
                        <ScheduleIcon />
                        <h4>Horarios de Atencion</h4>
                        <h5>Martes a Viernes de 10:00 a 20:00</h5>
                        <h5>Sabados de 09:00 a 20:00</h5>
                        <h5>Domingos de 09:00 a 13:00</h5>
                    </div>
                    <div>
                        <PhoneIcon />
                        <h4>Pedidos y Envios</h4>
                        <h5>11332255</h5>
                        <h5>contacto@e-commerce.com</h5>
                    </div>  
                </div>  
            </div>
        </div>
    </section>
};

