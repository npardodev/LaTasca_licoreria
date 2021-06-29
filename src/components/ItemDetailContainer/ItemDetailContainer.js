import React, { useEffect, useState } from 'react';
import { ItemDetailContainerStyle } from './ItemDetailContainerStyle'
import { Alert } from '@material-ui/lab';
import {Snackbar} from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { myProducts } from './../../data/myProducts.js';
import { useParams, useHistory, useLocation} from 'react-router-dom';

const useStyle = makeStyles((theme) => ItemDetailContainerStyle(theme));

//Creamos la promise emulando la llamada al backend
const myPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => 
        resolve(myProducts), 3000)
    })
}

export const ItemDetailContainer = () => {

    const { idCat,idItem} = useParams();
 
    const [productData, setProductData] = useState('');
    const [error, setError] = useState('');
    const [showError, setShowError] = useState(false);

    const getItems = () => {
        console.log(idItem);
        myPromise().then(data => {
            console.log(idItem);
            const filterData = data.filter(item => item.id === idItem);
            //setProductData(filterData? filterData: data);
            console.log(data);
            setProductData( data[1]);// Hardcoded

        });
        myPromise().catch(error => {
            setError(error);
            setShowError(true);
        });
    }

    useEffect(() => {
        getItems()
    }, [idItem]);

    return <>
       
        <ItemDetail item={productData}/>
        <Snackbar open={showError} autoHideDuration={3000} >
            <Alert onClose={() => setShowError(false)} severity="error">
                {error}
            </Alert>
        </Snackbar>
    </>
}