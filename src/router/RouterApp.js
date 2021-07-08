import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomeWiew from '../layout/HomeWiew'
import { ItemListContainer } from '../layout/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from '../layout/ItemDetailContainer/ItemDetailContainer';
import { CustomNotFound } from './../components/CustomComponents/CustomNotFound.js'
import {ProductsBanner} from '../layout/ProductsBanner'
import {AboutUsWiew} from '../layout/AboutUsWiew.js'
import {ContactView} from '../layout/ContactView.js'

export const appPaths = {
    
      ALL_PRODUCTS_PATH: '/products',
      OTHER_PRODUCTS_PATH: '/others',
      WINES_PRODUCTS_PATH: '/products/Vinos',
      BEERS_PRODUCTS_PATH: '/beers',
      SPIRITS_PRODUCTS_PATH: '/spirits',
      ITEM_DETAIL_PATH: '/products/:idCat/:idItem',
      ABOUT_US_PATH: '/about',
      CONTACT_PATH: '/contact',
      ITEM_PATH: '/item',
      ITEMS_CATEGORYS_PATH: '/products/:idCat',
  }

export const RouterApp= () => {
    return (
    <Switch>
        <Route exact path="/">
            <HomeWiew/>
        </Route>

        <Route exact path={appPaths.ITEMS_CATEGORYS_PATH}>
            <ProductsBanner/>
            <ItemListContainer/>
        </Route>

        <Route exact path={appPaths.ITEM_DETAIL_PATH}>
            <ItemDetailContainer/>
        </Route>

        <Route exact path={appPaths.OTHER_PRODUCTS_PATH}>
            <ItemListContainer/>
        </Route>
        
        <Route exact path={appPaths.ABOUT_US_PATH}>
            <AboutUsWiew/>
        </Route>
        
        <Route exact path={appPaths.ALL_PRODUCTS_PATH}>
            <ItemListContainer/>
        </Route>

        <Route exact path={appPaths.CONTACT_PATH}>
            <ContactView/>
        </Route>
        
        <Route exact path={'/test'}>
        </Route>

        <Route component={CustomNotFound}/>
    </Switch>)
}

