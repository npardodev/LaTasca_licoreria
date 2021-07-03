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
            alignItems: 'center',
            width: '100%',
            height: '100vh',
            wrap: 'wrap',
            ' & h2': {
                justifyItems: 'center',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                fontSize: '2.8em',
                color: commonStyles.primary.main,
            },
            ' & h3': {
                padding: '1em',
                textAlign: 'center',
                justifyItems: 'center',
                justifyContent: 'center',
                alignItems: 'center',
                fontWeight: '300',
                fontSize: '2.2em',
                color: commonStyles.secondary.main
            },
            ' & img': {
                width: 'clamp(5em, 12em, 15em)',
                heigth: 'clamp(5em, 12em, 15em)',
                justifyItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'white',
                alignItems: 'center',
                padding: '1em',
                margin: '1em',
            },
            '& Button': {
                padding: '1em',
                margingTop: '1em',
                fontWeight: '600',
                backgroundColor: commonStyles.secondary.main,
                color: 'white',
                '&:hover': {
                    backgroundColor: commonStyles.secondary.dark,
                }

            }

        }
    });
}