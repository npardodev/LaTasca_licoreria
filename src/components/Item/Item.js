import React, {useEffect} from 'react';
import {Counter} from '../Counter/Counter.js';
import { ItemStyle } from './ItemStyle.js'
import { makeStyles } from '@material-ui/core/styles';
import { useParams, Link, useHistory, useLocation} from 'react-router-dom';

const useStyle = makeStyles ((theme) => ItemStyle(theme));

export const Item = ({item , onClick, onFocus}) => {

    const classes = useStyle();
    const history = useHistory();
    const location = useLocation();
    const idItem = item.id;
    const idCategory = item.id;

    const {id} = useParams();

    /*
    useEffect(() => {
        ;
    }, [])
    */

    const handlerClick = (e) =>{ 
        e.preventDefault();
        history.push(`${location.pathname}/${idCategory}/${idItem}`);
    }

    const handlerFocus = () =>{
        /* Efecto onFocus */
    };

    return (
        <div className= {classes.card}  onFocus={handlerFocus()}>
            <div className= {classes.cardImg}>
                <img src={item.img.src} alt={item.img.alt} onClick={(e) => handlerClick(e)} />
            </div>
            <div className= {classes.cardInfo}>
                <h4>{`$${item.price}`}</h4>
                <p>{item.descrip}</p>
                {/* <Counter stock= {item.stock} initial={0} /> */}
            </div>

        </div>
    )
}


