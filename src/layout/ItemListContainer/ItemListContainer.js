import React, {useState} from 'react';
import { ItemList } from '../../components/ItemList/ItemList';
import { useParams} from 'react-router-dom';
import {CustomNotification} from '../../components/CustomComponents/CustomNotification';

import { useSelector } from 'react-redux'

export const ItemListContainer = () => {
    
    
    const productos = useSelector(store => store.productsApi.array)

    

    const { idCat } = useParams();
    const initialErrorState = '';
    const [error,setError] = useState(initialErrorState);
    let filterData =0;
    
    
    

    if (productos!== null && productos!== undefined){
<<<<<<< HEAD
        filterData = productData.filter((item)=> item.categories.find(x => x.name === idCat));
=======
    
        filterData = productos.filter((item)=> item.categories[0].name === idCat);
        //console.log(filterData);

>>>>>>> 54f040c682fce68c7731093904f34b7bf6b65b9b
    }


    return <>
            {error!==initialErrorState ? 
                <CustomNotification message={error} type="error"/>:
                <ItemList items={filterData} />}              
    </>
}



