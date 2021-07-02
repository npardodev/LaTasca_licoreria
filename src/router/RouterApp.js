import React from 'react';

import { Switch, Route } from 'react-router-dom';
// import { useParams, useHistory} from 'react-router-dom';
// import { ItemDetail } from '../components/ItemDetail/ItemDetail.js';


import Navbar  from "../components/Navbar/Navbar";
import HomeWiew from '../layout/HomeWiew'
export const appPaths = {
    
    ALL_PRODUCTS_PATH: '/products',
    OTHER_PRODUCTS_PATH: '/others',
    WINES_PRODUCTS_PATH: '/wines',
    BEERS_PRODUCTS_PATH: '/beers',
    SPIRITS_PRODUCTS_PATH: '/spirits',
    ITEM_DETAIL_PATH: '/products/:idCat/:idItem',
    ABOUT_US_PATH: '/aboutus',
    ITEM_PATH: '/item',
    ITEMS_CATEGORYS_PATH: '/products/:idCat',
}
   
export const RouterApp= () => {
    return (
    <Switch>
        <Navbar/>
        <Route exact path="/">
            <HomeWiew/>
        </Route>
        <Route exact path={appPaths.OTHER_PRODUCTS_PATH}>
            <ItemListContainer/>
        </Route>

        <Route exact path={appPaths.WINES_PRODUCTS_PATH}>
            <ItemListContainer/>
        </Route>

        <Route exact path={appPaths.BEERS_PRODUCTS_PATH}>
            <ItemListContainer/>
        </Route>

        <Route exact path={appPaths.SPIRITS_PRODUCTS_PATH}>
            <ItemListContainer/>
        </Route>

        <Route exact path='/test'>
            <ItemDetailContainer/>
        </Route>

        <Route exact path={appPaths.ALL_PRODUCTS_PATH}>
            <ItemListContainer/>
        </Route>

        <Route component={CustomNotFound}/>
    </Switch>)
}

