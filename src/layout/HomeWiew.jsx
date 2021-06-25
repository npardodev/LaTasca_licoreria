import React from 'react'
import { CarruselHome } from '../components/Home/CarruselHome/CarruselHome'
import styled from 'styled-components'
import { ProductosCarrusel } from '../components/Home/ProductosCarrusel/ProductosCarrusel'

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
            <CarruselHome/>
            <ProductosCarrusel productos={productos}/>

            

        </HomeContainer>
    )
}

export default HomeWiew


const HomeContainer = styled.div`
    width: 100%;
    height:100%;
  
`;