import React from 'react';
import { Grid } from '@material-ui/core';
import { commonStyles } from './../../styles/commonStyles.js';

export const ItemStyle = theme => {

    return ({
        card: {
            background: '#ffff',
            width: '90%',
            height: '100%',
            borderRadius: '20px',
            transition: '0.5s',
            boxShadow: 'rgb(70 79 184 / 80%) 0px 10px 36px -25px',
            alignItems: 'center',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: 'white',


            ' & img': {
                width: 'clamp(5em, 5.5em, 7em)',
                height: ' clamp(7em, 9em, 10em)',
                cursor: 'pointer',

            },
            ' & h4': {
                fontSize: '0.9em',
                fontWeight: '500',
            },

            ' & p': {
                padding: '0em',
                fontSize: '0.8em',
                margin: '0',

            },
            '& cardImg': {
                backgroundColor: 'red',
            },
        },

        cardInfo: {
            width: '100%',
            backgroundColor: commonStyles.tercery.main,

        }
    })
};