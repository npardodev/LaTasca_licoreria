import React from 'react'

import styled from 'styled-components'
import { ProductosCarrusel } from '../components/Home/productos_carrusel/ProductosCarrusel'
import { Header } from '../components/Home/fondo_and_info/Header'
import { Marcas } from '../components/Home/nuestras_marcas/Marcas'

const HomeWiew = () => {
    const productos = [
        {
            id:1,
            img:'url',
            name:'Titulo de producto',
            price:99.00,
            discount:120.00,
        },
        {
            id:2,
            img:'url',
            name:'Titulo de producto',
            price:99.00,
            discount:120.00,
        },
        {
            id:3,
            img:'url',
            name:'Titulo de producto',
            price:99.00,
            discount:120.00,
        },
        {
            id:4,
            img:'url',
            name:'Titulo de producto',
            price:99.00,
            discount:120.00,
        },
    ]
   



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