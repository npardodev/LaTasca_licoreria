
import React from 'react';
import { BrowserRouter } from "react-router-dom";
import {RouterApp} from './router/RouterApp.js'
import {Footer} from './components/Footer/Footer.js';
import Navbar from './components/Navbar/Navbar.js';

const App = () => {

  return (
      <BrowserRouter>
            <Navbar/>
            <RouterApp/>
            <Footer/>
      </BrowserRouter>
  );
}

export default App;
