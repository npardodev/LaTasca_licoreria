<<<<<<< HEAD
import React from 'react';
import { Grid } from '@material-ui/core';

=======
>>>>>>> 311f8389b5d8d56f86be9c84c710e73d0bf53a75
export const ItemListStyles = theme => {

    return ({

<<<<<<< HEAD
      conten:{
          alignItems: 'center',
          textAlign: 'center',
          backgroundColor:'#ffff',
        },
        products: {
                postion:'relative',
                padding: '2em',
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gridGap: '1em',
                backgroundColor:'#ffff',
                margin: '0',
                '@media (max-width: 1200px)' : {
                    gridTemplateColumns: 'repeat(3, 1fr)',
                },
                  '@media (max-width: 992px)' : {
                    gridTemplateColumns: 'repeat(2, 1fr)',
                  },
                  '@media (max-width: 560px)' : {
                    gridTemplateColumns: 'repeat(1, 1fr)',
                  },
                  
        }

    })
};

=======
        conten: {
            alignItems: 'center',
            textAlign: 'center',
            backgroundColor: '#ffff',
            '& .MuiCircularProgress-svg': {
                color: 'black',
            }
        },
        products: {
            postion: 'relative',
            padding: '2em',
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gridGap: '1em',
            backgroundColor: '#ffff',
            margin: '0',
            '@media (max-width: 1200px)': {
                gridTemplateColumns: 'repeat(3, 1fr)',
            },
            '@media (max-width: 992px)': {
                gridTemplateColumns: 'repeat(2, 1fr)',
            },
            '@media (max-width: 560px)': {
                gridTemplateColumns: 'repeat(1, 1fr)',
            },

        },


    })
};
>>>>>>> 311f8389b5d8d56f86be9c84c710e73d0bf53a75
