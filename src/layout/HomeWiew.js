import React,{useEffect}from 'react'
import { useSelector } from 'react-redux'

import styled from 'styled-components'
import { ProductosCarrusel } from '../components/Home/productos_carrusel/ProductosCarrusel'
import { Header } from '../components/Home/fondo_and_info/Header'
import { Marcas } from '../components/Home/nuestras_marcas/Marcas'

const HomeWiew = () => {
    
    const productos = useSelector(store => store.productsApi.array)
    console.log(productos)



    return (
        <HomeContainer>
            <Header/>
            <ProductosCarrusel productos={productos}/>
            <Marcas/>
        </HomeContainer>
    )
}

export default HomeWiew


const HomeContainer = styled.div`
    width: 100%;
    height:100%;
  
`;