import React from 'react'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { Link } from 'react-router-dom'
import LogoHeader from '../../assets/img/IconosHome/LogoHeader.png'
import IconInstagram from '../../assets/img/IconosHome/IconoInstagram.png'
import IconFacebook from '../../assets/img/IconosHome/IconoFacebook.png'
import { categories }  from '../../data/categories.js';


import 
{ 
    Header,
    DivContentLogo,
    DivLogo, 
    H2TituloLogo,
    NavNavbar,
    UlLinksNavbar,
    LiLinksNavbar,
    DivSubMenu,
} from './styles'

const Navbar = () => {
  

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
                <UlLinksNavbar>
                    <LiLinksNavbar><Link to="/">Home</Link></LiLinksNavbar>
                    <LiLinksNavbar><Link to={`/products/${categories.WINES.name}`}>Vinos </Link> <ArrowDropDownIcon/>
                        <DivSubMenu>
                            <Link to="/about">Otros productos</Link>
                            <Link to="/about">Otros productos</Link>
                            <Link to="/about">Otros productos</Link>
                        </DivSubMenu>
                    </LiLinksNavbar>
                       
                   
                    <LiLinksNavbar><Link to={`/products/${categories.BEERS.name}`}>Cervezas</Link><ArrowDropDownIcon/>
                        <DivSubMenu>
                            <Link to="/about">Otros productos</Link>
                            <Link to="/about">Otros productos</Link>
                            <Link to="/about">Otros productos</Link>
                        </DivSubMenu>
                    </LiLinksNavbar>
                    <LiLinksNavbar><Link to={`/products/${categories.WHISKY.name}`}>Whiskys</Link><ArrowDropDownIcon/>
                        <DivSubMenu>
                            <Link to="/about">Otros productos</Link>
                            <Link to="/about">Otros productos</Link>
                            <Link to="/about">Otros productos</Link>
                        </DivSubMenu>
                    </LiLinksNavbar>
                    <LiLinksNavbar><Link to={`/products/${categories.OTHERS.name}`}>Otros productos</Link><ArrowDropDownIcon/>
                        <DivSubMenu>
                            <Link to="/about">Comestibles</Link>
                            <Link to="/about">otras bebidas</Link>
                            <Link to="/about">Otros productos</Link>
                        </DivSubMenu>
                    </LiLinksNavbar>
                    <LiLinksNavbar><Link to="/about">Nosotros</Link></LiLinksNavbar>
                    <LiLinksNavbar><Link to="/contact">Contacto</Link></LiLinksNavbar>
                    <LiLinksNavbar><img src={IconInstagram} style={{height:'35px'}} alt="instagram"/></LiLinksNavbar>
                    <LiLinksNavbar><img src={IconFacebook}  style={{height:'35px'}} alt="facebook"/></LiLinksNavbar>
                </UlLinksNavbar>
            </NavNavbar>
          </Header>
      </>
    )
}

export default Navbar