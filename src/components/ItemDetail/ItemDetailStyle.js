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
                fontSize: '2em',
                paddingBottom: '1em',
            },

            '& h4': {
                textAlign: 'start',
                marginRight: '20%',
                padding: '0.25em',
                fontWeight: '100',
            },

            '& h6': {
                fontWeight: '300',
            },

            '& p': {
                textAlign: 'start',
                textjustify: 'inter-word',
                padding: '0.5em',
                marginRight: '20%',
                fontSize: '1rem',
                fontWeight: '100',
                color: '#706f6f',
                bottom: '10%',
            },
        },

        actualPrice: {
            textDecoration: 'none',
            fontSize: '1.5em',
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
        sign: {
            '& p': {
                textAlign: 'end',
                paddingBottom: '3rem',
                fontWeight: '100',
                color: 'black',
                fontSize: '0.8em',
            },
        },

        '@media (max-width: 960px)': {

            productItem: {

                gridTemplateColumns: 'repeat(1, 1fr)',
                margin: '0',
                padding: '0',

                ' & img': {
                    padding: '3rem',
                    paddingBottom: '0rem',
                },
            },
            productDetails: {
                margin: '2em',
                padding: '3em',
                textAlign: 'center',
                alignItems: 'center',
                justifyContent: 'center',

                '& h3': {
                    textAlign: 'center',
                    paddingBottom: '0.4em'
                },

                '& h4': {
                    textAlign: 'center',
                    marginRight: '0%',
                },

                '& h6': {
                    fontWeight: '300',
                },

                '& p': {
                    textAlign: 'center',
                    marginRight: '0%',
                    // textAlign: 'justify',
                },
            },

            sign: {
                textAlign: 'center',
                alignItems: 'center',
                margin: '0em',
                padding: '0em',
                '& p': {
                    alignItems: 'center',
                    textAlign: 'center',
                    fontWeight: '100',
                    color: 'black',
                    fontSize: '0.8em',
                    margin: '0em',
                    padding: '0em',
                },
            },
        }

    })
};