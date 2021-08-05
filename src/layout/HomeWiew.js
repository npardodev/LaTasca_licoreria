import React from 'react'
import { useSelector } from 'react-redux'

import styled from 'styled-components'
import { ProductosCarrusel } from '../components/Home/productos_carrusel/ProductosCarrusel'
import { Header } from '../components/Home/fondo_and_info/Header'
import { Marcas } from '../components/Home/nuestras_marcas/Marcas'

const HomeWiew = () => {
    
    const productos = useSelector(store => store.productsApi.array)
    let ProductosDestacados 
    let ProductosNuevos 

    if (productos !== null && productos !== undefined){

        let ProductoDestacadosEC = productos.filter((item)=> item.categories.find(x => x.name === 'productos destacados'));
        ProductosDestacados = ProductoDestacadosEC
        let ProductosNuevosEC = productos.filter((item)=> item.categories.find(x => x.name === 'Productos Nuevos'));
        ProductosNuevos = ProductosNuevosEC
       
    }

    

    
    

    
    return (
        <HomeContainer>
            <Header/>
            <ProductosCarrusel   productos_Destacados={ProductosDestacados} productos_Nuevos={ProductosNuevos}/>
            <Marcas/>
        </HomeContainer>
    )
}

export default HomeWiew


const HomeContainer = styled.div`
    width: 100%;
    height:100%;
  
`;