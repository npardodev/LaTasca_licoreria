import React from 'react'
import { makeStyles} from '@material-ui/core';
import ImgAboutUs from '../../assets/img/about/imgAboutUs.png'
import { AboutUsContainerStyle } from './AboutUsContainerStyle.js'

const useStyles = makeStyles ((theme) => AboutUsContainerStyle(theme));

export const AboutUsContainer = () => {
  
  const classes = useStyles();

  return (
    <section>
        <div className= {classes.container}>
            <div>
                <img src={ImgAboutUs} alt='Imagen About Us'/>
            </div>
            <div className= {classes.aboutInfo}>
              <h2>Somos La Tasca Licoreria</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat dolorum accusantium nulla odio quisquam modi fugit, sunt enim reiciendis cum.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat dolorum accusantium nulla odio quisquam modi fugit, sunt enim reiciendis cum.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint doloribus consequuntur provident nulla exercitationem nisi.</p>
            </div>
        </div>
</section>)
}

