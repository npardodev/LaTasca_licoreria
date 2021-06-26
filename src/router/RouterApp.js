import React from 'react';

import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { useParams, useHistory} from 'react-router-dom';
import { ItemDetail } from '../components/ItemDetail/ItemDetail.js';

import { ItemListContainer } from '../components/ItemListContainer/ItemListContainer.js';
import { ItemDetailContainer } from '../components/ItemDetailContainer/ItemDetailContainer.js';
import {CustomNotFound} from '../components/CustomComponents/CustomNotFound.js'

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
        <Route exact path="/">
            {/* <Home/> */}
            <h1>Seccion Home</h1>
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

