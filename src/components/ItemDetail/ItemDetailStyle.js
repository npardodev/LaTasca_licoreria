export const ItemDetailStyle = theme => {

    return ({
        section: {
            witdh: '100%',
            heigth: '100vh',

        },
        productItem: {
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gridGap: '1em',
            backgroundColor: '#FFFFF',
            margin: '2em',
            padding: '3em',


            ' & hover': {
                width: '100%',
                height: 'auto',
            },

            ' & img': {
                maxWidth: '511px',
                maxHeight: '679px',
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
            },

            '& h4': {
                textAlign: 'start',
                paddingLeft: '1rem',
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
                marginRight: '20%',
                fontSize: '1rem',
                fontWeight: '100',
                color: '#706f6f',
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

        },

        CustomSelectComponent: {
            width: '20%',
            textAlign: 'start',
            padding: '0.5rem',
            marginLeft: ' 1rem',
            fontSize: '0.7rem',
            border: 'none',
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



    })
};