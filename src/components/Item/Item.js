import React, {useEffect} from 'react';
import { ItemStyle } from './ItemStyle.js'
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
<<<<<<< HEAD
import { useParams, Link, useHistory, useLocation} from 'react-router-dom';
import { commonStyles } from './../../styles/commonStyles.js';
=======
import { useParams, useHistory} from 'react-router-dom';
>>>>>>> 311f8389b5d8d56f86be9c84c710e73d0bf53a75

const useStyle = makeStyles ((theme) => ItemStyle(theme));

export const Item = ({item , onClick, onFocus}) => {

    const classes = useStyle();
    const history = useHistory();
<<<<<<< HEAD
    const location = useLocation();
    const idItem = item.id;
    const idCategory = item.id;
=======
    const idItem = item.id;
    const idCategory = item.category.id;
>>>>>>> 311f8389b5d8d56f86be9c84c710e73d0bf53a75

    const {id} = useParams();

    useEffect(() => {
<<<<<<< HEAD
        console.log("2");
    }, [id])


    const handlerClick = (e) =>{ 
        e.preventDefault();
        history.push(`${location.pathname}/${idCategory}/${idItem}`);
=======
    }, [id])

    const handlerClick = (e) =>{ 
        e.preventDefault();
        history.push(`/products/${idCategory}/${idItem}`);
>>>>>>> 311f8389b5d8d56f86be9c84c710e73d0bf53a75
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


