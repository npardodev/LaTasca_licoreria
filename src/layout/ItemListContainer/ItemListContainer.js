import React from 'react';
import { ItemList } from '../../components/ItemList/ItemList';
import { useParams} from 'react-router-dom';
import {CustomNotification} from '../../components/CustomComponents/CustomNotification';
import { useSelector } from 'react-redux'

export const ItemListContainer = () => {

    const productos = useSelector(store => store.productsApi.array)

    
    const { idCat } = useParams();
    const initialErrorState = '';
    
    let filterData =productos;

    
   
    


    if (productos!== null && productos!== undefined){
        filterData = productos.filter((item)=> item.categories.find(x => x.name === idCat));
    }

    return <>
    {'' !==initialErrorState ? 
        <CustomNotification  type="error"/>:
        <ItemList items={filterData} />}              
    </>
}