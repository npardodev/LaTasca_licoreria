import React from 'react'
import styled from 'styled-components'
import whatsapp from '../../assets/img/icons8-whatsapp-96.png'
export const WsapComponent = () => {

   
    return (
        <ContainerIMGWhsap href="https://api.whatsapp.com/send?phone=094270220&text=Hola!%20quería%20saber%20si%20tenían%20disponible..">
            <img src={whatsapp} alt='whatsapp'/>
        </ContainerIMGWhsap>
    )
}



const ContainerIMGWhsap = styled.a`
    width: 70px;
    height: 70px;

    position: fixed;
    right: 30px;
    bottom: 5%;
    img{
        width: 100%;
        height: 100%;
    }

`;