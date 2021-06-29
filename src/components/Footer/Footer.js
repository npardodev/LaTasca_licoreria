import React from 'react';
import {Container, Box} from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import MailOutlinedIcon from '@material-ui/icons/MailOutlined';
import {FooterStyle} from './FooterStyle.js';
import { commonStyles } from './../../styles/commonStyles.js';
import { Icon } from '@iconify/react';
import mastercardIcon from '@iconify-icons/simple-icons/mastercard';
import visaIcon from '@iconify-icons/simple-icons/visa';
import PhoneIcon from '@material-ui/icons/Phone';
import ScheduleIcon from '@material-ui/icons/Schedule';
import PeopleIcon from '@material-ui/icons/People';

const useStyles = makeStyles((theme) => FooterStyle(theme));

export const Footer = () => {

    const classes = useStyles();

    return (<>
            <footer>
                <Container className={classes.footer} >
                    <div className={classes.footerColumns} >
                        <div p={1} >
                            <ScheduleIcon style={{ color: commonStyles.tercery.main }}/>
                            <h4>Horarios de Atencion</h4>
                            <h5>Martes a Viernes de 10:00 a 20:00</h5>
                            <h5>Sabados de 09:00 a 20:00</h5>
                            <h5>Domingos de 09:00 a 13:00</h5>
                        </div>
                        <div p={1} >
                        <PhoneIcon style={{ color: commonStyles.tercery.main }}/>
                        <h4>Pedidos y Envios</h4>
                            <h5>11332255</h5>
                            <h5>contacto@e-commerce.com</h5>
                        </div>
                        <div p={1} m={6}>
                            <PeopleIcon style={{ color: commonStyles.tercery.main }}/>
                            <h4 >Seguinos</h4>
                            <div>
                                <InstagramIcon color={commonStyles.primary.main} />
                                <FacebookIcon color={commonStyles.primary.main} />  
                                <MailOutlinedIcon color={commonStyles.primary.main} /> 
                            </div>                         
                            <h5>@licorerialatasca</h5>
                        </div>
                        <div p={1} m={6}>
                            <div className={classes.footerLogo}>
                                <img src="./img/logo.svg" alt="imagen Logo"/>
                            </div>
                            <h1 >LA TASCA</h1>
                            <h2 >Licoreria</h2>
                        </div>
                    </div>
                    <Box textAlign="center">
                        <Icon icon={visaIcon} />
                        <Icon icon={mastercardIcon} />
                    </Box>
                </Container>
            </footer>
            </>)
}

