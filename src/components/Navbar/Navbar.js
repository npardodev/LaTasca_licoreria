import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import LogoHeader from '../../assets/img/IconosHome/LogoHeader.png'
import IconInstagram from '../../assets/img/IconosHome/IconoInstagram.png'
import IconFacebook from '../../assets/img/IconosHome/IconoFacebook.png'
import { categories }  from '../../data/categories.js';
import styled from 'styled-components'


import 
{ 
    Header,
    DivContentLogo,
    DivLogo, 
    H2TituloLogo,
    NavNavbar,
    LiLinksNavbar
} from './styles'

const Navbar = () => {
    
    const [active,SetActive] = useState(false)

    return (
      <>
          <Header>
            <DivContentLogo>
                <DivLogo>
                    <img src={LogoHeader} alt="Logo"/>
                </DivLogo>
                <H2TituloLogo>
                    LA TASCA
                    <span>Licorería</span>
                </H2TituloLogo>
            </DivContentLogo>
            <NavNavbar>
                <UlLinksNavbar active={active}>
                    <LiLinksNavbar><Link to="/" onClick={() => SetActive(!active)}  >Home</Link></LiLinksNavbar>
                    <LiLinksNavbar><Link to={`/products/${categories.WINES.name}`} onClick={() => SetActive(!active)}>Vinos </Link> </LiLinksNavbar>
                    <LiLinksNavbar><Link to={`/products/${categories.BEERS.name}`} onClick={() => SetActive(!active)}>Cervezas</Link></LiLinksNavbar>
                    <LiLinksNavbar><Link to={`/products/${categories.WHISKY.name}`} onClick={() => SetActive(!active)}>Whiskys</Link></LiLinksNavbar>
                    <LiLinksNavbar><Link to={`/products/${categories.OTHERS.name}`} onClick={() => SetActive(!active)}>Otros productos</Link></LiLinksNavbar>
                    <LiLinksNavbar><Link to="/about" onClick={() => SetActive(!active)}>Nosotros</Link></LiLinksNavbar>
                    <LiLinksNavbar><Link to="/contact" onClick={() => SetActive(!active)}>Contacto</Link></LiLinksNavbar>
                    <LiLinksNavbar><img src={IconInstagram}  alt="instagram" onClick={() => SetActive(!active)}/></LiLinksNavbar>
                    <LiLinksNavbar><img src={IconFacebook}   alt="facebook" onClick={() => SetActive(!active)}/></LiLinksNavbar>
                </UlLinksNavbar>
                <HamburgerMenu active={active} onClick={() => SetActive(!active)}>
                    <div></div>
                    <div></div>
                    <div></div>
                </HamburgerMenu>
            </NavNavbar>
          </Header>
      </>
    )
}

export default Navbar


const HamburgerMenu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    z-index: 1000;
    display: none;
    cursor: pointer;
    @media (max-width: 768px) {
        display: flex;

    }
   
    div{
        width: 30px;
        height: 4px;
        background-color: #232323;
        margin-top: 3px;
        transform-origin: 5px;
        transition: all 0.3s linear;

        :nth-child(1){
            transform: ${({ active }) => active ? 'rotate(45deg)' : 'rotate(0)'};
        }

        :nth-child(2){
            transform: ${({ active }) => active ? 'translateX(100%)' : 'translateX(0)'};
            opacity: ${({ active }) => active ? 0:1};
        }

        :nth-child(3){
            transform: ${({ active }) => active ? 'rotate(-45deg)' : 'rotate(0)'};
        }
    }


   
`;

const UlLinksNavbar = styled.ul`
    display: flex;
    justify-content: space-around;
    transition: 0.5s;
    z-index: 1000;
    @media (max-width: 768px) {
        display: flex;
        position: fixed;
        top: 0px;
        left: ${({ active }) => active ? '0' : '-100%'};
        justify-content: flex-start;
        flex-direction: column;
        height: 100vh ;
        width: 400px;
        background-color: whitesmoke;

    }
   
`;
