import { commonStyles } from './../../styles/commonStyles.js';

export const FooterStyle = theme => {

    return ({

        footer: {
            margin: '0',
            padding: '1rem',
            backgroundColor: commonStyles.secondary.main,
            width: '100%',
            fontfamily: commonStyles.fonts.primary,

            '& h1': {
                fontWeight: '600',
                fontSize: '2rem',
                color: 'white',
            },

            '& h2': {
                fontWeight: '300',
                fontSize: '1.5rem',
                color: 'white',
            },

            '& h4': {
                fontWeight: '600',
                fontSize: '1.3em',
                padding: '0.5em',
                color: 'white',
            },
            '& h5': {
                fontWeight: '300',
                fontSize: '0.9em',
                color: 'white',
                padding: '0.4em',
            }
        },
        footerColumns: {
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            textAlign: "center",
            flexDirection: "row",

            '& div': {
                padding: '0',
                margin: '1.3em',

            },
            '@media (max-width: 560px)': {

                flexDirection: "column-reverse",
            },

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
        },

        footerPayment: {
            alignItems: "center",
            textAlign: "center",

            '& img': {
                width: '85vh',
                height: ' clamp(1.8em, 2em, 2.2em)',
            }
        },

        socialIcons: {
            '& .MuiSvgIcon-root': {
                margin: '0.3em',
            }

        }

    })
};