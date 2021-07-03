import React, {useState, useEffect} from 'react';
import { ItemList } from '../../components/ItemList/ItemList';
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

const myPromise = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => resolve (
           myProducts
        ), 3000);
    })
}

export const ItemListContainer = () => {
     
      const {idCat, id } = useParams();
      const initialErrorState = '';

      const [productData, setProductsData] = useState([]);
      const [error,setError] = useState(initialErrorState);
     
      const getItems = () => {
          myPromise().then(data => {            
            setProductsData(data);
          });
          myPromise().catch(error => {
              setError(error);
          });
      }
      
      useEffect(() => {
          getItems()
      }, [{idCat, id }])
      

    return <>
            {error!==initialErrorState ? 
                <CustomNotification message={error} type="error"/>:
                <ItemList items={productData} />}              
    </>
}



