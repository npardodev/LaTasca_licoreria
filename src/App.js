
import React,{useEffect}from 'react';
import { BrowserRouter } from "react-router-dom";
import {RouterApp} from './router/RouterApp.js'
import {Footer} from './components/Footer/Footer.js';
import Navbar from './components/Navbar/Navbar.js';
import { useDispatch } from 'react-redux'
import { ConsultaApi } from './reducer/actions/products'
import { WsapComponent } from './components/WshsapComponent/WsapComponent.js';


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
            <WsapComponent/>
      </BrowserRouter>
    </>
  );
}

export default App;
