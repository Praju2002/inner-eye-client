import React from 'react'
import { Box } from '@mui/material'
import PodcastCard from './podcastCard'
import Slider from 'react-slick';

function PodcastList() {
    const settings = {
        
        dots: false,
        arrows:true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        arrows: false,
        pauseOnHover: true,
        focusOnSelect: true,
        responsive: [
            {
              breakpoint: 1250,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 950,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 600,
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
                <PodcastCard />
                <PodcastCard />
                <PodcastCard /> 
                <PodcastCard />
                <PodcastCard /> 
                <PodcastCard />
                <PodcastCard /> 
            </Slider>
        </Box>
    )
}

export default PodcastList