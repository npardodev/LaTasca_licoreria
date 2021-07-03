import React from 'react'

import BannerVino from '../../../assets/img/FotoVinoHome.png'

import {Banner} from './Banner'
import IconoHands from '../../../assets/img/IconosHome/IconoHands.png'
import IconoVinos from '../../../assets/img/IconosHome/IconoVino.png'
import IconoTeam from '../../../assets/img/IconosHome/Iconoteam.png'
import { DivContentInfo , H4TituloInfo , DivInfoNosotros , DivInfoNosotrosContent} from './styles'




export const Header = () => {
    
    return (
        <>
            <Banner img={BannerVino} />
            <DivContentInfo>
                <H4TituloInfo>Conocenos <span>Mejor</span></H4TituloInfo>
                <DivInfoNosotrosContent>
                    <DivInfoNosotros>
                        <div style={{'backgroundImage': `url(${IconoVinos})`}}>.</div>
                        <h5>Calidad</h5>
                        <p>Ofrecemos una amplia gama de productos nacionales e importados, tanto a particulares como a empresas.</p>
                    </DivInfoNosotros>
                    <DivInfoNosotros>
                        <div style={{'backgroundImage': `url(${IconoTeam})`}}></div>
                        <h5>Atencion personalizada</h5>
                        <p>Brindamos asesoramiento de personal capacitado que aconseja y orienta para lograr satisfacer los requisitos de los clientes.</p>
                    </DivInfoNosotros>
                    <DivInfoNosotros>
                        <div style={{'backgroundImage': `url(${IconoHands})`}}></div>
                        <h5>Confianza</h5>
                        <p>Nuestro objetivo es crear una relación con el cliente. Brindando apoyo, cumpliendo y superando sus expectativas.</p>
                    </DivInfoNosotros>

                </DivInfoNosotrosContent>
               
            </DivContentInfo>

        </>
        
    )
}
