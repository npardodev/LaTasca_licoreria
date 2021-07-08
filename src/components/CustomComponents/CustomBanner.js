import React from 'react'
import { makeStyles } from '@material-ui/core';

export const CustomBannerStyle = theme => {

    return ({
        bannerContainer:{
            width: '100%',
            marginTop: '30px',

            '& img':{
                backgroundSize: 'cover',
                width: '100%',
            }
        }
    })
};
const useStyles = makeStyles((theme) => CustomBannerStyle(theme));


export const CustomBanner = ({img, alt}) => {

    const classes = useStyles();

    return (
        <>
            <div className={classes.bannerContainer}>
                <img src={img} alt={alt} ></img>
            </div>
        </>
    )
}




