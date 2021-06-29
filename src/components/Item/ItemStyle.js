import React from 'react';
import { Grid } from '@material-ui/core';
import { commonStyles } from './../../styles/commonStyles.js';

export const ItemStyle = theme => {

    return ({
        card: {
            background: '#ffff',
            width: '14rem',
            height: '100%',
            borderRadius: '25px',
            transition: '0.5s',
            boxShadow: 'rgb(70 79 184 / 80%) 0px 10px 36px -25px',
            alignItems: 'center',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: 'white',
            fontFamily: commonStyles.fonts.secondary,

            ' & img': {
                width: 'clamp(5em, 5.5em, 7em)',
                height: ' clamp(7em, 9em, 10em)',
                cursor: 'pointer',

            },
            ' & h4': {
                fontSize: '0.9em',
                fontWeight: '500',
            },

            ' & h3': {
                paddingTop: '0.5rem',
                fontSize: '0.95em',
                margin: '0',
                fontWeight: '600',

            },

            ' & h5': {
                fontWeight: '300',
                padding: '0.5rem',
                fontSize: '0.8em',
                margin: '0',
                color: '#B03131',
                textDecoration: 'line-through',
            },

            '& cardImg': {
                backgroundColor: 'red',
            },
        },

        cardInfo: {
            width: '100%',
            backgroundColor: commonStyles.tercery.main,
            paddingBottom: '1rem',

            '&>div': {
                alignItems: 'center',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                gap: '1rem',
            },
        },
        Button: {
            color: commonStyles.tercery.main,
            backgroundColor: commonStyles.secondary.main,
            width: '70%',
            borderRadius: '25px',
            '&:hover': {
                backgroundColor: '#8e8484',
            },


        }

    })
};