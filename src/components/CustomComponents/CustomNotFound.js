import React, { useEffect, useState } from 'react';
import Select from '@material-ui/core/Select/Select';
import MenuItem from '@material-ui/core/MenuItem/MenuItem';
import { useParams, Link, useHistory, useLocation} from 'react-router-dom';
import {CommonComponent} from './../CommonComponents/CommonComponent.js'
import imgNotFound from '../../assets/img/notFound.jpeg'

export const CustomNotFound = (props) => {
    
    const history = useHistory();

    const BackToHome = () =>{
        history.push(`/`);
    }

    return (
        <>
            <CommonComponent 
                title='Ups!'
                subtitle='Página no Encontrada ...'
                image= {imgNotFound}
                alt='Eror 404 - Página no encontrada'
                buttonLabel='Volver' 
                action= {BackToHome}
            />
        </>

    )
}


