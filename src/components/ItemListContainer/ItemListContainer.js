import React, {useState, useEffect} from 'react';
import { ItemList } from '../../components/ItemList/ItemList';
import { myProducts } from './../../data/myProducts.js';
import { useParams} from 'react-router-dom';
import {CustomNotification} from './../CustomComponents/CustomNotification.js';

const myPromise = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => resolve (
           myProducts
        ),100);
    })
}

export const ItemListContainer = () => {
     
      const {idCat, id } = useParams();
      const initialErrorState = '';

      const [productData, setProductsData] = useState([]);
      const [error,setError] = useState(initialErrorState);

      useEffect(() => {
        myPromise().then(data => {            
            const filterData = data.filter(item => item.category.id === idCat);
            setProductsData(filterData !==0 ? filterData:data);
          });
          myPromise().catch(error => {
              setError(error);
          });

      }, [])
      

    return <>
            {error!==initialErrorState ? 
                <CustomNotification message={error} type="error"/>:
                <ItemList items={productData} />}              
    </>
}



