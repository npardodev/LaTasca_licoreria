import React from 'react';
import { ItemDetailStyle } from './ItemDetailStyle.js'
import { makeStyles, CircularProgress} from '@material-ui/core';
import { CustomSelectComponent } from './../CustomComponents/CustomSelectComponent.js'

let categories = [{name:'Opt1', value:'Opt1'},{name:'Opt2', value:'Opt2'},{name:'Opt3', value:'Opt3'}];

const useStyles = makeStyles ((theme) => ItemDetailStyle(theme));

export const ItemDetail = ({item}) => {
    const objetItem =item[0]
    const classes = useStyles();

    return (item.length === 0 ? (<CircularProgress color="primary" />) : (
        <section>
            <div className= {classes.productItem}>
                <div>
                    <img src={objetItem.media.source} alt='foto'/>
                </div>
                <div className= {classes.productDetails}>
                    <h3>{item.name}</h3>
                    <h4 className= {classes.actualPrice}>${objetItem.price.formatted}</h4>
                    <h4 className= {classes.offerPrice}>$20</h4>
                    <p>description</p>
                    <div className= {classes.optionDetails}>
                        <h6>Categoria</h6>
                        <CustomSelectComponent options ={categories} /> 
                    </div>
                    <p className= {classes.sign}>La Tasca 2021</p>
                </div>
            </div>
    </section>))
}

