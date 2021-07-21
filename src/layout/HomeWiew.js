import React from 'react'
import { useSelector } from 'react-redux'

import styled from 'styled-components'
import { ProductosCarrusel } from '../components/Home/productos_carrusel/ProductosCarrusel'
import { Header } from '../components/Home/fondo_and_info/Header'
import { Marcas } from '../components/Home/nuestras_marcas/Marcas'

const HomeWiew = () => {
    
    const productos = useSelector(store => store.productsApi.array)
   
    let Vinos2Categorias = []
    let VinosDestacados = []
    let VinosNuevos = []

    console.log(productos)

    if (productos!== null && productos!== undefined){
    
        productos.forEach((item)=>{

            if(item.categories.length === 2){
                Vinos2Categorias.push(item)
            }

            
        });
        

    }
    if (Vinos2Categorias !== null && Vinos2Categorias !== undefined){
    
        Vinos2Categorias.forEach((item)=>{

           if(item.categories[1].name === 'productos destacados'){
               VinosDestacados.push(item)
           }else if(item.categories[1].name === 'Productos Nuevos'){
                VinosNuevos.push(item)

           }

            
        });
        

    }

    console.log(VinosDestacados)
    console.log(VinosNuevos)
   



   


    return (
        <HomeContainer>
            <Header/>
            <ProductosCarrusel   productos_Destacados={VinosDestacados} productos_Nuevos={VinosNuevos}/>
            <Marcas/>
        </HomeContainer>
    )
}

export default HomeWiew


const HomeContainer = styled.div`
    width: 100%;
    height:100%;
  
`;