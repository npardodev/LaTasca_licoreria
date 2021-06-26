import React from 'react';
import { commonStyles } from './../../styles/commonStyles.js';

export const commonComponentStyle = theme => {

    return ({
        ...commonStyles,
        container: {
            fontFamily: commonStyles.fonts.primary,
            display: 'flex',
            flexDirection: 'column',
            justifyItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
            ' & h2': {
                top: '1rem',
                justifyItems: 'center',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: '2.2em',
                color: commonStyles.primary.main
            },
            ' & h3': {
                justifyItems: 'center',
                justifyContent: 'center',
                alignItems: 'center',
                fontWeight: '600',
                fontSize: '1.3em',
                color: commonStyles.secondary.main
            },
            ' & img': {
                width: 'clamp(16em, 18em, 20em)',
                heigth: 'clamp(16em, 18em, 20em)',

            },
            '& Button': {
                backgroundColor: commonStyles.primary.main,
                '&:hover': {
                    backgroundColor: commonStyles.primary.dark,
                }

            }

        }
    });
}