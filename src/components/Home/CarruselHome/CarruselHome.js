import React from 'react'
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import carrulselImg1 from '../../../img/FotoVinoCarrusel.jpg'
import carrulselImg2 from '../../../img/FotoVinoCarrusel.jpg'
import Arrowleft from '../../../img/arrow1.png'
import Arrowright from '../../../img/arrow2.png'
import IconoPulgar from '../../../img/iconPulgar.png'
import IconoVinos from '../../../img/iconVinos.png'
import IconoEstrella from '../../../img/IconEstrella.png'
import { DivContentCarrusel , ImgCarrusel , DivContentInfo , H4TituloInfo , DivInfoNosotros , DivInfoNosotrosContent} from './styles'

const images = [carrulselImg1,carrulselImg2]


const properties = {
    prevArrow: <img style={{width: "30px", marginRight: "-30px"}} src={Arrowright} alt="Arrow"></img>,
    nextArrow:  <img style={{width: "30px", marginLeft: "-30px"}} src={Arrowleft} alt="Arrow"></img>,
    easing:"ease"
  };


export const CarruselHome = () => {
    
    return (
        <>

            <DivContentCarrusel>
               
            <Slide {...properties}>
                <div className="each-slide">
                    <ImgCarrusel style={{'backgroundImage': `url(${images[0]})`}}>
                  
                    </ImgCarrusel>
                </div>
                <div className="each-slide">
                    <ImgCarrusel style={{'backgroundImage': `url(${images[1]})`}}>
                    
                    </ImgCarrusel>
                </div>

            </Slide>

               
            </DivContentCarrusel>
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
