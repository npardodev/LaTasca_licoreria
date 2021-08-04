import React, {useEffect} from 'react';
import { ItemDetailStyle } from './ItemDetailStyle.js'
import { makeStyles, CircularProgress} from '@material-ui/core';

const useStyles = makeStyles ((theme) => ItemDetailStyle(theme));

export const ItemDetail = ({item}) => {
    const objetItem =item[0]
    const classes = useStyles();


    useEffect(() => {
    
    },[])

    
    return (item.length === 0 ? (<CircularProgress color="primary" />) : (
        <section>
            <div className= {classes.productItem}>
                <div>
                    <img src={objetItem.media.source} alt='foto'/>
                </div>
                <div className= {classes.productDetails}>
                    <h3>{objetItem.name}</h3>
                    <h4 className= {classes.actualPrice}>${objetItem.price.formatted}</h4>
                    <div dangerouslySetInnerHTML={{__html: objetItem.description}} />
                    <div className= {classes.sign}>
                        <p>La Tasca 2021</p>
                    </div>
                </div>
            </div>
    </section>))
}

