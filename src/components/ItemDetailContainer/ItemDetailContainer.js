import React, { useEffect, useState } from 'react';
<<<<<<< HEAD
import { ItemDetailContainerStyle } from './ItemDetailContainerStyle'
import { Alert } from '@material-ui/lab';
import {Snackbar} from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { myProducts } from './../../data/myProducts.js';
import { useParams, useHistory, useLocation} from 'react-router-dom';

const useStyle = makeStyles((theme) => ItemDetailContainerStyle(theme));
=======
import { Alert } from '@material-ui/lab';
import {Snackbar} from '@material-ui/core';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { myProducts } from './../../data/myProducts.js';
import { useParams} from 'react-router-dom';

>>>>>>> 311f8389b5d8d56f86be9c84c710e73d0bf53a75

//Creamos la promise emulando la llamada al backend
const myPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => 
<<<<<<< HEAD
        resolve(myProducts), 3000)
=======
        resolve(myProducts), 100)
>>>>>>> 311f8389b5d8d56f86be9c84c710e73d0bf53a75
    })
}

export const ItemDetailContainer = () => {

    const { idCat,idItem} = useParams();
 
    const [productData, setProductData] = useState('');
    const [error, setError] = useState('');
    const [showError, setShowError] = useState(false);
<<<<<<< HEAD

    const getItems = () => {
        console.log(idItem);
        myPromise().then(data => {
            console.log(idItem);
            const filterData = data.filter(item => item.id === idItem);
            //setProductData(filterData? filterData: data);
            console.log(data);
            setProductData( data[1]);// Hardcoded
=======
    
    useEffect(() => {
        myPromise().then(data => {
            const filterData = data.filter(function(item) {
                return item.category.id === String(idCat) && item.id === Number(idItem);
            });  
            setProductData(filterData[0]);
>>>>>>> 311f8389b5d8d56f86be9c84c710e73d0bf53a75

        });
        myPromise().catch(error => {
            setError(error);
            setShowError(true);
        });
<<<<<<< HEAD
    }

    useEffect(() => {
        getItems()
    }, [idItem]);
=======

    }, []);
>>>>>>> 311f8389b5d8d56f86be9c84c710e73d0bf53a75

    return <>
       
        <ItemDetail item={productData}/>
        <Snackbar open={showError} autoHideDuration={3000} >
            <Alert onClose={() => setShowError(false)} severity="error">
                {error}
            </Alert>
        </Snackbar>
    </>
}