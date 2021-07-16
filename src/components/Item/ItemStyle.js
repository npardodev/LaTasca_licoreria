import { commonStyles } from './../../styles/commonStyles.js';

export const ItemStyle = theme => {

    return ({
        card: {
            background: '#ffff',
            width: '280px',
            height: '360px',
            borderRadius: '25px',
            transition: '0.5s',
            boxShadow: 'rgb(70 79 184 / 80%) 0px 10px 36px -25px',
            alignItems: 'center',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: 'white',
            fontFamily: commonStyles.fonts.secondary,
            justifyContent: 'space-between',
            bottom: '0',
            ' & img': {
                paddingTop: '1em',
                height: '100%',
                cursor: 'pointer',
               
                objectFit: 'cover',
            },
            ' & h4': {
                fontSize: '0.9em',
                fontWeight: '500',
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
        cardImg: {
            width: '70%',
            height: '40%',

        },
        cardInfo: {
            width: '100%',
            backgroundColor: commonStyles.tercery.main,
            padding: '1em',
            '&>div': {
                alignItems: 'center',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                gap: '1rem',
                padding: '1em',

            },
            ' & h3': {
                paddingTop: '0.5rem',
                fontSize: '1.1em',
                color: 'black',
                margin: '0',
                fontWeight: '600',
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