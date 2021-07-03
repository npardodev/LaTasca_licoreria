import React, { useEffect, useState } from 'react';
import { Alert } from '@material-ui/lab';
import {Snackbar} from '@material-ui/core';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { myProducts } from './../../data/myProducts.js';
import { useParams} from 'react-router-dom';


//Creamos la promise emulando la llamada al backend
const myPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => 
        resolve(myProducts), 100)
    })
}

export const ItemDetailContainer = () => {

    const { idCat,idItem} = useParams();
 
    const [productData, setProductData] = useState('');
    const [error, setError] = useState('');
    const [showError, setShowError] = useState(false);
    
    useEffect(() => {
        myPromise().then(data => {
            const filterData = data.filter(function(item) {
                return item.category.id === String(idCat) && item.id === Number(idItem);
            });  
            setProductData(filterData[0]);

        });
        myPromise().catch(error => {
            setError(error);
            setShowError(true);
        });

    }, []);

    return <>
       
        <ItemDetail item={productData}/>
        <Snackbar open={showError} autoHideDuration={3000} >
            <Alert onClose={() => setShowError(false)} severity="error">
                {error}
            </Alert>
        </Snackbar>
    </>
}