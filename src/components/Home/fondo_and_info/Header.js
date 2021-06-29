import React from 'react'

import BannerVino from '../../../assets/img/FotoVinoHome.png'

import {Banner} from './Banner'
import IconoPulgar from '../../../assets/img/iconPulgar.png'
import IconoVinos from '../../../assets/img/iconVinos.png'
import IconoEstrella from '../../../assets/img/IconEstrella.png'
import { DivContentInfo , H4TituloInfo , DivInfoNosotros , DivInfoNosotrosContent} from './styles'




export const Header = () => {
    
    return (
        <>
            <Banner img={BannerVino} />
            <DivContentInfo>
                <H4TituloInfo>Conocenos <span>Mejor</span></H4TituloInfo>
                <DivInfoNosotrosContent>
                    <DivInfoNosotros>
                        <div style={{'backgroundImage': `url(${IconoPulgar})`}}>.</div>
                        <h5>Titulo de ejemplo</h5>
                        <p>
                            lorem it sun sia a med
                            lorem it sun sia a med
                            lorem it sun sia a med
                            lorem it sun sia a med
                        </p>
                    </DivInfoNosotros>
                    <DivInfoNosotros>
                        <div style={{'backgroundImage': `url(${IconoVinos})`}}></div>
                        <h5>Titulo de ejemplo</h5>
                        <p>
                            lorem it sun sia a med
                            lorem it sun sia a med
                            lorem it sun sia a med
                            lorem it sun sia a med
                        </p>
                    </DivInfoNosotros>
                    <DivInfoNosotros>
                        <div style={{'backgroundImage': `url(${IconoEstrella})`}}></div>
                        <h5>Titulo de ejemplo</h5>
                        <p>
                            lorem it sun sia a med
                            lorem it sun sia a med
                            lorem it sun sia a med
                            lorem it sun sia a med
                        </p>
                    </DivInfoNosotros>

                </DivInfoNosotrosContent>
               
            </DivContentInfo>

        </>
        
    )
}
