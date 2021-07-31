import React, {useState, useEffect} from 'react';
import { ItemList } from '../../components/ItemList/ItemList';
import { useParams} from 'react-router-dom';
import {CustomNotification} from '../../components/CustomComponents/CustomNotification';

import { useSelector } from 'react-redux'

export const ItemListContainer = () => {
    
    const [productData, setProductsData] = useState([]);
    const productos = useSelector(store => store.productsApi.array)

    const getItems = () => {
        setProductsData(productos);
    }

    const { idCat } = useParams();
    const initialErrorState = '';
    const [error,setError] = useState(initialErrorState);
    let filterData =0;
    
    useEffect(() => {
        getItems();

    }, [idCat])
    

    if (productos!== null && productos!== undefined){
        filterData = productData.filter((item)=> item.categories.find(x => x.name === idCat));
    }


    return <>
            {error!==initialErrorState ? 
                <CustomNotification message={error} type="error"/>:
                <ItemList items={filterData} />}              
    </>
}



