// import { commonStyles } from './../../styles/commonStyles.js';

export const ContactStyle = theme => {

    return ({
        section: {
            witdh: '100%',
            heigth: '100vh',
        },
        contactContainer: {
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gridGap: '1em',
            backgroundColor: '#FFFFF',
            margin: '2em',
            padding: '3em',

        },
        map: {
            textAling: 'center',
            alignItems: 'center',
            display: 'block',
            margin: '0',

            '& img': {
                display: 'block',
                margin: 'auto',
                textAling: 'center',
                alignItems: 'center',
            }
        },
        follow: {
            backgroundColor: '#202020',
            borderRadius: '20px',
            color: 'white',
            textAlign: 'center',
            alignItems: 'center',
            padding: '1em',
            marginBottom:'20px',

            '& h2': {
                padding: '1em',
                fontWidth: '1.9em',
                fontWeight: '100',
            },
        },
        icons: {
            padding: '1em',
            color: 'white',
            display: 'flex',
            flexWrap: 'no-wrap',
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '3em',
        },
        info: {
            padding: '1em',
            color: 'white',
            display: 'flex',
            flexWrap: 'no-wrap',
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'space-around',
            gap: '2em',

            '& div': {
                textAlign: 'center',
                alignItems: 'center',
            },

            '& h4, h5': {
                padding: '0.5em',
                fontWidth: '1.8em',
                fontWeight: '100',
            },

            '& .MuiSvgIcon-root': {
                color: 'white',
            },
        },

        '@media (max-width: 960px)': {

            contactContainer: {
                gridTemplateColumns: 'repeat(1, 1fr)',
                padding:'0px 0px 0px 0px',
                margin: '0px 0px 0px 0px',
                
                '& img': {

                }
            },

        }
    })
};