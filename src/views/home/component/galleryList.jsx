import React from 'react'
import { Box } from '@mui/material'
import Slider from 'react-slick';
import GalleryCard from './galleryCard';

function GalleryList() {
    const settings = {
        
        dots: true,
        // infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        pauseOnHover: true,
        focusOnSelect: true,
        responsive: [
            {
              breakpoint: 1300,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 1050,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 700,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };
    return (
        <Box className="center__carousel" sx={{ padding: "47px" }} >
            <Slider {...settings}>
                <GalleryCard />
                <GalleryCard />
                <GalleryCard />
                <GalleryCard />
                <GalleryCard />
                <GalleryCard />
                <GalleryCard />
                <GalleryCard />
            </Slider>
        </Box>
    )
}

export default GalleryList