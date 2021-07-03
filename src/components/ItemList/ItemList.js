<<<<<<< HEAD
import React, {useState, useEffect} from 'react';
import { useParams, useHistory} from 'react-router-dom';
=======
import React from 'react';
>>>>>>> 311f8389b5d8d56f86be9c84c710e73d0bf53a75
import {Item} from '../../components/Item/Item';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
<<<<<<< HEAD
import LinearProgress from '@material-ui/core/LinearProgress';
=======
>>>>>>> 311f8389b5d8d56f86be9c84c710e73d0bf53a75
import { ItemListStyles } from './ItemListStyles.js'
import {CustomLoadingComponent} from './../CustomComponents/CustomLoadingComponent.js'

const useStyle = makeStyles((theme) => ItemListStyles(theme));

export const ItemList = ({items}) => {

    const classes = useStyle ();
    
    return <>
        <Container className = {classes.conten } color="primary" alignContent="center">
            {(items.length === 0 ? (<CustomLoadingComponent  iconLoad={CircularProgress} messageLoad="Cargando..." color="primary"/> ) : (
                    <div className = {classes.products }>
                        {items.map((element, index)=><Item key={index} item={element}/>)}
                    </div>
            ))}
        </Container>

    </>
}



