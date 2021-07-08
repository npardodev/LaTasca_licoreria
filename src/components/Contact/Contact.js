import React from 'react';
import { makeStyles } from '@material-ui/core';
import {ContactStyle} from './ContactStyle.js';


const useStyles = makeStyles((theme) => ContactStyle(theme));

export const Footer = () => {

    const classes = useStyles();

    return <>
            
        </>
}

