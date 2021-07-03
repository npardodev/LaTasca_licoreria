<<<<<<< HEAD
import React , { useState, useEffect } from 'react';
import { ItemDetailStyle } from './ItemDetailStyle.js'
import { makeStyles, CircularProgress} from '@material-ui/core';
import {Button, Typography, Chip} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

=======
import React from 'react';
import { ItemDetailStyle } from './ItemDetailStyle.js'
import { makeStyles, CircularProgress} from '@material-ui/core';
>>>>>>> 311f8389b5d8d56f86be9c84c710e73d0bf53a75
import { CustomSelectComponent } from './../CustomComponents/CustomSelectComponent.js'

let categories = [{name:'Opt1', value:'Opt1'},{name:'Opt2', value:'Opt2'},{name:'Opt3', value:'Opt3'}];

const useStyles = makeStyles ((theme) => ItemDetailStyle(theme));

export const ItemDetail = ({item}) => {

    const classes = useStyles();

    return (item.length === 0 ? (<CircularProgress color="primary" />) : (
        <section>
            <div className= {classes.productItem}>
                <div>
                    <img src={item.img.src} alt={item.img.alt}/>
                </div>
                <div className= {classes.productDetails}>
                    <h3>{item.title}</h3>
<<<<<<< HEAD
                    <h4 className= {classes.actualPrice}>{item.price}</h4>
                    <h4 className= {classes.offerPrice}>{item.price}</h4>
                    <p>{item.longDescipt}</p>
                    <div>
                    <h4>Categoria</h4>
                    <CustomSelectComponent options ={categories} />
                    </div>
                    <Button variant="contained" color="primary"> Agregar </Button>
=======
                    <h4 className= {classes.actualPrice}>${item.price}</h4>
                    <h4 className= {classes.offerPrice}>${item.price}</h4>
                    <p>{item.longDescipt}</p>
                    <div className= {classes.optionDetails}>
                        <h6>Categoria</h6>
                        <CustomSelectComponent options ={categories} /> 
                    </div>
                    <p className= {classes.sign}>La Tasca 2021</p>
>>>>>>> 311f8389b5d8d56f86be9c84c710e73d0bf53a75
                </div>
            </div>
    </section>))
}

<<<<<<< HEAD
=======

>>>>>>> 311f8389b5d8d56f86be9c84c710e73d0bf53a75
