import React from 'react';
import { commonStyles } from './../../styles/commonStyles.js';

export const FooterStyle = theme => {

    return ({


        footer: {
            padding: '1rem',
            backgroundColor: commonStyles.primary.main,
            width: '100%',

            '& h4': {
                fontWeight: '600',
                fontSize: '1rem',
                color: 'white',
            },
            '& h5': {
                fontWeight: '300',
                fontSize: '0.8rem',
                color: 'white',

            }
        },
        footerColumns: {
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
        },

        Icon: {
            fontSize: '1rem',
        }



    })
};