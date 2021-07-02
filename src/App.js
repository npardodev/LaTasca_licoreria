
import React from 'react';
import {
      BrowserRouter as Router,
      Switch,
      Route
} from "react-router-dom";


import {Footer} from './components/Footer/Footer.js';
import Navbar from './components/Navbar/Navbar.js';
import HomeWiew from './layout/HomeWiew.js';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer.js';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer.js';
import {  CustomNotFound } from './components/CustomComponents/CustomNotFound.js'

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


const App = () => {

  return (
      <>
            <Router>
                  <Navbar/>
                  <Switch>
                        <Route path="/about">
                              
                        </Route>
                        <Route path="/users">
                              
                        </Route>
                        <Route exact path="/">
                              <HomeWiew/>
                        </Route>
                  </Switch>
                  <Footer/>
            </Router>

      </>
  )
}

export default App;
