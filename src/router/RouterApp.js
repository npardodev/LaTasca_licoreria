import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import HomeWiew from '../layout/HomeWiew'
import { ItemListContainer } from '../layout/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from '../layout/ItemDetailContainer/ItemDetailContainer';
import {ContactView} from '../layout/ContactView.js'
import {ProductsByCategoryView} from '../layout/ProductsByCategoryView.js'

import './../utility/index.css';
import {
    TransitionGroup,
    CSSTransition
  } from 'react-transition-group'
  

export const appPaths = {
      HOME_PATH : '/',
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




const routes = [
    { path: appPaths.HOME_PATH, name: 'Home', Component: HomeWiew },
    { path: appPaths.ALL_PRODUCTS_PATH, name: 'Products', Component: ItemListContainer },
    { path: appPaths.ABOUT_US_PATH, name: 'about', Component: HomeWiew },
    { path: appPaths.CONTACT_PATH, name: 'Contact', Component: ContactView },
    { path: appPaths.ITEMS_CATEGORYS_PATH, name: 'Items Category', Component: ProductsByCategoryView },
    { path: appPaths.ITEM_DETAIL_PATH, name: 'Items Detail', Component: ItemDetailContainer },
    { path: appPaths.OTHER_PRODUCTS_PATH, name: 'Others products', Component: ItemListContainer },
    { path: appPaths.ABOUT_US_PATH, name: 'About us', Component: ItemListContainer },
    { path: '/test', name: 'About us', Component: ItemListContainer },
]

export const RouterApp= () => {

    let location = useLocation();

    return (
        <TransitionGroup>
            <CSSTransition
            key={location.key}
            classNames="fade"
            timeout={800}
            >
            <Switch location={location}>
            {routes.map(({ path, Component }) => (
              <Route key={path} exact path={path}>
                {({ match }) => (
                  <CSSTransition
                    in={match != null}
                    timeout={300}
                    classNames="fade"
                    unmountOnExit
                  >
                    <Component />
                  </CSSTransition>
                )}
              </Route>
            ))}   
        </Switch>
        </CSSTransition>
    </TransitionGroup>)
};

