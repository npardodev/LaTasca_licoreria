import React from 'react';
import { makeStyles } from '@material-ui/core';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import MailOutlinedIcon from '@material-ui/icons/MailOutlined';
import {FooterStyle} from './FooterStyle.js';
import { commonStyles } from './../../styles/commonStyles.js';
import PhoneIcon from '@material-ui/icons/Phone';
import ScheduleIcon from '@material-ui/icons/Schedule';
import PeopleIcon from '@material-ui/icons/People';
import logoFooter from '../../assets/img/IconosFooter/logoFooter.png'
import imgPayments from '../../assets/img/pagos/payments.png'

const useStyles = makeStyles((theme) => FooterStyle(theme));

export const Footer = () => {

    const classes = useStyles();

    return (<>
                <div>
                    <div className={classes.footerPayment}>
                        <img src={imgPayments} alt="Métodos de pago"></img>
                    </div>
                    <footer className={classes.footer}>
                        <div className={classes.footerColumns} >
                            <div>
                                <ScheduleIcon style={{ color: commonStyles.tercery.main }}/>
                                <h4>Horarios de Atencion</h4>
                                <h5>Martes a Viernes de 10:00 a 20:00</h5>
                                <h5>Sabados de 09:00 a 20:00</h5>
                                <h5>Domingos de 09:00 a 13:00</h5>
                            </div>
                            <div>
                            <PhoneIcon style={{ color: commonStyles.tercery.main }}/>
                            <h4>Pedidos y Envios</h4>
                                <h5>11332255</h5>
                                <h5>contacto@e-commerce.com</h5>
                            </div>
                            <div>
                                <PeopleIcon style={{ color: commonStyles.tercery.main }}/>
                                <h4 >Seguinos</h4>
                                <div className={classes.socialIcons} >
                                    <InstagramIcon style={{ color: commonStyles.tercery.main }} />
                                    <FacebookIcon style={{ color: commonStyles.tercery.main }} />  
                                    <MailOutlinedIcon style={{ color: commonStyles.tercery.main }}  /> 
                                </div>                         
                                <h5>@licorerialatasca</h5>
                            </div>
                            <div>
                                <div className={classes.footerLogo}>
                                    <img src={logoFooter} alt="imagen Logo"/>
                                </div>
                                <h1 >LA TASCA</h1>
                                <h2 >Licoreria</h2>
                            </div>
                        </div>
                    </footer>
                </div>
            </>)
}

