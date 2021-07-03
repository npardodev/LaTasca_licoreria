<<<<<<< HEAD
import React from 'react';


export const ItemDetailStyle = theme => {

    return ({
        productItem: {

            padding: '2em',
=======
export const ItemDetailStyle = theme => {

    return ({
        section: {
            witdh: '100%',
            heigth: '100vh',

        },
        productItem: {
>>>>>>> 311f8389b5d8d56f86be9c84c710e73d0bf53a75
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gridGap: '1em',
            backgroundColor: '#FFFFF',
<<<<<<< HEAD
            margin: '1rem',
            padding: '3rem',
=======
            margin: '2em',
            padding: '3em',

>>>>>>> 311f8389b5d8d56f86be9c84c710e73d0bf53a75

            ' & hover': {
                width: '100%',
                height: 'auto',
            },
<<<<<<< HEAD
            ' & productDetails': {
                display: 'flex',
                flexDirection: 'column',
            }
        },

        img: {
            width: '100%',
            maxHeight: '50%',
        },

        productDetails: {
            '& h3': {
                textAlign: 'start',
                padding: '1rem',
                fontSize: '1.5rem',
                fontWeight: '600',
                color: '#464EB8',
=======

            ' & img': {
                width: 'clamp(10em, 14em, 16em)',
                height: ' clamp(16em, 22em, 23em)',

                display: 'block',
                margin: 'auto',
            },

            '&productDetails': {
                display: 'flex',
                flexDirection: 'column',
                flewWrap: 'wrap',
            }
        },

        productDetails: {
            '& h3': {
                textAlign: 'start',
                padding: '0.4rem',
                fontWeight: '600',
                color: 'black',
                fontSize: '2.2em',
                paddingBottom: '1em',

>>>>>>> 311f8389b5d8d56f86be9c84c710e73d0bf53a75
            },

            '& h4': {
                textAlign: 'start',
                paddingLeft: '1rem',
<<<<<<< HEAD
                paddingTop: '0.5rem',
                fontSize: '1.2rem',
                fontWeight: '100',
            },

            '& p': {
                textAlign: 'start',
                textAlign: 'justify',
                textjustify: 'inter-word',
                padding: '1rem',
=======
                padding: '0.5em',
                fontWeight: '100',
            },

            '& h6': {
                fontWeight: '300',
            },

            '& p': {
                textAlign: 'start',
                textjustify: 'inter-word',
                padding: '1em',
>>>>>>> 311f8389b5d8d56f86be9c84c710e73d0bf53a75
                marginRight: '20%',
                fontSize: '1rem',
                fontWeight: '100',
                color: '#706f6f',
<<<<<<< HEAD
            },


            ' & button': {
                width: '25%',
                fontSize: '1rem',
                color: '#ffff',
                alignItems: 'center',
                textAlign: 'center',
                margin: '2 rem',
                border: '#a89283',
                padding: '0.3 rem',
                marginLeft: '1rem',
                paddingTop: '0.5rem',
            },

            '& div': {
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '40%',
                paddingBottom: '0.8rem',



            }

        },

        actualPrice: {
            fontSize: '1rem'
        },

        offerPrice: {
            fontSize: '12rem',
            textDecoration: 'line-through',
=======
                bottom: '10%',
            },


        },

        actualPrice: {
            textDecoration: 'none',
            fontSize: '1.2em',

        },

        offerPrice: {
            textDecoration: 'line-through',
            fontSize: '0.9em',
            padding: '1em',

>>>>>>> 311f8389b5d8d56f86be9c84c710e73d0bf53a75
        },

        CustomSelectComponent: {
            width: '20%',
            textAlign: 'start',
            padding: '0.5rem',
            marginLeft: ' 1rem',
            fontSize: '0.7rem',
            border: 'none',
<<<<<<< HEAD
        }
=======
        },

        optionDetails: {
            display: 'flex',
            flexDirection: 'row',
            flewWrap: 'nowrap',
            justifyContent: 'start',
            textAlign: 'start',
            gap: '2rem',
            padding: '1em',

        },

>>>>>>> 311f8389b5d8d56f86be9c84c710e73d0bf53a75


    })
};