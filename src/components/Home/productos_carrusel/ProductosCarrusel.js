import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-sea-green.min.css';
import { DivContainerProducts , DivProductsContent ,DivProducts } from './styles'
import {Productos} from './Productos'


export const ProductosCarrusel = ({productos_Destacados , productos_Nuevos}) => {
    
    return (
        <DivContainerProducts>
            <DivProductsContent>
                <h4>Nuevos <span>Productos</span></h4>
                <DivProducts>
                   <Splide
                        options={ {
                            type   : 'loop',
                            gap :50,
                            autoWidth: true,
                            width: '100%',
                            perPage: 3,
	                        perMove: 1,
                            focus:'center',
                           
                        }}
                  
                   >
                        {productos_Nuevos.map(e =>{
                            return (
                               <SplideSlide key={e.id}>
                                    <Productos productos={e}/>
                               </SplideSlide>
                            )
                        })}
                   </Splide>
                   
                   
                   
                   
                
                  
                 
                </DivProducts>
            </DivProductsContent>
            <DivProductsContent>
                <h5>Productos <span>Destacados</span></h5>
                <DivProducts>
                <Splide
                        options={ {
                            type   : 'loop',
                            gap :50,
                            autoWidth: true,
                            width: '100%',
                            perPage: 3,
	                        perMove: 1,
                            focus:'center',
                            
                            
                            
                        }}
                        
                   >
                        {productos_Destacados.map(e =>{
                            return (
                               <SplideSlide key={e.id}>
                                    <Productos productos={e}/>
                               </SplideSlide>
                            )
                        })}
                   </Splide>
                 
                </DivProducts>
            </DivProductsContent>
        </DivContainerProducts>
    )
}
