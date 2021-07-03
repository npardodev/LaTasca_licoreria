import React, {useState, useEffect} from 'react';
import { ItemList } from '../../components/ItemList/ItemList';
<<<<<<< HEAD
import { ItemListContainerStyle } from './ItemListContainerStyle.js'
import { makeStyles } from '@material-ui/core';
import { myProducts } from './../../data/myProducts.js';
import {Snackbar} from '@material-ui/core';
import {IconButton, Container} from '@material-ui/core';
import {CloseIcon} from '@material-ui/icons';
import { Alert, AlertTitle } from '@material-ui/lab';
import { useParams, useHistory} from 'react-router-dom';
import {CustomNotification} from './../CustomComponents/CustomNotification.js';

const useStyle = makeStyles ((theme) => ItemListContainerStyle(theme));

=======
import { myProducts } from './../../data/myProducts.js';
import { useParams} from 'react-router-dom';
import {CustomNotification} from './../CustomComponents/CustomNotification.js';

>>>>>>> 311f8389b5d8d56f86be9c84c710e73d0bf53a75
const myPromise = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => resolve (
           myProducts
<<<<<<< HEAD
        ), 3000);
        //reject("Error cargando productos")
=======
        ),100);
>>>>>>> 311f8389b5d8d56f86be9c84c710e73d0bf53a75
    })
}

export const ItemListContainer = () => {
     
      const {idCat, id } = useParams();
      const initialErrorState = '';

<<<<<<< HEAD
      const classes = useStyle ();
      const [productData, setProductsData] = useState([]);
      const [error,setError] = useState(initialErrorState);
     
      const getItems = () => {
          myPromise().then(data => {            
            //const filterData = data.filter(item => item.category.id === idCat);
            //setProductsData(filterData!=0 ? filterData:data);
            console.log(data);
            setProductsData(data);
=======
      const [productData, setProductsData] = useState([]);
      const [error,setError] = useState(initialErrorState);

      useEffect(() => {
        myPromise().then(data => {            
            const filterData = data.filter(item => item.category.id === idCat);
            setProductsData(filterData !==0 ? filterData:data);
>>>>>>> 311f8389b5d8d56f86be9c84c710e73d0bf53a75
          });
          myPromise().catch(error => {
              setError(error);
          });
<<<<<<< HEAD
      }
      
      useEffect(() => {
          getItems()
      }, [{idCat, id }])
      

    return <>
            {error!=initialErrorState ? 
=======

      }, [])
      

    return <>
            {error!==initialErrorState ? 
>>>>>>> 311f8389b5d8d56f86be9c84c710e73d0bf53a75
                <CustomNotification message={error} type="error"/>:
                <ItemList items={productData} />}              
    </>
}



