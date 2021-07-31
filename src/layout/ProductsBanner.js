import React from 'react'
import { CustomBanner } from './../components/CustomComponents/CustomBanner.js'
import { useParams } from 'react-router-dom';
import bannerImgWines from '../assets/img/banners/bannerWines.png'
import bannerImgTequila from '../assets/img/banners/BannerTequila.png'
import bannerImgVodka from '../assets/img/banners/BannerVodka.png'
import bannerImgWhisky from '../assets/img/banners/BannerWhisky.png'
import bannerImgSalty from '../assets/img/banners/BannerSalado.png'
import bannerImgRon from '../assets/img/banners/BannerRon.png'
import bannerImgLicor from '../assets/img/banners/BannerLicor.png'
import bannerImgCandy from '../assets/img/banners/BannerDulce.png'
import bannerImgBeer from '../assets/img/banners/BannerCerveza.png'
import bannerImgAperitives from '../assets/img/banners/bannerAperitives.png'
import { categories } from '../data/categories.js'


const banners = [{
        category: categories.WINES.name,
        img: bannerImgWines,
        alt: "Imagen banner vinos"
    },
    {
        category: "VinosUruguayos",
        img: bannerImgWines,
        alt: "Imagen banner vinos"
    },

    {
        category: "VinosExtranjeros",
        img: bannerImgWines,
        alt: "Imagen banner vinos"
    },

    {
        category: categories.TEQUILA.name,
        img: bannerImgTequila,
        alt: "Imagen banner Tequila"
    },
    {
        category: categories.VODKA.name,
        img: bannerImgVodka,
        alt: "Imagen banner Vodka"
    },
    {
        category: categories.WHISKY.name,
        img: bannerImgWhisky,
        alt: "Imagen banner Whisky"
    },
    {
        category: categories.SALTY.name,
        img: bannerImgSalty,
        alt: "Imagen banner Salados"
    },
    {
        category: categories.RON.name,
        img: bannerImgRon,
        alt: "Imagen banner Ron"
    },
    {
        category: categories.LICORS.name,
        img: bannerImgLicor,
        alt: "Imagen banner Licor"
    },
    {
        category: categories.CANDY.name,
        img: bannerImgCandy,
        alt: "Imagen banner Dulces"
    },
    {
        category: categories.BEERS.name,
        img: bannerImgBeer,
        alt: "Imagen banner Cervezas"
    },

    {
        category: "CervezasArtesanales",
        img: bannerImgBeer,
        alt: "Imagen banner Cervezas Artesanales"
    },

    {
        category: "CervezasImportadas",
        img: bannerImgBeer,
        alt: "Imagen banner Cervezas Importadas"
    },

    {
        category: "CervezasNacionales",
        img: bannerImgBeer,
        alt: "Imagen banner Cervezas Nacionales"
    },

    {
        category: categories.APERITIVES.name,
        img: bannerImgAperitives,
        alt: "Imagen banner Aperitivos"
    },
]


export const ProductsBanner = () => {

    const { idCat } = useParams();
    const items = banners.filter(item => item.category === idCat);

    return (
        items.map((item, i) => {
            return <CustomBanner key = { i }
            img = { item.img }
            alt = { item.alt }
            />
        })
    )
}