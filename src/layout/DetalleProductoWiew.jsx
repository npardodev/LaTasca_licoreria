import React from 'react'
import styled from 'styled-components'
import DetalleProduct from '../components/details/DetalleProduct'
const DetalleProductoWiew = () => {
    return (
        <DetailsContainer>
            <DetalleProduct/>
        </DetailsContainer>
    )
}
const DetailsContainer = styled.div`

    width: 100%;
    height:100%;

`;
export default DetalleProductoWiew