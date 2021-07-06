import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import productos from './actions/products'



const rootReducer = combineReducers({
    productsApi:productos
})





export default function generateStore(){
    const store = createStore(rootReducer,applyMiddleware(thunk))
    return store
}