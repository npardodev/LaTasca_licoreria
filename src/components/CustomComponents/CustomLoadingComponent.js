import React from 'react';

export const CustomLoadingComponent = (props) => {
    
    const {IconLoad, messageLoad} = props;
    
    return (
        <>
            <h3>{messageLoad}</h3>
            <IconLoad  />
        </>

    )
}


