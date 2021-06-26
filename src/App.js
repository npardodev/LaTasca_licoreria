import './App.css';
import React from 'react';
import {ItemDetailContainer} from './components/ItemDetailContainer/ItemDetailContainer.js';
import {RouterApp} from './router/RouterApp.js';
import {Footer} from './components/Footer/Footer.js';

import { BrowserRouter} from 'react-router-dom';

const App = props => {

  return <BrowserRouter>
            <RouterApp/>
            <Footer/>
      </BrowserRouter>
}

export default App;