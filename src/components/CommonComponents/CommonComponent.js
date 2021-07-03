import React from 'react';
import { makeStyles, Button } from '@material-ui/core';

import { commonComponentStyle } from './commonComponentStyle.js'

const useStyle = makeStyles ((theme) => commonComponentStyle(theme));


export const CommonComponent = ({title, subtitle, image, alt, buttonLabel, action}) => {

    const classes = useStyle ();

    const commonAction = () => {
        action();
    }
    return (
        <>
        <section className={classes.container}>
                <h2> {title} </h2>
                <h3> {subtitle} </h3>
                <img src={image} alt={alt} />
            <Button variant="contained" onClick={commonAction} >{buttonLabel}</Button>

        </section>

    </>
    )
};

