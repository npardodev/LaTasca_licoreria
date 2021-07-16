import React from 'react'
import styled from 'styled-components'


export const Productos = ({productos}) => {
   
    return (        
        <CardProductos>
            <DivContainerImg>
                <img src={productos.media.source} alt='foto'></img>
            </DivContainerImg>
            <h3>{productos.name}</h3>
            <DivPriceProduct> <p>{productos.price.formatted}</p><span></span></DivPriceProduct>
            <BottonProducto>Ver mas</BottonProducto>
        </CardProductos>
    )
}

const DivContainerImg = styled.div`
    background-color: #fff;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 0px;
`;
const CardProductos = styled.div`
    display: flex;
    align-items: center;
    justify-content:flex-start;
    flex-direction: column;
    width: 280px;
    height: 370px;
    background: #F7F5F0;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
    border-radius: 20px;
  
    margin-bottom: 20px;
    margin-top:20px;
    border-radius: 20px;
    overflow: hidden;
    img{
        
        height: 180px;
        object-fit: cover;
    }
    h3{
        font-size: 1.3rem;
        margin-bottom: 15px;
        text-align: center;
    }

`;
const DivPriceProduct = styled.div`
    display: flex;
    justify-content:space-around;
    width: 100px;
    margin-bottom: 15px;
`;
const BottonProducto = styled.button`
    border: none;
    background-color:#1F1F1F;
    color: #fff;
    width: 90%;
    padding:12px 0px;
    border-radius:10px;
    font-size: 1em;
    cursor: pointer;
`;