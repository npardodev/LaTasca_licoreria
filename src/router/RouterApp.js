import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomeWiew from '../layout/HomeWiew'
import { ItemListContainer } from './../components/ItemListContainer/ItemListContainer.js';
import { ItemDetailContainer } from './../components/ItemDetailContainer/ItemDetailContainer.js';
import {  CustomNotFound } from './../components/CustomComponents/CustomNotFound.js'

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
            <HomeWiew/>
        </Route>

        <Route exact path={appPaths.ALL_PRODUCTS_PATH}>
            <ItemListContainer/>
        </Route>

        <Route exact path={appPaths.ITEMS_CATEGORYS_PATH}>
            <ItemListContainer/>
        </Route>

        <Route exact path={appPaths.ITEM_DETAIL_PATH}>
            <ItemDetailContainer/>
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

        <Route exact path={appPaths.ALL_PRODUCTS_PATH}>
            <ItemListContainer/>
        </Route>

        <Route component={CustomNotFound}/>
    </Switch>)
}

