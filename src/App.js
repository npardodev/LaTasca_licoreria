
import React,{useEffect}from 'react';
import { BrowserRouter } from "react-router-dom";
import {RouterApp} from './router/RouterApp.js'
import {Footer} from './components/Footer/Footer.js';
import Navbar from './components/Navbar/Navbar.js';
import generateStore from './reducer/store'
import { useDispatch } from 'react-redux'
import { ConsultaApi } from './reducer/actions/products'
const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    
    dispatch(ConsultaApi())

  }, [dispatch])

  return (
    <>
      <BrowserRouter>
            <Navbar/>
            <RouterApp/>
            <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
