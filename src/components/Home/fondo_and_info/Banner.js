import React from 'react'
import styled from 'styled-components'
export const Banner = ({img}) => {
    return (
        <>
            <FondoImagen>
                <ImgFondo src={img}></ImgFondo>
            </FondoImagen>
        </>
    )
}

export const FondoImagen = styled.div`
    width: 100%;
    margin-top: 30px;

`;


export const ImgFondo = styled.img`
    background-size: cover;
    width: 100%;
   

`;


