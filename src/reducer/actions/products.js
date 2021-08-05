
import { commerce } from '../../libs/commerce'

//constantes
const dataInicial = { 
    array: []
}

//types
const CONSULTA_API = 'CONSULTA_API'

//reducers

export default function ProductsReducer(state = dataInicial , action){
    switch (action.type) {
        case CONSULTA_API:
            return {...state,array:action.payload}
        default:
            return state;
    }
}

//acciones


export const ConsultaApi = () => async (dispactch,getState) =>{
    try {
        
        const { data } = await commerce.products.list({limit: 200,})
        dispactch({
            type:CONSULTA_API,
            payload:data
        })
    } catch (error) {
        console.log(error)
    }
}