import React from 'react'
import styled from 'styled-components'


export const Productos = ({productos}) => {
   
    return (        
        <CardProductos>
            <img src={productos.media.source} alt='foto'></img>
            <h3>{productos.name}</h3>
            <div> <p>{productos.price.formatted}</p><span></span></div>
            <BottonProducto>Ver mas</BottonProducto>
        </CardProductos>
    )
}


const CardProductos = styled.div`
    display: flex;
    align-items: center;
    justify-content:flex-start;
    flex-direction: column;
    width: 280px;
    height: 350px;
    background: #F7F5F0;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
    border-radius: 20px;
  
    margin-bottom: 20px;
    margin-top:20px;
    border-radius: 20px;
    overflow: hidden;
    img{
        width:100%;
        height: 180px;
        margin-bottom: 15px;
    }
    h3{
        font-size: 1.3rem;
        margin-bottom: 15px;
    }
    div{
        display: flex;
        justify-content:space-around;
        width: 100px;
        margin-bottom: 15px;
    }
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