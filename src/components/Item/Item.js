import React, {useEffect} from 'react';
import { ItemStyle } from './ItemStyle.js'
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { useParams, useHistory} from 'react-router-dom';

const useStyle = makeStyles ((theme) => ItemStyle(theme));

export const Item = ({item , onClick, onFocus}) => {

    const classes = useStyle();
    const history = useHistory();
    const idItem = item.id;
    const idCategory = item.category.id;

    const {id} = useParams();

    useEffect(() => {
    }, [id])

    const handlerClick = (e) =>{ 
        e.preventDefault();
        history.push(`/products/${idCategory}/${idItem}`);
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
                <h3>{item.title}</h3>
                <div>
                    <h4>{`$${item.price}`}</h4>
                    <h5>{`$999,00`}</h5>
                </div>
                <Button className= {classes.Button}>Ver más</Button>
            </div>

        </div>
    )
}


