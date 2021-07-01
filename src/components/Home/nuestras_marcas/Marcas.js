import React from 'react'
import { MarcasContent , DivContentMarcas , DivMarcasContainF , DivMarcas } from './styles'

import Mtrapiche from '../../../assets/img/marcas/Trapiche.png'
import MNavarr from '../../../assets/img/marcas/Navarr.png'
import MChivas from '../../../assets/img/marcas/Chivas.png'
import MJhonnie from '../../../assets/img/marcas/Johnnie.png'
import MTerrazas from '../../../assets/img/marcas/Terrazas.png'
import MBresest from '../../../assets/img/marcas/Bresest.png'
import MEWilliams from '../../../assets/img/marcas/EWilliams.png'
import MJackDaniels from '../../../assets/img/marcas/JackDaniels.png'
export const Marcas = () => {
    return (
        <MarcasContent>
            <h4>Nuestras <span>Marcas</span></h4>
            <DivMarcasContainF>
                <DivContentMarcas>
                    <DivMarcas>
                        <img src={Mtrapiche} alt='fotomarca'/>
                    </DivMarcas>
                    <DivMarcas>
                        <img  src={MNavarr} alt='fotomarca'/>
                    </DivMarcas>
                    <DivMarcas>
                        <img src={MChivas} alt='fotomarca'/>
                    </DivMarcas>
                    <DivMarcas>
                        <img src={MJhonnie} alt='fotomarca'/>
                    </DivMarcas>
                    <DivMarcas>
                        <img src={MTerrazas} alt='fotomarca'/>
                    </DivMarcas>
                    <DivMarcas>
                        <img src={MBresest} alt='fotomarca'/>
                    </DivMarcas>
                    <DivMarcas>
                        <img src={MEWilliams} alt='fotomarca'/>
                    </DivMarcas>
                    <DivMarcas>
                        <img src={MJackDaniels} alt='fotomarca'/>
                    </DivMarcas>
                </DivContentMarcas>
            </DivMarcasContainF>
        </MarcasContent>
    )
}
