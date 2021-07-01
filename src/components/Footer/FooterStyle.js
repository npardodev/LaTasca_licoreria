import { commonStyles } from './../../styles/commonStyles.js';

export const FooterStyle = theme => {

    return ({


        footer: {
            padding: '1rem',
            backgroundColor: commonStyles.primary.main,
            width: '100%',
            fontfamily: commonStyles.fonts.primary,

            '& h1': {
                fontWeight: '600',
                fontSize: '2rem',
                color: commonStyles.secondary.main,
            },

            '& h2': {
                fontWeight: '300',
                fontSize: '1.5rem',
                color: commonStyles.secondary.main,
            },


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
            textAlign: "center",
        },

        icons: {
            fontSize: '1rem',
            color: 'white',
        },

        footerLogo: {
            '& img': {
                width: 'clamp(3em, 5em, 6em)',
                height: ' clamp(3em, 5em, 6em)',

            }


        }

    })
};