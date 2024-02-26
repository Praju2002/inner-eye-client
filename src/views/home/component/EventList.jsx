import React from 'react'
import { Box } from '@mui/material'
import Slider from 'react-slick';
import EventCard from './EventCard';

function EventList() {
    const settings = {
        
        dots: false,
        // infinite: true,
        // speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        // autoplay: true,
        arrows: true,
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
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
                
            </Slider>
        </Box>
    )
}

export default EventList