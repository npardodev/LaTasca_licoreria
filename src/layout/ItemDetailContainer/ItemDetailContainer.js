import React, { useState } from 'react';
import { Alert } from '@material-ui/lab';
import {Snackbar} from '@material-ui/core';
import { ItemDetail } from '../../components/ItemDetail/ItemDetail';
import { useParams} from 'react-router-dom';
import { useSelector } from 'react-redux'
import { CustomBanner } from './../../components/CustomComponents/CustomBanner.js'
import imgProducts  from './../../assets/img/productsBanner.png'
import { Container } from '@material-ui/core';

export const ItemDetailContainer = () => {

    
    const productos = useSelector(store => store.productsApi.array)
    const {idItem} = useParams();
    const [error, setError] = useState('');
    const [showError, setShowError] = useState(false);
    
    const filterData = productos.filter(item => item.id === idItem);  
        

    return <>
        <ItemDetail item={filterData}/>
        <Snackbar open={showError} autoHideDuration={3000} >
            <Alert onClose={() => setShowError(false)} severity="error">
                {error}
            </Alert>
        </Snackbar>
        <Container maxWidth="lg">
            <CustomBanner img={imgProducts}/>
        </Container>
    </>
}